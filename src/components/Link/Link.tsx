import { resolveLink } from '@utils'

export const Link = ({ type, value }: { type: string; value: string }) => {
  if (!type || !value) return null

  const href = resolveLink(type, value)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="break-all text-pretty"
    >
      {value}
    </a>
  )
}
