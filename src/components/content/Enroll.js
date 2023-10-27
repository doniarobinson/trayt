import React from "react";

export default function Enroll() {
  const defaultForm = {
    account: "",
    routing: "",
    isValid: false,
  };

  const [form, setForm] = React.useState(defaultForm);

  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
  }

  function validateField() {
    console.log("hi");
  }

  React.useEffect(() => {
    validateField();
  }, [form]);

  return (
    <div className="content__inner">
      <h1 className="enroll">New Direct Deposit Enrollment</h1>

      <div className="container__form-enroll">
        <div></div>
        <label htmlFor="account">Account Number:</label>
        <br />

        <input
          type="number"
          id="account"
          name="account"
          required
          minLength="8"
          maxLength="17"
          value={form.account}
          onChange={(event) => {
            handleInput(event);
          }}
        />
        <br />
        <label htmlFor="account">Routing Number:</label>
        <br />

        <input
          type="number"
          id="routing"
          name="routing"
          required
          min="100000000"
          max="999999999"
          value={form.routing}
          onChange={(event) => {
            handleInput(event);
          }}
        />
        <br />
        <button className="btn" disabled={!form.isValid}>
          Submit
        </button>
      </div>
    </div>
  );
}

/* 
Routing Number
Amount
Frequency - dropdown
Submit - button


*/
