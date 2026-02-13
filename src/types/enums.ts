export enum item_buff_e {
  MAX_HEALTH = "max_health",
  MAX_MANA = "max_mana",
};

export enum item_type_e {
  ITEM = 'item',
  WEAPON = 'weapon',
  ARMOUR = 'armour',
  RING = 'ring'
};

export const item_resrtictions: { [key in item_type_e]: number } = {
  [item_type_e.ITEM]: 0,
  [item_type_e.WEAPON]: 1,
  [item_type_e.ARMOUR]: 1,
  [item_type_e.RING]: 10,
}

export enum skill_type_e {
  PASSIVE = "passive",
  SPELL = "spell",
  ABIILITY = "ability",
};
export enum skill_mana_type_e {
  NONE = "none",
  CLASSIC = "classic",

  FIRE = "fire",
  WATER = "water",
  EARTH = "earth",
  AIR = "air",

  DARKNESS = "darkness",
  LIGHT = "light",

  LIFE = "life",
}

// enum spell_type_e {
//   BEGIN = "begin",
//   POWER = "power",
//   FORM = "form",
//   MANA = "mana",
//   END = "end"
// }
// type construct_t = {
//   type: spell_type_e,
//   params: any,
// };