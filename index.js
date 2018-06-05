function checkZero(number, value) {
  return number ? `${number}${value} ` : ''
}

const formatDate = sec => {
  const hour = Math.floor(sec / 3600);
  const minute = Math.floor(sec % 3600 / 60);
  const second = (sec % 60).toFixed(0);
  return !sec ? '0s' : `${checkZero(hour, 'h')}${checkZero(minute, 'm')}${checkZero(second, 's')}`.trim();
}

module.exports = formatDate;