import React, { useState } from "react";
import Drawer from "devextreme-react/drawer";
import Toolbar from "devextreme-react/toolbar";

import NavigationList from "./components/NavigationList.jsx";
import "./components/style.css";
import "devextreme/dist/css/dx.light.css";

export default function Layout() {
  const [state, setState] = useState({
    opened: true,
    openedStateMode: "shrink",
    revealMode: "slide",
    position: "left",
  });

  const toolbarItems = [
    {
      widget: "dxButton",
      location: "before",
      options: {
        icon: "menu",
        onClick: () => setState({ ...state, opened: !state.opened }),
      },
    },
  ];

  return (
    <React.Fragment>
      <Toolbar items={toolbarItems} height={"5vh"} />
      <Drawer
        opened={state.opened}
        openedStateMode={state.openedStateMode}
        position={state.position}
        revealMode={state.revealMode}
        component={NavigationList}
        height={"95vh"}
      >
        <div id="content" className="dx-theme-background-color">
          hello
        </div>
      </Drawer>
    </React.Fragment>
  );
}
