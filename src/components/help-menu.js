import React from 'react';
import { StyleSheet, css } from 'aphrodite'

export default function HelpMenu({goals, selectedGoals, onSelectedGoalsChange, searchValue, onSearchValueChange}) {
  return (
    <div>
      <h4>Help:</h4>
      <ul>
        <li className={css(styles.helpListItem)}>Right Click a pink header to remove a goal</li>
        <li className={css(styles.helpListItem)}>Show fundamentals to see tricks most players are assumed to know</li>
        <li className={css(styles.helpListItem)}>Please contact qwoodmansee#1028 if you encounter a bug or a video isnt good enough</li>
      </ul>
    </div>
  );
}


const styles = StyleSheet.create({
  helpListItem: {
    fontSize:'.8em',
    margin: '.8em',
    textAlign: 'left'
  }
});