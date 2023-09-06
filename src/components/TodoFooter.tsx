import TodoCounter from "./TodoCounter";
import { Task } from "./TodoApp";

interface Props {
  tasks: Task[];
  setFilter: (filter: "All" | "Active" | "Completed") => void;
  clearCompleted: () => void;
}

function TodoFooter({ tasks, setFilter, clearCompleted }: Props) {
  return (
    <div className='row todo-footer'>
      <TodoCounter activeCount={tasks.filter((task) => !task.isCompleted).length} />

      <div className='d-flex col-3 justify-content-evenly'>
        <button className='text-button' onClick={() => setFilter("All")}>
          All
        </button>
        <button className='text-button' onClick={() => setFilter("Active")}>
          Active
        </button>
        <button className='text-button' onClick={() => setFilter("Completed")}>
          Completed
        </button>
      </div>
      <div className='d-flex col justify-content-end'>
        <button className='clear-button' onClick={clearCompleted}>
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default TodoFooter;
