import { render, screen } from '@testing-library/react'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a black heading className for defalt', () => {
    render(<Heading>Bike Shop</Heading>)

    expect(screen.getByRole('heading', { name: /bike shop/i })).toHaveClass(
      'text-black'
    )
  })

  it('should render a white heading className is passed', () => {
    render(<Heading color="text-white">Bike Shop</Heading>)

    expect(screen.getByRole('heading', { name: /bike shop/i })).toHaveClass(
      'text-white'
    )
  })

  it('should render a heading with line to the left side', () => {
    render(<Heading lineLeft>Bike Shop</Heading>)
    expect(screen.getByRole('heading', { name: /bike shop/i })).toHaveClass(
      'border-l-8'
    )
  })

  it('should render a title with a line on the left and a specific color', () => {
    render(
      <Heading lineLeft lineColor="border-blue-600">
        Bike Shop
      </Heading>
    )
    expect(screen.getByRole('heading', { name: /bike shop/i })).toHaveClass(
      'border-l-8 border-blue-600'
    )
  })

  it('should render a title with diferent weight', () => {
    render(<Heading weight="font-medium">Bike Shop</Heading>)
    expect(screen.getByRole('heading', { name: /bike shop/i })).toHaveClass(
      'font-medium'
    )
  })
})
