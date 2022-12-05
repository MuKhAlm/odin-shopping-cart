import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ShoppingItem from './ShoppingItem'
import triangle from '../../assets/triangle.svg'
import { act } from 'react-dom/test-utils'

describe('ShoppingItem component', () => {
  it('Renders correct itemID, name and price', () => {
    const mockItemID = 1
    const mockImage = triangle
    const mockName = 'Triangle'
    const mockPrice = 200
    const mockOnclick = jest.fn()
    render(
      <ShoppingItem
        itemID={mockItemID}
        image={mockImage}
        name={mockName}
        price={mockPrice}
        onClick={mockOnclick}
      />
    )

    expect(screen.queryByText('Name: Triangle')).not.toBeNull()
    expect(screen.queryByText('Price: £200')).not.toBeNull()
  })

  it('Calls onClick when "Add to cart" button is pressed', async () => {
    const mockItemID = 1
    const user = userEvent.setup()
    const mockImage = triangle
    const mockName = 'Triangle'
    const mockPrice = 200
    const mockOnclick = jest.fn()
    render(
      <ShoppingItem
        itemID={mockItemID}
        image={mockImage}
        name={mockName}
        price={mockPrice}
        onClick={mockOnclick}
      />
    )

    await act(async () => {
      await user.click(screen.getByRole('button'))
      await user.click(screen.getByRole('button'))
    })

    expect(mockOnclick).toHaveBeenCalledTimes(2)
  })

  it('Calls onClick with correct params', async () => {
    const mockItemID = 1
    const user = userEvent.setup()
    const mockImage = triangle
    const mockName = 'Triangle'
    const mockPrice = 200
    const mockOnclick = jest.fn()
    render(
      <ShoppingItem
        itemID={mockItemID}
        image={mockImage}
        name={mockName}
        price={mockPrice}
        onClick={mockOnclick}
      />
    )

    await act(async () => {
      await user.click(screen.getByRole('button'))
    })

    expect(mockOnclick).toHaveBeenCalledWith(1)
  })
})
