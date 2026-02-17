import type { stats_t } from "../types/general"
import type { item_stat_t } from "../types/item";
import type { item_type_e, skill_type_e, skill_mana_type_e } from "../types/enums";

export type locale_t = {
  character: {
    hp: string,
    mp: string,
  },

  stat: { [key in keyof stats_t]: string },

  item: {
    label: string,
    no_items: string,
    type: { [key in item_type_e]: string },
    stat: { [key in keyof item_stat_t]-?: string }
  },

  skill: {
    label: string,
    no_skills: string,
    type: { [key in skill_type_e]: string },
    mana_type: { [key in skill_mana_type_e]: string },
  }
}