import React from "react";
import "./App.css";
import LocalData from "./components/Local";
import GlobalData from "./components/Global";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Caputure  from "./img/Capture.png"
class App extends React.Component {
  render() {
    return (
      <div>
        <LocalData />
        <GlobalData />
        <img src={Caputure} style={{width:"100%"}}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
