export const getGoalsFromUrl = ({goals, url}) => {
  const splitURL = url.split("%3D");
  if (splitURL.length === 1) return [];
  const encodedGoalsString = splitURL[1];
  const encodedGoalsList = encodedGoalsString.split('%3B%3B%3B');
  const checkSet = new Set();
  encodedGoalsList.forEach((encodedGoalString) => {
    let decodedGoalName = decodeURI(encodedGoalString);
    // special cases that decodeURI misses
    decodedGoalName = decodedGoalName.replace('%26', '&');
    checkSet.add(decodeURI(decodedGoalName));
  });
  
  const foundGoals = goals.filter((goal) => checkSet.has(goal.goalName));
  return foundGoals;
}

// goal with &:
// https://ootbingo.github.io/bingo/bingo-popout.html#ROW5%3D3%20Swords%20%26%203%20Boots%3B%3B%3BAll%204%20Skulltulas%20in%20Deku%20Tree%3B%3B%3BSaria's%20Song%3B%3B%3B7%20Compasses%3B%3B%3B2%20Lon%20Lon%20Ranch%20Area%20Skulltulas

//second half example
// COL3%3D5%20Compasses%3B%3B%3BWater%20Temple%20Boss%20Key%3B%3B%3BGoron%20Bracelet%3B%3B%3BFire%20Temple%20Boss%20Key%3B%3B%3BAll%204%20Market%20Area%20Skulltulas

//beginner example
// https://xwmtp.github.io/beginner-bingo/bingo-popout.html#COL1%3DIce%20Arrows%3B%3B%3BSaria's%20Song%3B%3B%3B7%20Hearts%3B%3B%3BBeat%20the%20Fire%20Temple

//ootbingo 
// https://ootbingo.github.io/bingo/bingo-popout.html#COL3%3D5%20Compasses%3B%3B%3BWater%20Temple%20Boss%20Key%3B%3B%3BGoron%20Bracelet%3B%3B%3BFire%20Temple%20Boss%20Key%3B%3B%3BAll%204%20Market%20Area%20Skulltulas
// https://ootbingo.github.io/bingo/bingo-popout.html#ROW1%3DNayru's%20Love%3B%3B%3BMinuet%20of%20Forest%3B%3B%3BAll%208%20Zora's%20Domain%20Area%20Skulltulas%3B%3B%3BMap%20%26%20Compass%20in%20Water%20Temple%3B%3B%3BGet%20to%20the%20end%20of%20Shadow%20Trial

//srl example
// http://www.speedrunslive.com/tools/bingo-popout.html#COL2=All%204%20Lon-Lon%20Ranch%20area%20Skulltulas;;;Defeat%20Volvagia;;;All%208%20Zora's%20Domain%20area%20Skulltulas;;;Green%20Gauntlets;;;Blue%20Fire

//speedruntools
//http://speedruntools.com/bingo/bingo-popout#COL2=Both%20Hyrule%20Field%20area%20Skulltulas;;;30%20Deku%20Sticks;;;Defeat%20Twinrova;;;3%20Compasses;;;At%20least%207%20Magic%20Beans