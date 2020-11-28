import React from "react";

const TextArea = ({ setText }) => {
  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    console.log("=========", event.target.value);
    setValue(event.target.value);
    setText(event.target.value);
  };
  return (
    <div className="form-container">
      <label htmlFor="textArea">Please provide message</label>
      <textarea
        className="form-input"
        placeholder="Enter Message"
        id="textArea"
        label="Please
      provide message"
        rows={4}
        cols={10}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextArea;
