import './App.css';
import * as React from 'react'
import { Reset } from 'styled-reset'
import Header from "./components/Header/Header";
import {createGlobalStyle} from "styled-components";

function App() {
  const GlobalStyle = createGlobalStyle`
    ${Reset}
  `
  return (
      <React.Fragment>
        <Reset/>
          <div className="App">
            <Header></Header>
          </div>
      </React.Fragment>

  );
}

export default App;
