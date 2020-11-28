import React from "react";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

const OutputPage = (props) => {
  const { date, text, theme, themeSettings } = props.location.state;

  console.log("Props =>>>>>>>>>>>>>", themeSettings);
  return (
    <div className={`outputpage-wrapper ${themeSettings.id}`}>
      <h1 className="outputpage-item">{themeSettings.title} Theme</h1>
      <div className="outputpage-container">
        <h4 className="outputpage-item">
          {themeSettings.datePickerTitle} {date}
        </h4>
        <h4 className="outputpage-item">
          {themeSettings.messageTitle} {text}
        </h4>
        <Link to="/">
          <button>
            <span>Try Another Theme</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OutputPage;
