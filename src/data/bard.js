const bardClass = {
  "name": "The Bard",
  "description": "Whether scholar, skald, or scoundrel, a bard weaves magic through words and music to inspire allies, demoralize foes, manipulate minds, create illusions, and even heal wounds. The bard is a master of song, speech, and the magic they contain",
  "table" : [
    {
      "Level": "1st",
      "Proficiency": "2",
      "Features": ""
    },
    {
      "Level": "2nd",
      "Proficiency": "2",
      "Features": ""
    },
    {
      "Level": "3rd",
      "Proficiency": "2",
      "Features": ""
    },
    {
      "Level": "4th",
      "Proficiency": "2",
      "Features": ""
    },
    {
      "Level": "5th",
      "Proficiency": "3",
      "Features": ""
    },
    {
      "Level": "6th",
      "Proficiency": "3",
      "Features": ""
    },
    {
      "Level": "7th",
      "Proficiency": "3",
      "Features": ""
    },
    {
      "Level": "8th",
      "Proficiency": "3",
      "Features": ""
    },
    {
      "Level": "9th",
      "Proficiency": "4",
      "Features": ""
    },
    {
      "Level": "10th",
      "Proficiency": "4",
      "Features": ""
    },
    {
      "Level": "11th",
      "Proficiency": "4",
      "Features": ""
    },
    {
      "Level": "12th",
      "Proficiency": "4",
      "Features": ""
    },
    {
      "Level": "13th",
      "Proficiency": "5",
      "Features": ""
    },
    {
      "Level": "14th",
      "Proficiency": "5",
      "Features": ""
    },
    {
      "Level": "15th",
      "Proficiency": "5",
      "Features": ""
    },
    {
      "Level": "16th",
      "Proficiency": "5",
      "Features": ""
    },
    {
      "Level": "17th",
      "Proficiency": "6",
      "Features": ""
    },
    {
      "Level": "18th",
      "Proficiency": "6",
      "Features": ""
    },
    {
      "Level": "19th",
      "Proficiency": "6",
      "Features": ""
    },
    {
      "Level": "20th",
      "Proficiency": "6",
      "Features": ""
    } 
  ],
  "Hits": {
    "Dice": "1d8 per Bard level",
    "First Level": "8 + Constitution Modifier",
    "Higher Levels": "1d8 (5) + Constitution modifier per Bard level after 1st"
  },
  'Proficiencies': {
    'Armour': ['Light Armour'],
    'Weapons': ['Simple Weapons', 'hand crossbows', 'longswords', 'rapiers', 'shortswords'],
    'Tools': 'Three musical instruments of your choice',
    'Saving Throws': ['Dexterity', 'Charisma'],
    'Skills': 'Choose any three'
  },
  "Equipment": ["exists"],
  "class_features": {
    "Bardic Inspiration": "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time. You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest. Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.",
    "Jack of All Trades":"Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus.",
    "Song of Rest":"Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance spend one or more Hit Dice to regain hit points at the end of the short rest, each of those creatures regains an extra 1d6 hit points.",
    "Expertise":"At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies. At 10th level, you can choose another two skill proficiencies to gain this benefit.",
    "Ability Score Improvement":"When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    "Font of Inspiration":"Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest.",
    "Countercharm":"At 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects. As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit. The performance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required).",
    "Magical Secrets":"By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table. You learn two additional spells from any class at 14th level and again at 18th level.",
    "Superior Inspiration":"At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use."
  }
}

export { bardClass }