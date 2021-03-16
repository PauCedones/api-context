import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

function Comp3(props) {
  const data = useContext(ThemeContext);
  return (
    <>
      <p>holis soy el comp03</p>
      <p>El valor de mi contexto es {data}</p>
    </>
  );
}

export default Comp3;
