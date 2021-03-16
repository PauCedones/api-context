import React from "react";

//creamos el contexto
const ThemeContext = React.createContext({});

//creamos y exportamos el provider
export const ThemeProvider = ThemeContext.Provider;

//Exportamos el contexto
export default ThemeContext;
