import Card from "./card";
import Button from "./button";
import Student from "./student.jsx"
import UserGreeting from "./UserGreeting.jsx";

const App = () => {

  return (
    <>
      {/* <UserGreeting isLoggedIn={true} username="John Doe" /> */}
      <UserGreeting isLoggedIn={true} />
    </>
  );
}

export default App