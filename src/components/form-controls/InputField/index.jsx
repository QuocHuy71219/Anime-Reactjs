import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
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
          margin="normal"
          variant="outlined"
          fullWidth
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

export default InputField;
