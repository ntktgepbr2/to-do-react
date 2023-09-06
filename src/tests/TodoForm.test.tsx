import React from "react";
import { render, fireEvent, getByTitle, getByTestId } from "@testing-library/react";
import TodoForm from "../components/TodoForm";

describe("TodoForm", () => {
  it("calls addTask function when the form is submitted", () => {
    // Mock functions
    const addTaskMock = jest.fn();

    // Render the TodoForm with the mock function
    const { getByPlaceholderText, getByRole } = render(
      <TodoForm inputRef={{ current: null }} addTask={addTaskMock} />
    );

    // Get the input element and set its value
    const input = getByPlaceholderText("Enter a new task");
    fireEvent.change(input, { target: { value: "New Task" } });

    // Get the form element and submit it
    const form = getByRole("form");
    fireEvent.submit(form);

    // Expect the addTaskMock to have been called with the input value
    expect(addTaskMock).toHaveBeenCalledWith("New Task");
  });
});
