import React from 'react';
import { StyleSheet, css } from 'aphrodite'
import { Colors, FontSizes, TextModifiers } from '../helpers/styles';

export default function GoalSearchForm({filteredGoals, onSelectGoal}) {
  return (
    <div>
      {filteredGoals.length > 0 && <h3>Search Results</h3> }
      {filteredGoals().map((goal) => {
        return (
          <p
            className={css(styles.goalNameText)}
            key={goal.goalName}
            onClick={() => {
              onSelectGoal(goal)
            }}
          >
            {goal.goalName}
          </p>
        )
      })}
    </div>
  );
}

const styles = StyleSheet.create({
  goalNameText: {
    color: Colors.SECONDARY,
    fontSize: FontSizes.MEDIUM,
    fontWeight: TextModifiers.BOLD,
    cursor: TextModifiers.POINTER_CURSOR,
  }
});