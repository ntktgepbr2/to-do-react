import { Task } from "./TodoApp";

interface Props {
  task: Task;
  onComplete: () => void;
}

function TodoItem({ task, onComplete }: Props) {
  return (
    <div className='round'>
      <li className='list-group-item  text-overflow'>
        <input
          className='rounded-checkbox'
          type='checkbox'
          checked={task.isCompleted}
          id={`${task.id} - id`}
          onChange={onComplete}
        />
        <label className='form-check-label' htmlFor={`${task.id} - id`}></label>

        <p className={`task-text ${task.isCompleted ? "completed-todo" : ""}`}>{task.text}</p>
      </li>
    </div>
  );
}
export default TodoItem;
