import './App.css';
import { Routes, Route } from 'react-router-dom';
import TodoList from './pages/TodoList';
import AddTodo from './pages/AddTodo';
import EditTodo from './pages/EditTodo';

function App() {
  return (
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/create" element={<AddTodo />} />
          <Route path="/edit" element={<EditTodo />} />
        </Routes>
  );
}

export default App;
