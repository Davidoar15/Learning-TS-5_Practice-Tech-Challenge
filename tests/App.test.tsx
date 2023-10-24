import React from "react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("<App />", () => {
  // test('Should work', () => {
  //     render(<App />);
  //     screen.debug();

  //     expect(
  //         screen.getByText('Tech Challenge (React + TypeScript)')
  //     ).toBeDefined();
  // });

  // * Test End to End
  test("Should Add a new Item and Remove it", async () => {
    const user = userEvent.setup();

    render(<App />);

    const input = screen.getByRole("textbox");
    expect(input).toBeDefined();

    const form = screen.getByRole("form");
    expect(form).toBeDefined();

    const button = form.querySelector("button");
    expect(button).toBeDefined();
    const random = crypto.randomUUID();
    await user.type(input, random);
    await user.click(button!);

    const list = screen.getByRole("list");
    expect(list).toBeDefined();
    expect(list.childNodes.length).toBe(1);

    const item = screen.getByText(random);
    const removeButton = item.querySelector("button");
    expect(removeButton).toBeDefined();
    await user.click(removeButton!);

    const noResults = screen.getByText("There are not Elements");
    expect(noResults).toBeDefined();
  });
});