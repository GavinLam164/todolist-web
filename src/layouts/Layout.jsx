import React from "react";
import { NavBar, Icon } from "antd-mobile";
import { useHistory } from "react-router-dom";

export default ({ children, title, rightContent }) => {
  const history = useHistory();
  return (
    <div>
      <NavBar
        mode="dark"
        icon={<Icon type="left" />}
        rightContent={rightContent}
        onLeftClick={history.goBack}
      >
        {title}
      </NavBar>
      {children}
    </div>
  );
};
