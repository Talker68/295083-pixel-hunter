import {gameState, gameResult, setCurrentLevel, setTime, setLives, setResult} from './gameData';
import Application from '../application';
import 'whatwg-fetch';

class GameModel {
  constructor(state) {
    this._state = state;
  }

  get state() {
    return this._state;
  }

  nextLevel() {
    this._state = setCurrentLevel(this._state, this._state.currentLevel + 1);
  }

  die() {
    this._state = setLives(this._state, this._state.lifeNumber - 1);
  }

  tick() {
    this._state = setTime(this._state, this._state.currentTime + 1);
  }

  resetTimer() {
    this._state = setTime(this._state, this._state.currentTime = 0);
  }
}

class StatModel {
  constructor(result) {
    this._result = result;
  }

  get result() {
    return this._result;
  }

  updateResult(time, isCorrect) {
    this._result = setResult(this._result, time, isCorrect);
  }
}

const status = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;

    // если это метод GET, первая игра и такого пользователя еще нет, то вместо ошибке возвращаем null

  } else if (!response.bodyUsed && response.status === 404) {
    return null;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

const uploadStatistics = (name, obj) => {
  const url = `https://intensive-ecmascript-server-dxttmcdylw.now.sh/pixel-hunter/stats/:${name}`;
  const options = {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  window.fetch(url, options).then(status).catch(Application.showError);
};

const downloadStatistics = (name) => {
  const url = `https://intensive-ecmascript-server-dxttmcdylw.now.sh/pixel-hunter/stats/:${name}`;
  window.fetch(url).then(status).then((response) => {
    if (response) {
      return response.json();
    } else {
      return null;
    }
  }).then(Application.showHistory).catch(Application.showError);
};

const gameModel = new GameModel(gameState);
const statModel = new StatModel(gameResult);

export {gameModel, statModel, uploadStatistics, downloadStatistics};
