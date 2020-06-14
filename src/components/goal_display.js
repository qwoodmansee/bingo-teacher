import React, {useState, useCallback} from 'react';

export default function GoalDisplay({goals}) {
  const [searchValue, setSearchValue] = useState("");
  
  const filteredGoals = useCallback(() => {
    if (searchValue) {
      return goals.filter((goal) => goal.goalName.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1)
    } else {
      return goals;
    }
  }, [goals, searchValue]);
  return (
    <div>
      <div>
        <h2>Search for goal:</h2>
        <input 
          type="text"
          value={searchValue} 
          onChange={(e) => {setSearchValue(e.target.value)}}
        />
      </div>
      <div>
        {filteredGoals().map((goal) => {
          return (
            <p key={goal.goalName}>
              {goal.goalName}
            </p>
          )
        })}
      </div>
    </div>
  )
}