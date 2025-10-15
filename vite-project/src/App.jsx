import Taskform from "./Components/Taskform";
import TaskList from "./Components/TaskList";
import Progresstracker from "./Components/Progresstracker";


function App() {
  return (
    <div>
      <h1>Task Focus</h1>
      <p>Our friendly TaskManager</p>
      <Taskform />
      <TaskList />
      <Progresstracker />
      <button>Clear all Tasks</button>
    </div>
  )
}
export default App;