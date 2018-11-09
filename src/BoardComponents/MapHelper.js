/////////////////////////////////////////////////
// legendary items can be equipped on characters in their spceialItem array property
// legendaryItems object properties include:
// name - the name capitalized and with spaces if any
// description - a very short one sentence description of the item in a generic sense.
// value - an integer value representing how much the item is worth in gold
// battle - an integer value representing the amount of boost equipping this item would have on the battle stat

export const legendaryItems = {
  longclaw: {
    name: "Longclaw",
    description: "A Valyrian steel sword with a wolf's head pommel.",
    value: 100,
    battle: 10
  },
  needle: {
    name: "Needle",
    description: "A thin Valyrian steel sword suited for fencing.",
    value: 100,
    battle: 10
  },
  hand_of_the_king: {
    name: "Hand of the King",
    description:
      "A symbol marking the bearer as the chief advisor to the King.",
    value: 100,
    battle: 10
  },
  hand_of_the_queen: {
    name: "Hand of the Queen",
    description:
      "A symbol marking the bearer as the chief advisor to Daenerys Targaryen.",
    value: 90,
    battle: 20
  }
};

/////////////////////////////////////////////////////////////
// make sure to add actual aliases if the character has any
// object key is lowercase with underscrores for spaces
// character object consists of :
// name - capitalized and with spaces
// alias - an array of strings
// specialItems - an array of objects from the legendaryItems object (if any)
// house - a string
// charm - an integer value representing how well the character can hire men
// intelligence - an integer value representing how well the character can invest
// battle - an integer value representing how well the character will do during invasions

export const allNamedCharacters = {
  jon_snow: {
    name: "Jon Snow",
    alias: ["Lord Snow", "Bastard of Winterfell", "Lord Crow", "White Wolf"],
    specialItems: [legendaryItems.longclaw],
    house: ["Stark", "the Night's Watch"],
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
    specialItems: [legendaryItems.needle],
    house: ["Stark"],
    charm: 10,
    intelligence: 10,
    battle: 10
  },
  tyrion_lannister: {
    name: "Tyrion Lannister",
    alias: ["Imp"],
    specialItems: [legendaryItems.hand_of_the_queen],
    house: ["Lannister"],
    charm: 10,
    intelligence: 10,
    battle: 10
  },
  aerys_II: {
    name: "Aerys II",
    alias: ["Mad King", "King Scab"],
    specialItems: [],
    house: ["Targaryen"],
    charm: 10,
    intelligence: 10,
    battle: 10
  },
  robert_baratheon: {
    name: "Robert Baratheon",
    alias: ["The Stag King"],
    specialItems: [],
    house: ["Baratheon"],
    charm: 10,
    intelligence: 10,
    battle: 10
  },
  cersei_lannister: {
    name: "Cersei Lannister",
    alias: [
      "Cersei",
      "Queen Cersei",
      "Queen of the Seven Kingdoms",
      "Queen of the Andals and the First Men"
    ],
    specialItems: [],
    house: ["Lannister"],
    charm: 10,
    intelligence: 10,
    battle: 10
  },
  jaime_lannister: {
    name: "Jaime Lannister",
    alias: ["The King Slayer", "The Young Lion"],
    specialItems: [],
    house: ["Lannister"],
    charm: 10,
    intelligence: 10,
    battle: 10
  },
  joffrey_baratheon: {
    name: "Joffrey Baratheon,",
    alias: ["joffrey the Illborn", "The Young Usurper"],
    specialItems: [],
    house: ["Lannister"],
    charm: 10,
    intelligence: 10,
    battle: 10
  },
  myrcella_baratheon: {
    name: "Myrcella Baratheon",
    alias: ["Princess Myrcella Baratheon"],
    specialItems: [],
    house: ["Lannister"],
    charm: 10,
    intelligence: 10,
    battle: 10
  },
  tommen_baratheon: {
    name: "Tommen Baratheon",
    alias: ["The Boy King"],
    specialItems: [],
    house: ["Lannister"],
    charm: 10,
    intelligence: 10,
    battle: 10
  }
};

