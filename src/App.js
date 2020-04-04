import React from "react";
import "./App.css";
import LocalData from "./components/Local";
import covid19more from "./img/covid19more.png";
class App extends React.Component {
  render() {
    return (
      <div>
        <LocalData />
        <img src={covid19more} className="covidImg" />
        <div className="Suwasariya">
          <h1 className="sectionH1">
            For further information, <br />
            Contact “Suwasariya”
          </h1>
          <h2 className="sectionH2">24 HOURS TRILINGUAL HEALTH HOTLINE</h2>
          <h4> Answers to your health needs on Coronavirus/ COVID-19 </h4>
          {/* <h3 style={{display:"flex", marginLeft:"5em", alignItems:"center", justifyContent:"space-even", fontSize:"110px"}}>119</h3> */}
        </div>
      </div>
    );
  }
}

export default App;
