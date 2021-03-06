import React, { Component } from "react";

import css from "./countries.module.css";

export default class Country extends Component {
  render() {
    const { country } = this.props;
    return (
      <div>
        <img src={country.flag} alt={country.name} />
        <h4>{country.name}</h4>
      </div>
    );
  }
}
