import axiosClientAnime from './axiosClientAnime';
const animeAPI = {
  getAnimelist(page = 1) {
    const url = `/anime?sort_fields=score&sort_directions=-1&per_page=50&page=${page}`;
    return axiosClientAnime.get(url);
  },

  getAnimeRamdom(countRamdom) {
    const url = `/random/anime/${countRamdom}/false`;
    return axiosClientAnime.get(url);
  },

  getAnimeWidthId(idAnime) {
    const url = `/anime/${idAnime}`;
    return axiosClientAnime.get(url);
  },

  getSongWidthId(id) {
    const url = `/song/${id}`;
    return axiosClientAnime.get(url);
  },

  getGenres() {
    const url = `/resources/1.0/0`;
    return axiosClientAnime.get(url);
  },

  getListAnimeWithGenres(genres) {
    const url = `/anime?genres=${genres}&nsfw=true`;
    return axiosClientAnime.get(url);
  },

  async getListAnimeWithGender(gender, per_page = 20, page = 1) {
    const url = await axiosClientAnime.get(`/anime?genres=${gender}&nsfw=false&per_page=${per_page}&page=${page}`);
    let data = url?.data;
    return axiosClientAnime.get(data);
  },

  // async getListAnimeEpisole(idani) {
  //   const url = await axiosClientAnime.get(`/episode?anime_id=${idani}&source=dreamsub&locale=it`);
  //   let data = url?.data?.documents;
  //   return axiosClientAnime.get(data);
  // },

  getListAnimeEpisole(idani) {
    const url = `/episode?anime_id=${idani}&source=dreamsub&locale=it`;
    return axiosClientAnime.get(url);
  },

  async getListAnimeEpisoleToday({ perPage = 21, page = 1 }) {
    const url = await axiosClientAnime.get(
      `/episode?number=1&per_page=${perPage}&page=${page}&source=dreamsub&locale=it`
    );
    let data = url?.data?.data;
    return axiosClientAnime.get(data);
  },

  async getHandleListEpisodeWitdID({ id, page = 1, perPage = 32 }) {
    const url = await axiosClientAnime.get(
      `/episode?anime_id=${id}&source=dreamsub&locale=it&page=${page}&per_page=${perPage}`
    );
    let data = url?.data?.data;
    return axiosClientAnime.get(data);
  },

  //   get(id) {
  //     const url = `/products/${id}`;
  //     return axiosClient.get(url);
  //   },

  //   add(data) {
  //     const url = "/products";
  //     return axiosClient.post(url, data);
  //   },

  //   update(data) {
  //     const url = `/products/${data.id}`;
  //     return axiosClient.patch(url, data);
  //   },

  //   remove(id) {
  //     const url = `/products/${id}`;
  //     return axiosClient.get(url);
  //   },
};

export default animeAPI;
