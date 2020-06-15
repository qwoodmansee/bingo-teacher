export const getTricksForGoal = ({goal}) => {
  const tricks = [];
  if (goal.trickOneUrl) {
    tricks.push({trickName: goal.trickOneName, trickUrl: goal.trickOneUrl});
  }
  if (goal.trickTwoUrl) {
    tricks.push({trickName: goal.trickTwoName, trickUrl: goal.trickTwoUrl});
  } 
  if (goal.trickThreeUrl) {
    tricks.push({trickName: goal.trickThreeName, trickUrl: goal.trickThreeUrl});
  }
  if (goal.trickFourUrl) {
    tricks.push({trickName: goal.trickFourName, trickUrl: goal.trickFourUrl});
  } 
  return tricks;
}
