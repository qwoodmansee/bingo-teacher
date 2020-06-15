import React from 'react';
import GoalsWithData from './data/bingo_goal_data.json';
import GoalDisplay from './components/goal_display';
import MenuBar from './components/menu-bar';
import './App.css';
import { Colors } from './helpers/styles';
import { StyleSheet, css } from 'aphrodite'

function App() {
  return (
    <div className={css(styles.appContainer)}>
      <div className={css(styles.menuBarContainer)}>
       <MenuBar/>
      </div>
      <div className={css(styles.bodyContainer)}>
       <GoalDisplay goals={GoalsWithData} />
      </div>
      <div className={css(styles.footerContainer)} />
    </div>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    width: '100%',
    backgroundColor: Colors.BACKGROUND_LIGHT,
    color: Colors.WHITE,
  },
  menuBarContainer: {
    width: '100%',
    backgroundColor: Colors.BACKGROUND_DARK,
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {},
});

export default App;
