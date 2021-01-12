import React, { Component } from "react";
import Country from "./Country";

import css from "./countries.module.css";

export default class Countries extends Component {
  render() {
    const { countries } = this.props;
    return (
      <div className={css.border}>
        <ul className={css.flexRow}>
          {countries.map((country) => {
            return (
              <li className={css.country} key={country.id}>
                <Country country={country} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
