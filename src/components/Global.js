import React from "react";
import "../App.css";
import Axios from "axios";
//components
import Cards from "../Cards/Cards";

class GlobalData extends React.Component {
  state = {
    gcases: 0,
    gactive_cases: 0,
    gnew_cases: 0,
    ghospitalized: 0,
    grecoveries: 0,
    gdeaths: 0,
    gdate: "2020-03-17 | 08:14:26",
  };

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const response = await Axios.get(
      "https://www.healthpromo.gov.lk/api/get-current-statistical"
    );
    this.setState({
      gcases: response.data.data.global_total_cases,
      gactive_cases: response.data.data.global_active_cases,
      gnew_cases: response.data.data.global_new_cases,
      gdeaths: response.data.data.global_deaths,
      grecoveries: response.data.data.global_recovered,
      ghospitalized:
        response.data.data.global_total_number_of_individuals_in_hospitals,
    });
  }
  render() {
    return (
      <div>
        <div className="App">
          {/* label */}
          <div class="SectionLabel">
            <div class="container">
              <h4>
                <b>Global Data</b>
              </h4>
            </div>
          </div>
          {/* label */}
          <div className="Flex">
            <Cards value={this.state.gcases} text="Total Cases" />
            <Cards value={this.state.gnew_cases} text="New Cases" />
            <Cards value={this.state.grecoveries} text="Recoveries" />
            <Cards value={this.state.gdeaths} text="Deaths" />
          </div>
        </div>
      </div>
    );
  }
}

export default GlobalData;
