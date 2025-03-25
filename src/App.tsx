import './styles.css'
import { List } from './components'
import { CVData } from './data/cv'
import { upperCaseFirstLetter } from './utils'
import { Link } from './components/Link'

function App() {
  if (!CVData) {
    return <p className="text-3xl font-bold underline">No data</p>
  }

  const {
    user,
    summaryOfExperience,
    technicalSkills,
    workExperience,
    education,
    additionalInfo,
  } = CVData

  return (
    <div className="flex flex-col gap-4 font-display">
      <div>
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <h1 className="flex-grow">
            {user.name} {user.lastName}
          </h1>
          <button
            onClick={() => window.print()}
            className="order-first md:order-2 self-start md:self-auto print:hidden"
          >
            print
          </button>
        </div>

        <p className="text-gray-500">{user.position}</p>
      </div>

      <div>
        {user.connect.map((connect, index) => {
          const [key, value] = Object.entries(connect)[0]

          return (
            <p key={index}>
              <span>{upperCaseFirstLetter(key)}: </span>
              <Link type={key} value={value} />
            </p>
          )
        })}
      </div>

      <List
        data={summaryOfExperience}
        heading={{ title: 'Summary of experience' }}
      />

      {
        <div>
          <h2 className="mb-2">Technology / Methodology</h2>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(technicalSkills).map((category) => {
              if (!category[1].length) return null
              return (
                <div key={category[0]}>
                  <p>{upperCaseFirstLetter(category[0])}:</p>
                  <ul className="flex flex-wrap gap-x-4">
                    {category[1].map((item, index) => {
                      return <li key={index}>{upperCaseFirstLetter(item)}</li>
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      }

      <div>
        <h2 className="mb-2">Work experience</h2>

        <div className="flex flex-col gap-4">
          {workExperience.map((work) => {
            return (
              <div key={work.company}>
                <p className="text-gray-500 text-sm font-light italic">
                  {work.date.from} - {work.date.to}
                </p>
                <h3 className="text-blue-500">{work.company}</h3>
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

      <div>
        <h2 className="mb-2">Education</h2>
        {education.map((item, index) => (
          <div key={index}>
            <p>{item}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="mb-2">Rest</h2>
        {additionalInfo.map((item, index) => (
          <div key={index}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
