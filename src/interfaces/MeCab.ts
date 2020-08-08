import { ParseResult } from '../types'

/**
 * MeCab interface.
 */
export interface IMeCab {
  /**
   * 与えられた文字列を解析し、結果を返します。
   *
   * @param source 解析する文字列
   */
  parse(source: string): ParseResult
}
