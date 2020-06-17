import { Tricks } from '../data/tricks';
import { Goals } from '../data/goals';

export const AllGoals = () => {
  // merge the goals with their tricks so we have a nice singular object to work with
  const goalsWithTricks = Goals().map(({goalName, trickIds, goalNotes}) => {

    // handle case where there is only one trick per goal
    if (typeof trickIds === 'string') {
      trickIds = [trickIds];
    } else if (!trickIds) {
      trickIds = [];
    }

    return {
      goalName,
      goalNotes,
      tricks: trickIds.map((trickId) => {
        return Tricks().find(({id}) => id === trickId.toString())
      })
    };
  });
  return goalsWithTricks;
}