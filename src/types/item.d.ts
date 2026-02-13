import type { FullOptional } from "./utils";
import type { id_t, stats_t } from './general';

import type { item_buff_e, item_type_e } from './enums'

export type item_stat_t = FullOptional<stats_t> & { [key in item_buff_e]?: number };
export type computed_stats_t = stats_t & { [key in item_buff_e]?: number };

export interface IItem {
  _id: id_t,

  icon: string,
  name: string,
  color: string
  description: string,

  type: item_type_e,
  stats: item_stat_t,
};