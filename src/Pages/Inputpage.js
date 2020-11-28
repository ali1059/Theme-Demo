import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import DatePicker from "../Components/Datepicker";
import Textarea from "../Components/Textarea";
import RadioButtons from "../Components/Radiobuttons";
import DialogBox from "../Components/Dialog";
import { Link } from "react-router-dom";
import ThemesData from "../config.json";
import Tooltip from "../Components/Tooltip";

console.log("=>>>>>>>>>>>>>.", ThemesData);

const InputPage = () => {
  const [date, setDate] = useState();
  const [text, setText] = useState();
  const [theme, setTheme] = useState();
  const [open, setOpen] = useState(false);
  const [themeSettings, setThemeSettings] = useState();
  const themeOptions = ["90's", "Professional", "Funk"];

  return (
    <Container maxWidth="sm">
      <div className="inputpage-container">
        <h1 className="inputpage-title">Input Page Title</h1>
        <DatePicker className="input-margin" setDate={setDate} />
        <Textarea className="input-margin" setText={setText} />
        <RadioButtons
          className="input-margin"
          setTheme={setTheme}
          themeOptions={themeOptions}
          ThemesData={ThemesData}
          setThemeSettings={setThemeSettings}
          setOpen={setOpen}
        />
        <Link
          to={{
            pathname: "/output",
            state: { date, text, theme, themeSettings },
          }}
        >
          <button className="output-btn">Output</button>
        </Link>
        <DialogBox
          themeSettings={themeSettings}
          open={open}
          setOpen={setOpen}
        />
      </div>
    </Container>
  );
};

export default InputPage;
