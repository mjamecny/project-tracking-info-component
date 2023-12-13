import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`:root {
  --color-red:hsl(0, 100%, 68%);
  --color-very-dark-blue:hsl(230, 29%, 20%);
  --color-dark-grayish-blue:hsl(230, 11%, 40%);
  --color-grayish-blue:hsl(231, 7%, 65%);
  --color-light-grayish-blue:hsl(207, 33%, 95%);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Barlow", "Barlow Condensed", sans-serif;
  color: var(--color-dark-grayish-blue);
  line-height: 1.5;
  font-size: 1.8rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}
`

export default GlobalStyles
