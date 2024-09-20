import { describe, expect, test, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { DeleteModal } from './delete-modal'

describe('<DeleteModal />', () => {
  test('should render modal with correct text', () => {
    const accept = vi.fn()
    const close = vi.fn()
    render(<DeleteModal accept={accept} close={close} />)

    expect(
      screen.getByText('¿Estás seguro de limpiar su horario?'),
    ).toBeInTheDocument()

    expect(screen.getByText('Cancelar')).toBeInTheDocument()
    expect(screen.getByText('Confirmar')).toBeInTheDocument()
  })

  test('should call close when clicking outside the modal', () => {
    const accept = vi.fn()
    const close = vi.fn()
    render(<DeleteModal accept={accept} close={close} />)

    fireEvent.click(screen.getByRole('dialog'))
    expect(close).toHaveBeenCalled()
  })

  test('should call accept and close when clicking confirm button', () => {
    const accept = vi.fn()
    const close = vi.fn()
    render(<DeleteModal accept={accept} close={close} />)

    fireEvent.click(screen.getByText('Confirmar'))

    expect(accept).toHaveBeenCalled()
    expect(close).toHaveBeenCalled()
  })

  test('should call close when clicking cancel button', () => {
    const accept = vi.fn()
    const close = vi.fn()
    render(<DeleteModal accept={accept} close={close} />)

    fireEvent.click(screen.getByText('Cancelar'))
    expect(close).toHaveBeenCalled()
  })
})
