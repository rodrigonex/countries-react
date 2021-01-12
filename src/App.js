import React, { Component } from "react";
import Countries from "./components/countries/Countries";
import Header from "./components/header/Header";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      allCountries: [],
      filteredCountries: [],
      totalPopulation: 0,
      filter: "",
    };
  }

  async componentDidMount() {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const json = await res.json();

    const allCountries = json.map(({ name, numericCode, flag, population }) => {
      return {
        id: numericCode,
        name,
        filterName: name.toLowerCase(),
        flag,
        population,
      };
    });

    const totalPopulation = this.calculateTotalPopulationFrom(allCountries);

    this.setState({
      allCountries,
      filteredCountries: Object.assign([], allCountries),
      totalPopulation,
    });
  }

  calculateTotalPopulationFrom = (countries) => {
    const totalPopulation = countries.reduce((accumalator, current) => {
      return accumalator + current.population;
    }, 0);

    return totalPopulation;
  };

  handleChangeFilter = (newFilter) => {
    this.setState({
      filter: newFilter,
    });

    const { allCountries } = this.state;
    const filterLowerCase = newFilter.toLowerCase();

    const filteredCountries = allCountries.filter((country) => {
      return country.filterName.includes(filterLowerCase);
    });

    const totalPopulation = this.calculateTotalPopulationFrom(
      filteredCountries
    );

    this.setState({
      filteredCountries,
      totalPopulation,
    });
  };

  render() {
    const { filteredCountries, filter, totalPopulation } = this.state;

    return (
      <div className="container">
        <h1 style={styles.centeredTitle}>React Countries</h1>
        <Header
          filter={filter}
          totalPopulation={totalPopulation}
          countryCount={filteredCountries.length}
          onChangeFilter={this.handleChangeFilter}
        />
        <Countries countries={filteredCountries} />
      </div>
    );
  }
}

const styles = {
  centeredTitle: {
    textAlign: "center",
  },
};
