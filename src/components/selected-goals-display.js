import React from 'react';
import SelectedGoalDisplay from './selected-goal-display';

export default function SelectedGoalsDisplay({selectedGoals, onRemoveGoal}) {
  return (
    <div>
      {selectedGoals.map((goal) =>
        <SelectedGoalDisplay
          key={goal.goalName}
          goal={goal}
          onRemoveGoal={onRemoveGoal}
        />
      )}
    </div>
  )
}