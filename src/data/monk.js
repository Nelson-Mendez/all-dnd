const monkClass = {
  "name": "The Monk",
  "description": "Monks are united in their ability to magically harness the energy that flows in their bodies. Whether channeled as a striking display of combat prowess or a subtler focus of defensive ability and speed, this energy infuses all that a monk does.",
  "table" : [
    {
      "Level": "1st",
      "Proficiency": "2",
      "Features": "Unarmoured Defence, Martial Arts",
      "Martial Arts": "1d4",
      "Ki Points": "-",
      "Unarmoured Movement": "-"
    },
    {
      "Level": "2nd",
      "Proficiency": "2",
      "Features": "Ki, Unarmoured Movement",
      "Martial Arts": "1d4",
      "Ki Points": "2",
      "Unarmoured Movement": "+10ft"
    },
    {
      "Level": "3rd",
      "Proficiency": "2",
      "Features": "Monastic Tradition, Deflect Missiles",
      "Martial Arts": "1d4",
      "Ki Points": "3",
      "Unarmoured Movement": "+10ft"
    },
    {
      "Level": "4th",
      "Proficiency": "2",
      "Features": "Ability Score Improvement, Slow Fall",
      "Martial Arts": "1d4",
      "Ki Points": "4",
      "Unarmoured Movement": "+10ft"
    },
    {
      "Level": "5th",
      "Proficiency": "3",
      "Features": "Extra Attack, Stunning Strike",
      "Martial Arts": "1d6",
      "Ki Points": "5",
      "Unarmoured Movement": "+10ft"
    },
    {
      "Level": "6th",
      "Proficiency": "3",
      "Features": "Ki-Empowered Strikes, Monastic Tradition Feature",
      "Martial Arts": "1d6",
      "Ki Points": "6",
      "Unarmoured Movement": "+15ft"
    },
    {
      "Level": "7th",
      "Proficiency": "3",
      "Features": "Evasion, Stillness of Mind",
      "Martial Arts": "1d6",
      "Ki Points": "7",
      "Unarmoured Movement": "+15ft"
    },
    {
      "Level": "8th",
      "Proficiency": "3",
      "Features": "Ability Score Improvement",
      "Martial Arts": "1d6",
      "Ki Points": "8",
      "Unarmoured Movement": "+15ft"
    },
    {
      "Level": "9th",
      "Proficiency": "4",
      "Features": "Unarmoured Movement Improvement",
      "Martial Arts": "1d6",
      "Ki Points": "9",
      "Unarmoured Movement": "+15ft"
    },
    {
      "Level": "10th",
      "Proficiency": "4",
      "Features": "Purity of Body",
      "Martial Arts": "1d6",
      "Ki Points": "10",
      "Unarmoured Movement": "+20ft"
    },
    {
      "Level": "11th",
      "Proficiency": "4",
      "Features": "Monastic Tradition Feature",
      "Martial Arts": "1d8",
      "Ki Points": "11",
      "Unarmoured Movement": "+20ft"
    },
    {
      "Level": "12th",
      "Proficiency": "4",
      "Features": "Ability Score Improvement",
      "Martial Arts": "1d8",
      "Ki Points": "12",
      "Unarmoured Movement": "+20ft"
    },
    {
      "Level": "13th",
      "Proficiency": "5",
      "Features": "Tongue of the Sun and Moon",
      "Martial Arts": "1d8",
      "Ki Points": "13",
      "Unarmoured Movement": "+20ft"
    },
    {
      "Level": "14th",
      "Proficiency": "5",
      "Features": "Diamond Soul",
      "Martial Arts": "1d8",
      "Ki Points": "14",
      "Unarmoured Movement": "+25ft"
    },
    {
      "Level": "15th",
      "Proficiency": "5",
      "Features": "Timeless Body",
      "Martial Arts": "1d8",
      "Ki Points": "15",
      "Unarmoured Movement": "+25ft"
    },
    {
      "Level": "16th",
      "Proficiency": "5",
      "Features": "Ability Score Improvement",
      "Martial Arts": "1d8",
      "Ki Points": "16",
      "Unarmoured Movement": "+25ft"
    },
    {
      "Level": "17th",
      "Proficiency": "6",
      "Features": "Monastic Tradition Feature",
      "Martial Arts": "1d10",
      "Ki Points": "17",
      "Unarmoured Movement": "+25ft"
    },
    {
      "Level": "18th",
      "Proficiency": "6",
      "Features": "Empty Body",
      "Martial Arts": "1d10",
      "Ki Points": "18",
      "Unarmoured Movement": "+30ft"
    },
    {
      "Level": "19th",
      "Proficiency": "6",
      "Features": "Ability Score Improvement",
      "Martial Arts": "1d10",
      "Ki Points": "19",
      "Unarmoured Movement": "+30ft"
    },
    {
      "Level": "20th",
      "Proficiency": "6",
      "Features": "Perfect Self",
      "Martial Arts": "1d10",
      "Ki Points": "20",
      "Unarmoured Movement": "+30ft"
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
    "Unarmoured Defence": "Beginning at 1st level, while you are wearing no armour and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier",
    "Unarmoured Movement": "Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in the Monk table. At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move."    ,
    "Deflect Missiles": "Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level. If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with a range of 20/60 using the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack.",
    "Ability Score Irovement": "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    "Slow Fall": "Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level.",
    "Extra Attack": "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.",
    "Stunning Strike": "Starting at 5th level, you can interfere with the flow of ki in an opponent's body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn.",
    "Ki-Empowered Strikes": "Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.",
    "Evasion": "At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon's lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.",
    "Stillness of Mind": "Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened.",
    "Purity of Body": "At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison.",
    "Tongue of the Sun and Moon": "Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say.",
    "Diamond Soul": "Beginning at 14th level, your mastery of ki grants you proficiency in all saving throws. Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result.",
    "Timeless Body": "At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can't be aged magically. You can still die of old age, however. In addition, you no longer need food or water.",
    "Empty Body": "Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage. Additionally, you can spend 8 ki points to cast the Astral Projection spell, without needing material components. When you do so, you can't take any other creatures with you.",
    "Perfect Self": "At 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points."
  }
}

export { monkClass }