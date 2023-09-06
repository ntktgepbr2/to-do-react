import React from "react";
import { render } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList", () => {
  const tasks = [
    { id: 1, text: "Task 1", isCompleted: false },
    { id: 2, text: "Task 2", isCompleted: true },
  ];
  const onCompleteTask = jest.fn();

  it("renders a list of tasks", () => {
    const { getAllByText } = render(<TodoList tasks={tasks} onCompleteTask={onCompleteTask} />);
    const taskTextElements = getAllByText(/Task \d/);
    expect(taskTextElements.length).toBe(2);
  });
});
