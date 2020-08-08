declare const stringDummyField: unique symbol

/**
 * LiteralString type.
 */
export type LiteralString<T extends string> =
  | T
  | (string & { [stringDummyField]?: never })
