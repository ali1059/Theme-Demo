import React, { useState } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import Preview from "../Components/Preview";
import Tooltip from "../Components/Tooltip";

const DialogBox = ({ open, setOpen, themeSettings }) => {
  const [preview, setPreview] = useState("Desktop");
  console.log("In Dialog settings = ", themeSettings, "preview = ", preview);

  return (
    <Dialog
      onClose={() => setOpen(false)}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <div className="Dialog">
        <Tooltip text="Desktop View">
          <FontAwesomeIcon
            className="Dialog-icon"
            onClick={() => setPreview("Desktop")}
            icon={faDesktop}
            color="black"
            size="4x"
          />
        </Tooltip>

        <Tooltip text="Mobile View">
          <FontAwesomeIcon
            className="Dialog-icon"
            onClick={() => setPreview("Mobile")}
            icon={faMobileAlt}
            color="black"
            size="4x"
          />
        </Tooltip>
      </div>
      <Preview themeSettings={themeSettings} preview={preview} />
    </Dialog>
  );
};

export default DialogBox;