////////////////////////////////////////////
// houses currently take 2 properties: 
// members - an array of allNamedCharacters objects
// motto - a string

export const allHouses = {
  stark: {
    members: [allNamedCharacters.arya_stark, allNamedCharacters.jon_snow],
    motto: "Winter is Coming"
  },
  lannister: {
    members: [
      allNamedCharacters.cersei_lannister,
      allNamedCharacters.jaime_lannister,
      allNamedCharacters.tyrion_lannister,
      allNamedCharacters.joffrey_baratheon,
      allNamedCharacters.myrcella_baratheon,
      allNamedCharacters.tommen_baratheon
    ],
    motto: "Hear Me Roar"
  },
  targaryen: {
    members: [
      allNamedCharacters.aerys_II
      //allNamedCharacters.daenerys_targaryen,
      //allNamedCharacters.viserys_targeryen
    ],
    motto: "Fire and Blood"
  },
  baratheon: {
    members: [allNamedCharacters.robert_baratheon],
    motto: "Ours is the Fury"
  },
  greyjoy: {
    members: [],
    motto: "We Do Not Sow"
  },
  martell: {
    members: [],
    motto: "Unbowed, Unbent, Unbroken"
  },
  tyrell: {
    members: [],
    motto: "Growing Strong"
  },
  arryn: {
    members: [],
    motto: "As High as Honor"
  },
  tully: {
    members: [],
    motto: "Family, Duty, Honor"
  },
  frey: {
    members: [],
    motto: "We Stand Together"
  },
  hornwood: {
    members: [],
    motto: "Righteous in Wrath"
  },
  bolton: {
    members: [],
    motto: "Our Blades are Sharp"
  },
  karstark: {
    members: [],
    motto: "The Sun of Winter"
  },
  velaryon: {
    members: [],
    motto: "The Old, The True, The Brave"
  },
  cerwyn: {
    members: [],
    motto: "Honed and Ready"
  },
  follard: {
    members: [],
    motto: "None so Wise"
  },
  buckwell: {
    members: [],
    motto: "Pride and Purpose"
  },
  flint: {
    members: [],
    motto: "Ever Vigilant"
  },
  penrose: {
    members: [],
    motto: "Set Down Our Deeds"
  },
  mormont: {
    members: [],
    motto: "Here We Stand"
  },
  hightower: {
    members: [],
    motto: "We Light the Way"
  },
  tarly: {
    members: [],
    motto: "First in Battle"
  },
  westerling: {
    members: [],
    motto: "Honour, not Honours"
  },
  dayne: {
    members: [],
    motto: "Sword to House Martell"
  }
};

///////////////////////////////////////////////////////////////
// if you add named Characters to a city be sure to add the
// character to the above object as well
// object key is lowercase with underscrores for spaces
// allCities object properties include:
// name - the name capitalized and with spaces if any
// isConquered - a boolean value
// isAllied - a boolean value
// adjacent - an array of strings
// resources - an object containing how much gold and men this city has
// namedCharacters - an array of objects

export const allCities = {
  winterfell: {
    name: "Winterfell",
    isConquered: true,
    isAllied: true,
    location: {
      top:"120px",
      left:"220px"
    },
    adjacent: [
      // "deepwood_motte",
      // "torrhen's_square",
      // "castle_cerwyn",
      // "hornwood",
      // "queenscrown",
      // "last_hearth",
      "castle_black",
      "kings_landing"
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
  castle_black: {
    name: "Castle Black",
    isConquered: true,
    isAllied: true,
    location:{
      top:"40px",
      left:"230px"
    },
    adjacent: [
      "winterfell"
    ],
    resources: {
      gold: 100,
      men: 20
    },
    namedCharacters: []
  },
  kings_landing: {
    name: "King's Landing",
    isConquered: false,
    isAllied: false,
    location:{
      top:"320px",
      left:"255px"
    },
    adjacent: [
      // "tumbleton", "rosby"
      "winterfell"
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
