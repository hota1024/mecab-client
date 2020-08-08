/**
 * ParseResult type.
 */
export type ParseResult = {
  /**
   * 表層系
   */
  surface: string

  /**
   * 品詞
   */
  lexical: string

  /**
   * 品詞細分類1
   */
  compound1?: string

  /**
   * 品詞細分類2
   */
  compound2?: string

  /**
   * 品詞細分類3
   */
  compound3?: string

  /**
   * 活用型
   */
  conjugation: string

  /**
   * 活用形
   */
  inflection: string

  /**
   * 原型
   */
  original: string

  /**
   * 読み
   */
  reading: string

  /**
   * 発音
   */
  pronunciation?: string
}
