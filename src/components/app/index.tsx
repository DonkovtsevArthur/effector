import * as React from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";

import Users from "../users";

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <div className="App">
        <Users />
      </div>
    </ThemeProvider>
  );
};

export default App;
