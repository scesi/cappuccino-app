import ScheduleTable from './components/ScheduleTable'
import { subjects } from './data/subjects'
import { Day } from './models/index'

const parseDay = (day: string): Day => {
  switch (day) {
    case 'LU':
      return Day.Lu
    case 'MA':
      return Day.Ma
    case 'MI':
      return Day.Mi
    case 'JU':
      return Day.Ju
    case 'VI':
      return Day.Vi
    case 'SA':
      return Day.Sa
    default:
      throw new Error(`Unknown day: ${day}`)
  }
}


/**
 * Combina y transforma los datos de horarios de las materias para generar una lista plana
 * de objetos `Schedule` con el nombre, aula y el código de la materia.
 *
 * Esta función hace lo siguiente:
 * 1. Itera sobre la lista de materias (`subjects`).
 * 2. Para cada materia, itera sobre sus grupos (`groups`).
 * 3. Para cada grupo, itera sobre su horario (`schedule`).
 * 4. Transforma cada elemento del horario añadiendo el nombre y el código de la materia.
 * 5. Convierte el `day` en un valor del tipo `Day` usando la función `parseDay`.
 *
 *
 */
const combinedSchedule = subjects.flatMap(subject =>
  subject.groups.flatMap(group =>
    group.schedule.map(scheduleItem => ({
      ...scheduleItem,
      day: parseDay(scheduleItem.day),
      subjectName: subject.name,
      subjectCode: group.code,
    }))
  )
)

function App() {
  return (
    <div className="App">
      <h1>Horario</h1>
      <ScheduleTable schedule={combinedSchedule} />
    </div>
  )
}

export default App
