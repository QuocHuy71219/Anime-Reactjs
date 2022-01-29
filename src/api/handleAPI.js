import animeAPI from "./animeAPI";

export const handerData = (data) => {
  let array = data.map((el) => {
    let relaship = el.relationships.map((el) =>
      el.type === "manga" ? el.id : ""
    );
    let id = relaship.join("");
    return {
      id,
      fileName: el.attributes.fileName,
    };
  });
  return array;
};

const ramdomValueArrayGender = async (myArr, soLantaoRamdom) => {
  let vitualarr = [];
  for (let i = 0; i < soLantaoRamdom; i++) {
    let num = Math.floor(Math.random() * (myArr.length - i)) + i;
    vitualarr.push(myArr[num]);
  }
  let mainArr = [...new Set(vitualarr)];
  if (mainArr.length === soLantaoRamdom && mainArr !== undefined)
    return mainArr;
  if (mainArr.length < soLantaoRamdom) {
    ramdomValueArrayGender(myArr, soLantaoRamdom);
  }
};

export const handerAnime = async (count) => {
  let arrayList = [];
  let reponseAnimeList = await animeAPI.getGender();
  let ramdomGender = await ramdomValueArrayGender(reponseAnimeList, count);
  for (let i = 0; i < ramdomGender.length; i++) {
    let ray = await animeAPI.getListAnimeWithGender(ramdomGender[i]);
    if (ray["status_code"] === 200) {
      arrayList.push({ ...ray, gender: ramdomGender[i] });
    }
  }
  // console.log(arrayList);
  return arrayList;
};
export const handerCollection = async (sesionid) => {};

const handlePromis = (fc, arr) => {
  return arr.map((el) => {
    return fc(el);
  });
};

export const hanleListAnimeWithArrayId = async (arrId) => {
  const allAnime = await Promise.all([
    ...(await handlePromis(animeAPI.getAnimeWidthId, arrId)),
  ]);
  return allAnime;
};
