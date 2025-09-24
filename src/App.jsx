import Card from "./card";
import Button from "./button";
import Student from "./student.jsx"

const App = () => {

  return (
    <>
      <Student name="John Doe" age="20" isStudent={true} />
      <Student name="Jane Smith" age={22} isStudent={false} />
      <Student />
    </>
  );
}

export default App