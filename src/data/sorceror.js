const sorcererClass = {
  "name": "The Sorcerer",
  "description": "Sorceres carry a magical birthright conferred upon them by an exotic bloodline, some otherwordly influence, or exposure to unknown cosmic forces. No one chooses sorcery; the power chooses the sorcerer",
  "table" : [
    {
      "Level": "1st",
      "Proficiency": "2",
      "Features": "Spellcasting, Sorcerous Origin",
      "Sorcery Points": "-"
    },
    {
      "Level": "2nd",
      "Proficiency": "2",
      "Features": "Font of Magic",
      "Sorcery Points": "2"
    },
    {
      "Level": "3rd",
      "Proficiency": "2",
      "Features": "Metamagic",
      "Sorcery Points": "3"
    },
    {
      "Level": "4th",
      "Proficiency": "2",
      "Features": "Ability Score Improvement",
      "Sorcery Points": "4"
    },
    {
      "Level": "5th",
      "Proficiency": "3",
      "Features": "",
      "Sorcery Points": "5"
    },
    {
      "Level": "6th",
      "Proficiency": "3",
      "Features": "Sorcerous Origin Feature",
      "Sorcery Points": "6"
    },
    {
      "Level": "7th",
      "Proficiency": "3",
      "Features": "",
      "Sorcery Points": "7"
    },
    {
      "Level": "8th",
      "Proficiency": "3",
      "Features": "Ability Score Improvement",
      "Sorcery Points": "8"
    },
    {
      "Level": "9th",
      "Proficiency": "4",
      "Features": "",
      "Sorcery Points": "9"
    },
    {
      "Level": "10th",
      "Proficiency": "4",
      "Features": "Metamagic",
      "Sorcery Points": "10"
    },
    {
      "Level": "11th",
      "Proficiency": "4",
      "Features": "",
      "Sorcery Points": "11"
    },
    {
      "Level": "12th",
      "Proficiency": "4",
      "Features": "Ability Score Improvement",
      "Sorcery Points": "12"
    },
    {
      "Level": "13th",
      "Proficiency": "5",
      "Features": "",
      "Sorcery Points": "13"
    },
    {
      "Level": "14th",
      "Proficiency": "5",
      "Features": "Sorcerous Origin feature",
      "Sorcery Points": "14"
    },
    {
      "Level": "15th",
      "Proficiency": "5",
      "Features": "Metamagic",
      "Sorcery Points": "15"
    },
    {
      "Level": "16th",
      "Proficiency": "5",
      "Features": "Ability Score Improvement",
      "Sorcery Points": "16"
    },
    {
      "Level": "17th",
      "Proficiency": "6",
      "Features": "Metamagic",
      "Sorcery Points": "17"
    },
    {
      "Level": "18th",
      "Proficiency": "6",
      "Features": "Sorcerous Origin feature",
      "Sorcery Points": "18"
    },
    {
      "Level": "19th",
      "Proficiency": "6",
      "Features": "Ability Score Improvement",
      "Sorcery Points": "19"
    },
    {
      "Level": "20th",
      "Proficiency": "6",
      "Features": "Sorcerous Restoration",
      "Sorcery Points": "20"
    } 
  ],
  "Hits": {
    "Dice": "1d6 per Sorcerer level",
    "First Level": "6 + Constitution Modifier",
    "Higher Levels": "1d6 (4) + Constitution modifier per Sorcerer level after 1st"
  },
  'Proficiencies': {
    'Armour': ['None'],
    'Weapons': ['Daggers', 'Darts', 'Slings', 'Quarterstaffs', 'Light Crossbows'],
    'Tools': 'None',
    'Saving Throws': ['Charisma', 'Constitution'],
    'Skills': 'Choose two from Arcana, Deception, Insight, Intimidation, Persuasion, Religion'
  },
  "Equipment": ["exists"],
  "class_features": {
    "Ability Score Improvement": "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    "Sorcerous Restoration": "At 20th level, you regain 4 expended sorcery points whenever you finish a short rest."
  }
}

export { sorcererClass }