import React from "react";

const DatePicker = ({ setDate }) => {
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <div className="form-container">
      <label htmlFor="datepicker">Please provide date</label>
      <input
        className="form-input"
        onChange={handleDateChange}
        type="date"
        id="datepicker"
        name="datepicker"
      />
    </div>
  );
};

export default DatePicker;
