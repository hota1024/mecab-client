import { exec } from 'child_process'
import * as sq from 'shell-quote'
import { IMeCab } from '../interfaces'
import { Word } from '../types'

/**
 * MeCab class.
 */
export class MeCab implements IMeCab {
  readonly command: string = 'mecab'

  async parse(source: string): Promise<Word[]> {
    const output = await this.executeMeCabCommand(source)
    const result = this.parseMeCabOutput(output)

    return result
  }

  /**
   * `mecab` コマンドの解析結果の文字列を `Word[]` 型に変換して返します。
   *
   * @param output `mecab` コマンドの解析結果
   */
  protected parseMeCabOutput(output: string): Word[] {
    const lines = output.split('\n')
    const words: Word[] = []

    for (const line of lines) {
      const [surface, dataString] = line.split('\t')

      if (typeof dataString === 'undefined') {
        continue
      }

      const data = dataString.split(',')

      words.push({
        surface,
        lexical: data[0],
        compound1: data[1],
        compound2: data[2],
        compound3: data[3],
        conjugation: data[4],
        inflection: data[5],
        original: data[6],
        reading: data[7],
        pronunciation: data[8],
      })
    }

    return words
  }

  /**
   * 与えられた文字列を `mecab` コマンドで解析し、結果の文字列を返します。
   *
   * @param source `mecab` コマンドに渡す文字列
   * @returns 返り値のフォーマット： `表層形\t品詞,品詞細分類1,品詞細分類2,品詞細分類3,活用型,活用形,原形,読み,発音`
   */
  protected executeMeCabCommand(source: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const command = this.buildCommand(source)

      exec(command, (error, result) => {
        if (error) {
          reject(error)
          return
        }

        resolve(result)
      })
    })
  }

  /**
   * 与えられた文字列を `mecab` コマンドが解析するコマンドの文字列を返します。
   *
   * @param source `mecab` コマンドに渡す文字列
   */
  protected buildCommand(source: string): string {
    const echo = sq.quote(['echo', source])

    return `${echo} | ${this.command}`
  }
}
