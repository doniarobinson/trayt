import { render, screen } from "@testing-library/react";
import Enroll from "./components/content/Enroll";

const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

it("should render the enroll fields", () => {
  render(<Enroll />);

  expect(
    screen.getByRole("spinbutton", { name: "Account Number:" })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("spinbutton", { name: "Routing Number:" })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("spinbutton", { name: "Amount (in USD):" })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("combobox", { name: "Select Frequency:" })
  ).toBeInTheDocument();

  expect(screen.getByText("Submit").tagName).toBe("BUTTON");
});
