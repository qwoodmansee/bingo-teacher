import React, { useState } from 'react';
import TextInputBox from './core/text-input-box';
import Button from './core/button';
import { getGoalsFromUrl } from '../helpers/bingo-popout-parser';
import { StyleSheet, css } from 'aphrodite'

export default function GoalSearchForm({goals, selectedGoals, onSelectedGoalsChange, searchValue, onSearchValueChange}) {
  const [popoutCardUrl, setPopoutCardUrl] = useState("");

  return (
    <div>
      <div>
        <h2>OotBingo Popout Card URL:</h2>
        <div className={css(styles.popoutTextEntryContainer)}>
          <TextInputBox
            value={popoutCardUrl}
            onChange={(newValue) => {setPopoutCardUrl(newValue)}}
            styles={styles.popoutTextEntryTextInput}
          />
          <Button
            text={'Parse'}
            onClick={() => {
              const foundGoals = getGoalsFromUrl({goals, url: popoutCardUrl});
              onSelectedGoalsChange([...selectedGoals, ...foundGoals])
            }}>Parse!</Button>
        </div>
      </div>
      <div>
        <h2>manually search goals:</h2>
        <TextInputBox
          value={searchValue}
          onChange={(newValue) => onSearchValueChange(newValue)}
        />
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  popoutTextEntryContainer: {
    display: 'block',
  },
  popoutTextEntryTextInput: {
    marginRight: '2em',
  },
  popoutTextEntryButton: {
    margin: '2em'
  }
});