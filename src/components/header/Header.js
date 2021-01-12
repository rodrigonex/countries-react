import React, { Component } from "react";
import { formatNumber } from "../../helpers/formatHelpers";

import css from "./header.module.css";

export default class Header extends Component {
  handleInputChange = (event) => {
    const newText = event.target.value;

    this.props.onChangeFilter(newText);
  };
  render() {
    const { filter, countryCount, totalPopulation } = this.props;
    return (
      <div className={css.flexRow}>
        <input
          placeholder="Filtro"
          style={{ width: "100%", maxWidth: "450px" }}
          type="text"
          value={filter}
          onChange={this.handleInputChange}
        />{" "}
        |
        <span>
          Países: <strong>{countryCount}</strong>{" "}
        </span>{" "}
        |
        <span>
          Population: <strong> {formatNumber(totalPopulation)} </strong>
        </span>
      </div>
    );
  }
}
