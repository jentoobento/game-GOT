export const allNamedCharacters = {
  jon_snow: {
    name: "Jon Snow",
    alias: ["Lord Snow", "Bastard of Winterfell", "Lord Crow", "White Wolf"],
    charm: 10,
    intelligence: 10,
    battle: 10
  },
  arya_stark: {
    name: "Arya Stark",
    alias: [
      "Arya Horseface",
      "Arya Underfoot",
      "Weasel",
      "Cat of the Canals",
      "Blind Beth",
      "Mercy"
    ],
    charm: 10,
    intelligence: 10,
    battle: 10
  },
  tyrion_lannister: {
    name: "Tyrion Lannister",
    alias: ["Imp"],
    charm: 10,
    intelligence: 10,
    battle: 10
  },
  aerys_II: {
    name: "Aerys II",
    alias: [],
    charm: 10,
    intelligence: 10,
    battle: 10
  },
  

};


export const allCities = {
  winterfell: {
    name: "Winterfell",
    isConquered: true,
    isAllied: true,
    adjacent: [
      "deepwood_motte",
      "torrhen's_square",
      "castle_cerwyn",
      "hornwood",
      "queenscrown",
      "last_hearth",
      "castle_black"
    ],
    resources: {
      gold: 100,
      men: 20
    },
    namedCharacters: [
      allNamedCharacters.jon_snow,
      allNamedCharacters.arya_stark
    ]
  },
  kings_landing: {
    name: "King's Landing",
    isConquered: false,
    isAllied: false,
    adjacent: [
      "Tumbleton",
      "Rosby"
    ],
    resources: {
      gold: 100,
      men: 50
    },
    namedCharacters: [
      allNamedCharacters.aerys_II,
      allNamedCharacters.robert_baratheon,
      allNamedCharacters.cersei_lannister,
      allNamedCharacters.jaime_lannister,
      allNamedCharacters.joffrey_baratheon,
      allNamedCharacters.myrcella_baratheon,
      allNamedCharacters.tommen_baratheon
      
    ]
  },

};
