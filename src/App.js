import React from 'react';
import GoalsWithData from './data/bingo_goal_data.json';
import GoalDisplay from './components/goal_display';
import './App.css';

function App() {
  return (
    <div className="App">
      {<GoalDisplay
        goals={GoalsWithData}
      />
      }
    </div>
  );
}

export default App;
