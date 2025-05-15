import { upperCaseFirstLetter } from '../utils'

describe('upperCaseFirstLetter', () => {
  it('should capitalize the first letter of a lowercase word', () => {
    expect(upperCaseFirstLetter('hello')).toBe('Hello')
  })

  it('should not change an already capitalized word', () => {
    expect(upperCaseFirstLetter('World')).toBe('World')
  })

  it('should handle a single lowercase letter', () => {
    expect(upperCaseFirstLetter('a')).toBe('A')
  })

  it('should handle a single uppercase letter', () => {
    expect(upperCaseFirstLetter('B')).toBe('B')
  })

  it('should return an empty string if input is empty', () => {
    expect(upperCaseFirstLetter('')).toBe('')
  })

  it('should not affect the rest of the string', () => {
    expect(upperCaseFirstLetter('tEST')).toBe('TEST')
  })

  it('should handle strings with non-alphabetic characters', () => {
    expect(upperCaseFirstLetter('!wow')).toBe('!wow')
  })
})
