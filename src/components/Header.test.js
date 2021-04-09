import { render, fireEvent, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header tests", () => {
  test("Should have a header", () => {
    render(<Header />);
    screen.getByRole("banner");
  });
  test("Should have text 'Suno Movies'", () => {
    render(<Header />);
    screen.getByRole("heading", {
      name: "Suno Movies",
    });
  });
  test("Should have button 'home'", () => {
    render(<Header />);
    screen.getByRole("button", { name: "Início" });
  });
  test("Should have button 'catalogue'", () => {
    render(<Header />);
    screen.getByRole("button", { name: "Catálogo" });
  });
  test("Should have icon button 'search'", () => {
    render(<Header />);
    screen.getByRole("button", { name: "search" });
  });
});
