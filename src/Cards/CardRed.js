import React from "react";
import "../App.css";

class CardRed extends React.Component {
  render(props) {
    return (
      <div className="card">
        <div className="header" style={{backgroundColor:"#E74C3C"}}>
          <h1>{this.props.value}</h1>
        </div>

        <div className="container">
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default CardRed;
