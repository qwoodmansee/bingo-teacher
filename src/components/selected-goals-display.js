import React from 'react';
import SelectedGoalDisplay from './selected-goal-display';

export default function SelectedGoalsDisplay({selectedGoals, onRemoveGoal}) {
  return (
    <div>
      <h3>Selected Goals (Right Click Name to remove)</h3>
      {selectedGoals.length === 0 && <p>No goals selected yet</p> }
      <div>
        {selectedGoals.map((goal) =>
          <SelectedGoalDisplay
            key={goal.goalName}
            goal={goal}
            onRemoveGoal={onRemoveGoal}
          />
        )}
      </div>
    </div>
  )
}