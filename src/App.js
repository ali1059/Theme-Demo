import "./styles/globalstyles.scss";
import "./styles/90s.scss";
import "./styles/funk.scss";
import "./styles/professional.scss";

import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
