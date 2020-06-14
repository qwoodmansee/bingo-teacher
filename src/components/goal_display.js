import React from 'react';

export default function GoalDisplay({goals}) {
  return (
    <div>
      {goals.map((goal) => {
        return (
          <p key={goal.goalName}>
            {goal.goalName}
          </p>
        )
      })}
    </div>
  )
}