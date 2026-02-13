import { skill_mana_type_e, skill_type_e } from '../types/enums'

export interface ISkill {
  name: string,
  type: skill_type_e,
  description: string,

  // mage_circle: number,
  // sequence: construct_t[],
  base_damage: number,
  penetration_rate: number,
  cooldown: number,

  mana_type: skill_mana_type_e,
  mana_cost: number,
};