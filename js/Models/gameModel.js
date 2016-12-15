import {gameState, setCurrentLevel, setTime, setLives} from './gameData';

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

const gameModel = new GameModel(gameState);
export default gameModel;
