import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Calculator() {
  // assumptions for time saving
  // once per month
  // amount is hard-coded at 1000
  // interest is hard-coded at 5% forever

  // deposits occur on the first
  const C = 1000; // regular month installment
  const interest = 0.05;
  const [calc, setCalc] = useState("");

  const today = new Date();
  const [date, onDateChange] = useState(new Date());

  function calculateInterest() {
    const r = interest / 12; // interest rate divided by 12

    // average milliseconds per month; this would have to be refined
    const diff = (date - today) / (30.44 * 24 * 60 * 60 * 1000);

    const n = diff; // date chosen minus today's date, in months

    // less parentheses!
    const numerator = Math.pow(1 + r, n) - 1;
    const A = C * (numerator / r);

    setCalc(A);
  }

  return (
    <div className="content__inner">
      <h1 className="h1-small">Compound Interest Calculator</h1>
      <div className="container__form-calculator">
        <Calendar onChange={onDateChange} calendarType="gregory" value={date} />

        <div className="container__btn">
          <button className="btn-form" onClick={calculateInterest}>
            Calculate
          </button>
        </div>
        {calc && <div className="interest">${calc.toFixed(2)}</div>}
      </div>
    </div>
  );
}
