import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoItem from "../components/TodoItem";

describe("TodoItem", () => {
  const task = { id: 1, text: "Sample Task", isCompleted: false };
  const onComplete = jest.fn();

  it("renders task text", () => {
    const { getByText } = render(<TodoItem task={task} onComplete={onComplete} />);
    const taskTextElement = getByText("Sample Task");
    expect(taskTextElement).toBeInTheDocument();
  });

  it("renders checkbox with the correct checked value", () => {
    const { getByRole } = render(<TodoItem task={task} onComplete={onComplete} />);
    const checkbox = getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it("calls onComplete when the checkbox is clicked", () => {
    const { getByRole } = render(<TodoItem task={task} onComplete={onComplete} />);
    const checkbox = getByRole("checkbox");

    fireEvent.click(checkbox); // Simulate a click on the checkbox

    expect(onComplete).toHaveBeenCalledTimes(1); // Verify that onComplete was called once
  });
});
