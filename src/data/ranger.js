const rangerClass = [{
  "name": "The Ranger",
  "description": "Far from the bustle of cities and towns, past the hedges that shelter the most distant farms from the terrors of the wild, amid the dense-packed trees of trackless forests and across wide and empty plains, rangers keep their unending watch.",
  "table": [
    {
      "Level": "1st",
      "Proficiency": "2",
      "Features": "Favoured Enemy, Natural Explorer"
    },
    {
      "Level": "2nd",
      "Proficiency": "2",
      "Features": "Fighting Style, Spellcasting"
    },
    {
      "Level": "3rd",
      "Proficiency": "2",
      "Features": "Primeval Awareness, Ranger Conclave"
    },
    {
      "Level": "4th",
      "Proficiency": "2",
      "Features": "Ability Score Improvement"
    },
    {
      "Level": "5th",
      "Proficiency": "3",
      "Features": "Ranger Conclave Feature"
    },
    {
      "Level": "6th",
      "Proficiency": "3",
      "Features": "Greater Favoured Enemy, Fleet of Foot"
    },
    {
      "Level": "7th",
      "Proficiency": "3",
      "Features": "Ranger Conclave Feature"
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
      "Features": "Hide in Plain Sight"
    },
    {
      "Level": "11th",
      "Proficiency": "4",
      "Features": "Ranger Conclave Feature"
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
      "Features": "Vanish"
    },
    {
      "Level": "15th",
      "Proficiency": "5",
      "Features": "Ranger Conclave Feature"
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
      "Features": "Feral Senses"
    },
    {
      "Level": "19th",
      "Proficiency": "6",
      "Features": "Ability Score Improvement"
    },
    {
      "Level": "20th",
      "Proficiency": "6",
      "Features": "Foe Slayer"
    },
  ],
  "Hits": {
    "Dice": "1d10 per Ranger level",
    "First Level": "10 + Constitution Modifier",
    "Higher Levels": "1d10 (6) + Constitution modifier per Ranger level after 1st"
  },
  'Proficiencies': {
    'Armour': ['Light Armour', 'Medium Armour', 'Shields'],
    'Weapons': ['Simple Weapons', 'Martial Weapons'],
    'Tools': 'None',
    'Saving Throws': ['Strength', 'Dexterity'],
    'Skills': 'Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, Survival'
  },
  "Equipment": ["exists"],
  "class_features": {
    "Favored Enemy" : "Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy commonly encountered in the wilds. Choose a type of favored enemy: beasts, fey, humanoids, monstrosities, or undead. You gain a +2 bonus to damage rolls with weapon attacks against creatures of the chosen type. Additionally, you have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them. When you gain this feature, you also learn one language of your choice, typically one spoken by your favored enemy or creatures associated with it. However, you are free to pick any language you wish to learn.",
    "Primeval Awareness" : "Beginning at 3rd level, your mastery of ranger lore allows you to establish a powerful link to beasts and to the land around you. You have an innate ability to communicate with beasts, and they recognize you as a kindred spirit. Through sounds and gestures, you can communicate simple ideas to a beast as an action, and can read its basic mood and intent. You learn its emotional state, whether it is affected by magic of any sort, its short-term needs (such as food or safety), and actions you can take (if any) to persuade it to not attack. You cannot use this ability against a creature that you have attacked within the past 10 minutes. Additionally, you can attune your senses to determine if any of your favored enemies lurk nearby. By spending 1 uninterrupted minute in concentration (as if you were concentrating on a spell), you can sense whether any of your favored enemies are present within 5 miles of you. This feature reveals which of your favored enemies are present, their numbers, and the creatures’ general direction and distance (in miles) from you. If there are multiple groups of your favored enemies within range, you learn this information for each group.",
    "Ability Score Improvement" : "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    "Greater Favored Enemy" : "At 6th level, you are ready to hunt even deadlier game. Choose a type of greater favored enemy: aberrations, celestials, constructs, dragons, elementals, fiends, or giants. You gain all the benefits against this chosen enemy that you normally gain against your favored enemy, including an additional language. Your bonus to damage rolls against all your favored enemies increases to +4. Additionally, you have advantage on saving throws against the spells and abilities used by a greater favored enemy.",
    "Fleet of Foot" : "Beginning at 8th level, you can use the Dash action as a bonus action on your turn.",
    "Hide In Plain Sight" : "Starting at 10th level, you can remain perfectly still for long periods of time to set up ambushes. When you attempt to hide on your turn, you can opt to not move on that turn. If you avoid moving, creatures that attempt to detect you take a −10 penalty to their Wisdom (Perception) checks until the start of your next turn. You lose this benefit if you move or fall prone, either voluntarily or because of some external effect. You are still automatically detected if any effect or action causes you to no longer be hidden. If you are still hidden on your next turn, you can continue to remain motionless and gain this benefit until you are detected.",
    "Vanish" : "Starting at 14th level, you can use the Hide action as a bonus action on your turn. Also, you can't be tracked by nonmagical means, unless you choose to leave a trail.",
    "Feral Senses" : "At 18th level, you gain preternatural senses that help you fight creatures you can't see. When you attack a creature you can't see, your inability to see it doesn't impose disadvantage on your attack rolls against it. You are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn't hidden from you and you aren't blinded or deafened.",
    "Foe Slayer" : "At 20th level, you become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied."
  }
}]