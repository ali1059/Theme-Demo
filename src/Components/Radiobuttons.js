import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../Components/Tooltip";

const RadioButtons = ({
  setTheme,
  themeOptions,
  ThemesData,
  setOpen,
  setThemeSettings,
}) => {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    console.log("HELLO =>", event.target.value);
    setValue(event.target.value);
    const settings = ThemesData.filter(
      (item) => item.title == event.target.value
    );
    console.log("HERERERE", event.target.value, "SETTINGS =", settings);
    setTheme(event.target.value);
    setThemeSettings(settings[0]);
  };

  const handlePreview = (theme) => {
    setOpen(true);
    const settings = ThemesData.filter((item) => item.title == theme);
    console.log("E = ", theme);
    console.log("settings = ", settings);
    setThemeSettings(settings[0]);
  };

  return (
    // <FormControl className="input-margin" component="fieldset">
    <div className="radiobtn-mainwrapper">
      <h3>Choose Theme</h3>
      {themeOptions.map((item, index) => (
        <div className="radiobtn-wrapper" key={index}>
          <label className="radiobtn-container">
            {item}
            <input
              onChange={handleChange}
              type="radio"
              name="theme"
              value={item}
            />
            <span className="checkmark"></span>
          </label>
          <Tooltip text="Preview Theme">
            <FontAwesomeIcon
              onClick={() => handlePreview(item)}
              icon={faEye}
              color="black"
              size="sm"
            />
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

export default RadioButtons;
