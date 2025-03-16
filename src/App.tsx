import "./App.css";
import { List } from "./components";
import cvData from "./data/cv.json";
import { upperCaseFirstLetter } from "./utils";

function App() {
  if (!cvData) {
    return <p className="text-3xl font-bold underline">No data</p>;
  }

  const { user, summaryOfExperience, technicalSkills } = cvData;

  return (
    <div className="flex flex-col gap-4 font-display">
      <div>
        <h1>
          {user.name} {user.lastName}
        </h1>
        <p className="text-gray-500">{user.position}</p>
      </div>

      <div>
        {user.connect.map((connect, index) => {
          const [key, value] = Object.entries(connect)[0];

          return (
            <p key={index}>
              <span>{upperCaseFirstLetter(key)}: </span>
              <a href={value} target="_blank" rel="noopener noreferrer">
                {value}
              </a>
            </p>
          );
        })}
      </div>

      <List title="Summary of experience" data={summaryOfExperience} />

      <List
        title="Technology/Methodology"
        type="column"
        data={technicalSkills}
      />
    </div>
  );
}

export default App;
