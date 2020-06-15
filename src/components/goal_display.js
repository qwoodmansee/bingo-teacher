import React, {useState, useCallback} from 'react';
import SelectedGoalsDisplay from './selected-goals-display';

export default function GoalDisplay({goals}) {
  const [searchValue, setSearchValue] = useState("");
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
        <h2>Search for goal:</h2>
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