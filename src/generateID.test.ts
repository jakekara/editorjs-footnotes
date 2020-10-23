const { generateID } = require('./generateID')

it('generates a string', () => {
  expect(typeof generateID()).toBe('string')
})

it('default length = 10 + 3', () => {
  expect(generateID().length).toEqual(13)
})

it('can get custom length string', () => {
  expect(generateID({ length: 5 }).length).toBe(3 + 5)
})

it('can use custom prefix', () => {
  const id: string = generateID({
    prefix: 'footnote-',
  })

  expect(id.startsWith('footnote-')).toBe(true)
  expect(id.length).toBe(10 + 'footnote-'.length)
})

it('can use empty prefix', () => {
  const id: string = generateID({
    prefix: '',
    length: 22,
  })

  expect(id.length).toBe(22)
})

it('can use custom prefix and length', () => {
  const prefix = 'pref-'
  const length = 100
  const id: string = generateID({
    prefix,
    length,
  })

  expect(id.startsWith(prefix))
  expect(id.length).toBe(prefix.length + length)
})

function testLength(length: number) {
  it(`can generate ${length}-length id`, () => {
    expect(generateID({ length }).length).toBe('fn-'.length + length)
  })
}

testLength(0)
testLength(1)
testLength(100)
testLength(1000)
testLength(1000 * 1000)

function testCharacters(length: number) {
  it(`returns only valid characters (length=${length})`, () => {
    const id: string = generateID({
      prefix: 'prefix-',
      length,
    })

    expect(id).toEqual(expect.stringMatching(/prefix-[a-z0-9]*/))
  })
}

testCharacters(1)
testCharacters(10)
testCharacters(100)

it('raises exception for negative lengths', () => {
  expect(() =>
    generateID({
      length: -1,
    })
  ).toThrowError()
})

it('raises exception if length is float', () => {
  expect(() => generateID({ length: 10.01 })).toThrowError()
})
