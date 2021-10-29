import React from "react";

import "./style.css";

export default class Button extends React.PureComponent {
  render = () => {
    const {
      additionalClassNames = "",
      onClick = () => {},
      content = "",
    } = this.props;

    return (
      <button className={`btn ${additionalClassNames}`} onClick={onClick}>
        {content}
      </button>
    );
  };
}
