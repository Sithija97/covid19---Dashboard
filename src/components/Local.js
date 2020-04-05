import React from "react";
import "../App.css";
import Axios from "axios";
//components
import CardBlue from "../Cards/CardBlue";
import CardGreen from "../Cards/CardGreen";
import CardPink from "../Cards/CardPink";
import CardPurple from "../Cards/CardPurple";
import CardRed from "../Cards/CardRed";
import CardYellow from "../Cards/CardYellow";

import Logo from "./logo.png";
class LocalData extends React.Component {
  state = {
    cases: 0,
    active_cases: 0,
    new_cases: 0,
    hospitalized: 0,
    recoveries: 0,
    deaths: 0,
    date: "2020-03-17 | 08:14:26",
  };

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const response = await Axios.get(
      "https://www.healthpromo.gov.lk/api/get-current-statistical"
    );
    this.setState({
      cases: response.data.data.local_total_cases,
      active_cases: response.data.data.local_active_cases,
      new_cases: response.data.data.local_new_cases,
      deaths: response.data.data.local_deaths,
      recoveries: response.data.data.local_recovered,
      hospitalized:
        response.data.data.local_total_number_of_individuals_in_hospitals,
      date: response.data.data.update_date_time,
    });
  }
  render() {
    return (
      <div>
        <div className="App">
          <div className="Title">
            <h1>Covid19 : Live Situational Dashboard</h1>
          </div>
          <h3 className="DnT">{this.state.date}</h3>
          {/* label */}
          <div class="SectionLabel">
            <div class="container">
              <h4>
                <b>Local Data</b>
              </h4>
            </div>
          </div>
          {/* label */}
          <div className="Flex">
            <CardYellow value={this.state.cases} text="Total Cases" />
            <CardRed value={this.state.active_cases} text="Active Cases" />
            <CardBlue value={this.state.new_cases} text="New Cases" />
            <CardPurple value={this.state.hospitalized} text="Hospitalized" />
            <CardGreen value={this.state.recoveries} text="Recoveries" />
            <CardPink value={this.state.deaths} text="Deaths" />
          </div>
        </div>
        {/* <GlobalData /> */}
      </div>
    );
  }
}

export default LocalData;
