import React from "react";

import List from "devextreme-react/list.js";
import { navigation } from "./data";
import { Link } from "react-router-dom";

class NavigationList extends React.PureComponent {
  render() {
    return (
      <div className="list" style={{ width: "200px", height: "100%" }}>
        <List
          dataSource={navigation}
          hoverStateEnabled={false}
          activeStateEnabled={false}
          focusStateEnabled={false}
          onItemClick={(value) => {
            console.log(value.itemData);
            // return <Link to={`/${value.itemData.text}`} />;
          }}
          className="panel-list dx-theme-accent-as-background-color"
        />
      </div>
    );
  }
}

export default NavigationList;
