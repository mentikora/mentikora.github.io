import { render, screen } from '@testing-library/react'
import { Link } from '../Link'

describe('<Link />', () => {
  it('renders an email link correctly', () => {
    render(<Link type="email" value="user@example.com" />)
    const anchor = screen.getByRole('link', { name: 'user@example.com' })
    expect(anchor).toHaveAttribute('href', 'mailto:user@example.com')
  })

  it('renders a phone link correctly', () => {
    render(<Link type="phone" value="123456789" />)
    const anchor = screen.getByRole('link', { name: '123456789' })
    expect(anchor).toHaveAttribute('href', 'tel:123456789')
  })

  it('renders a raw URL for unknown types', () => {
    render(<Link type="website" value="https://example.com" />)
    const anchor = screen.getByRole('link', { name: 'https://example.com' })
    expect(anchor).toHaveAttribute('href', 'https://example.com')
  })

  it('returns null if type is missing', () => {
    const { container } = render(<Link type="" value="test" />)
    expect(container.firstChild).toBeNull()
  })

  it('returns null if value is missing', () => {
    const { container } = render(<Link type="email" value="" />)
    expect(container.firstChild).toBeNull()
  })
})
