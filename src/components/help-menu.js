import React from 'react';

export default function HelpMenu({goals, selectedGoals, onSelectedGoalsChange, searchValue, onSearchValueChange}) {
  return (
    <div>
      <h4>Help:</h4>
      <ul>
        <li>Right Click a pink header to remove a goal</li>
        <li>Show fundamentals to see tricks most players are assumed to know</li>
        <li>Please contact qwoodmansee#1028 if you encounter a bug or a video isnt good enough</li>
      </ul>
    </div>
  );
}