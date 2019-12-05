import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import appActions from "../../redux/app/actions";
import TopbarWrapper from "./topbar.style";
import "./test.css";

import {
  TopbarNotification,
  // TopbarMessage,
  TopbarSearch,
  TopbarUser,
  TopbarHelp,
  TopbarSphere
  // TopbarAddtoCart,
} from "../../components/topbar";

const { Header } = Layout;
const { toggleCollapsed } = appActions;

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }
  /**
   * on click of toggle menu collapse & expand
   */
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  handleChange = value => {
    console.log(`selected ${value}`);
  };
  render() {
    const {
      // toggleCollapsed,
      // url,
      modifyTopBar,
      customizedTheme,
      locale
    } = this.props;
    const collapsed = this.props.collapsed && !this.props.openDrawer;
    const styling = {
      background: customizedTheme.backgroundColor,
      position: "fixed",
      width: "100%",
      height: 90
    };
    return (
      <TopbarWrapper>
        <Header
          style={styling}
          className={
            collapsed ? "isomorphicTopbar collapsed" : "isomorphicTopbar"
          }
        >
          <ul className="isoLeftt">
            <li
              className="isoBuyOrgSearch"
              style={{ width: "350px", lineHeight: "0" }}
            >
              <TopbarSearch locale={locale} modifyTopBar={modifyTopBar} />
            </li>
          </ul>
          <ul className="isoRight">
            <li
              onClick={() => this.setState({ selectedItem: "user" })}
              className="isoUser"
            >
              <TopbarUser locale={locale} />
            </li>

            <li
              onClick={() => this.setState({ selectedItem: "notification" })}
              className="isoNotify"
            >
              <TopbarNotification locale={locale} />
            </li>

            <li className="isoSearch">
              <TopbarHelp locale={locale} />
            </li>
            <li
              onClick={() => this.setState({ selectedItem: "message" })}
              className="isoMsg"
            >
              <TopbarSphere locale={locale} />
            </li>
          </ul>
        </Header>
      </TopbarWrapper>
    );
  }
}

export default connect(
  state => ({
    ...state.App.toJS(),
    locale: state.LanguageSwitcher.toJS().language.locale,
    customizedTheme: state.ThemeSwitcher.toJS().topbarTheme
  }),
  { toggleCollapsed }
)(Topbar);
