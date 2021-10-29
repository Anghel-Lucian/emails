import React from "react";

export default class RightView extends React.PureComponent {
  render = () => {
    return (
      <div className="right-view">
        <div className="right-view__header"></div>
        <div className="right-view__content"></div>
        <div className="right-view__footer"></div>
      </div>
    );
  };
}
