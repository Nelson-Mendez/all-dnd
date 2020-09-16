const clericClass = {
  "name": "The Cleric",
  "description": "Clerics are intermediaries between the mortal world and the distant planes of the gfods. As varied as the gods they serve, clerics strive to embody the handiwork of their deities. No ordinary priest, a cleric is imbued with divine magic.",
  "table" : [
    {
      "Level": "1st",
      "Proficiency": "2",
      "Features": "Spellcasting, Divine Domain"
    },
    {
      "Level": "2nd",
      "Proficiency": "2",
      "Features": "Channel Divinity, Divine Domain Feature"
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
      "Features": "Destroy Undead (CR 1/2)"
    },
    {
      "Level": "6th",
      "Proficiency": "3",
      "Features": "Channel Divinity 2, Divine Domain Feature"
    },
    {
      "Level": "7th",
      "Proficiency": "3",
      "Features": ""
    },
    {
      "Level": "8th",
      "Proficiency": "3",
      "Features": "Ability Score Improvement, Destroy Undead (CR 1), Divine Domain Feature"
    },
    {
      "Level": "9th",
      "Proficiency": "4",
      "Features": ""
    },
    {
      "Level": "10th",
      "Proficiency": "4",
      "Features": "Divine Intervention"
    },
    {
      "Level": "11th",
      "Proficiency": "4",
      "Features": "Destroy Undead (CR 2)"
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
      "Features": "Destroy Undead (CR 3)"
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
      "Features": "Destroy Undead (CR 4), Divine Domain Feature"
    },
    {
      "Level": "18th",
      "Proficiency": "6",
      "Features": "Channel Divinity 3"
    },
    {
      "Level": "19th",
      "Proficiency": "6",
      "Features": "Ability Score Improvement"
    },
    {
      "Level": "20th",
      "Proficiency": "6",
      "Features": "Divine Intervention Improvement"
    } 
  ],
  "Hits": {
    "Dice": "1d8 per Cleric level",
    "First Level": "8 + Constitution Modifier",
    "Higher Levels": "1d8 (5) + Constitution modifier per Cleric level after 1st"
  },
  'Proficiencies': {
    'Armour': ['Light Armour', 'Medium Armour', 'Shields'],
    'Weapons': ['Simple Weapons'],
    'Tools': 'None',
    'Saving Throws': ['Wisdom', 'Charisma'],
    'Skills': 'Choose two from History, Insight, Medicine, Persuasion, Religion'
  },
  "Equipment": ["exists"],
  "class_features": {
    "Channel Divinity" : "At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description. When you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again. Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC. Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses.",
    "Turn Undead": "As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage. A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.",
    "Ability Score Improvement" : "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    "Divine Intervention" : "Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great. Imploring your deity's aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The DM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate. If your deity intervenes, you can't use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest. At 20th level, your call for intervention succeeds automatically, no roll required."
  }
}

export { clericClass }