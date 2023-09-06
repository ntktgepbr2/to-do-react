import React, { FormEvent, useEffect, useRef, useState } from "react";
import TodoList from "./TodoList";
import TodoHeader from "./TodoHeader";
import TodoForm from "./TodoForm";
import TodoFooter from "./TodoFooter";

export interface Task {
  id: number;
  text: string | undefined;
  isCompleted: boolean;
}

function TodoApp() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [filter, setFilter] = useState<"All" | "Active" | "Completed">("All");

  const addTask = (text: string) => {
    const newTask = {
      id: tasks.length,
      text,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Active") {
      return !task.isCompleted;
    } else if (filter === "Completed") {
      return task.isCompleted;
    }
    return true; // 'All' filter, show all tasks
  });

  const clearCompleted = () => {
    const updatedTasks = tasks.filter((task) => !task.isCompleted);
    setTasks(updatedTasks);
  };

  useEffect(() => {
    const textButtons = document.querySelectorAll(".text-button");

    textButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove the "active" class from all text buttons
        textButtons.forEach((textButton) => {
          textButton.classList.remove("active");
        });

        // Add the "active" class to the clicked text button
        button.classList.add("active");
      });
    });
  }, [filter]);

  return (
    <div className='container max-width'>
      <TodoHeader></TodoHeader>
      <TodoForm inputRef={inputRef} addTask={addTask}></TodoForm>
      <TodoList tasks={filteredTasks} onCompleteTask={toggleTaskCompletion} />
      <TodoFooter tasks={tasks} setFilter={setFilter} clearCompleted={clearCompleted}></TodoFooter>
    </div>
  );
}

export default TodoApp;
