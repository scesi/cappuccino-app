import type { SVGProps } from 'react'

import { Calendar, PlusCircle, Trash } from '@/shared/ui/icons'

interface NavbarOptionMenuItem {
  id: number
  label: string
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

export const options: NavbarOptionMenuItem[] = [
  {
    id: 0,
    label: 'Añadir al Calendario de Google',
    icon: Calendar,
  },
  {
    id: 1,
    label: 'Agregar carrera',
    icon: PlusCircle,
  },
  {
    id: 2,
    label: 'Eliminar materias seleccionadas',
    icon: Trash,
  },
]
