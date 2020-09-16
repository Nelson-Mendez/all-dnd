const warlockClass = {
  "name": "The Warlock",
  "description": "Warlocks are seekers of the knowledge that lies hidden in the fabric of the multiverse. Through pacts made with mysterious beings of supernatural power, warlocks unlock magical effects both subtle and spectacular.",
  "table" : [
    {
      "Level": "1st",
      "Proficiency": "2",
      "Features": "Otherworldly Patron, Pact Magic"
    },
    {
      "Level": "2nd",
      "Proficiency": "2",
      "Features": "Eldritch Invocations"
    },
    {
      "Level": "3rd",
      "Proficiency": "2",
      "Features": "Pact Boon"
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
      "Features": "Otherworldly Patron Feature"
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
      "Features": "Otherwordly Patron Feature"
    },
    {
      "Level": "11th",
      "Proficiency": "4",
      "Features": "Mystic Arcanum 6th Level"
    },
    {
      "Level": "12th",
      "Proficiency": "4",
      "Features": "Ability Score Improvement"
    },
    {
      "Level": "13th",
      "Proficiency": "5",
      "Features": "Mystic Arcanum 7th Level"
    },
    {
      "Level": "14th",
      "Proficiency": "5",
      "Features": "Otherworldly Patron Feature"
    },
    {
      "Level": "15th",
      "Proficiency": "5",
      "Features": "Mystic Arcanum 8th Level"
    },
    {
      "Level": "16th",
      "Proficiency": "5",
      "Features": "Ability Score Improvement"
    },
    {
      "Level": "17th",
      "Proficiency": "6",
      "Features": "Mystic Arcanum 9th Level"
    },
    {
      "Level": "18th",
      "Proficiency": "6",
      "Features": ""
    },
    {
      "Level": "19th",
      "Proficiency": "6",
      "Features": "Ability Score Improvement"
    },
    {
      "Level": "20th",
      "Proficiency": "6",
      "Features": "Eldritch Master"
    } 
  ],
  "Hits": {
    "Dice": "1d8 per Warlock level",
    "First Level": "8 + Constitution Modifier",
    "Higher Levels": "1d8 (5) + Constitution modifier per Warlock level after 1st"
  },
  'Proficiencies': {
    'Armour': ['Light Armour'],
    'Weapons': ['Simple Weapons'],
    'Tools': 'None',
    'Saving Throws': ['Wisdom', 'Charisma'],
    'Skills': 'Choose two from Arcana, Deception, History, Intimidation, Investigation, Nature, Religion'
  },
  "Equipment": ["exists"],
  "class_features": {
    "Eldritch Invocations": "In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability. At 2nd level, you gain two eldritch invocations of your choice. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table. Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level. A level prerequisite in an invocation refers to warlock level, not character level.",
    "Ability Score Improvement": "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    "Mystic Arcanum": "At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th-level spell from the warlock spell list as this arcanum. You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again. At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th-level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest.",
    "Eldritch Master": "At 20th level, you can draw on your inner reserve of mystical power while entreating your patron to regain expended spell slots. You can spend 1 minute entreating your patron for aid to regain all your expended spell slots from your Pact Magic feature. Once you regain spell slots with this feature, you must finish a long rest before you can do so again."
  }
}

export { bardClass }