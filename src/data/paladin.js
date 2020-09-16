const paladinClass = {
  "name": "The Paladin",
  "description": "Whether sworn before a god's altar and the witness oif a priest, in a sacred glade before nature spirits and fey beings, or in a moment of desperation and grief with the dead as the only witness, a paladin's oath is a powerful bond.",
  "table" : [
    {
      "Level": "1st",
      "Proficiency": "2",
      "Features": "Divine Sense, Lay On Hands"
    },
    {
      "Level": "2nd",
      "Proficiency": "2",
      "Features": "Fighting Style, Spellcasting, Divine Smite"
    },
    {
      "Level": "3rd",
      "Proficiency": "2",
      "Features": "Divine Health, Sacred Oath"
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
      "Features": "Aura of Protection"
    },
    {
      "Level": "7th",
      "Proficiency": "3",
      "Features": "Sacred Oath Feature"
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
      "Features": "Aura of Courage"
    },
    {
      "Level": "11th",
      "Proficiency": "4",
      "Features": "Improve Divine Smite"
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
      "Features": "Cleansing Touch"
    },
    {
      "Level": "15th",
      "Proficiency": "5",
      "Features": "Sacred Oath Feature"
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
      "Features": "Aura Improvements"
    },
    {
      "Level": "19th",
      "Proficiency": "6",
      "Features": "Ability Score Improvement"
    },
    {
      "Level": "20th",
      "Proficiency": "6",
      "Features": "Sacred Oath Feature"
    } 
  ],
  "Hits": {
    "Dice": "1d10 per Paladin level",
    "First Level": "10 + Constitution Modifier",
    "Higher Levels": "1d10 (6) + Constitution modifier per Paladin level after 1st"
  },
  'Proficiencies': {
    'Armour': ['All Armour', 'Shields'],
    'Weapons': ['Simple Weapons', 'Martial Weapons'],
    'Tools': 'None',
    'Saving Throws': ['Wisdom', 'Charisma'],
    'Skills': 'Choose two from Athletics, Insight, Intimidation, Medicine, Persuasion, Religion'
  },
  "Equipment": ["exists"],
  "class_features": {
    "Divine Sense": "The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the Hallow spell. You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.",
    "Lay on Hands": "Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5. As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature. up to the maximum amount remaining in your pool. Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one. This feature has no effect on undead and constructs.",
    "Divine Smite": "Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon's damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend, to a maximum of 6d8.",
    "Divine Health": "By 3rd level, the divine magic flowing through you makes you immune to disease.",
    "Ability Score Improvement": "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    "Extra Attack": "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.",
    "Aura of Protection": "Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus. At 18th level, the range of this aura increases to 30 feet.",
    "Aura of Courage": "Starting at 10th level, you and friendly creatures within 10 feet of you can't be frightened while you are conscious. At 18th level, the range of this aura increases to 30 feet.",
    "Improved Divine Smite": "By 11th level, you are so suffused with righteous might that all your melee weapon strikes carry divine power with them. Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage.",
    "Cleansing Touch": "Beginning at 14th level, you can use your action to end one spell on yourself or on one willing creature that you touch. You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest.",
  }
}

export { bardClass }