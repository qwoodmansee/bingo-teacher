import React from 'react';
import { StyleSheet, css } from 'aphrodite'
import { Colors } from '../helpers/styles';

export default function Checkbox({ className, checked, ...props }) {
  const backgroundColor = StyleSheet.create({
    styledCheckboxBackground: {
      backgroundColor: checked ? Colors.PRIMARY : 'white'
    }
  });

  return (
    <div className={css(styles.checkboxContainer)}>
      <input type="checkbox" className={css(styles.hiddenCheckbox)} {...props} />
      <input type="checkbox" className={css([styles.styledCheckbox, backgroundColor.styledCheckboxBackground])} {...props}/>
    </div>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  hiddenCheckbox: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    clippath: 'inset(50%)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px',
  },
  styledCheckbox: {
    display: 'inline-block',
    width: '2em',
    height: '2em',
    borderRadius: '3px',
    transition: 'all 150ms',
  }
});