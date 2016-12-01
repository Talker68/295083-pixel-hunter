import {Game1, Game2, Game3} from '../../data/gameData';
import paintings from 'json-loader!../../data/paintings.json';
import photos from 'json-loader!../../data/photos.json';

// Создаем массив обектов игр. Типы игр выбираются в случайном порядке.

const numberOfGames = 10;

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
          picture1Type: 'painting',
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
          picture1Type: 'painting',
          picture1URL: paintings.paintings[paintingsCount++],
        };

        games[i] = new Game2(args);
        break;
      }

      case 3: {
        let args = {
          questionText: 'Найдите рисунок среди изображений',
          picture1Type: 'painting',
          picture1URL: paintings.paintings[paintingsCount++],
          picture2Type: 'photo',
          picture2URL: photos.photos[photoCount++],
          picture3Type: 'painting',
          picture3URL: paintings.paintings[paintingsCount++],
        };
        games[i] = new Game3(args);
        break;
      }
    }
  }
  return games;
};

export {generateGameArr, numberOfGames};
