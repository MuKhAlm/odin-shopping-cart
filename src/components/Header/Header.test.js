import React from 'react'
import { render, screen } from '@testing-library/react'

import Header from './Header'

describe('Header component', () => {
  it('renders a title', () => {
    render(<Header></Header>)

    expect(screen.getByRole('heading')).not.toBeNull()
  })

  it('renders the title correctly', () => {
    render(<Header></Header>)

    expect(screen.getByRole('heading').textContent).toMatch('Shopping Cart')
  })
})
