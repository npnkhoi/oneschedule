import {COLORS} from '../data'

// Return an appropriate text color (black/white)
// based on background color
export const getTextColor = (bg: string) => {
  const backgroundColor = (bg ? bg : '#000000')

  const rgb = [
    parseInt(backgroundColor.slice(1, 3), 16),
    parseInt(backgroundColor.slice(3, 5), 16),
    parseInt(backgroundColor.slice(5, 7), 16),
  ]
  const brightness = Math.round(((rgb[0] * 299) +
  (rgb[1] * 587) +
  (rgb[2] * 114)) / 1000);
  return (brightness > 125) ? 'black' : 'white'
}

// export const getRandomColor = () => {
//   const colorId = Math.floor(Math.random() * COLORS.length)
//   return COLORS[colorId]
// }

export const getRarestColor = (colors: Array<string>) => {
  const freq: {[key: string]: number} = {}
  COLORS.forEach(color => {
    freq[color] = colors.filter(_color => _color === color).length
  })

  let ret: string = COLORS[0]
  COLORS.forEach((color) => {
    if (freq[color] < freq[ret]) {
      ret = color
    }
  })
  return ret
}