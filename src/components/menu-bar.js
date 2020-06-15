import React from 'react';
import { StyleSheet, css } from 'aphrodite'
// import { Colors } from '../helpers/styles';
// import logo from '../images/bingo-teacher-icon.png';

export default function MenuBar() {
  return (
    <div className={css(styles.menuBarContainer)}>
      <h1 className={css(styles.menuBarText)}>BingoTeacher</h1>
      {/* <img src={logo} alt="Logo" className={css(styles.menuBarLogo)}/> */}
    </div>
  );
}

const styles = StyleSheet.create({
  menuBarContainer: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  menuBarText: {
    padding: '.2em',
    margin: 0,
  },
  // menuBarLogo: {
  //   alignSelf: 'flex-end'
  // }
});