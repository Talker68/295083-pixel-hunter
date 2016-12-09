
const numberOfGames = 10;
const numberOfLives =  3;

const gameState = {
  currentLevel : 0,
  lifeNumber : 3,
  currentTime : 0
};

const Statistics = class {
  constructor(args) {
    this.gameNumber = args.gameNumber;
    this.time = 0;
    this.isCorrect = false;
    this.answerType = 'unknown';
  }

  setStats() {
    this.answerType = "wrong";

    if (this.isCorrect && this.time < 10) {
      this.answerType = "fast";
    } else if (this.isCorrect && this.time > 20 && this.time < 31) {
      this.answerType = "slow";
    } else if (this.isCorrect) {
      this.answerType = 'correct';
    }
  }
};

const metaData = {
  intro: {
    motto: 'Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.'
  },
  greeting: {
    title: 'Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!',
    text: `<p>Правила игры просты.<br>
        Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
        Задача кажется тривиальной, но не думай, что все так просто.<br>
        Фотореализм обманчив и коварен.<br>
        Помни, главное — смотреть очень внимательно.</p>`
  },
  rules: {
    title: 'Правила',
    text: `Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?`
  },
};

const Game1 = class {

  constructor(args) {
    this.type = 1;
    this.question = {
      text: args.questionText,
      picture1: {
        type: args.picture1Type,
        URL: args.picture1URL
      },
      picture2: {
        type: args.picture2Type,
        URL: args.picture2URL
      }
    }
  }

};

const Game2 =class {

  constructor(args) {
    this.type = 2;
    this.question = {
      text: args.questionText,
      picture1: {
        type: args.picture1Type,
        URL: args.picture1URL
      },
    }
  }

}

const Game3 = class {

  constructor(args) {
    this.type = 3;
        this.question = {
      text: args.questionText,
      picture1: {
        type: args.picture1Type,
        URL: args.picture1URL
      },
      picture2: {
        type: args.picture2Type,
        URL: args.picture2URL
      },
      picture3: {
        type: args.picture3Type,
        URL: args.picture3URL
      }
    }
  }

};

export  {metaData, Game1, Game2, Game3, Statistics, numberOfGames, numberOfLives, gameState};
