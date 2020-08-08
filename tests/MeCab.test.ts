import { MeCab } from '../src/classes/MeCab'

describe('MeCab class test.', () => {
  test('should parse', async (done) => {
    const mecab = new MeCab()
    const source = 'これはねこさんです。'

    const result = await mecab.parse(source)

    expect(result).toMatchObject([
      {
        surface: 'これ',
        lexical: '名詞',
        compound1: '代名詞',
        compound2: '一般',
        compound3: '*',
        conjugation: '*',
        inflection: '*',
        original: 'これ',
        reading: 'コレ',
        pronunciation: 'コレ',
      },
      {
        surface: 'は',
        lexical: '助詞',
        compound1: '係助詞',
        compound2: '*',
        compound3: '*',
        conjugation: '*',
        inflection: '*',
        original: 'は',
        reading: 'ハ',
        pronunciation: 'ワ',
      },
      {
        surface: 'ねこ',
        lexical: '名詞',
        compound1: '一般',
        compound2: '*',
        compound3: '*',
        conjugation: '*',
        inflection: '*',
        original: 'ねこ',
        reading: 'ネコ',
        pronunciation: 'ネコ',
      },
      {
        surface: 'さん',
        lexical: '名詞',
        compound1: '接尾',
        compound2: '人名',
        compound3: '*',
        conjugation: '*',
        inflection: '*',
        original: 'さん',
        reading: 'サン',
        pronunciation: 'サン',
      },
      {
        surface: 'です',
        lexical: '助動詞',
        compound1: '*',
        compound2: '*',
        compound3: '*',
        conjugation: '特殊・デス',
        inflection: '基本形',
        original: 'です',
        reading: 'デス',
        pronunciation: 'デス',
      },
      {
        surface: '。',
        lexical: '記号',
        compound1: '句点',
        compound2: '*',
        compound3: '*',
        conjugation: '*',
        inflection: '*',
        original: '。',
        reading: '。',
        pronunciation: '。',
      },
    ])

    done()
  })
})
