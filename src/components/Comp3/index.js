import React from "react";
import ThemeContext from "../../contexts/ThemeContext";

class Comp3 extends React.Component {
  static contextType = ThemeContext;
  render() {
    return (
      <>
        <p>holis soy el comp03</p>
        <p>El valor de mi contexto es {this.context}</p>
      </>
    );
  }
}
export default Comp3;
