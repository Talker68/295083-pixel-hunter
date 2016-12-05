import stats from '../../Models/stats';

const updateStats = (gameID, isCorrect, time)=> {
  let answerType = "normal";
  if (time < 10) {
    answerType = "fast";
  } else if (time > 20) {
    answerType = "slow";
  }
  stats[gameID] = {
    isCorrect: isCorrect,
    time: time,
    answerType: answerType
  };
};

export default updateStats;


