import React from 'react';
import { AllGoals } from './helpers/goal-data-helpers';
import RowHelper from './scenes/row-helper';
import MenuBar from './components/header/menu-bar';
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
       <RowHelper goals={AllGoals()} />
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    width: '100%',
    backgroundColor: Colors.BACKGROUND_LIGHT,
    color: Colors.WHITE,
    textAlign: 'center',
    minHeight: '100vh'
  },
  menuBarContainer: {
    width: '100%',
    backgroundColor: Colors.BACKGROUND_DARK,
  },
  bodyContainer: {
    padding: 10,
    height: '100%'
  },
});

export default App;
