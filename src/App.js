import React from "react";
import Comp2 from "./components/Comp2";
import { ThemeProvider } from "./contexts/ThemeContext";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider value="InfoPau">
        <div className="App">
          <p>Componente 01</p>
          <Comp2 />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
