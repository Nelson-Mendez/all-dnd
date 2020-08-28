const classes = {
    'name': 'The Barbarian',
    'table': [
      {
        'level': '1st',
        'proficiency': 2,
        'features': 'Rage, Unarmored Defence',
        'rages': 2,
        'damage': 2
      },
      {
        'level': '2nd',
        'proficiency': 2,
        'features': 'Reckless Attack, Danger Sense',
        'rages': 2,
        'damage': 2
      },
      {
        'level': '3rd',
        'proficiency': 2,
        'features': 'Primal Path',
        'rages': 3,
        'damage': 2
      },
      {
        'level': '4th',
        'proficiency': 2,
        'features': 'Ability Score Improvement',
        'rages': 3,
        'damage': 2
      },
      {
        'level': '5th',
        'proficiency': 3,
        'features': 'Extra Attack, Fast Movement',
        'rages': 3,
        'damage': 2
      },
      {
        'level': '6th',
        'proficiency': 3,
        'features': 'Path Feature',
        'rages': 4,
        'damage': 2
      },
      {
        'level': '7th',
        'proficiency': 3,
        'features': 'Feral Instinct',
        'rages': 4,
        'damage': 2
      },
      {
        'level': '8th',
        'proficiency': 3,
        'features': 'Ability Score Improvement',
        'rages': 4,
        'damage': 2
      },
      {
        'level': '9th',
        'proficiency': 4,
        'features': 'Brutal Critical 1',
        'rages': 4,
        'damage': 3
      },
      {
        'level': '10th',
        'proficiency': 4,
        'features': 'Path Feature',
        'rages': 4,
        'damage': 3
      },
      {
        'level': '11th',
        'proficiency': 4,
        'features': 'Relentless Rage',
        'rages': 4,
        'damage': 3
      },
      {
        'level': '12th',
        'proficiency': 4,
        'features': 'Ability Score Improvement',
        'rages': 5,
        'damage': 3
      },
      {
        'level': '13th',
        'proficiency': 5,
        'features': 'Brutal Critical 2',
        'rages': 5,
        'damage': 3
      },
      {
        'level': '14th',
        'proficiency': 5,
        'features': 'Path Feature',
        'rages': 5,
        'damage': 3
      },
      {
        'level': '15th',
        'proficiency': 5,
        'features': 'Persistent Rage',
        'rages': 5,
        'damage': 3
      },
      {
        'level': '16th',
        'proficiency': 5,
        'features': 'Ability Score Improvement',
        'rages': 5,
        'damage': 4
      },
      {
        'level': '17th',
        'proficiency': 6,
        'features': 'Brutal Critical 3',
        'rages': 6,
        'damage': 4
      },
      {
        'level': '18th',
        'proficiency': 6,
        'features': 'Indomitable Might',
        'rages': 6,
        'damage': 4
      },
      {
        'level': '19th',
        'proficiency': 6,
        'features': 'Ability Score Improvement',
        'rages': 6,
        'damage': 4
      },
      {
        'level': '20th',
        'proficiency': 6,
        'features': 'Primal Champion',
        'rages': 'Unlimited',
        'damage': 4
      }
    ],
    'Class Features': {
      
    },
    'Hits': {
      'Dice': '1d12 per Barbarian level',
      'First Level': '12 + Constituion Modifier',
      'Higher Levels': '1d12 (7) + Constitution Modifier per Barbarian level after 1st'
    },
    'Proficiencies': {
      'Armour': ['Light Armour', 'Medium Armour', 'Shields'],
      'Weapons': ['Simple Weapons', 'Martial Weapons'],
      'Tools': 'None',
      'Saving Throws': ['Strength', 'Constitution'],
      'Skills': 'Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, Survival'
    },
    'Equipment': 'flweagfhkewvfhdjsagflie',
    'Rage': {
      'Description': "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, you gain the following benefits if you aren't wearing heacy armour",
      'Benefits': ["You have advantage on both Strength Checks and Strength Saving Throws", "When you make a melee weapon attack using Strength, you gain a bonus to the Damage Roll that increases as you gain levels as a Barbarian, as shown in the Rage Damage column of the Barbarian table", "You have resistance to Bludgeoning, Piercing, and Slashing damage"],
      'info': ["If you are able to cast spells, you can't cast them, or concentrate on them while raging.", "Your rage lasts for 1 minute. It ends early if you are knocked unconscious, or if your turn ends and either: you haven't attacked a hostile creature since your last turn, or you haven't taken damage since your last turn. You may also end your rage on your turn as a bonus action", "Once you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again."]
    },
    'Unarmoured Defence': "While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.",
    'Reckless Attack': "Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.",
    'Danger Sense': "At 2nd level, you gain an uncanny sense of when things nearby aren’t as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can’t be blinded, deafened, or incapacitated.",
    'Primal Path': "At 3rd level, you choose a path that shapes the nature of your rage. The Path of the Berserker is detailed at the end of the class description, and additional primal paths are available in other sources. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels.",
    'Ability Score Improvement': "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature. Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.",
    'Extra Attack': "Beggining at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.",
    'Fast Movement': "Starting at 5th level, your speed increases by 10 feet while you aren't wearing heavy armour.",
    'Feral Instinct': "At 7th level, a Barbarians instincts are so honed, that you have advantage on Initiative Rolls. Additionally, if you are surprised at the beginning of combat, and aren't incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn.",
    'Brutal Critical': "Beggining at the 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level, and three additional dice at 17th level",
    'Relentless Rage': "Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you’re raging and don’t die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead. Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10.",
    'Persistent Rage': "Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it.",
    'Indomitable Might': "Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total.",
    'Primal Champion': "At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24",
    'Subclasses': {
      'Path of the Berserker': {
        'description': "For some Barbarians, rage is a means to an end - that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker's rage, you thrill in the chaos of battle, heedless of your own health or well-being.",
        'features': {
          'frenzy': "Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion.",
          'mindless rage': "Beginning at 6th level, you can’t be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage.",
          'presence': "Beggining at 10th level, you can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom Saving Throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you. If the creature succeeds on its saving throw, you can't use this feature on that creature again for 24 hours.",
          'retaliation': "Starting at 14th level, when you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon attack against that creature."
        }
      },
      'Path of the Totem WArrior': {
        'description': "The Path of the Totem Warrior is a spiritual journey, as the barbarian accepts a spirit animal as guide, protector, and inspiration. In battle, your totem spirit fills you with supernatural might, adding magical fuel to your barbarian rage. Most barbarian tribes consider a totem animal to be kin to a particular clan. In such cases, it is unusual for an individual to have more than one totem animal spirit, though exceptions exist."},
        'features': {
          "Spirit Seeker": "Yours is a path that seeks attunement with the natural world, giving you a kinship with beasts. At 3rd level when you adopt this path, you gain the ability to cast the Beast Sense and Speak with Animals spells, but only as rituals.",
          
        }
      }

}


export {classes};