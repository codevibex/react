import Student from "./Student.jsx";

function App() {
  return(
    <>
    <Student name="Adam" age={20} student={true} />
    <Student name="Bob" age={30} student={false} />
    <Student name="Dave" age={50} student={false} />
    <Student name="Kevin" age={40} student={false} />
    </>
    );
}

export default App
