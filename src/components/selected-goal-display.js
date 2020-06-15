import React, { useCallback } from 'react';
import { StyleSheet, css } from 'aphrodite'
import {getTricksForGoal} from '../helpers/goal-data-helpers';
import YoutubeDisplayer from './youtube-displayer';
import { Colors } from '../helpers/styles';

export default function SelectedGoalDisplay({goal, onRemoveGoal}) {
  const tricks = useCallback(() => {
    return getTricksForGoal({goal});
  }, [goal]);

  return (
    <div>
      <h4
        className={css(styles.goalNameText)}
        onContextMenu={(e) => {
          e.preventDefault();
          onRemoveGoal(goal);
        }}
      >
        {goal.goalName}
      </h4>
      {goal.notes && (
        <div>
          <h4>Notes:</h4>
          <p>{goal.notes}</p>
        </div>
      )}
      {tricks().length > 0 && (
        <div>
        <h4>Tricks:</h4>
        {tricks().map((trick) => {
          return (
            <div key={trick.trickName}>
              <p>{trick.trickName}</p>
              <YoutubeDisplayer videoUrl={trick.trickUrl}/>
            </div>
          );
        })}
        </div>
      )}
      
    </div>
  );
}

const styles = StyleSheet.create({
  goalNameText: {
    color: Colors.PRIMARY
  }
});