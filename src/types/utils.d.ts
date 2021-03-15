/**
 * Same as TypeScript's Pick, but will distribute the Pick over unions
 */
export type DistributivePick<T, K extends keyof T> = T extends unknown
  ? Pick<T, K>
  : never;

/**
 * Overwrite a type with properties from another type
 */
export type Overwrite<T, U extends Partial<T>> = Pick<
  T,
  Exclude<keyof T, keyof U>
> &
  U;

/**
 * Same as Overwrite, but will distribute the Overwrite over unions
 */
export type DistributiveOverwrite<T, K> = T extends unknown
  ? Overwrite<T, K>
  : never;

/**
 * Mark certain keys as prohibited
 */
export type NeverAllow<T, K extends keyof T> = {
  // eslint-disable-next-line no-unused-vars
  [P in K]?: never;
};

/**
 * Rename a specific property of a type to another name
 *
 * Usage: RenameProperty<{ a: string }, 'a', 'b'>
 * -> { b: string }
 */
export type RenameProperty<T, K extends keyof T, R extends PropertyKey> = {
  [P in keyof T as P extends K ? R : P]: T[P];
};
