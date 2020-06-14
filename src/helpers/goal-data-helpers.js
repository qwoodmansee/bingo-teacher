export const getTricksForGoal = ({goal}) => {
  const tricks = [];
  if (goal.trickOneUrl) {
    tricks.push({trickName: goal.trickOneName, trickUrl: goal.trickOneUrl});
  } else {
    return tricks;
  }

  if (goal.trickTwoUrl) {
    tricks.push({trickName: goal.trickTwoName, trickUrl: goal.trickTwoUrl});
  } else {
    return tricks;
  }

  if (goal.trickThreeUrl) {
    tricks.push({trickName: goal.trickThreeName, trickUrl: goal.trickThreeUrl});
  } else {
    return tricks;
  }

  if (goal.trickFourUrl) {
    tricks.push({trickName: goal.trickFourName, trickUrl: goal.trickFourUrl});
  } else {
    return tricks;
  }
}