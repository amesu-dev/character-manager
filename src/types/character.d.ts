import { Types } from 'mongoose';
import type { id_t, stats_t } from './general';
import type { computed_stats_t } from './item';



export type item_entry_t = {
  id: id_t,
  amount: number
};

export interface ISkillEntry {
  id: id_t,
  level: number,
  exp: number
};
export interface ICharacter {
  _id: id_t,
  name: string,
  avatar: string,

  health: number,
  mana: number,

  max_health: number,
  max_mana: number,

  base_stats: stats_t,

  inventory: item_entry_t[],
  skills: ISkillEntry[],

  weared_items: item_entry_t[],
};

export interface ICharacterMethods {
  use_skill(skill_id: id_t, exp_gained: number): void;
  set_health(amount: number): number;
  set_mana(amount: number): number;

  async compute_stats(): Promise<computed_stats_t>;
}