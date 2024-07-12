import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Button } from './index'

describe('<Button />', () => {
  test('should increment counter on click', async () => {
    render(<Button />)
    const button = screen.getByRole('button')

    expect(button).toHaveTextContent('0')
    await userEvent.click(button)
    expect(button).toHaveTextContent('1')
  })
})
