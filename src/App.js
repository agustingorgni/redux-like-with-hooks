import './App.css';
import { NewTask } from './components/NewTask';
import { TasksList } from './components/TasksList';
import { TasksProvider } from './contexts/TasksContext';

function App() {
  return (
    <TasksProvider>
      <div className="App">
        <header className="App-header">
          Listado de tareas
        </header>
        <div className="App-content">
          <TasksList />
        </div>
        <div className="App-footer">
          <NewTask />
        </div>
      </div>
    </TasksProvider>
  );
}

export default App;
