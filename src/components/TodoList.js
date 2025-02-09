import "../components/TodoList.css";
// import { MdDeleteForever } from "react-icons/md";
import { RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

function TodoList({ items, deleteTask, toogleTask }) {
  return (
    <div className="todo-block">
      {!items.length && <h1 className="todo-heading"> Todo list is empty</h1>}
      <ul className="todo-ul-list">
        {items.map((item) => (
          <li
            className={`${"todo-list"} ${item.isCompleted ? "completed" : ""} `}
            key={item.id}
          >
            <span className="title">{item.text}</span>
            <div className="list-icons">
              <RiDeleteBin2Line
                className="del-btn"
                onClick={() => deleteTask(item.id)}
              />
              <FaCheck
                className="toggle-btn "
                onClick={() => toogleTask(item.id)}
              />
            </div>
          </li> // Исправлено
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
