import React from "react";
import "../App.css";

class Cards extends React.Component {
  render(props) {
    return (
      <div className="card" style={{width:"450px"}}>
        <div className="header">
          <h1>{this.props.value}</h1>
        </div>

        <div className="container">
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Cards;
