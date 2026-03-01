import type { locale_t } from './locale'

const locale: locale_t = {
  character: {
    hp: "HP",
    mp: "MP"
  },

  tab: {
    inventory: "Inventory",
    skills: "Skills",
    quests: "Quests",
  },

  stat: {
    strength: "Strength",
    dexterity: "Dexterity",
    wisdom: "Wisdom",
    intelligence: "Intelligence",
    charisma: "Charisma",
    constitution: "Constitution",
  },

  item: {
    label: "Inventory",
    no_items: "There are nothing",
    type: {
      weapon: "Weapon",
      item: "Item",
      armour: "Armour",
      ring: "Ring"
    },
    stat: {
      strength: "to Strength",
      dexterity: "to Dexterity",
      wisdom: "to Wisdom",
      intelligence: "to Intelligence",
      charisma: "to Charisma",
      constitution: "to Constitution",
      max_health: "Max HP",
      max_mana: "Max MP"
    }
  },

  skill: {
    label: "Skills",
    no_skills: "It seems you haven't any skills",
    type: {
      spell: "Spell",
      passive: "Passive",
      ability: "Abillity"
    },
    mana_type: {
      none: "Undefined",
      classic: "Classical",
      fire: "Fire",
      water: "Water",
      earth: "Earth",
      air: "Air",
      darkness: "Darkness",

      light: "Ligth",
      life: "Life",
    }
  }
}

export default locale;