import { Task } from "./TodoApp";
import TodoItem from "./TodoItem";

interface Props {
  tasks: Task[];
  onCompleteTask: (index: number) => void;
}

function TodoList({ tasks, onCompleteTask }: Props) {
  return (
    <div>
      <ul className='list-group'>
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} onComplete={() => onCompleteTask(task.id)} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
