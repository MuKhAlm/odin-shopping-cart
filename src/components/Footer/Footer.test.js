import React from 'react'
import { render, screen } from '@testing-library/react'

import Footer from './Footer'

describe('Footer component', () => {
  it('renders a GitHub icon', () => {
    render(<Footer></Footer>)

    expect(screen.queryByTestId('GitHubIcon')).not.toBeNull()
  })
})
