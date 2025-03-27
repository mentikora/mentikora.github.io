import { createElement } from 'react'

export const List = ({
  heading: { as = 'h2', title = '' },
  data,
  type = 'row',
  className = '',
}: {
  data: string[]
  type?: 'row' | 'column'
  heading: {
    title: string
    as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  }
  className?: string
}) => {
  if (!data.length) return null

  const cln = type === 'column' ? 'flex flex-wrap gap-x-4' : ''

  return (
    <div>
      {createElement(as, { className: 'mb-2' }, title)}
      <ul className={cln + className}>
        {data.map((item, index) => {
          return (
            <li key={index} className="text-pretty">
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
