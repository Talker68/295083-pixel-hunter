import {timer} from '../Services/startGame';
import {numberOfGames, numberOfLives, statsArr} from '../Models/gameData';
import Application from '../application';
import {gameModel, statModel} from '../Models/gameModels';

class GamePresenter {
  constructor(game) {
    this.gameModel = game;
  }

  renderGameStatBar(gameNumber) {
    let PreviousGameResultNode = document.querySelector(`ul.stats li:nth-child(${gameNumber + 1})`);
    let resultClass = 'stats__result--' + statsArr[gameNumber].answerType;
    PreviousGameResultNode.classList.remove('stats__result--unknown');
    PreviousGameResultNode.classList.add(resultClass);
  }

  renderLifeHeader(livesLeft) {
    let lifeWidget = '';
    const lifeImage = '<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">';
    const noLifeImage = '<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">';
    let lifeHeaderNode = document.querySelector('.game__lives');

    let livesUsed = numberOfLives - livesLeft;

    for (let i = 0; i < livesUsed; i++) {
      lifeWidget = lifeWidget + noLifeImage;
    }

    for (let i = 0; i < livesLeft; i++) {
      lifeWidget = lifeWidget + lifeImage;
    }

    lifeHeaderNode.innerHTML = lifeWidget;
  }

  renderNextGame() {
    let gamesArr = Application.gameData;
    if (this.gameModel.state.currentLevel < numberOfGames && this.gameModel.state.lifeNumber > 0) {
      this.gameModel.resetTimer();
      Application.showLevel(gamesArr[this.gameModel.state.currentLevel]);

      this.renderLifeHeader(this.gameModel.state.lifeNumber);
      this.renderGameStatBar(this.gameModel.state.currentLevel - 1);
    } else {
      // чтобы не перерисовывать в цикле Ноду статистики на последней страницы статистики, копируем ее из последней игры
      this.renderGameStatBar(this.gameModel.state.currentLevel - 1);
      const gameStatBarNode = document.querySelector('ul.stats');
      clearInterval(timer);
      let gameModelObj = this.gameModel;
      Application.showStat({gameStatBarNode, statsArr, gameModelObj});
    }
  }

  updateGameStats(answer, time) {
    statModel.updateResult(time, answer);
    statsArr.push(statModel.result);

    if (statModel.result.answerType === 'wrong') {
      this.gameModel.die();
    }
    this.gameModel.nextLevel();
    this.renderNextGame();
  }

  runNextGame(e) {
    let gamesArr = Application.gameData;
    if (gamesArr[this.gameModel.state.currentLevel].type === 'two-of-two') {

      if (!this._answerNumberGiven) {
        this._answerNumberGiven = 0;
      }

      if (e.target.closest('.game__answer') && e.target.tagName === 'INPUT') {

        if (e.target.name === 'question1') {
          this._answerNumberGiven++;
          [...document.querySelectorAll('INPUT[name = "question1"]')].forEach((x) => {
            x.disabled = 'true';
          });

          this._firstAnswer = (e.target.value === gamesArr[this.gameModel.state.currentLevel].answers[0].type);

        }
        if (e.target.name === 'question2') {
          e.target.disabled = 'true';
          this._answerNumberGiven++;
          [...document.querySelectorAll('INPUT[name = "question2"]')].forEach((x) => {
            x.disabled = 'true';
          });

          this._secondAnswer = (e.target.value === gamesArr[this.gameModel.state.currentLevel].answers[1].type);
        }

        if (this._answerNumberGiven === 2) {
          let isCorrect = this._firstAnswer && this._secondAnswer;
          this._answerNumberGiven = null;
          this.updateGameStats(isCorrect, this.gameModel.state.currentTime);
        }
      }

    } else if (gamesArr[this.gameModel.state.currentLevel].type === 'tinder-like') {
      if (e.target.closest('.game__answer') && e.target.tagName === 'INPUT') {

        let isCorrect = (e.target.value === gamesArr[this.gameModel.state.currentLevel].answers[0].type);

        this.updateGameStats(isCorrect, this.gameModel.state.currentTime);
      }

    } else if (gamesArr[this.gameModel.state.currentLevel].type === 'one-of-three') {

      const questionType = (question) => {
        let paintingsCount = 0;
        let photosCount = 0;
        question.answers.forEach((i) => {
          if (i.type === 'painting') {
            paintingsCount++;
          } else {
            photosCount++;
          }

        });
        if (paintingsCount < photosCount) {
          return 'painting';
        } else {
          return 'photo';
        }
      };

      let pictureChosen = e.target.closest('.game__option');
      if (pictureChosen) {
        let pictureNumber = parseInt(pictureChosen.id, 10);
        let isCorrect = (gamesArr[this.gameModel.state.currentLevel].answers[pictureNumber].type === questionType(gamesArr[this.gameModel.state.currentLevel]));

        this.updateGameStats(isCorrect, this.gameModel.state.currentTime);
      }
    }
  }
}

const game = new GamePresenter(gameModel);

export default game;

