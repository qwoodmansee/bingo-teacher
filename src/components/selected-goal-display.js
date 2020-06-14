import React, {useState, useCallback} from 'react';
import {getTricksForGoal} from '../helpers/goal-data-helpers';
import YoutubeDisplayer from './youtube-displayer';

export default function SelectedGoalDisplay({goal, onRemoveGoal}) {
  const tricks = useCallback(() => {
    return getTricksForGoal({goal});
  }, [goal]);

  return (
    <div>
      <p
        onContextMenu={(e) => {
          e.preventDefault();
          onRemoveGoal(goal);
        }}
      >
        {goal.goalName}
      </p>
      {tricks().map((trick) => {
        return (
          <div key={trick.trickName}>
            <p>{trick.trickName}</p>
            <YoutubeDisplayer videoUrl={trick.trickUrl}/>
          </div>
        );
      })}

    </div>
  );
}