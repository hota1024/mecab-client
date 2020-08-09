![mecab-client](https://user-images.githubusercontent.com/24543982/89710195-b959c000-d9bb-11ea-9c7b-8517d2af1406.png)

<h2 align="center">mecab-client</h2>
<p align="center"><a href="https://taku910.github.io/mecab/" about="_blank">MeCab</a> client library written in TypeScript</p>
<div align="center"></div>

## 🚀 Installation

```bash
npm install mecab-client
# or
yarn add mecab-client
```

## 🔧 Usage

```ts
import { MeCab } from 'mecab-client'

const main = async () => {
  const mecab = new MeCab()

  const result = await mecab.parse("すもももももももものうち")
  console.log(result)
}

main()
```

## 💡 API

## `MeCab#parse(source: string): Word[]`

- 与えられた文字列を解析し `Word[]` を返します。

## `Word` type

```ts
/**
 * Word type.
 */
export type Word = {
  /**
   * 表層系
   */
  surface: string

  /**
   * 品詞
   */
  lexical: Lexical

  /**
   * 品詞細分類1
   */
  compound1: string

  /**
   * 品詞細分類2
   */
  compound2: string

  /**
   * 品詞細分類3
   */
  compound3: string

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
```
