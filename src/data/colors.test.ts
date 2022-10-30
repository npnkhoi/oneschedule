import {COLORS} from '.'

describe('Color data', () => {
  
  it('is a list', () => {
    expect(COLORS).toBeInstanceOf(Array)
  })

  it('elements are color codes', () => {
    const matcher = /^#[0-9A-F]{6}$/i
    COLORS.forEach(color => expect(matcher.test(color)).toBeTruthy())
  })
})