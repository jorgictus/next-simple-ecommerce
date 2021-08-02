import { render, screen } from '@testing-library/react'

import Header from '.'

describe('<Header />', () => {
  it('should render the heading', () => {
    render(<Header />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /vercel/i })).toBeInTheDocument()

    expect(screen.getByLabelText(/bikes/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/delivery/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/contato/i)).toBeInTheDocument()
  })
})
