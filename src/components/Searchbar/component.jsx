import React from "react";

import "./style.css";

export default class Searchbar extends React.PureComponent {
  render = () => {
    return (
      <div className="searchbar">
        <input
          type="text"
          className="searchbar__input"
          placeholder="What are you looking for?"
        ></input>
        <i className="fas fa-search"></i>
      </div>
    );
  };
}
