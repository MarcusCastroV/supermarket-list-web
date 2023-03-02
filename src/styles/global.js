import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Avenir Next';
    src: url(/fonts/AvenirNext-Regular.otf);
  }
  @font-face {
    font-family: 'Avenir Next';
    src: url(/fonts/AvenirNext-Bold.otf);
    font-weight: bold;
  }
  @font-face {
    font-family: 'Avenir Next';
    src: url(/fonts/AvenirNext-Mediun.ttf);
    font-weight: 500;
  }
  @font-face {
    font-family: 'Avenir Next';
    src: url(/fonts/AvenirNext-It.otf);
    font-style: italic;
  }

  body {
    margin: 0;
    font-family: 'Avenir Next', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  ::-webkit-scrollbarr {
    visibility: none;
    width: 0px;
  }
`