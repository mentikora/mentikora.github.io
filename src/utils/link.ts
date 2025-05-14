export const linkResolvers: Record<string, (value: string) => string> = {
  email: (value) => `mailto:${value}`,
  phone: (value) => `tel:${value}`,
}

export const resolveLink = (type: string, value: string): string => {
  const resolver = linkResolvers[type]
  return resolver ? resolver(value) : value
}
