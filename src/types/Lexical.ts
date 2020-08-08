// 動詞・形容詞・形容動詞・名詞・副詞・連体詞・接続詞・感動詞・助動詞・助詞

import { LiteralString } from '.'

/**
 * Lexical type.
 */
export type Lexical = LiteralString<
  | '動詞'
  | '形容詞'
  | '形容動詞'
  | '名詞'
  | '副詞'
  | '連体詞'
  | '接続詞'
  | '感動詞'
  | '助動詞'
  | '助詞'
>
