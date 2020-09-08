const backgroundList = [
  {
    Name: "Acolyte",
    Languages: "Any x2",
    Tools: "None",
    Skills: "Insight (WIS), Religion (INT)",
    Source: "Player's Handbook",
  },
  {
    Name: "Anthropologist",
    Languages: "Any x2",
    Tools: "None",
    Skills: "Insight (WIS), Religion (INT)",
    Source: "Tomb of Annihilation",
  },
  {
    Name: "Archaeologist",
    Languages: "Any x1",
    Tools: "Choose 1:\ncartographer's tools, navigator's tools",
    Skills: "History (INT), Survival (WIS)",
    Source: "Tomb of Annihilation",
  },
  {
    Name: "Black Fist Double Agent",
    Languages: "None",
    Tools: "Disguise kit, and choose 1: artisan's tools x1 , gaming set x1",
    Skills: "Deception (CHA), insight (WIS)",
    Source: "Curse of Strahd",
  },
  {
    Name: "Caravan Specialist",
    Languages: "Any x1",
    Tools: "Vehicles (land)",
    Skills: "Animal handling (WIS), survival (WIS)",
    Source: "Princes of the Apocalypse (AL)",
  },
  {
    Name: "Charlatan",
    Languages: "None",
    Tools: "Disguise kit, forgery kit",
    Skills: "Deception (CHA), sleight of hand (DEX)",
    Source: "Player's Handbook",
  },
  {
    Name: "City Watch",
    Languages: "Any x2",
    Tools: "None",
    Skills: "Athletics (STR), insight (WIS)",
    Source: "Sword Coast Adventurers Guide",
  },
  {
    Name: "Clan Crafter",
    Languages: "Any x1",
    Tools: "Artisan's tools x1",
    Skills: "History (INT), insight (WIS)",
    Source: "Sword Coast Adventurers Guide",
  },
  {
    Name: "Cloistered Scholar",
    Languages: "Any x2",
    Tools: "None",
    Skills:
      "History (INT), and choose 1: arcana (INT), nature (INT), religion (INT)",
    Source: "Sword Coast Adventurers Guide",
  },
  {
    Name: "Cormanthor Refugee",
    Languages: "Elvish",
    Tools: "Artisan's tools x1",
    Skills: "Nature (INT), survival (WIS)",
    Source: "Out of the Abyss (AL)",
  },
  {
    Name: "Courtier",
    Languages: "Any x2",
    Tools: "None",
    Skills: "Insight (WIS), persuasion (CHA)",
    Source: "Sword Coast Adventurers Guide",
  },
  {
    Name: "Criminal",
    Languages: "None",
    Tools: "Gaming set x1, thieves' tools",
    Skills: "Deception (CHA), stealth (DEX)",
    Source: "Player's Handbook",
  },
  {
    Name: "Dissenter",
    Languages: "Special (SPrinces of the Apocalypse page)",
    Tools: "Special (SPrinces of the Apocalypse page)",
    Skills: "Special (SPrinces of the Apocalypse page)",
    Source: "Plane Shift: Amonkhet",
  },
  {
    Name: "Dragon Casualty",
    Languages: "Draconic",
    Tools: "Special (SPrinces of the Apocalypse page)",
    Skills: "Intimidation (CHA), survival (WIS)",
    Source: "Curse of Strahd",
  },
  {
    Name: "Earthspur Miner",
    Languages: "Dwarvish, Undercommon",
    Tools: "None",
    Skills: "Athletics (STR), survival (WIS)",
    Source: "Princes of the Apocalypse (AL)",
  },
  {
    Name: "Entertainer",
    Languages: "None",
    Tools: "Disguise kit, musical instrument x1",
    Skills: "Acrobatics (DEX), performance (CHA)",
    Source: "Player's Handbook",
  },
  {
    Name: "Faction Agent",
    Languages: "Any x2",
    Tools: "None",
    Skills:
      "Insight (WIS), and choose 1: special (SPrinces of the Apocalypse page)",
    Source: "Sword Coast Adventurers Guide",
  },
  {
    Name: "Far Traveler",
    Languages: "Any x1",
    Tools: "Choose 1: musical instrument x1, gaming set x1",
    Skills: "Insight (WIS), perception (WIS)",
    Source: "Sword Coast Adventurers Guide",
  },
  {
    Name: "Folk Hero",
    Languages: "None",
    Tools: "Artisan's tools x1, vehicles (land)",
    Skills: "Animal handling (WIS), survival (WIS)",
    Source: "Player's Handbook",
  },
  {
    Name: "Gate Urchin",
    Languages: "None",
    Tools: "Musical instrument x1, thieves' tools",
    Skills: "Deception (CHA), sleight of hand (DEX)",
    Source: "Out of the Abyss (AL)",
  },
  {
    Name: "Gladiator",
    Languages: "None",
    Tools: "Disguise kit, unusual weapon x1",
    Skills: "Acrobatics (DEX), performance (CHA)",
    Source: "Player's Handbook",
  },
  {
    Name: "Guild Artisan",
    Languages: "Any x1",
    Tools: "Artisan's tools x1",
    Skills: "Insight (WIS), persuasion (CHA)",
    Source: "Player's Handbook",
  },
  {
    Name: "Guild Merchant",
    Languages: "Any x1",
    Tools: "Navigator's tools",
    Skills: "Insight (WIS), persuasion (CHA)",
    Source: "Player's Handbook",
  },
  {
    Name: "Harborfolk",
    Languages: "None",
    Tools: "Gaming set x1, vehicles (water)",
    Skills: "Athletics (STR), sleight of hand (DEX)",
    Source: "Princes of the Apocalypse (AL)",
  },
  {
    Name: "Haunted One",
    Languages: "Exotic x1",
    Tools: "None",
    Skills:
      "Choose 2: Arcana (INT), investigation (INT), religion (INT), survival (WIS)",
    Source: "Curse of Strahd",
  },
  {
    Name: "Hermit",
    Languages: "Any x1",
    Tools: "Herbalism kit",
    Skills: "Medicine (WIS), religion (INT)",
    Source: "Player's Handbook",
  },
  {
    Name: "Hillsfar Merchant",
    Languages: "None",
    Tools: "Vehicles (land), vehicles (water)",
    Skills: "Insight (WIS), persuasion (CHA)",
    Source: "Out of the Abyss (AL)",
  },
  {
    Name: "Hillsfar Smuggler",
    Languages: "Any x1",
    Tools: "Forgery kit",
    Skills: "Perception (WIS), stealth (DEX)",
    Source: "Out of the Abyss (AL)",
  },
  {
    Name: "House Agent",
    Languages: "None",
    Tools: "Special (SPrinces of the Apocalypse page)",
    Skills: "Investigation (INT), persuasion (CHA)",
    Source: "Wayfinder's Guide to Eberron",
  },
  {
    Name: "Inheritor",
    Languages: "None",
    Tools: "Gaming set x1, musical instrument x1",
    Skills:
      "Survival (WIS), and choose 1: arcana (INT), history (INT), religion (INT)",
    Source: "Sword Coast Adventurers Guide",
  },
  {
    Name: "Initiate",
    Languages: "None",
    Tools: "Gaming set x1, vehicles (land)",
    Skills: "Athletics (STR), intimidation (CHA)",
    Source: "Plane Shift: Amonkhet",
  },
  {
    Name: "Inquisitor",
    Languages: "None",
    Tools: "Artisan's tools x1, thieves' tools",
    Skills: "Investigation (INT), religion (INT)",
    Source: "Plane Shift: Innistrad",
  },
  {
    Name: "Investigator",
    Languages: "Any x2",
    Tools: "None",
    Skills: "Insight (WIS), investigation (INT)",
    Source: "Sword Coast Adventurers Guide",
  },
  {
    Name: "Iron Route Bandit",
    Languages: "None",
    Tools: "Gaming set x1, vehicles (land)",
    Skills: "Animal handling (WIS), stealth (DEX)",
    Source: "Curse of Strahd",
  },
  {
    Name: "Knight",
    Languages: "Any x1",
    Tools: "Gaming set x1",
    Skills: "History (INT), persuasion (CHA)",
    Source: "Player's Handbook",
  },
  {
    Name: "Knight of the Order",
    Languages: "Any x1",
    Tools: "Choose 1: gaming set x1, musical instrument x1",
    Skills:
      "Persuasion (CHA), and choose 1: special (SPrinces of the Apocalypse page)",
    Source: "Sword Coast Adventurers Guide",
  },
  {
    Name: "Mercenary Veteran",
    Languages: "None",
    Tools: "Gaming set x1, vehicles (land)",
    Skills: "Athletics (STR), persuasion (CHA)",
    Source: "Sword Coast Adventurers Guide",
  },
  {
    Name: "Mulmaster Aristocrat",
    Languages: "None",
    Tools: "Artisan's tools x1, musical instrument x1",
    Skills: "Deception (CHA), performance (CHA)",
    Source: "Princes of the Apocalypse (AL)",
  },
  {
    Name: "Noble",
    Languages: "Any x1",
    Tools: "Gaming set x1",
    Skills: "History (INT), persuasion (CHA)",
    Source: "Player's Handbook",
  },
  {
    Name: "Outlander",
    Languages: "Any x1",
    Tools: "Musical instrument x1",
    Skills: "Athletics (STR), survival (WIS)",
    Source: "Player's Handbook",
  },
  {
    Name: "Phlan Insurgent",
    Languages: "None",
    Tools: "Artisan's tools x1, vehicles (land)",
    Skills: "Stealth (DEX), survival (WIS)",
    Source: "Curse of Strahd",
  },
  {
    Name: "Phlan RefugPrinces of the Apocalypse",
    Languages: "Any x1",
    Tools: "Artisan's tools x1",
    Skills: "Athletics (STR), insight (WIS)",
    Source: "Princes of the Apocalypse (AL)",
  },
  {
    Name: "Pirate",
    Languages: "None",
    Tools: "Navigator's tools, vehicles (water)",
    Skills: "Athletics (STR), perception (WIS)",
    Source: "Player's Handbook",
  },
  {
    Name: "Sage",
    Languages: "Any x2",
    Tools: "None",
    Skills: "Arcana (INT), history (INT)",
    Source: "Player's Handbook",
  },
  {
    Name: "Sailor",
    Languages: "None",
    Tools: "Navigator's tools, vehicles (water)",
    Skills: "Athletics (STR), perception (WIS)",
    Source: "Player's Handbook",
  },
  {
    Name: "Secret Identity",
    Languages: "None",
    Tools: "Disguise kit, forgery kit",
    Skills: "Deception (CHA), stealth (DEX)",
    Source: "Out of the Abyss (AL)",
  },
  {
    Name: "Shade Fanatic",
    Languages: "Netherese",
    Tools: "Forgery kit",
    Skills: "Deception (CHA), intimidation (CHA)",
    Source: "Out of the Abyss (AL)",
  },
  {
    Name: "Soldier",
    Languages: "None",
    Tools: "Gaming set x1, vehicles (land)",
    Skills: "Athletics (STR), intimidation (CHA)",
    Source: "Player's Handbook",
  },
  {
    Name: "Spy",
    Languages: "None",
    Tools: "Gaming set x1, thieves' tools",
    Skills: "Deception (CHA), stealth (DEX)",
    Source: "Player's Handbook",
  },
  {
    Name: "Stojanow Prisoner",
    Languages: "None",
    Tools: "Gaming set x1, thieves' tools",
    Skills: "Deception (CHA), perception (WIS)",
    Source: "Curse of Strahd",
  },
  {
    Name: "Ticklebelly Nomad",
    Languages: "Giant",
    Tools: "Herbalism kit",
    Skills: "Animal handling (WIS), nature (INT)",
    Source: "Curse of Strahd",
  },
  {
    Name: "Trade Sheriff",
    Languages: "Elvish",
    Tools: "Thieves' tools",
    Skills: "Investigation (INT), persuasion (CHA)",
    Source: "Out of the Abyss (AL)",
  },
  {
    Name: "Urban Bounty Hunter",
    Languages: "None",
    Tools: "Choose 2: gaming set x1,musical instrument x1 , thieves' tools",
    Skills:
      "Choose 2: deception (CHA), insight (WIS), persuasion (CHA), stealth (DEX)",
    Source: "Sword Coast Adventurers Guide",
  },
  {
    Name: "Urchin",
    Languages: "None",
    Tools: "Disguise kit, thieves' tools",
    Skills: "Sleight of hand (DEX), stealth (DEX)",
    Source: "Player's Handbook",
  },
  {
    Name: "Uthgardt Tribe Member",
    Languages: "Any x1",
    Tools: "Choose 1: artisan's tools x1, musical instrument x1",
    Skills: "Athletics (STR), survival (WIS)",
    Source: "Sword Coast Adventurers Guide",
  },
  {
    Name: "Vizier",
    Languages: "None",
    Tools: "Artisan's tools x1, musical instrument x1",
    Skills: "History (INT), religion (INT)",
    Source: "Plane Shift: Amonkhet",
  },
  {
    Name: "Waterdhavian Noble",
    Languages: "Any x1",
    Tools: "Choose 1: gaming set x1, musical instrument x1",
    Skills: "History (INT), persuasion (CHA)",
    Source: "Sword Coast Adventurers Guide",
  },
];

export { backgroundList };

