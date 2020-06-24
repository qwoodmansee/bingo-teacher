import React from 'react';
import { StyleSheet, css } from 'aphrodite'
import { Colors, FontSizes } from '../../helpers/styles';

export default function Button({ value, text, onClick, ...props }) {
  return (
    <button
      className={css(styles.textInput)}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: FontSizes.MEDIUM,
    backgroundColor: Colors.PRIMARY,
    color: Colors.WHITE,
    cursor: 'pointer',
    paddingLeft: '.5em',
    paddingRight: '.5em',
    paddingTop: '.25em',
    paddingBottom: '.25em',
    border: 'none',
    borderRadius: '.25em',
    ':focus': {
      outline: 'none',
    }
  }
});
