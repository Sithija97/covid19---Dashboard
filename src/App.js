import React from "react";
import "./App.css";
import LocalData from "./components/Local";
import GlobalData from "./components/Global";
import Footer from "./components/Footer";
class App extends React.Component {
  render() {
    return (
      <div>
        <LocalData />
        <GlobalData />
        <Footer/>
      </div>
    );
  }
}

export default App;
