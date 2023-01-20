import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

html,body {
  padding: 0;
  margin: 0;
}

body {
  line-height: 1;
  background: ${(props) => props.theme.background.basic};
  color: ${(props) => props.theme.text.basic};
  overflow-x: hidden;
}

footer, header, section {
	display: block;
}

h1,h2,h3,h4,h5,h6,p {
  margin:0;
  padding:0;
}

ol,
ul {
  list-style: none;
  margin:0;
  padding: 0;
}

input:focus {
  outline: none;
}

a {
  color: inherit;
  text-decoration: none;
}

button{
  margin: 0;
  padding: 0;
}

`;
