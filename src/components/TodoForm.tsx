import React, { FormEvent, RefObject } from "react";

interface Props {
  inputRef: RefObject<HTMLInputElement>;
  addTask: (text: string) => void;
}

function TodoForm({ inputRef, addTask }: Props) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputValue = inputRef.current?.value.trim();
    if (inputValue) {
      addTask(inputValue);
      inputRef.current!.value = ""; // Clear the input field
    }
  };

  return (
    <form aria-label='form' onSubmit={handleSubmit}>
      <div className='mb-3'>
        <input className='form-control' type='text' ref={inputRef} placeholder='Enter a new task' />
      </div>
    </form>
  );
}

export default TodoForm;
