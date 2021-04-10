import { render, fireEvent, screen } from "@testing-library/react";
import Featured from "./Featured";

describe("Featured tests", () => {
  test("Render without crashing", () => {
    render(<Featured />);
    expect(screen).toBeDefined();
  });
});
