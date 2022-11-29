import { yupResolver } from '@hookform/resolvers/yup';
import { Button, makeStyles, Typography } from '@material-ui/core';
import CommentField from 'components/form-controls/CommentField';
import PropTypes from 'prop-types';
import React from 'react';
// import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import * as yup from 'yup';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: theme.spacing(4),
  },

  title: {
    textAlign: 'center',
    margin: theme.spacing(2, 0, 3, 0),
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

CommentForm.propTypes = {
  onSubmit: PropTypes.func,
};

function CommentForm(props) {
  const classes = useStyles();
  const schema = yup.object({
    //title: yup.string().required('Please enter title').min(5, 'Title is too short'),
    // fullName: yup.string().required('Please enter your email.').email('Please enter a valid email address.'),

    comment: yup.string().required('Please enter your comment.'),
  });
  const form = useForm({
    defaultValues: {
      //   identifier: '',
      comment: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    //console.log('TODO FORM: ', values);
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };

  const { isSubmitting } = form.formState;

  const loggedInUser = useSelector((state) => state.user.current);

  const isLoggedIn = !!loggedInUser.id;

  return (
    <div>
      <br />
      {!isLoggedIn && <div>Vui lòng đăng nhập để bình luận</div>}
      <br />
      {isLoggedIn && (
        <div className={classes.root}>
          <Typography className={classes.title} component="h3" variant="h5">
            Bình Luận Phim
          </Typography>

          <form onSubmit={form.handleSubmit(handleSubmit)}>
            {/* <InputField name="fullName" label="Full Name" form={form} /> */}
            <CommentField name="comment" label="comment" form={form} />

            <Button
              disabled={isSubmitting}
              type="submit"
              className={classes.submit}
              variant="contained"
              color="primary"
              size="large"
            >
              Gửi
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}

export default CommentForm;
