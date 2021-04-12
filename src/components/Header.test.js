import { render, fireEvent, screen } from "@testing-library/react";
import { renderWithRouter } from "test-utils";
import Header from "./Header";

describe("Header tests", () => {
  test("Render without crashing", () => {
    renderWithRouter(<Header />);
    expect(screen).toBeDefined();
  });
  test("Should have a header", () => {
    renderWithRouter(<Header />);
    screen.getByRole("banner");
  });
  test("Should have text 'Suno Movies'", () => {
    renderWithRouter(<Header />);
    screen.getByRole("heading", {
      name: "Suno Movies",
    });
  });
  test("Should have button 'home'", () => {
    renderWithRouter(<Header />);
    screen.getByRole("button", { name: "Início" });
  });
  test("Should have button 'catalogue'", () => {
    renderWithRouter(<Header />);
    screen.getByRole("button", { name: "Catálogo" });
  });
  test("Should have icon button 'search'", () => {
    renderWithRouter(<Header />);
    screen.getByRole("button", { name: "search" });
  });

  test("Button calls onClick function", () => {
    renderWithRouter(<Header />);
    const button = screen.getByRole("button", { name: "Catálogo" });
    const func = jest.fn()
    button.onclick = func;
    button.click();
    expect(func).toHaveBeenCalled();
  });
});
