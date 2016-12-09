import {Game1, Game2, Game3, Statistics} from '../Models/gameData';
import paintings from 'json-loader!../Models/paintings.json';
import photos from 'json-loader!../Models/photos.json';
import {numberOfGames, numberOfLives} from '../Models/gameData';

// Создаем массив обектов игр. Типы игр выбираются в случайном порядке.

const generateGameArr = () => {

  let games = [];
  let paintingsCount = 0;
  let photoCount = 0;

  for (let i = 0; i < numberOfGames; i++) {
    let type = Math.floor(Math.random() * 3) + 1; // Случайный номер от 1 до 3

    switch (type) {
      case 1: {
        let args = {
          questionText: 'Угадайте для каждого изображения фото или рисунок?',
          picture1Type: 'paint',
          picture1URL: paintings.paintings[paintingsCount++],
          picture2Type: 'photo',
          picture2URL: photos.photos[photoCount++],
        };
        games[i] = new Game1(args);
        break;
      }

      case 2: {
        let args = {
          questionText: 'Угадай, фото или рисунок?',
          picture1Type: 'paint',
          picture1URL: paintings.paintings[paintingsCount++],
        };

        games[i] = new Game2(args);
        break;
      }

      case 3: {
        let args = {
          questionText: 'Найдите рисунок среди изображений',
          picture1Type: 'paint',
          picture1URL: paintings.paintings[paintingsCount++],
          picture2Type: 'photo',
          picture2URL: photos.photos[photoCount++],
          picture3Type: 'paint',
          picture3URL: paintings.paintings[paintingsCount++],
        };
        games[i] = new Game3(args);
        break;
      }
    }
  }
  return games;
};

const generateStatsArr = ()=> {

  let statsData = [];

  for (let i = 0; i < numberOfGames; i++) {
    let args ={
      lifeNumber : numberOfLives,
      gameNumber : i
    }
    statsData[i] = new Statistics(args);
  }
  return statsData;

}

export {generateGameArr, generateStatsArr};
