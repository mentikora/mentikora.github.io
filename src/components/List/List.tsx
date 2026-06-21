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
  const Heading = heading.as ?? 'h2'
  const listClass =
    `${type === 'column' ? 'flex flex-wrap gap-x-4' : ''} ${className}`.trim()

  return (
    <div>
      <Heading className="mb-2">{heading.title}</Heading>
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
