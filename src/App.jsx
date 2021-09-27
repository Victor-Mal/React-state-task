import React from "react";
import "./App.css";
import BurgerMenu from "./components/BurgerMenu";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log();
  }
  render() {
    return(
      <BurgerMenu />
    )
  }
}

export default App;