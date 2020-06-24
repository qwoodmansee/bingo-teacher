import React from 'react';
import { StyleSheet, css } from 'aphrodite'
import { FontSizes } from '../../helpers/styles';

export default function TextInputBox({ value, onChange, ...props }) {
  return (
    <input
      className={css(styles.textInput)}
      type="text"
      value={value} 
      onChange={(e) => {onChange(e.target.value)}}
    />
  );
}

const styles = StyleSheet.create({
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
