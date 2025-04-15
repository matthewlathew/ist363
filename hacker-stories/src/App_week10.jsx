//global variable - every component can see it
const myGlobalVariable = "I'm global baby!";

/*function App () {
  // local variable - only works inside the component
  const myLocalVariable = "I'm local :-(";
  return (
    <div>
      <h1 className="green">Hello World</h1>
      <p>{myGlobalVariable}</p>
      <p>{myLocalVariable}</p>
      <p>seperate<br /> lines with br tag that needs a trailing slash</p>
    </div>
  );
}

export default App; */

//const students = [{suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics'}, {suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology'}, {suid: 345678, name: 'Chris P Bacon', year: 'junior', major: 'Innovation, Society and Technology'}]

function App() {
  return (
    <div>
      <h1>Students</h1>
      <Second />
    </div>
  );
}
      
function Second () {
  return (
      <div>
      <ul>
        {students.map(function(student) {
          return (
            <li key={student.suid}>
              Name: {student.name}<br/> Year: {student.year}<br/> Major: {student.major}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/*function Button () {
  const push = () => {
    console.log("Creating your list...");
  }

  return (
    <button onClick={push}>Create List</button>
  );
}

export default Button; */

let students = [{suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics'}, {suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology'}, {suid: 345678, name: 'Chris P Bacon', year: 'junior', major: 'Innovation, Society and Technology'}];


function List () {
let output = 
  students.filter(student => student.name == "Sue Flay");
  let result = "";
  for (let i = 0; i < output.length; i++) {
    result += `Name: ${output[i].name}' 'Year: ${output[i].year}', 'Major: ${output[i].major}'`;
  }
  return result;
}

export default List;
