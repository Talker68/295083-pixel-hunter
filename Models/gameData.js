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

let Game1 = class {

  constructor(args) {
    this.type = 1;
    this.timer = 0;
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

let Game2 =class {

  constructor(args) {
    this.type = 2;
    this.timer = 0;
    this.question = {
      text: args.questionText,
      picture1: {
        type: args.picture1Type,
        URL: args.picture1URL
      },
    }
  }

}

let Game3 = class {

  constructor(args) {
    this.type = 3;
    this.timer = 0;
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

export  {metaData, Game1, Game2, Game3};
