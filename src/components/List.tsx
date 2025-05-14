import { createElement, FC } from 'react'

type HeadingProps = {
  as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
  title: string
}

const Heading: FC<HeadingProps> = ({ as = 'h2', className = '', title }) => {
  return createElement(as, { className }, title)
}

const getListClassName = (
  type: 'row' | 'column',
  extra: string = '',
): string => {
  const base = type === 'column' ? 'flex flex-wrap gap-x-4' : ''
  return `${base} ${extra}`.trim()
}

export const List = ({
  heading,
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
  const listClass = getListClassName(type, className)

  return (
    <div>
      {heading && (
        <Heading as={heading.as} title={heading.title} className="mb-2" />
      )}
      <ul className={listClass}>
        {data.length ? (
          data.map((item, index) => {
            return (
              <li key={index} className="text-pretty">
                {item}
              </li>
            )
          })
        ) : (
          <li className="text-pretty italic text-gray-500">No items</li>
        )}
      </ul>
    </div>
  )
}
