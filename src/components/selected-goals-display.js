import React from 'react';
import SelectedGoalDisplay from './selected-goal-display';
import { StyleSheet, css } from 'aphrodite'

export default function SelectedGoalsDisplay({selectedGoals, onRemoveGoal}) {
  if (selectedGoals.length === 0) { return null }
  return (
    <div className={css(styles.container)}>
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

const styles = StyleSheet.create({
  container: {
    marginBottom: '25rem'
  }
});