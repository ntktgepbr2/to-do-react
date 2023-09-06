import React from "react";
import { render } from "@testing-library/react";
import TodoCounter from "../components/TodoCounter";

describe("TodoCounter", () => {
  it("renders the correct count when there's 1 task left", () => {
    const { getByText } = render(<TodoCounter activeCount={1} />);
    const counterElement = getByText("1 task left");
    expect(counterElement).toBeInTheDocument();
  });

  it("renders the correct count when there are multiple tasks left", () => {
    const { getByText } = render(<TodoCounter activeCount={3} />);
    const counterElement = getByText("3 tasks left");
    expect(counterElement).toBeInTheDocument();
  });
});
