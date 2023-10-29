import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Enroll() {
  const defaultForm = {
    account: "",
    routing: "",
    amount: "",
    frequency: "",
  };

  const defaultFormValid = {
    accountValid: false,
    routingValid: false,
    amountValid: false,
    frequencyValid: false,
  };

  const [form, setForm] = useState(defaultForm);
  const [formValid, setFormValid] = useState(defaultFormValid);

  const navigate = useNavigate();

  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let tmpAccountValid = false;
    let tmpRoutingValid = false;
    let tmpAmountValid = false;
    let tmpFrequencyValid = false;

    // loop through form fields, check validity
    Object.entries(form).forEach(([key, val]) => {
      switch (key) {
        case "account":
          const accountString = val.toString();
          if (accountString.length >= 8 && accountString.length <= 17) {
            tmpAccountValid = true;
          } else {
            tmpAccountValid = false;
          }
          // in the future, we can set an error message here
          break;
        case "routing":
          // check for the entire number being in between certain ranges
          //The first two digits of a routing number must be in the ranges 00 through 12, 21 through 32, 61 through 72, or 80

          const routingString = val.toString();
          if (routingString.length === 9) {
            // check the first digit; if it
            const firstTwoDigits = parseInt(routingString.slice(0, 2));
            console.log(firstTwoDigits);
            if (
              (firstTwoDigits >= 0 && firstTwoDigits <= 12) ||
              (firstTwoDigits >= 21 && firstTwoDigits <= 32) ||
              (firstTwoDigits >= 61 && firstTwoDigits <= 72) ||
              firstTwoDigits === 80
            ) {
              tmpRoutingValid = true;
            } else {
              tmpRoutingValid = false;
            }
          }
          // in the future, we can set an error message here
          break;
        case "amount":
          if (val > 0) {
            tmpAmountValid = true;
          } else {
            tmpAmountValid = false;
          }
          // in the future, we can set an error message here
          break;
        case "frequency":
          tmpFrequencyValid = val !== "";
          // in the future, we can set an error message here
          break;
        default:
          break;
      }
    });

    // set them all at once
    setFormValid({
      accountValid: tmpAccountValid,
      routingValid: tmpRoutingValid,
      amountValid: tmpAmountValid,
      frequenceValid: tmpFrequencyValid,
    });

    if (
      tmpAccountValid &&
      tmpRoutingValid &&
      tmpAmountValid &&
      tmpFrequencyValid
    ) {
      navigate("/calculator");
    }
  }

  return (
    <div className="content__inner">
      <h1 className="h1-small">New Direct Deposit Enrollment</h1>

      <form onSubmit={handleSubmit}>
        <div className="container__form-enroll">
          <label htmlFor="account">Account Number:</label>
          <input
            type="number"
            id="account"
            name="account"
            value={form.account}
            onChange={(event) => {
              handleInput(event);
            }}
          />

          <label htmlFor="routing">Routing Number:</label>

          <input
            type="number"
            id="routing"
            name="routing"
            value={form.routing}
            onChange={(event) => {
              handleInput(event);
            }}
          />

          <label htmlFor="amount">Amount (in USD):</label>
          <input
            type="number"
            id="amount"
            name="amount"
            min="1"
            step=".01"
            value={form.amount}
            onChange={(event) => {
              handleInput(event);
            }}
          />

          <label htmlFor="frequency">Select Frequency:</label>
          <select
            id="frequency"
            name="frequency"
            value={form.frequency}
            onChange={(event) => {
              handleInput(event);
            }}
          >
            <option value=""></option>
            <option value="once">Once per month</option>
            <option value="twice">Twice per month</option>
          </select>

          {/* TODO (if more time): give the user a visual error message for each field with an error  */}

          {formValid.tmpAccountValid &&
          formValid.tmpRoutingValid &&
          formValid.tmpAmountValid &&
          formValid.tmpFrequencyValid ? (
            <p className="success">Form is valid!</p>
          ) : (
            <p className="error">Form is not valid!</p>
          )}

          {/* I have two buttons for a reason, promise! */}
          <div className="container__btn">
            <button className="btn-form" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
