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

  const parsedNotes = useMemo(() => {
    if (Array.isArray(goal.goalNotes)) {
      return goal.goalNotes.join("\r\n");
    } else {
      return goal.goalNotes;
    }
  }, [goal.goalNotes]);

  const hasTricks = useMemo(() => {
    return goal.tricks.length > 0;
  }, [goal]);

  const fundamentalTricks = useMemo(() => {
    return goal.tricks.filter((t) => t.isFundamental);
  }, [goal]);

  
  const normalTricks = useMemo(() => {
    return goal.tricks.filter((t) => !t.isFundamental);
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
        <div
          className={css(styles.noteWrapper)}
        >
          <h4 className={css(styles.lowMargin)} >
            Notes:
          </h4>
          <p className={css(styles.lowMargin)}>
            {parsedNotes}
          </p>
        </div>
      )}

      {hasTricks && (
        <>
          <div className={css(styles.tricksContainer)}>
            {normalTricks.map((trick) => {
              const has_url = !!trick.trickUrl;
              
              if (has_url) {
                return (
                  <div 
                    key={trick.trickName}
                    className={css(styles.trick)}
                  >
                    <p>{trick.trickName}</p>
                    {trick.trickUrl && <YoutubeDisplayer videoUrl={trick.trickUrl} widthInPx={384} heightInPx={216}/>}
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>

          {fundamentalTricks.length > 0 && (
            <label>
              <Checkbox
                checked={showFundamentals}
                onChange={(e) => setShowFundamentals(e.target.checked)}
              />
              <span>Show Fundamentals ({fundamentalTricks.length} tricks)</span>
            </label>
          )}

          {showFundamentals && (
            <div className={css(styles.tricksContainer)}>
            {fundamentalTricks.map((trick) => {
              const has_url = !!trick.trickUrl;
              
              if (has_url) {
                return (
                  <div 
                    key={trick.trickName}
                    className={css(styles.trick)}
                  >
                    <p>{trick.trickName}</p>
                    {trick.trickUrl && <YoutubeDisplayer videoUrl={trick.trickUrl} widthInPx={384} heightInPx={216}/>}
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
          )}
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
  noteWrapper: {
  },
  lowMargin: {
    margin: '.1em'
  },
  goalNameText: {
    color: Colors.PRIMARY,
    fontSize: FontSizes.LARGE,
  },
});