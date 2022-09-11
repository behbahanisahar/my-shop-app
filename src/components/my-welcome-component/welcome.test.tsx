import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Welcome from "./welcome-component";

let container:any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  act(() => {
    render(<Welcome />, container);
  });
  expect(container.textContent).toBe("Hello, Stranger");

  act(() => {
    render(<Welcome name="Jenny" />, container);
  });
  expect(container.textContent).toBe("Hello, Jenny!");

  act(() => {
    render(<Welcome name="Margaret" />, container);
  });
  expect(container.textContent).toBe("Hello, Margaret!");
});
