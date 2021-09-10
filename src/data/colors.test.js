import COLORS from './colors.json'

describe('Color data', () => {
  
  test('is a list', () => {
    expect(COLORS).toBeInstanceOf(Array)
  })

  test('elements are color codes', () => {
    const matcher = /^#[0-9A-F]{6}$/i
    COLORS.forEach(color => expect(matcher.test(color)).toBeTruthy())
  })
})