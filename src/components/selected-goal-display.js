import React, { useCallback, useState } from 'react';
import { StyleSheet, css } from 'aphrodite'
import YoutubeDisplayer from './youtube-displayer';
import Checkbox from './checkbox';
import {getTricksForGoal} from '../helpers/goal-data-helpers';
import { Colors } from '../helpers/styles';

export default function SelectedGoalDisplay({goal, onRemoveGoal}) {
  const [showFundamentals, setShowFundamentals] = useState(false);

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
      {goal.goalNotes && (
        <div>
          <h4>Notes:</h4>
          <p>{goal.goalNotes}</p>
        </div>
      )}
      {goal.tricks.length > 0 && (
        <>
          <h4>Tricks:</h4>
          <label>
            <Checkbox
              checked={showFundamentals}
              onChange={(e) => setShowFundamentals(e.target.checked)}
            />
            <span>Show Fundamentals</span>
          </label>
          <div className={css(styles.tricksContainer)}>
          
          {goal.tricks.map((trick) => {
            const has_url = !!trick.trickUrl;
            const isFundamentalTrick = trick.isFundamental;
            
            if (has_url && ((showFundamentals && isFundamentalTrick) || !isFundamentalTrick)) {
              if (trick.isFundamental && showFundamentals) {

              }
              return (
                <div 
                  key={trick.trickName}
                  className={css(styles.trick)}
                >
                  <p>{trick.trickName}</p>
                  <div>

                  </div>
                  {trick.trickUrl && <YoutubeDisplayer videoUrl={trick.trickUrl} widthInPx={384} heightInPx={216}/>}
                </div>
              );
            }
          })}
          </div>
        </>
      )}
      
    </div>
  );
}

const styles = StyleSheet.create({
  tricksContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  trick: {

  },
  goalNameText: {
    color: Colors.PRIMARY
  },
});