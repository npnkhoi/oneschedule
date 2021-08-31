import COLORS from '../data/colors.json'

// Return an appropriate text color (black/white)
// based on background color
export const getTextColor = (bg) => {
  const backgroundColor = (bg ? bg : '#000000')

  const rgb = [
    parseInt(backgroundColor.slice(1, 3), 16),
    parseInt(backgroundColor.slice(3, 5), 16),
    parseInt(backgroundColor.slice(5, 7), 16),
  ]
  const brightness = Math.round(((parseInt(rgb[0]) * 299) +
  (parseInt(rgb[1]) * 587) +
  (parseInt(rgb[2]) * 114)) / 1000);
  return (brightness > 125) ? 'black' : 'white'
}

export const getRandomColor = () => {
  const colorId = Math.floor(Math.random() * COLORS.length)
  return COLORS[colorId]
}

export const getRarestColor = (courses) => {
  const freq = {}
  COLORS.forEach(color => {
    freq[color] = courses.filter(course => course.color === color).length
  })

  let ret = null
  COLORS.forEach((color) => {
    if (!ret || freq[color] < freq[ret]) {
      ret = color
    }
  })
  return ret
}