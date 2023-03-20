import * as React from 'react'
import { Reset } from 'styled-reset'
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import HomeSlide from "./components/HomeSlide/HomeSlide";

function App() {
  return (
      <React.Fragment>
        <Reset/>
          <>
            <Header></Header>
            <Home></Home>
          </>
      </React.Fragment>
  );
}

export default App;
