export default function timeFilter(seconds) {
  const hours = Math.floor(seconds / 3600)
  const min = Math.floor((seconds - 3600 * hours) / 60)
  const sec = seconds - 3600 * hours - min * 60
  return `${numFilter(hours)}:${numFilter(min)}:${numFilter(sec)}`
}

function numFilter(num) {
  if (num < 10) return `0${num}`
  return num
}
