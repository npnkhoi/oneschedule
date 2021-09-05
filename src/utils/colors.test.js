import COLORS from '../data/colors.json'
import { getRarestColor, getTextColor } from './colors'

describe('Color utils', () => {
  test('get rarest color', () => {
    const colors = COLORS.slice(1)
    const newColor = getRarestColor(colors)

    expect(newColor).toBe(COLORS[0])
  })

  test('get text color', () => {
    expect(getTextColor('#000000')).toBe('white')
    expect(getTextColor('#FFFFFF')).toBe('black')
  })
})