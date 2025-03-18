import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'
import * as cvData from '../data/cv'

vi.mock('../data/cv.json', async () => {
  const actual = await vi.importActual('../data/cv.json')
  return {
    ...actual,
    default: {
      ...(actual.default as any),
      user: {
        name: 'John',
        lastName: 'Doe',
        position: 'Frontend Developer',
        connect: [
          { github: 'https://github.com/johndoe' },
          { linkedin: 'https://linkedin.com/in/johndoe' },
        ],
      },
      summaryOfExperience: ['5+ years in frontend development'],
      technicalSkills: ['React', 'TypeScript', 'Jest'],
      workExperience: [
        {
          company: 'Tech Corp',
          date: { from: '2020', to: '2023' },
          summary: 'Worked as a senior frontend developer.',
          projects: [
            {
              name: 'Project A',
              summary: 'Developed a web app.',
              responsibilities: [
                'Developed UI components',
                'Implemented API integrations',
              ],
              technologies: ['React', 'Redux', 'GraphQL'],
            },
          ],
        },
      ],
    },
  }
})

describe('App component', () => {
  it('renders user name and position', () => {
    render(<App />)
  })
})

describe('App component', () => {
  test('renders user name and position', () => {
    render(<App />)
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument()
    expect(screen.getByText(/Frontend Developer/i)).toBeInTheDocument()
  })

  test('renders user connections', () => {
    render(<App />)
    expect(screen.getByText(/Github:/i)).toBeInTheDocument()
    expect(screen.getByText(/Linkedin:/i)).toBeInTheDocument()
    expect(
      screen.getByText(/https:\/\/github.com\/johndoe/i),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/https:\/\/linkedin.com\/in\/johndoe/i),
    ).toBeInTheDocument()
  })

  test('renders summary of experience', () => {
    render(<App />)
    expect(screen.getByText(/Summary of experience/i)).toBeInTheDocument()
    expect(
      screen.getByText(/5\+ years in frontend development/i),
    ).toBeInTheDocument()
  })

  test('renders technical skills', () => {
    render(<App />)
    expect(screen.getByText(/Technology\/Methodology/i)).toBeInTheDocument()
    expect(screen.getByText(/React/i)).toBeInTheDocument()
    expect(screen.getByText(/TypeScript/i)).toBeInTheDocument()
    expect(screen.getByText(/Jest/i)).toBeInTheDocument()
  })

  test('renders work experience', () => {
    render(<App />)
    expect(screen.getByText(/Work experience/i)).toBeInTheDocument()
    expect(screen.getByText(/Tech Corp/i)).toBeInTheDocument()
    expect(screen.getByText(/2020 - 2023/i)).toBeInTheDocument()
    expect(
      screen.getByText(/Worked as a senior frontend developer./i),
    ).toBeInTheDocument()
  })

  test('renders project details', () => {
    render(<App />)
    expect(screen.getByText(/Project A/i)).toBeInTheDocument()
    expect(screen.getByText(/Developed a web app./i)).toBeInTheDocument()
    expect(screen.getByText(/Responsibilities/i)).toBeInTheDocument()
    expect(screen.getByText(/Developed UI components/i)).toBeInTheDocument()
    expect(
      screen.getByText(/Implemented API integrations/i),
    ).toBeInTheDocument()
    expect(screen.getByText(/Technologies/i)).toBeInTheDocument()
    expect(screen.getByText(/React/i)).toBeInTheDocument()
    expect(screen.getByText(/Redux/i)).toBeInTheDocument()
    expect(screen.getByText(/GraphQL/i)).toBeInTheDocument()
  })
})
