import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("todo app", () => {
  it("components render as expected", () => {
    render(<App />);
    expect(screen.getByText("TODO APP")).toBeTruthy();
    expect(screen.getByPlaceholderText("Enter Todo")).toBeTruthy();
    expect(screen.getByText("Create")).toBeTruthy();
  });
  const todoDescription = "New Tested TODO";
  it("Create Update and Delete", () => {
    render(<App />);
    const button = screen.getByText("Create");
    const input = screen.getByPlaceholderText("Enter Todo");
    fireEvent.change(input, { target: { value: todoDescription } });
    fireEvent.click(button);
    expect(screen.getByText(todoDescription)).toBeTruthy();

    const checkbox = screen.getByLabelText(todoDescription) as HTMLInputElement;
    expect(checkbox.checked).toEqual(false);

    fireEvent.click(checkbox);

    expect(checkbox.checked).toEqual(true);

    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);

    expect(screen.queryByText(todoDescription)).not.toBeInTheDocument();
  });
});
