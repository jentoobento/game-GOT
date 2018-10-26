import char1 from './images/characters/char1.jpg'
import char2 from './images/characters/char2.jpg'
import char3 from './images/characters/char3.jpg'
import char4 from './images/characters/char4.jpg'
import char5 from './images/characters/char5.jpg'
import char6 from './images/characters/char6.jpg'
import char7 from './images/characters/char7.jpg'


const charImages = [
    char1, char2, char3, char4, char5, char6, char7
]


const charNames = [
  "bob",
  "tim",
  "simon",
  "larry",
  "gregorio",
  "hector",
  "pamela",
  "john",
  "joe",
  "anthony"
];

const charHouses = [
  "red",
  "white",
  "blue",
  "green",
  "panther",
  "tigers",
  "eagle",
  "abstergo",
  "assassins",
  "sabio"
];



export const generateRandom = (name = false, house = false, img = false) => {
  if (name) {
    return charNames[Math.floor(Math.random() * charNames.length)];
  }

  if (house) {
    return charHouses[Math.floor(Math.random() * charHouses.length)];
  }

  if(img){
      return charImages[Math.floor(Math.random() * charImages.length)];
  }
};
