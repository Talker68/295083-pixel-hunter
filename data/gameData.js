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

const games ={
  game1: {
    timer: 'NN',
    task: 'Угадайте для каждого изображения фото или рисунок?'
  },
  game2: {
    timer: 'NN',
    task: 'Угадай, фото или рисунок?'
  },
  game3: {
    timer: 'NN',
    task: 'Найдите рисунок среди изображений'
  },
};

export  {metaData, games};
