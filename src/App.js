import { useState } from 'react';
import './App.css';
import Control from './Component/Control';
import Form from './Component/Form';
import List from './Component/List';
import Title from './Component/Title';

function App() {
  // Khởi tạo dữ liệu
  const listTaskInit = [
    { taskId: 1, taskName: "Lorem ipsum dolor sit amet,  Reiciendis ea a", level: 1 },
    { taskId: 2, taskName: "Lorem ipsum dolor sit amet, Reiciendis ea b", level: 2 },
    { taskId: 3, taskName: "Lorem ipsum dolor sit amet,  Reiciendis ea c", level: 3 },
    { taskId: 4, taskName: "Lorem ipsum dolor sit amet,  Reiciendis ea d", level: 1 },
]

  // Lưu dữ liệu bằng useState
  const [tasks, setTasks] = useState(()=>{
    // Có thể đọc được dữ liệu từ LocalStorage hoặc api
    return listTaskInit;
  });

  return (
    <div className='container'>
      <Title />
      <Control />
      <Form />
      <List renderTasks = {tasks} />
    </div>
  );
}

export default App;
