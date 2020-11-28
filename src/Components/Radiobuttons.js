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

  console.log(
    "themeOptions/////////",
    themeOptions,
    "ThemesData = ",
    ThemesData
  );

  return (
    <FormControl className="input-margin" component="fieldset">
      <FormLabel component="legend">Choose Theme</FormLabel>
      <RadioGroup
        aria-label="theme"
        name="theme"
        value={value}
        onChange={handleChange}
      >
        {themeOptions.map((item, index) => (
          <div key={index}>
            <FormControlLabel value={item} control={<Radio />} label={item} />
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
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtons;
