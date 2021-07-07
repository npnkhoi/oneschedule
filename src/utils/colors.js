import COLORS from '../data/colors.json'

const getKey = (courseId) => `color_${courseId}`

const getColor = (courseId) => {
  const key = getKey(courseId)
  let backgroundColor = localStorage.getItem(key)
  if (!backgroundColor) {
    const colorId = Math.floor(Math.random() * COLORS.length)
    backgroundColor = COLORS[colorId];
    localStorage.setItem(key, backgroundColor.toString())
  }
  const rgb = [
    parseInt(backgroundColor.slice(1, 3), 16),
    parseInt(backgroundColor.slice(3, 5), 16),
    parseInt(backgroundColor.slice(5, 7), 16),
  ]
  // http://www.w3.org/TR/AERT#color-contrast
  const brightness = Math.round(((parseInt(rgb[0]) * 299) +
  (parseInt(rgb[1]) * 587) +
  (parseInt(rgb[2]) * 114)) / 1000);
  const textColor = (brightness > 125) ? 'black' : 'white';
  
  return {
    'background': backgroundColor,
    'text': textColor
  }
}

const setColor = (courseId, color) => {
  const key = getKey(courseId)
  localStorage.setItem(key, color.toString())
}

export {
  getColor,
  setColor
}