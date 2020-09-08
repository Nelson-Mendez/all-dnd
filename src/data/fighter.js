const fighterClass = {
  "name": "The Fighter",
  "description": "Fighters share an unparalleled mastery with weapons and armor, and a throrough knowledge of the skills of combat. They are well acquainted with death, both in meting it out, and in staring it defiantly in the face.",
  "table" : [
    {
      "Level": "1st",
      "Proficiency": "2",
      "Features": "Fighting Style, Second Wind"
    },
    {
      "Level": "2nd",
      "Proficiency": "2",
      "Features": "Action Surge"
    },
    {
      "Level": "3rd",
      "Proficiency": "2",
      "Features": "Martial Archetype"
    },
    {
      "Level": "4th",
      "Proficiency": "2",
      "Features": "Ability Score Improvement"
    },
    {
      "Level": "5th",
      "Proficiency": "3",
      "Features": "Extra Attack"
    },
    {
      "Level": "6th",
      "Proficiency": "3",
      "Features": "Ability Score Improvement"
    },
    {
      "Level": "7th",
      "Proficiency": "3",
      "Features": "Martial Archetype Feature"
    },
    {
      "Level": "8th",
      "Proficiency": "3",
      "Features": "Ability Score Improvement"
    },
    {
      "Level": "9th",
      "Proficiency": "4",
      "Features": "Indomitable"
    },
    {
      "Level": "10th",
      "Proficiency": "4",
      "Features": "Martial Archetype Feature"
    },
    {
      "Level": "11th",
      "Proficiency": "4",
      "Features": "Extra Attack 2"
    },
    {
      "Level": "12th",
      "Proficiency": "4",
      "Features": "Ability Score Improvement"
    },
    {
      "Level": "13th",
      "Proficiency": "5",
      "Features": "Indomitable 2"
    },
    {
      "Level": "14th",
      "Proficiency": "5",
      "Features": "Ability Score Improvement"
    },
    {
      "Level": "15th",
      "Proficiency": "5",
      "Features": "Martial Archetype Feature"
    },
    {
      "Level": "16th",
      "Proficiency": "5",
      "Features": "Ability Score Improvement"
    },
    {
      "Level": "17th",
      "Proficiency": "6",
      "Features": "Action Surge 2, Indomitable 3"
    },
    {
      "Level": "18th",
      "Proficiency": "6",
      "Features": "Martial Archetype Feature"
    },
    {
      "Level": "19th",
      "Proficiency": "6",
      "Features": "Ability Score Improvement"
    },
    {
      "Level": "20th",
      "Proficiency": "6",
      "Features": "Extra Attack 3"
    }    
  ],
  "Hits": {
    "Dice": "1d10 per Fighter level",
    "First Level": "10 + Constitution Modifier",
    "Higher Levels": "1d10 (6) + Constitution modifier per Fighter level after 1st"
  },
  'Proficiencies': {
    'Armour': ['Light Armour', 'Medium Armour', 'Heavy Armour', 'Shields'],
    'Weapons': ['Simple Weapons', 'Martial Weapons'],
    'Tools': 'None',
    'Saving Throws': ['Strength', 'Constitution'],
    'Skills': 'Choose two from Acrobatics, Animal Handling, Athletics, History, Insight,Intimidation, Perception, Survival'
  },
  "Equipment": ["exists"],
  "class_features": {
    "Fighting Style": "You adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.",
    "Second Wind": "You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.",
    "Action Surge": "Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action. Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn.",
    "Martial Archetype": ["there's a lot to go here. TODO: Modal?"],
    "Ability Score Improvement": "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    "Extra Attack":"Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class.",
    "Indomitable": "Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest. You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level."
  }
}

export { fighterClass };