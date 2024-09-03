import { describe, expect, test } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

import { NavBar } from './nav-bottom-bar'

describe('<NavBar />', () => {
  test('should render nav items', () => {
    render(<NavBar />)
    const navItems = screen.getAllByRole('button')
    expect(navItems.length).toBeGreaterThanOrEqual(3)
  })

  test('should activate nav item on click', () => {
    render(<NavBar />)
    const navItems = screen.getAllByRole('button')
    fireEvent.click(navItems[0])
    expect(navItems[0]).toHaveClass(/_active_/)
  })

  test('should toggle dropdown on options menu click', async () => {
    render(<NavBar />)
    const optionsMenuButton = screen.getByText('Más')
    fireEvent.click(optionsMenuButton)
    const dropdown = await screen.getByRole('menu')
    expect(dropdown).toBeVisible()
  })
})
