import React, {useState, useCallback} from 'react';
import SelectedGoalsDisplay from '../components/selected-goals-display';
import GoalSearchForm from '../components/goal-search-form';
import SearchResults from '../components/search-results';
import Checkbox from '../components/core/checkbox';
import HelpMenu from '../components/help-menu';
import { StyleSheet, css } from 'aphrodite'
import { Colors } from '../helpers/styles';

export default function RowHelper({goals}) {
  const [searchValue, setSearchValue] = useState("");
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [showForm, setShowForm] = useState(true);
  
  const removeGoal = useCallback((goalToRemove) => {
    setSelectedGoals(selectedGoals.filter((goal) => goal.goalName !== goalToRemove.goalName));
  }, [setSelectedGoals, selectedGoals]);

  const filteredGoals = useCallback(() => {
    if (searchValue) {
      return goals.filter((goal) => goal.goalName.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1)
    } else {
      return [];
    }
  }, [goals, searchValue]);

  return (
    <div className={css(styles.rowHelperContainer)}>
      <div className={css(styles.leftColumn)}>
        <SelectedGoalsDisplay 
          selectedGoals={selectedGoals}
          onRemoveGoal={removeGoal}
        />
      </div>

      <div className={css(styles.rightColumn)}>

        <div className={css(styles.stickyTop)}>
          <div className={css(styles.card)}>
            {showForm && <>
              <GoalSearchForm
                goals={goals}
                selectedGoals={selectedGoals}
                onSelectedGoalsChange={(newSelectedGoals) => setSelectedGoals(newSelectedGoals)}
                searchValue={searchValue}
                onSearchValueChange={(newValue) => setSearchValue(newValue)}
              />
              <SearchResults
                className={css(styles.searchResults)}
                filteredGoals={filteredGoals}
                selectedGoals={selectedGoals}
                onSelectGoal={(newSelectedGoal) => setSelectedGoals([...selectedGoals, newSelectedGoal])}
              />
              </>
            }
            
              <div className={css(styles.topPadded)}>
                <label>
                  <Checkbox
                    checked={showForm}
                    onChange={() => setShowForm(!showForm)}
                  />
                  <span>Hide Search Form</span>
                </label>
              </div>
            </div>

            <div className={css(styles.card)}>
              <HelpMenu/>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  rowHelperContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  leftColumn: {
    alignSelf: 'flex-start',
    flexBasis: '90%',
    order: 1,
    flexGrow: 3,
  },
  topPadded: {
    marginTop: '1em'
  },
  rightColumn: {
    flexBasis: '10%',
    order: 2,
    flexShrink: 3,
  },
  stickyTop: {
    top: '3em',
    right: '1em',
    position: 'sticky',
  },
  card: {
    backgroundColor: Colors.BACKGROUND_DARK,
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    borderRadius: '.3em',
    padding: '1em',
    margin: '1em',
  }
});