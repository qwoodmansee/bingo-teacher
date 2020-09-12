import React, { useState, useEffect } from 'react';
import useFetch from './hooks/use-fetch';
import RowHelper from './scenes/row-helper';
import MenuBar from './components/header/menu-bar';
import LoadingSpinner from './components/core/loading-spinner';
import './App.css';
import { Colors } from './helpers/styles';
import { StyleSheet, css } from 'aphrodite'

function App() {
  const [goalsResponse, isLoading] = useFetch('https://afternoon-fortress-59487.herokuapp.com/goals');
  const [goals, setGoals] = useState();
  useEffect(() => {
    if (isLoading) return;
    setGoals(goalsResponse);
  }, [goalsResponse, isLoading])
  return (
    <div className={css(styles.appContainer)}>
      <div className={css(styles.menuBarContainer)}>
       <MenuBar/>
      </div>
      <div className={css(styles.bodyContainer)}>
        {isLoading ? <LoadingSpinner /> : <RowHelper goals={goals} />}
      
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
