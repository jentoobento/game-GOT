/////////////////////////////////////////////////////////////
// make sure to add actual aliases if the character has any
// object key is lowercase with underscrores for spaces

export const allNamedCharacters = {
  jon_snow: {
    name: "Jon Snow",
    alias: [
      "Lord Snow", 
      "Bastard of Winterfell", 
      "Lord Crow", 
      "White Wolf"
    ],
    specialItems: {
      longclaw: {
        name: "Longclaw",
        owner: this.jon_snow,
        description: "A Valyrian steel sword with a wolf's head pommel.",
        value: 100,
        battle: 10
      }
    },
    house: [
      "Stark",
      "the Night's Watch"
    ],
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
    house: ["Stark"],
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
    house: ["Lannister"],
    charm: 10,
    intelligence: 10,
    battle: 10
  },
  aerys_II: {
    name: "Aerys II",
    alias: ["Mad King", "King Scab"],
    specialItems: {},
    house: ["Targaryen"],
    charm: 10,
    intelligence: 10,
    battle: 10
  },
  robert_baratheon: {
    name: "Robert Baratheon",
    alias: ["The Stag King"],
    specialItems: {},
    house: ["Baratheon"],
    charm: 10,
    intelligence: 10,
    battle: 10
  },
  cersei_lannister: {
    name: "Cersei Lannister",
    alias: ["Cersei", "Queen Cersei", "Queen of the Seven Kingdoms", "Queen of the Andals and the First Men"],
    house: ["Lannister"],
    charm: 10,
    intelligence: 10,
    battle: 10
  },
  jaime_lannister: {
    name: "Jaime Lannister",
    alias: ["The King Slayer", "The Young Lion"],
    house: ["Lannister"],
    charm: 10,
    intelligence: 10,
    battle: 10
  },

  joffrey_baratheon: {
    name: "Joffrey Baratheon,",
    alias: ["joffrey the Illborn", "The Young Usurper"],
    house: ["Lannister"],
    charm: 10,
    intelligence: 10,
    battle: 10
  },

  myrcella_baratheon: {
    name: "Myrcella Baratheon",
    alias: ["Princess Myrcella Baratheon"],
    house: ["Lannister"],
    charm: 10,
    intelligence: 10,
    battle: 10
  },

  tommen_baratheon: {
    name: "Tommen Baratheon",
    alias: ["The Boy King"],
    house: ["Lannister"],
    charm: 10,
    intelligence: 10,
    battle: 10
  },

};
export const allHouses = {

  stark:{
    members:
  [
    allNamedCharacters.arya_stark,
    allNamedCharacters.jon_snow
  ],
    motto:"Winter is Coming.",
},

  lannister:{ 
  members:[
    allNamedCharacters.cersei_lannister,
    allNamedCharacters.jaime_lannister,
    allNamedCharacters.tyrion_lannister,
    allNamedCharacters.joffrey_baratheon,
    allNamedCharacters.myrcella_baratheon,
    allNamedCharacters.tommen_baratheon,
  ],
  motto:"Hear Me Roar",
},
  targaryen:{
  members:[
    allNamedCharacters.aerys_II,
    //allNamedCharacters.daenerys_targaryen,
    //allNamedCharacters.viserys_targeryen
  ],
    motto:"Fire and Blood.",
  },

  baratheon:{
    members:[
    allNamedCharacters.robert_baratheon
  ],
    motto:"Ours is the Fury.",
},
  greyjoy:{
    members:[],
    motto:"We Do Not Sow.",
  },
  martell: {
    members: [],
    motto: "Unbowed, Unbent, Unbroken.",
  },
  tyrell: {
    members: [],
    motto: "Growing Strong.",
  },
  arryn: {
    members: [],
    motto: "As High as Honor.",
  },
  tully: {
    members: [],
    motto: "Family, Duty, Honor.",
  },
  frey: {
    members: [],
    motto: "We Stand Together.",
  },
  hornwood: {
    members: [],
    motto: "Righteous in Wrath.",
  },
  bolton: {
  members: [],
    motto: "Our Blades are Sharp.",
  },
  karstark: {
  members: [],
    motto: "The Sun of Winter.",
  },
  velaryon: {
  members: [],
    motto: "The Old, The True, The Brave.",
  },
  Cerwyn: {
  members: [],
    motto: "Honed and Ready.",
  },
  follard: {
  members: [],
    motto: "None so Wise.",
  },
  buckwell: {
  members: [],
    motto: "Pride and Purpose.",
  },
  flint: {
  members: [],
    motto: "Ever Vigilant.",
  },
  penrose: {
  members: [],
    motto: "Set Down Our Deeds.",
  },
  mormont: {
  members: [],
    motto: "Here We Stand",
  },
  hightower: {
  members: [],
    motto: "We Light the Way.",
  },
  hightower: {
    members: [],
    motto: "We Light the Way.",
  },
  Tarly: {
    members: [],
    motto: "First in Battle.",
  },
  westerling: {
    members: [],
    motto: "Honour, not Honours.",
  },
  Dayne: {
    members: [],
    motto: "Sword to House Martell.",
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
    adjacent: [
      "tumbleton", 
      "rosby"
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
  }
};
