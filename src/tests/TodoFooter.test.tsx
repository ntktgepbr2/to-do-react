import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoFooter from "../components/TodoFooter";

describe("TodoFooter", () => {
  const tasks = [
    { id: 1, text: "Task 1", isCompleted: false },
    { id: 2, text: "Task 2", isCompleted: true },
  ];

  it("renders TodoCounter with the correct active count", () => {
    const { getByText } = render(
      <TodoFooter tasks={tasks} setFilter={() => {}} clearCompleted={() => {}} />
    );
    const counterElement = getByText("1 task left");
    expect(counterElement).toBeInTheDocument();
  });

  it("calls setFilter when buttons are clicked", () => {
    const setFilter = jest.fn();
    const { getByText } = render(
      <TodoFooter tasks={tasks} setFilter={setFilter} clearCompleted={() => {}} />
    );
    const allButton = getByText("All");
    const activeButton = getByText("Active");
    const completedButton = getByText("Completed");

    fireEvent.click(allButton);
    expect(setFilter).toHaveBeenCalledWith("All");

    fireEvent.click(activeButton);
    expect(setFilter).toHaveBeenCalledWith("Active");

    fireEvent.click(completedButton);
    expect(setFilter).toHaveBeenCalledWith("Completed");
  });

  it("calls clearCompleted when Clear Completed button is clicked", () => {
    const clearCompleted = jest.fn();
    const { getByText } = render(
      <TodoFooter tasks={tasks} setFilter={() => {}} clearCompleted={clearCompleted} />
    );
    const clearCompletedButton = getByText("Clear Completed");

    fireEvent.click(clearCompletedButton);
    expect(clearCompleted).toHaveBeenCalled();
  });
});
