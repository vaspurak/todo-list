import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const addTask = () => {
    const newItem = {
      text, // Исправлено
      id: Date.now(),
      isCompleted: false,
    };
    setItems([...items, newItem]);
    setText("");
  };
  const resetTask = () => {
    setItems([]);
  };

  const deleteTask = (id) => {
    setItems(items.filter((item) => id !== item.id));
  };

  const toggleTask = (id) => {
    setItems(
      items.map(
        (item) =>
          item.id === id
            ? { ...item, isCompleted: !item.isCompleted }
            : { ...item } //Исправленно
      )
    );
  };
  const deleteCompletedItemsHandler = () => {
    setItems(items.filter((item) => !item.isCompleted));
  };

  const completedItemsCount = items.filter((item) => item.isCompleted).length;

  // const addTask = (e) => {
  //   e.preventDefault();
  //   // if (text.trim() === "") return;
  //   setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  //   setText("");
  // };

  // const toggleTask = (id) => {
  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === id ? { ...task, completed: !task.completed } : task
  //     )
  //   );
  // };

  // const deleteTask = (id) => {
  //   setTasks(tasks.filter((task) => task.id !== id));
  // };

  return (
    <div className="app">
      <TodoForm
        text={text}
        setText={setText}
        addTask={addTask}
        resetTask={resetTask}
        deleteCompletedItemsHandler={deleteCompletedItemsHandler}
        completedItemsCount={completedItemsCount}
      />
      <TodoList
        deleteTask={deleteTask}
        items={items}
        toogleTask={toggleTask}
        completedItemsCount={completedItemsCount}
      />
      {completedItemsCount > 0 && (
        <h2>{`You have completed ${completedItemsCount} ${
          completedItemsCount > 1 ? "todos" : "todo"
        }`}</h2>
      )}
      {/* <h2>To-Do List</h2>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Добавить задачу..."
        />
        <button type="submit">Добавить</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
