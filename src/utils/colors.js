
export const getTextColor = (backgroundColor) => {
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