import React from "react";

const Preview = ({ themeSettings, preview }) => (
  <div className="preview-container">
    <link rel="stylesheet/scss" type="text/css" href="90s.scss" />
    <div className={`view-container ${themeSettings.id}`}>
      <p className="view-container-item">{themeSettings.title} Theme</p>
      <p className="view-container-item">
        {themeSettings.datePickerTitle}: 07/11/2020
      </p>
      <p className="view-container-item">{themeSettings.messageTitle}: Hello</p>
      {preview == "Desktop" ? (
        <button>Try Theme</button>
      ) : (
        <button className="sticky-btn">Try Theme</button>
      )}
    </div>
  </div>
);

export default Preview;
