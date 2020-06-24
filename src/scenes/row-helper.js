import React, {useState, useCallback} from 'react';
import SelectedGoalsDisplay from '../components/selected-goals-display';
import GoalSearchForm from '../components/goal-search-form';
import SearchResults from '../components/search-results';

export default function RowHelper({goals}) {
  const [searchValue, setSearchValue] = useState("");
  const [selectedGoals, setSelectedGoals] = useState([]);
  
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
    <div>
      <SelectedGoalsDisplay 
        selectedGoals={selectedGoals}
        onRemoveGoal={removeGoal}
      />
      <GoalSearchForm
        goals={goals}
        selectedGoals={selectedGoals}
        onSelectedGoalsChange={(newSelectedGoals) => setSelectedGoals(newSelectedGoals)}
        searchValue={searchValue}
        onSearchValueChange={(newValue) => setSearchValue(newValue)}
      />
      <SearchResults
        filteredGoals={filteredGoals}
        selectedGoals={selectedGoals}
        onSelectGoal={(newSelectedGoal) => setSelectedGoals([...selectedGoals, newSelectedGoal])}
      />
    </div>
  );
}