const druidClass = {
  "name": "The Druid",
  "description": "Whether calling on the elemental forces of nature or emulating the creatures of the animal world, druids are an embodiment on nature's resilience, cunning, and fury. They claim no mastery over nature, but see themselves as extensions of nature's indomitable will",
  "table" : [
    {
      "Level": "1st",
      "Proficiency": "2",
      "Features": "Druidic, Spellcasting"
    },
    {
      "Level": "2nd",
      "Proficiency": "2",
      "Features": "Wild Shape, Druid Circle"
    },
    {
      "Level": "3rd",
      "Proficiency": "2",
      "Features": ""
    },
    {
      "Level": "4th",
      "Proficiency": "2",
      "Features": "Wild Shape Improvement, Ability Score Improvement"
    },
    {
      "Level": "5th",
      "Proficiency": "3",
      "Features": ""
    },
    {
      "Level": "6th",
      "Proficiency": "3",
      "Features": "Druid Circle Feature"
    },
    {
      "Level": "7th",
      "Proficiency": "3",
      "Features": ""
    },
    {
      "Level": "8th",
      "Proficiency": "3",
      "Features": "Wild Shape Improvement, Ability Score Improvement"
    },
    {
      "Level": "9th",
      "Proficiency": "4",
      "Features": ""
    },
    {
      "Level": "10th",
      "Proficiency": "4",
      "Features": "Druid Circle Feature"
    },
    {
      "Level": "11th",
      "Proficiency": "4",
      "Features": ""
    },
    {
      "Level": "12th",
      "Proficiency": "4",
      "Features": "Ability Score Improvement"
    },
    {
      "Level": "13th",
      "Proficiency": "5",
      "Features": ""
    },
    {
      "Level": "14th",
      "Proficiency": "5",
      "Features": "Druid Circle Feature"
    },
    {
      "Level": "15th",
      "Proficiency": "5",
      "Features": ""
    },
    {
      "Level": "16th",
      "Proficiency": "5",
      "Features": "Ability Score Improvement"
    },
    {
      "Level": "17th",
      "Proficiency": "6",
      "Features": ""
    },
    {
      "Level": "18th",
      "Proficiency": "6",
      "Features": "Timeless Body, Beast Spells"
    },
    {
      "Level": "19th",
      "Proficiency": "6",
      "Features": "Ability Score Improvement"
    },
    {
      "Level": "20th",
      "Proficiency": "6",
      "Features": "Archdruid"
    } 
  ],
  "Hits": {
    "Dice": "1d8 per Druid level",
    "First Level": "8 + Constitution Modifier",
    "Higher Levels": "1d8 (5) + Constitution modifier per Druid level after 1st"
  },
  'Proficiencies': {
    'Armour': ['Nonmetal Light Armour', 'Nonmetal Medium Armour', 'Nonmetal Shields'],
    'Weapons': ['Clubs', 'daggers', 'darts', 'javelins', 'maces', 'quarterstaffs', 'scimitars', 'sickles', 'slings', 'spears'],
    'Tools': 'Herbalism Kit',
    'Saving Throws': ['Intelligence', 'Wisdom'],
    'Skills': 'Choose two from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, Survival'
  },
  "Equipment": ["exists"],
  "class_features": {
    "Druidic" : "You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom (Perception) check but can't decipher it without magic.",
    "Ability Score Improvement" : "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    "Timeless Body" : "Starting at 18th level, the primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year.",
    "Beast Shapes" : "Beginning at 18th level, you can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren't able to provide material components.",
    "Archdruid" : "At 20th level, you can use your Wild Shape an unlimited number of times. Additionally, you can ignore the verbal and somatic components of your druid spells, as well as any material components that lack a cost and aren't consumed by a spell. You gain this benefit in both your normal shape and your beast shape from Wild Shape.",
  }
}

export { druidClass }