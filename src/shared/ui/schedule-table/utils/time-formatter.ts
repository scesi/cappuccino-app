export const formatHour = (hour: string): string => {
  return (
    hour.padStart(4, '0').slice(0, 2) + ':' + hour.padStart(4, '0').slice(2)
  )
}
