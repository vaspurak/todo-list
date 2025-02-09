import "../components/TodoForm.css";
import { RiResetRightFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

function TodoForm({
  text,
  setText,
  addTask,
  resetTask,
  deleteCompletedItemsHandler,
  completedItemsCount,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask();
  };

  return (
    <div className="todo-container">
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          className="todo-input"
          value={text}
          type="text"
          placeholder="Enter your todo"
          onChange={(e) => setText(e.target.value)}
        />
        <button className="todo-button" type="submit">
          Submit
        </button>
      </form>
      <div className="btn-icons-block">
        <RiResetRightFill className="reset-btn btn" onClick={resetTask} />
        <MdDelete
          className="clear-btn btn"
          aria-disabled={!completedItemsCount}
          onClick={deleteCompletedItemsHandler}
        />
      </div>
    </div>
  );
}

export default TodoForm;
