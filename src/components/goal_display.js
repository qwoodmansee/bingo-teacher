import React, {useState, useCallback} from 'react';
import SelectedGoalsDisplay from './selected-goals-display';
import { getGoalsFromUrl } from '../helpers/bingo-popout-parser';
import { StyleSheet, css } from 'aphrodite'
import { Colors } from '../helpers/styles';

export default function GoalDisplay({goals}) {
  const [searchValue, setSearchValue] = useState("");
  const [popoutCardUrl, setPopoutCardUrl] = useState("");
  const [selectedGoals, setSelectedGoals] = useState([]);
  
  const removeGoal = useCallback((goalToRemove) => {
    setSelectedGoals(selectedGoals.filter((goal) => goal.goalName !== goalToRemove.goalName));
  }, [setSelectedGoals, selectedGoals]);

  const filteredGoals = useCallback(() => {
    if (searchValue) {
      return goals.filter((goal) => goal.goalName.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1)
    } else {
      return goals;
    }
  }, [goals, searchValue]);
  return (
    <div>
      <SelectedGoalsDisplay 
        selectedGoals={selectedGoals}
        onRemoveGoal={removeGoal}
      />

      <div>
        <h2>Paste in an OotBingo Popout Card URL:</h2>
        <input 
          type="text"
          value={popoutCardUrl} 
          onChange={(e) => {setPopoutCardUrl(e.target.value)}}
        />
        <button 
          onClick={() => {
            const foundGoals = getGoalsFromUrl({goals, url: popoutCardUrl});
            setSelectedGoals([...selectedGoals, ...foundGoals])
          }}>Parse!</button>
      </div>
      <div>
        <h2>or manually search for goals:</h2>
        <input 
          type="text"
          value={searchValue} 
          onChange={(e) => {setSearchValue(e.target.value)}}
        />
      </div>
      <div>
        <h3>Search Results</h3>
        {filteredGoals().map((goal) => {
          return (
            <p
              className={css(styles.goalNameText)}
              key={goal.goalName}
              onClick={() => {
                setSelectedGoals([...selectedGoals, goal])
              }}
            >
              {goal.goalName}
            </p>
          )
        })}
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  goalNameText: {
    color: Colors.SECONDARY,
    fontWeight: 'bold',
    cursor: 'pointer'
  }
});