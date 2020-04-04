import React from "react";
import "../App.css";

class CardPurple extends React.Component {
  render(props) {
    return (
      <div className="card">
        <div className="header" style={{backgroundColor:"#8E44AD"}}>
          <h1>{this.props.value}</h1>
        </div>

        <div className="container">
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default CardPurple;
