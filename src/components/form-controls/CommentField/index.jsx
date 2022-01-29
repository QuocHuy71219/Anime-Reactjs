import { makeStyles, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  root: {
    //padding: theme.spacing(2),
    background: theme.palette.grey[200],
  },
}));

CommentField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function CommentField(props) {
  const { form, name, label, disabled } = props;
  const classes = useStyles();
  //const { errors } = form;
  // const {
  //   formState: { errors },
  // } = form;
  //const hasError = errors[name];

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
        <TextField
          className={classes.root}
          margin="normal"
          //variant="outlined"
          fullWidth
          multiline
          rows={4}
          label={label}
          disabled={disabled}
          error={invalid}
          helperText={error?.message}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    />
  );
}

export default CommentField;
