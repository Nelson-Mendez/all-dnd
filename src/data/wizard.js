const wizardClass = {
  "name": "The Wizard",
  "description": "Wizards are supreme magic-users, defined and united as a class bny the spells they cast. Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, sublte deception, brute-force mind control, and much more.",
  "table" : [
    {
      "Level": "1st",
      "Proficiency": "2",
      "Features": "Spellcasting, Arcane Recovery"
    },
    {
      "Level": "2nd",
      "Proficiency": "2",
      "Features": "Arcane Tradition"
    },
    {
      "Level": "3rd",
      "Proficiency": "2",
      "Features": ""
    },
    {
      "Level": "4th",
      "Proficiency": "2",
      "Features": "Ability Score Improvement"
    },
    {
      "Level": "5th",
      "Proficiency": "3",
      "Features": ""
    },
    {
      "Level": "6th",
      "Proficiency": "3",
      "Features": "Arcane Tradition Feature"
    },
    {
      "Level": "7th",
      "Proficiency": "3",
      "Features": ""
    },
    {
      "Level": "8th",
      "Proficiency": "3",
      "Features": "Ability Score Improvement"
    },
    {
      "Level": "9th",
      "Proficiency": "4",
      "Features": ""
    },
    {
      "Level": "10th",
      "Proficiency": "4",
      "Features": "Arcane Tradition Feature"
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
      "Features": "Arcane Tradition Feature"
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
      "Features": "Spell Mastery"
    },
    {
      "Level": "19th",
      "Proficiency": "6",
      "Features": "Ability Score Improvement"
    },
    {
      "Level": "20th",
      "Proficiency": "6",
      "Features": "Signature Spells"
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
    "Ability Score Improvement": "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    "Spell Mastery": " At 18th level, you have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell that are in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either spell at a higher level, you must expend a spell slot as normal. By spending 8 hours in study, you can exchange one or both of the spells you chose for different spells of the same levels.",
    "Signature Spells": "When you reach 20th level, you gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in your spellbook as your signature spells. You always have these spells prepared, they don't count against the number of spells you have prepared, and you can cast each of them once at 3rd level without expending a spell slot. When you do so, you can't do so again until you finish a short or long rest. If you want to cast either spell at a higher level, you must expend a spell slot as normal."
  }
}

export { wizardClass }