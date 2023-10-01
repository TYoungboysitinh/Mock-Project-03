import './App.css';
import Control from './Components/Control';
import Form from './Components/Form';
import List from './Components/List';
import Title from './Components/Title';

function App() {

  const listTaskInit = [
    { taskId: 1, taskName: "Lorem ipsum dolor sit amet,  Reiciendis ea a", level: 1 },
    { taskId: 2, taskName: "Lorem ipsum dolor sit amet, Reiciendis ea b", level: 2 },
    { taskId: 3, taskName: "Lorem ipsum dolor sit amet,  Reiciendis ea c", level: 3 },
    { taskId: 4, taskName: "Lorem ipsum dolor sit amet,  Reiciendis ea d", level: 1 },
]

  return (
    <div className='container'>
      <Title />
      <Control />
      <Form />
      <List />
    </div>
  );
}

export default App;
