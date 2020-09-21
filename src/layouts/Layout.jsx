import React from "react";
import { NavBar, Icon } from "antd-mobile";
import { useHistory } from "react-router-dom";

export default ({ children, title, rightContent, back = false }) => {
  const history = useHistory();
  return (
    <div>
      <NavBar
        mode="dark"
        icon={back && <Icon type="left" />}
        rightContent={rightContent}
        onLeftClick={history.goBack}
      >
        {title}
      </NavBar>
      {children}
    </div>
  );
};
