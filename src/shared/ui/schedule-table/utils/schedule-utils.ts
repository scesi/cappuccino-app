import { formatHour } from './time-formatter'

export const getHourIndex = (time: string, hours: string[]): number => {
  const formattedTime = formatHour(time)
  return hours.indexOf(formattedTime)
}

export const getRowSpan = (
  start: string,
  end: string,
  hours: string[],
): number => {
  const startIndex = getHourIndex(start, hours)
  const endIndex = getHourIndex(end, hours)
  return endIndex - startIndex
}
