/////////////////////////////////////////////////////////////
// make sure to add actual aliases if the character has any
// object key is lowercase with underscrores for spaces

export const allNamedCharacters = {
  jon_snow: {
    name: "Jon Snow",
    alias: ["Lord Snow", "Bastard of Winterfell", "Lord Crow", "White Wolf"],
    specialItems: {
      longclaw: {
        name: "Longclaw",
        owner: this.jon_snow,
        description: "A Valyrian steel sword with a wolf's head pommel.",
        value: 100,
        battle: 10
      }
    },
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
    specialItems: {
      needle: {
        name: "Needle",
        owner: this.arya_stark,
        description: "A thin Valyrian steel sword suited for fencing.",
        value: 100,
        battle: 10
      }
    },
    charm: 10,
    intelligence: 10,
    battle: 10
  },
  tyrion_lannister: {
    name: "Tyrion Lannister",
    alias: ["Imp"],
    specialItems: {
      hand_of_the_king: {
        name: "Hand of the Queen",
        owner: this.tyrion_lannister,
        description: "A symbol marking the bearer as the chief advisor to the King.",
        value: 100,
        battle: 10
      }
    },
    charm: 10,
    intelligence: 10,
    battle: 10
  },
  aerys_II: {
    name: "Aerys II",
    alias: [],
    specialItems: {},
    charm: 10,
    intelligence: 10,
    battle: 10
  },
  robert_baratheon: {
    name: "Robert Baratheon",
    alias: ["The Stag King"],
    specialItems: {},
    charm: 10,
    intelligence: 10,
    battle: 10
  },
};

///////////////////////////////////////////////////////////////
// if you add named Characters to a city be sure to add the
// character to the above object as well
// object key is lowercase with underscrores for spaces

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
    adjacent: ["tumbleton", "rosby"],
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
  }
};
