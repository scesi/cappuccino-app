import type { SVGProps } from 'react'

import {
  Book,
  CalendarEdit,
  CalendarEditActive,
  Coffee,
  CoffeeActive,
} from '@/components/icons'

interface NavItem {
  id: string
  label: string
  icon: (props: SVGProps<SVGSVGElement>) => React.ReactNode
  activeIcon: (props: SVGProps<SVGSVGElement>) => React.ReactNode
}

export const navItems: NavItem[] = [
  {
    id: 'carreers',
    label: 'Carrerras',
    icon: Book,
    activeIcon: Book,
  },
  {
    id: 'schedule',
    label: 'Horario',
    icon: CalendarEdit,
    activeIcon: CalendarEditActive,
  },
  {
    id: 'options-menu',
    label: 'Más',
    icon: Coffee,
    activeIcon: CoffeeActive,
  },
]
