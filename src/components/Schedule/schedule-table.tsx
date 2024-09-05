import styles from './schedule-table.module.css'

export const ScheduleTable = () => {
  const weekdays: Array<string> = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
  ]

  const periods = [
    '06:45',
    '07:30',
    '08:15',
    '09:00',
    '09:45',
    '10:30',
    '11:15',
    '12:00',
    '12:45',
    '13:30',
    '14:15',
    '15:00',
    '15:45',
    '16:30',
    '17:15',
    '18:00',
    '18:45',
    '19:30',
    '20:15',
    '21:00',
    '21:45',
  ]

  const rows = []
  for (let i = 0; i < periods.length; i++) {
    rows.push(
      <div key={i} className={styles.scheduleGridItem}>
        {periods[i]}
      </div>,
      ...weekdays.map((weekday, index) => (
        <div className={styles.scheduleGridItem} key={`${i}-${index}`}></div>
      )),
    )
  }

  return (
    <section className={styles.container}>
      <div className={styles.scheduleGridHeader}>
        <div className={styles.scheduleGridHeader_item}></div>
        {weekdays.map((weekday, index) => (
          <div className={styles.scheduleGridHeader_item} key={index}>
            {weekday}
          </div>
        ))}
      </div>
      <div className={styles.scheduleGridContainer}>{rows}</div>
    </section>
  )
}
