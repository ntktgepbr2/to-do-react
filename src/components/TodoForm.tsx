import { FormEvent, RefObject } from "react";

interface Props {
  inputRef: RefObject<HTMLInputElement>;
  addTask: (event: FormEvent<HTMLFormElement>) => void;
}

function TodoForm({ inputRef, addTask }: Props) {
  return (
    <form aria-label='form' onSubmit={(event) => addTask(event)}>
      <div className='mb-3'>
        <input className='form-control' type='text' ref={inputRef} placeholder='Enter a new task' />
      </div>
    </form>
  );
}

export default TodoForm;
