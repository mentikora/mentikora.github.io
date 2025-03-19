import './styles.css'
import { List } from './components'
import { CVData } from './data/cv'
import { upperCaseFirstLetter } from './utils'

function App() {
  if (!CVData) {
    return <p className="text-3xl font-bold underline">No data</p>
  }

  const { user, summaryOfExperience, technicalSkills, workExperience } = CVData

  return (
    <div className="flex flex-col gap-4 font-display">
      <div>
        <div className="flex flex-row items-center gap-4">
          <h1 className="flex-grow">
            {user.name} {user.lastName}
          </h1>
          <a>download</a>
          <a>print</a>
        </div>

        <p className="text-gray-500">{user.position}</p>
      </div>

      <div>
        {user.connect.map((connect, index) => {
          const [key, value] = Object.entries(connect)[0]

          return (
            <p key={index}>
              <span>{upperCaseFirstLetter(key)}: </span>
              <a href={value} target="_blank" rel="noopener noreferrer">
                click
              </a>
            </p>
          )
        })}
      </div>

      <List
        data={summaryOfExperience}
        heading={{ title: 'Summary of experience' }}
      />

      <List
        data={technicalSkills}
        heading={{
          title: 'Technology/Methodology',
        }}
        type="column"
      />

      <div>
        <h2 className="mb-2">Work experience</h2>

        <div className="flex flex-col gap-4">
          {workExperience.map((work) => {
            return (
              <div key={work.company}>
                <p className="text-gray-500 text-sm">
                  {work.date.from} - {work.date.to}
                </p>
                <h3 className="text-blue-700">{work.company}</h3>
                <p>{work.summary}</p>

                <div className="p-4 flex flex-col gap-4">
                  {work.projects.map((project, index) => {
                    return (
                      <div key={index}>
                        <h4>{project.name}</h4>
                        <p className="text-gray-500 mb-2">{project.summary}</p>

                        <div className="pl-4 border-l border-gray-300">
                          <List
                            data={project.responsibilities}
                            heading={{
                              title: 'Responsibilities',
                              as: 'h5',
                            }}
                            className="mb-2"
                          />
                          <List
                            data={project.technologies}
                            heading={{ title: 'Technologies', as: 'h5' }}
                            type="column"
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
