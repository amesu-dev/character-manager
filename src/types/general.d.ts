import type { Types } from 'mongoose';

// Thanks jcalz from https://stackoverflow.com/a/53808212
type IfEquals<Check1_t, Check2_t, Yes_t, No_t> =
  (<G>() => G extends Check1_t ? 1 : 2) extends
  (<G>() => G extends Check2_t ? 1 : 2) ? Yes_t : No_t;

export type id_t = IfEquals<Types.ObjectId, any, string, Types.ObjectId>;

export type stats_t = {
  strength: number,
  dexterity: number,
  constitution: number,
  intelligence: number,
  wisdom: number,
  charisma: number
};