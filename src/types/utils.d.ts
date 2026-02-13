export type FullOptional<Type> = {
  [key in keyof Type]?: Type[key];
};