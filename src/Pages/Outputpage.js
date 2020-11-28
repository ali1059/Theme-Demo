import React from "react";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "../Components/Tooltip";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

const OutputPage = (props) => {
  const { date, text, theme, themeSettings } = props.location.state;

  console.log("Props =>>>>>>>>>>>>>", themeSettings);
  return (
    <div className={`outputpage-wrapper ${themeSettings.id}`}>
      <div className="back-btn">
        <Tooltip text="Back to Input Page">
          <Link to="/">
            <FontAwesomeIcon
              onClick={() => console.log(":HERER")}
              icon={faLongArrowAltLeft}
              color="black"
              size="3x"
            />
          </Link>
        </Tooltip>
      </div>

      <h1 className="outputpage-item">{themeSettings.title} Theme</h1>
      <div className="outputpage-container">
        <h4 className="outputpage-item">
          {themeSettings.datePickerTitle} {date}
        </h4>
        <h4 className="outputpage-item">
          {themeSettings.messageTitle} {text}
        </h4>
        <a href="https://github.com/yyx990803">
          <button>
            <span> Check Github</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default OutputPage;
