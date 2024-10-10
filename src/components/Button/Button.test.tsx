import { render, screen, fireEvent } from '@testing-library/react'
import Button from './button'
import { describe, it, expect, vi } from 'vitest'

describe('Button component', () => {
  it('renders an accept button', () => {
    const mockOnClick = vi.fn()

    render(<Button onClick={mockOnClick} label="Accept" variant="accept" />)

    const button = screen.getByText('Accept')

    expect(button).toBeInTheDocument()

    expect(button).toHaveAttribute('type', 'button')

    fireEvent.click(button)

    expect(mockOnClick).toHaveBeenCalled()
  })

  it('renders a cancel button', () => {
    const mockOnClick = vi.fn()

    render(<Button onClick={mockOnClick} label="Cancel" variant="cancel" />)

    const button = screen.getByText('Cancel')

    expect(button).toBeInTheDocument()

    fireEvent.click(button)

    expect(mockOnClick).toHaveBeenCalled()
  })

  it('renders a button with a specific type', () => {
    const mockOnClick = vi.fn()

    render(
      <Button
        onClick={mockOnClick}
        label="Submit"
        type="submit"
        variant="accept"
      />
    )

    const button = screen.getByText('Submit')

    expect(button).toHaveAttribute('type', 'submit')
  })
})
