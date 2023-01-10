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
  "Ame-no-Uzume": ["Lovers", "Senryou Yakusha", "Melee Weapon", "Black Kogatama", "No"],
  "Ame-no-Uzume": ["Lovers", "Senryou Yakusha R", "Melee Weapon", "Black Kogatama", "Yes"],
  "Yoshitsune": ["Lovers", "Usumidori", "Melee Weapon", "Black Kogatama", "No"],
  "Yoshitsune": ["Lovers", "Usumidori R", "Melee Weapon", "Black Kogatama", "Yes"],
  "Uriel": ["Justice", "Heaven's Gate", "Gun", "Model Gun", "No"],
  "Uriel": ["Justice", "Providence", "Gun", "Model Gun", "Yes"],
  "Vasuki": ["Star", "K. Gohou", "Gun", "Model Gun", "No"],
  "Vasuki": ["Star", "K. Gohou R", "Gun", "Model Gun", "Yes"],
  "Bugs": ["Fool", "Bear Gloves", "Melee Weapon", "Black Kogatama", "No"],
  "Bugs": ["Fool", "Big Bear Gloves", "Melee Weapon", "Black Kogatama", "Yes"],
  "Cybele": ["Priestess", "Sabazios", "Melee Weapon", "Black Kogatama", "No"],
  "Cybele": ["Priestess", "Gordios", "Melee Weapon", "Black Kogatama", "Yes"],
  "Asura": ["Sun", "Vajra", "Melee Weapon", "Black Kogatama", "No"],
  "Asura": ["Sun", "Vajra", "Melee Weapon", "Black Kogatama", "Yes"],
  "Yurlungur": ["Sun", "Mirrirmina", "Gun", "Model Gun", "No"],
  "Yurlungur": ["Sun", "Mirrirmina EX", "Gun", "Model Gun", "Yes"],
  "Michael": ["Judgement", "Judge of Hell", "Gun", "Model Gun", "No"],
  "Michael": ["Judgement", "Judge End", "Gun", "Model Gun", "Yes"],
  "Vishnu": ["Fool", "Sudarshana", "Melee Weapon", "Black Kogatama", "No"],
  "Vishnu": ["Fool", "Sudarshana EX", "Melee Weapon", "Black Kogatama", "Yes"],
  "Mother Harlot": ["Empress", "Claiomh Solais", "Melee Weapon", "Black Kogatama", "No"],
  "Mother Harlot": ["Empress", "Claiomh Solais R", "Melee Weapon", "Black Kogatama", "Yes"],
  "Pisaca": ["Death", "Headhunter Ladle", "Melee Weapon", "Black Kogatama", "No"],
  "Pisaca": ["Death", "Headhunter Ladle EX", "Melee Weapon", "Black Kogatama", "Yes"],
  "Neko Shogun": ["Star", "Catnap", "Gun", "Model Gun", "No"],
  "Neko Shogun": ["Star", "Cat Buster", "Gun", "Model Gun", "Yes"],
  "Mitra": ["Temperance", "Death Contact", "Melee Weapon", "Black Kogatama", "No"],
  "Mitra": ["Temperance", "Death Practice", "Melee Weapon", "Black Kogatama", "Yes"],
  "Beelzebub": ["Devil", "Fleurs Du Mal", "Melee Weapon", "Black Kogatama", "No"],
  "Beelzebub": ["Devil", "Fleurs Du Mal R", "Melee Weapon", "Black Kogatama", "Yes"],
  "Nekomata": ["Magician", "Pawzookia", "Gun", "Model Gun", "No"],
  "Nekomata": ["Magician", "Paw-omber", "Gun", "Model Gun", "Yes"],
  "Baal": ["Emperor", "Yagrush", "Gun", "Model Gun", "No"],
  "Baal": ["Emperor", "Yabrush EX", "Gun", "Model Gun", "Yes"],
  "Futsunushi": ["Magician", "Hinokagutsuchi", "Melee Weapon", "Black Kogatama", "No"],
  "Futsunushi": ["Magician", "Hinokagutsuchi II", "Melee Weapon", "Black Kogatama", "Yes"],
  "Vohu Manah": ["Councillor", "Doomsday", "Gun", "Model Gun", "No"],
  "Vohu Manah": ["Councillor", "Ancient Day", "Gun", "Model Gun", "Yes"],
  "Ardha": ["Temperance", "Sahasrara", "Gun", "Model Gun", "No"],
  "Ardha": ["Temperance", "Sahasrara EX", "Gun", "Model Gun", "Yes"],
  "Sandalphon": ["Moon", "Sword of Sinai", "Melee Weapon", "Black Kogatama", "No"],
  "Sandalphon": ["Moonn", "Sword of Sinai", "Melee Weapon", "Black Kogatama", "Yes"],

}

// item: [persona, arcana, item type, material, fusion alarm]
