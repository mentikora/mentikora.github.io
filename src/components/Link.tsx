export const Link = ({ type, value }: { type: string; value: string }) => {
  if (!type || !value) return ''

  let src: string = ''
  switch (type) {
    case 'email':
      src = `mailto:${value}`
      break
    case 'phone':
      src = `tel:${value}`
      break
    default:
      src = value
  }

  console.log(type)

  return (
    <a href={src} target="_blank" rel="noopener noreferrer">
      {value}
    </a>
  )
}
