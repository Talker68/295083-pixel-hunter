
const calcGameResult = (state) => {
  let result = state.lifeNumber > 0 ? 'Победа!' : 'Поражение :(';
  return result;
};

const calcGameScore = (stats) => {

  let scoreArr = {
    baseScore: 0,
    fastScore: 0,
    slowScore: 0,
    extraLifeScore: 3,
    totalScore() {
      return this.baseScore * 100 + this.fastScore * 50 - this.slowScore * 50 + this.extraLifeScore * 50;
    }
  };

  stats.forEach((i) => {
    switch (i.answerType) {
      case 'correct': {
        scoreArr.baseScore += 1;
        break;
      }
      case 'fast': {
        scoreArr.baseScore += 1;
        scoreArr.fastScore += 1;
        break;
      }
      case 'slow': {
        scoreArr.baseScore += 1;
        scoreArr.slowScore += 1;
        break;
      }
      case 'wrong': {
        scoreArr.extraLifeScore -= 1;
        break;
      }
    }
  });
  return scoreArr;
};

export {calcGameResult, calcGameScore};
