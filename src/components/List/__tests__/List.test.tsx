import { render, screen } from '@testing-library/react'
import { List } from '../List' // Adjust the import path as needed

describe('<List />', () => {
  const sampleData = ['Item 1', 'Item 2']

  it('renders heading with default tag h2', () => {
    render(<List heading={{ title: 'My List' }} data={sampleData} />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('My List')
  })

  it('renders heading with custom tag h4', () => {
    render(
      <List
        heading={{ title: 'Custom Heading', as: 'h4' }}
        data={sampleData}
      />,
    )
    const heading = screen.getByRole('heading', { level: 4 })
    expect(heading).toHaveTextContent('Custom Heading')
  })

  it('renders list items', () => {
    render(<List heading={{ title: 'Test List' }} data={sampleData} />)
    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(2)
    expect(items[0]).toHaveTextContent('Item 1')
    expect(items[1]).toHaveTextContent('Item 2')
  })

  it('shows fallback list item when data is empty', () => {
    render(<List heading={{ title: 'Empty List' }} data={[]} />)
    const fallback = screen.getByText('No items')
    expect(fallback).toBeInTheDocument()
    expect(fallback.tagName).toBe('LI')
  })

  it('applies "column" layout class', () => {
    const { container } = render(
      <List
        heading={{ title: 'Column List' }}
        type="column"
        data={sampleData}
      />,
    )
    const ul = container.querySelector('ul')
    expect(ul?.className).toContain('flex')
    expect(ul?.className).toContain('gap-x-4')
  })

  it('appends custom class names', () => {
    const { container } = render(
      <List
        heading={{ title: 'Styled List' }}
        className="custom-class"
        data={sampleData}
      />,
    )
    const ul = container.querySelector('ul')
    expect(ul?.className).toContain('custom-class')
  })
})
