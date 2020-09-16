const rogueClass = {
  "name": "The Rogue",
  "description": "Rogues rely on skill, stealth, and their foes' culnerabilities to get the upper hand in any situation. They have a knack for finding the solution to just about any problem, demonstrating a retsourcefullness and versatility that is the cornerstone of any successful adventuring party",
  "table" : [
    {
      "Level": "1st",
      "Proficiency": "2",
      "Features": "Expertise, Sneak Attack, Thieves' Cant",
      "Sneak Attack" :"1d6"
    },
    {
      "Level": "2nd",
      "Proficiency": "2",
      "Features": "Cunning Action",
      "Sneak Attack" :"1d6"
    },
    {
      "Level": "3rd",
      "Proficiency": "2",
      "Features": "Roguish Archetype",
      "Sneak Attack" :"2d6"
    },
    {
      "Level": "4th",
      "Proficiency": "2",
      "Features": "Ability Score Improvement",
      "Sneak Attack" :"2d6"
    },
    {
      "Level": "5th",
      "Proficiency": "3",
      "Features": "Uncanny Dodge",
      "Sneak Attack" :"3d6"
    },
    {
      "Level": "6th",
      "Proficiency": "3",
      "Features": "Expertise",
      "Sneak Attack" :"3d6"
    },
    {
      "Level": "7th",
      "Proficiency": "3",
      "Features": "Evasion",
      "Sneak Attack" :"4d6"
    },
    {
      "Level": "8th",
      "Proficiency": "3",
      "Features": "Ability Score Improvement",
      "Sneak Attack" :"4d6"
    },
    {
      "Level": "9th",
      "Proficiency": "4",
      "Features": "Roguish Archetype Feature",
      "Sneak Attack" :"5d6"
    },
    {
      "Level": "10th",
      "Proficiency": "4",
      "Features": "Ability Score Improvement",
      "Sneak Attack" :"5d6"
    },
    {
      "Level": "11th",
      "Proficiency": "4",
      "Features": "Reliable Talent",
      "Sneak Attack" :"6d6"
    },
    {
      "Level": "12th",
      "Proficiency": "4",
      "Features": "Ability Score Improvement",
      "Sneak Attack" :"6d6"
    },
    {
      "Level": "13th",
      "Proficiency": "5",
      "Features": "Roguish Archetype Improvement",
      "Sneak Attack" :"7d6"
    },
    {
      "Level": "14th",
      "Proficiency": "5",
      "Features": "Blindsense",
      "Sneak Attack" :"7d6"
    },
    {
      "Level": "15th",
      "Proficiency": "5",
      "Features": "Slippery Mind",
      "Sneak Attack" :"8d6"
    },
    {
      "Level": "16th",
      "Proficiency": "5",
      "Features": "Ability Score Improvement",
      "Sneak Attack" :"8d6"
    },
    {
      "Level": "17th",
      "Proficiency": "6",
      "Features": "Roguish Archetype Feature",
      "Sneak Attack" :"9d6"
    },
    {
      "Level": "18th",
      "Proficiency": "6",
      "Features": "Elusive",
      "Sneak Attack" :"9d6"
    },
    {
      "Level": "19th",
      "Proficiency": "6",
      "Features": "Ability Score Improvement",
      "Sneak Attack" :"10d6"
    },
    {
      "Level": "20th",
      "Proficiency": "6",
      "Features": "Stroke of Luck",
      "Sneak Attack" :"10d6"
    } 
  ],
  "Hits": {
    "Dice": "1d8 per Rogue level",
    "First Level": "8 + Constitution Modifier",
    "Higher Levels": "1d8 (5) + Constitution modifier per Rogue level after 1st"
  },
  'Proficiencies': {
    'Armour': ['Light Armour'],
    'Weapons': ['Simple Weapons', 'Hand Crossbows', 'Longswords', 'Rapiers', 'Shortswords'],
    'Tools': "Thieves' Tools",
    'Saving Throws': ['Dexterity', 'Intelligence'],
    'Skills': 'Choose four from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, Stealth'
  },
  "Equipment": ["exists"],
  "class_features": {
    "Expertise": "At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies. At 6th level, you can choose two more of your proficiencies (in skills or with thieves' tools) to gain this benefit.",
    "Sneak Attack": "Beginning at 1st level, you know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon. You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll. The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table.",
    "Thieves' Cant": "During your rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves' cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly. In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves' guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.",
    "Cunning Action": "Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action.",
    "Ability Score Improvement": "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    "Uncanny Dodge": "Starting at 5th level, when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you.",
    "Evasion": "Beginning at 7th level, you can nimbly dodge out of the way of certain area effects, such as a red dragon's fiery breath or an Ice Storm spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.",
    "Reliable Talent": "By 11th level, you have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10.",
    "Blindsense": "Starting at 14th level, if you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you.",
    "Slippery Mind": "By 15th level, you have acquired greater mental strength. You gain proficiency in Wisdom saving throws.",
    "Elusive": "Beginning at 18th level, you are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren't incapacitated.",
    "Stroke of Luck": "At 20th level, you have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20. Once you use this feature, you can't use it again until you finish a short or long rest."
  }
}

export { rogueClass }