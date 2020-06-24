import React, { useState, useMemo } from 'react';
import { StyleSheet, css } from 'aphrodite'
import YoutubeDisplayer from './core/youtube-displayer';
import Checkbox from './core/checkbox';
import { Colors, FontSizes } from '../helpers/styles';

export default function SelectedGoalDisplay({goal, onRemoveGoal}) {
  const [showFundamentals, setShowFundamentals] = useState(false);

  const hasNotes = useMemo(() => {
    return !!goal.goalNotes;
  }, [goal]);

  const hasTricks = useMemo(() => {
    return goal.tricks.length > 0;
  }, [goal]);

  const numberOfFundamentalTricks = useMemo(() => {
    return goal.tricks.filter((t) => t.isFundamental).length;
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

      {hasNotes && (
        <div>
          <h4>Notes:</h4>
          <p>{goal.goalNotes}</p>
        </div>
      )}

      {hasTricks && (
        <>
          <h4>Tricks:</h4>
          {numberOfFundamentalTricks > 0 && (
            <label>
              <Checkbox
                checked={showFundamentals}
                onChange={(e) => setShowFundamentals(e.target.checked)}
              />
              <span>Show Fundamentals ({numberOfFundamentalTricks} tricks)</span>
            </label>
          )}

          <div className={css(styles.tricksContainer)}>
            {goal.tricks.map((trick) => {
              const has_url = !!trick.trickUrl;
              const isFundamentalTrick = trick.isFundamental;
              
              if (has_url && ((showFundamentals && isFundamentalTrick) || !isFundamentalTrick)) {
                return (
                  <div 
                    key={trick.trickName}
                    className={css(styles.trick)}
                  >
                    <p>{trick.trickName}</p>
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

  goalNameText: {
    color: Colors.PRIMARY,
    fontSize: FontSizes.LARGE,
  },
});