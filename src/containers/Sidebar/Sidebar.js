import React, { Component } from "react";
import { connect } from "react-redux";
import clone from "clone";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import { Scrollbars } from "react-custom-scrollbars";
import Menu from "../../components/uielements/menu";
import IntlMessages from "../../components/utility/intlMessages";
// import getDevSidebar from '../../customApp/sidebar';
import SidebarWrapper from "./sidebar.style";

import appActions from "../../redux/app/actions";
import Logo from "../../components/utility/logo";
import { rtl } from "../../components/config/withDirection";
import HomeIcon from "../../image/icons/Home.svg";
import ClientIcon from '../../image/icons/Clients.svg';

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
const { Sider } = Layout;

const {
  toggleOpenDrawer,
  changeOpenKeys,
  changeCurrent,
  toggleCollapsed
} = appActions;
const stripTrailingSlash = str => {
  if (str.substr(-1) === "/") {
    return str.substr(0, str.length - 1);
  }
  return str;
};
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onOpenChange = this.onOpenChange.bind(this);
  }
  handleClick(e) {
    this.props.changeCurrent([e.key]);
    if (this.props.app.view === "MobileView") {
      setTimeout(() => {
        this.props.toggleCollapsed();
        this.props.toggleOpenDrawer();
      }, 100);
    }
  }
  onOpenChange(newOpenKeys) {
    const { app, changeOpenKeys } = this.props;
    const latestOpenKey = newOpenKeys.find(
      key => !(app.openKeys.indexOf(key) > -1)
    );
    const latestCloseKey = app.openKeys.find(
      key => !(newOpenKeys.indexOf(key) > -1)
    );
    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    changeOpenKeys(nextOpenKeys);
  }
  getAncestorKeys = key => {
    const map = {
      sub3: ["sub2"]
    };
    return map[key] || [];
  };

  renderView({ style, ...props }) {
    const viewStyle = {
      marginRight: rtl === "rtl" ? "0" : "-17px",
      paddingRight: rtl === "rtl" ? "0" : "0",
      marginLeft: rtl === "rtl" ? "-17px" : "0",
      paddingLeft: rtl === "rtl" ? "9px" : "0"
    };
    return (
      <div className="box" style={{ ...style, ...viewStyle }} {...props} />
    );
  }

  render() {
    // const { url, app, toggleOpenDrawer, bgcolor } = this.props;
    const { app, toggleOpenDrawer, customizedTheme } = this.props;
    const url = stripTrailingSlash(
      this.props.url === "/" ? "dashboard" : this.props.url
    );

    // const url = stripTrailingSlash(this.props.url);
    const collapsed =
      clone(!!app.collapsed && app.collapsed) && !clone(app.openDrawer);
    const { openDrawer } = app;
    const mode = collapsed === true ? "vertical" : "inline";
    const onMouseEnter = event => {
      if (openDrawer === false) {
        toggleOpenDrawer();
      }
      return;
    };
    const onMouseLeave = () => {
      if (openDrawer === true) {
        toggleOpenDrawer();
      }
      return;
    };
    const scrollheight = app.height;
    const styling = {
      backgroundColor: customizedTheme.backgroundColor
    };
    // const submenuStyle = {
    //   backgroundColor: "rgba(0,0,0,0.3)",
    //   color: customizedTheme.textColor
    // };
    // const submenuColor = {
    //   color: customizedTheme.textColor
    // };
    return (
      <SidebarWrapper>
        <Sider
          trigger={null}
          collapsible={true}
          collapsed={collapsed}
          width="100"
          className="isomorphicSidebar"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          style={styling}
        >
          <Logo collapsed={collapsed} />
          <Scrollbars
            renderView={this.renderView}
            style={{ height: scrollheight - 70 }}
          >
            <Menu
              onClick={this.handleClick}
              theme="dark"
              mode={mode}
              openKeys={collapsed ? [] : app.openKeys}
              selectedKeys={app.current}
              onOpenChange={this.onOpenChange}
              className="isoDashboardMenu"z
              defaultSelectedKeys={["mailbox"]}
              defaultOpenKeys={["mailbox"]}
            >
              <Menu.Item key="mailbox">
                <Link to={`${url}/home`} >
                
                  <span className="isoMenuHolder" style={{ color: "#fff" }}>
                    <img
                      src={HomeIcon}
                      style={{
                        width: "25px",
                        position: "relative",
                        transform: "translateX(50%)"
                      }}
                      alt="help"
                    />
                    <div className="nav-text">
                      <IntlMessages id="sidebar.home" />
                    </div>
                  </span>
                </Link>
              </Menu.Item>

              <Menu.Item key="clients">
                <Link to={`${url}/clients`}>
                  <span className="isoMenuHolder" style={{ color: "#fff" }}>
                    <img
                      src={ClientIcon}
                      style={{
                        width: "25px",
                        position: "relative",
                        transform: "translateX(50%)"
                      }}
                      alt="help"
                    />
                    <div className="nav-text">
                      <IntlMessages id="sidebar.mdmhome" />
                    </div>
                  </span>
                </Link>
              </Menu.Item>
            </Menu>
          </Scrollbars>
        </Sider>
      </SidebarWrapper>
    );
  }
}

// function mapStateToProps(state) {
//     console.log('stateapp', state.App)
//     return {};
// }

// export default connect(mapStateToProps, {})(Sidebar)

export default connect(
  state => ({
    app: state.App && state.App.toJS(),
    customizedTheme:
      state.ThemeSwitcher && state.ThemeSwitcher.toJS().sidebarTheme
  }),
  { toggleOpenDrawer, changeOpenKeys, changeCurrent, toggleCollapsed }
)(Sidebar);
