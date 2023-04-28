import { createGlobalStyle } from "styled-components";
export const darkTheme = {
  body: "#fff",
  color: "#000",
};

export const lightTheme = {
  body: "#000",
  color: "#fff",
};

export const GlobalStyles = createGlobalStyle`
body{
    background-color:${(props) => props.theme.body};
    color:${(props) => props.theme.color};
}
`;
