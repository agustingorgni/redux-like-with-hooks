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
          <p>
            Contenido
          </p>
          <TasksList />
          <p>
            <NewTask />
          </p>
        </header>
      </div>
    </TasksProvider>
  );
}

export default App;
