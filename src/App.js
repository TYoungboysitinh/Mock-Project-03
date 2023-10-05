import { useEffect, useState } from 'react';
import './App.css';
import Control from './Components/Control';
import Form from './Components/Form';
import List from './Components/List';
import Title from './Components/Title';

function App() {
  // Khởi tạo dữ liệu
  const listTaskInit = [
    {taskId:1, taskName:"Học lập trình frontend",level:1},
    {taskId:2, taskName:"Học lập trình reactjs",level:2},
    {taskId:3, taskName:"Lập trình với Frontend - Reactjs",level:3},
    {taskId:4, taskName:"Lập trình Fullstack (PHP, Java, NetCore_",level:1},
  ]

  // Lưu dữ liệu bằng useState
  const [tasks, setTasks] = useState(()=>{
    const list = JSON.parse(localStorage.getItem("DEVMASTER"));
    if(list === null || list.length === 0){
      return listTaskInit;
    }
    // Có thể đọc được dữ liệu từ LocalStorage hoặc api
    return list;
  });

  // Khi dữ liệu thay đổi, lưu dữ liệu mới vào Local Storage
  useEffect(()=>{
    localStorage.setItem("DEVMASTER", JSON.stringify(tasks));
    setTasks(tasks);
  },[tasks]);

  // Ẩn hiện form
  const [toggle, setToggle] = useState(false);
  let initTask = {
    taskId:0,
    taskName:"",
    level:2,
  }

  // Hàm xử lý sự kiện Cancel
  const handleCancel = (toggle) => {
    setToggle(toggle);
  }

  // Hàm xử lý chức năng Edit => Bắt đầu từ component ListTask

  // Hàm xử lý Submit Form
  const handleSubmit = (toggle, actionName, task) => {
    setToggle(toggle);
    // Dựa vào actionName để xem thêm mới hay cập nhât
    if(actionName === "Save"){
      // Thêm
      // Tạo Task ID tự động tăng
      let id = tasks[tasks.length-1].taskId;
      id ++;
      let taskAdd = {
        taskId:id,
        taskName:task.taskName,
        level:task.level
      }
      // tasks.push(task)
      // setTask(tasks)
      setTasks(tasks=>{
        return[
          ...tasks,
          task 
        ]
      })
    }else{
      // Sửa
      //Tìm trong task xem có task nào có taskId cần sửa, cập nhật lại 
      let index = -1;
      for (let i = 0; i < tasks.length; i++) {
        if(tasks[i].taskId === task.taskId){
          tasks[i]=task;
          break;
        }
      }
      setTasks(tasks=>{
        return[
          ...tasks,
      ]
      });
    }
  }


  const [tast, setTask] = useState(initTask); // State của Form
  //Trạng thái hiển thị giá trị trên nút Submit của Form : Save (add) / Update (edit)
  const [actionName, setActionName] = useState("Save");

  // Hàm xử lý cho sự kiện Add/Edit 
  const handleAddOrEditTask = (toggle, actionName, task) =>{
    setToggle(toggle);
    setActionName(actionName);
    if(task === null){
      setTask(initTask)
    }else{
      setTask(task);
    }
    updateSearchResults(searchEngine);
  }

  // Hàm xử lý sự kiện Delete
  const handleDelete = (task) =>{
    const deleteTasks = tasks.filter((t)=>t.taskId !== task.taskId);
    setTasks(deleteTasks)
  }

  // Hàm xử lý sự kiện Search
  const [searchEngine, setSearchEngine] = useState(''); // Thêm state cho ô tìm kiếm
  const [searchResults, setSearchResults] = useState([]); 

  const handleSearch = () => { 
    const results = tasks.filter((task) =>
      task.taskName.toLowerCase().includes(searchEngine.toLowerCase())
    );
    setSearchResults(results);
    console.log('Search button clicked',results);
  }
  
  // Hàm xử lý sự kiện Search sau khi thực hiện thay đổi 
  const updateSearchResults = (engine) => {
    const results = tasks.filter((task) =>
      task.taskName.toLowerCase().includes(engine.toLowerCase())
    );
    setSearchResults(results);
  };

  // Hàm xử lý sự kiện Sort
  const handleSort = (sortType, sortOrder) => {
    const sortedTasks = [...tasks];
    sortedTasks.sort((a, b) => {
      if(sortType === 'level'){
        if(sortOrder === 'ascending'){
          return a.level - b.level;
        }else{
          return b.level - a.level;
        }
      }else if(sortType === 'taskName'){
        if(sortOrder === 'ascending'){
          return a.taskName.localeCompare(b.taskName);
        }else{
          return b.taskName.localeCompare(a.taskName);
        }
      }
      return 0;
    });
    setTasks(sortedTasks);
  }
  

  // Form
  let elementForm = (toggle === true)? <Form onCancel={handleCancel} renderTask={tast} actionName={actionName} onSubmit={handleSubmit} />:"";

  return (
    <div className='container'>
      <Title />
      <Control onAddTask={handleAddOrEditTask} onSearch={handleSearch} onSort={handleSort}/>
      {elementForm}
      <List onEdit={handleAddOrEditTask} onDelete={handleDelete} renderTasks={searchResults.length>0?searchResults:tasks} />
    </div>
  );
}

export default App;
