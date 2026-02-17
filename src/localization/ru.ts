import type { locale_t } from './locale'

const locale: locale_t = {
  character: {
    hp: "ХП",
    mp: "МП"
  },

  stat: {
    strength: "Сила",
    dexterity: "Телосложение",
    wisdom: "Мудрость",
    intelligence: "Интеллект",
    charisma: "Харизма",
    constitution: "Восприятие",
  },

  item: {
    label: "Инвентарь",
    no_items: "Здесь нет предметов",
    type: {
      weapon: "Оружие",
      item: "Предмет",
      armour: "Броня",
      ring: "Кольцо"
    },
    stat: {
      strength: "к Силе",
      dexterity: "к Телосложению",
      wisdom: "к Мудрости",
      intelligence: "к Интеллекту",
      charisma: "к Харизме",
      constitution: "к Восприятию",
      max_health: "к макс. ХП",
      max_mana: "к макс. МП"
    }
  },

  skill: {
    label: "Способности",
    no_skills: "У Вас нет никаких способностей",
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