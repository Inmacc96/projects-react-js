import React from "react";
import { Menu } from "antd";
import { Link, withRouter } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";

import "./MenuTop.scss";

function MenuTop(props) {
  const { pathname } = props.location;

  return (
    <div className="menu-top">
      <div className="menu-top__logo">
        <Logo />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        // defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
        selectedKeys={[pathname]}
      >
        <Menu.Item key="/">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="/new-movies">
          <Link to="/new-movies">Últimos lanzamientos</Link>
        </Menu.Item>
        <Menu.Item key="/popular">
          <Link to="/popular">Populares</Link>
        </Menu.Item>
        <Menu.Item key="/search">
          <Link to="/search">Buscador</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default withRouter(MenuTop);
