import COLORS from '../data/colors.json'

const getColor = (courseId) => {
  const key = `color_${courseId}`
  let colorId = localStorage.getItem(key)
  if (!colorId) {
    colorId = Math.floor(Math.random() * COLORS.length)
    localStorage.setItem(key, colorId.toString())
  }
  const backgroundColor = COLORS[colorId];
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

export {
  getColor
}