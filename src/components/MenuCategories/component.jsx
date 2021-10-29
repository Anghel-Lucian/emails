import React from "react";

import MenuCategory from "../MenuCategory";

export default class MenuCategories extends React.PureComponent {
  render = () => {
    <div className="menu__categories">
      <div className="categories">
        <MenuCategory icon="inbox" count={9} />
        <MenuCategory icon="paper-plane" count={9} />
        <MenuCategory icon="trash-alt" count={9} />
      </div>
    </div>;
  };
}
