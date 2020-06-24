import React from 'react';
import { StyleSheet, css } from 'aphrodite'
import { FontSizes } from '../../helpers/styles';

export default function TextInputBox({ value, onChange, styles, ...props }) {
  return (
    <input
      className={css(textInputStyles.textInput, styles)}
      type="text"
      value={value} 
      onChange={(e) => {onChange(e.target.value)}}
    />
  );
}

const textInputStyles = StyleSheet.create({
  textInput: {
    fontSize: FontSizes.MEDIUM,
    width: '10em',
    border: 'none',
    borderRadius: '.25em',
    ':focus': {
      outline: 'none',
    }
  }
});
