/*
 * personaTable: dictionary where key is based on persona name
 * itemTable: dictionary where key is based on item name
 *
 * Some personas are doubled because of fusion alarm items.
 *
 * refs:
 *  in-game data (Persona 5 Royal)
 *  https://www.rpgsite.net/feature/13388-persona-5-royal-electric-chair-item-list-database-for-itemization-
*/

// persona: [arcana, item, item type, material, fusion alarm]
var personaTable = {
  "Arsene": ["Fool", "Arsene's Cane", "Melee Weapon", "Black Kogatama", "No"],
  "Arsene": ["Fool", "The Great Thief Stick", "Melee Weapon", "Black Kogatama", "Yes"],
  "Satanael": ["Fool", "Paradise Lost", "Melee Weapon", "Black Kogatama", "No"],
  "Satanael": ["Fool", "Paradise Lost R", "Melee Weapon", "Black Kogatama", "Yes"],
  "Metatron": ["Justice", "Nataraja", "Gun", "Model Gun", "No"],
  "Metatron": ["Justice", "Nataraja EX", "Gun", "Model Gun", "Yes"],
  "Lucifer": ["Star", "Tyrant Pistol", "Gun", "Model Gun", "No"],
  "Lucifer": ["Star", "Tyrant Pistol EX", "Gun", "Model Gun", "Yes"],
  "Jack-o'-Lantern": ["Magician", "Pumpkin Bomb", "Gun", "Model Gun", "No"],
  "Jack-o'-Lantern": ["Magician", "Pumpkin Buster", "Gun", "Model Gun", "Yes"],
  "Thor": ["Chariot", "Mjolnir", "Melee Weapon", "Black Kogatama", "No"],
  "Thor": ["Chariot", "Imprisoned Mjolnir", "Melee Weapon", "Black Kogatama", "Yes"],
  "Hanuman": ["Strength", "Ruyi Jingu Bang", "Melee Weapon", "Black Kogatama", "No"],
  "Hanuman": ["Strength", "Fine Ruyi Jingu Bang", "Melee Weapon", "Black Kogatama", "Yes"],
  "Shiva": ["Judgement", "Megido Fire", "Gun", "Model Gun", "No"],
  "Shiva": ["Judgement", "Megido Blaster", "Gun", "Model Gun", "Yes"],
  "Black Frost": ["Fool", "Naraka Whip", "Melee Weapon", "Black Kogatama", "No"],
  "Black Frost": ["Fool", "Dainaraka Whip", "Melee Weapon", "Black Kogatama", "Yes"],
  "Queen Mab": ["Magician", "Masquerade Ribbon", "Melee Weapon", "Black Kogatama", "No"],
  "Queen Mab": ["Magician", "Masquerade Ribbon R", "Melee Weapon", "Black Kogatama", "Yes"],
  "Skadi": ["Priestess", "Snow Queen's Whip", "Melee Weapon", "Black Kogatama", "No"],
  "Skadi": ["Priestess", "Snow Queen's Whip II", "Melee Weapon", "Black Kogatama", "Yes"],
  "Succubus": ["Moon", "Brain Shot", "Gun", "Model Gun", "No"],
  "Succubus": ["Moon", "Pink Buster", "Gun", "Model Gun", "Yes"],

}

// item: [persona, arcana, item type, material, fusion alarm]
