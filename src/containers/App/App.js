import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, LocaleProvider, Breadcrumb } from "antd";
import { Row, Col } from "antd";
import { IntlProvider } from "react-intl";
import { Debounce } from "react-throttle";
import WindowResizeListener from "react-window-size-listener";
import { ThemeProvider } from "styled-components";
import authAction from "../../redux/auth/actions";
import appActions from "../../redux/app/actions";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import ThemeSwitcher from "../../containers/ThemeSwitcher";
import AppRouter from "./AppRouter";
import { Link } from "react-router-dom";
import basicStyle from "../../config/basicStyle";
// import { siteConfig } from "../../config.js";
import { AppLocale } from "../../dashApp";
import themes from "../../config/themes";
import AppHolder from "./commonStyle";
import "./global.css";

const { Content } = Layout;
const { logout } = authAction;
const { toggleAll } = appActions;

export class App extends Component {
  render() {
    const { url } = this.props.match;
    const { locale, selectedTheme, location } = this.props;
    const modifyTopBar = location.pathname.indexOf("add") !== -1 ? true : false;
    const currentAppLocale = AppLocale[locale];
    const { rowStyle, colStyle, gutter } = basicStyle;
    const pathSnippets = location.pathname.split("/").filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((path, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      const str = path
        .toLowerCase()
        .replace(/\b[a-z]/g, function(letter) {
          return letter.toUpperCase();
        })
        .replace("-", " ");

      while (str !== "Dashboard") {
        return (
          <Breadcrumb.Item key={url}>
            <Link to={url}>
              {" "}
              <b>{str}</b>{" "}
            </Link>
          </Breadcrumb.Item>
        );
      }
    });

    return (
      <LocaleProvider locale={currentAppLocale.antd}>
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <ThemeProvider theme={themes[selectedTheme]}>
            <AppHolder>
              <Layout>
                <Debounce time="1000" handler="onResize">
                  <WindowResizeListener
                    onResize={windowSize =>
                      this.props.toggleAll(
                        windowSize.windowWidth,
                        windowSize.windowHeight
                      )
                    }
                  />
                </Debounce>
                <Topbar url={url} modifyTopBar={modifyTopBar} />
                {/* <Topbar url={url} /> */}
                <Layout style={{ flexDirection: "row", overflow: "hidden" }}>
                  <Sidebar url={url} />
                  <Layout
                    className="isoContentMainLayout"
                    style={{
                      height: "100vh"
                    }}
                  >
                    <Content
                      className="isomorphicContent"
                      style={{
                        padding: "70px 0 0",
                        flexShrink: "0",
                        background: "#eaeaea"
                      }}
                    >
                      <Row style={rowStyle} gutter={gutter} justify="start">
                        <Col
                          md={12}
                          sm={12}
                          xs={24}
                          style={{
                            colStyle,
                            marginLeft: "35px",
                            marginTop: "15px",
                            marginBottom: "15px"
                          }}
                        >
                          <span
                            style={{
                              marginBottom: "5px",
                              padding: "60px 0 0 20px",
                              flexShrink: "0",
                              // background: "#f1f3f6",
                              borderTop: "1px solid #D2D3D2"
                            }}
                          >
                            {/* <div>
                              <p style={{ float: "left", fontSize: '12px' }}>
                                Administrator
                                <span style={{ padding: "0 10px" }}>/</span>
                              </p>
                            </div> */}
                            <Breadcrumb>{extraBreadcrumbItems}</Breadcrumb>
                          </span>
                        </Col>
                      </Row>
                      {console.log(url)}
                      <AppRouter url={url} />
                    </Content>

                    {/* <Footer
                      style={{
                        background: "#ffffff",
                        textAlign: "center",
                        borderTop: "1px solid #ededed"
                      }}
                    >
                      {siteConfig.footerText}
                    </Footer> */}
                  </Layout>
                </Layout>
                <ThemeSwitcher />
              </Layout>
            </AppHolder>
          </ThemeProvider>
        </IntlProvider>
      </LocaleProvider>
    );
  }
}

export default connect(
  state => ({
    auth: state.Auth,
    locale: state.LanguageSwitcher.toJS().language.locale,
    selectedTheme: state.ThemeSwitcher.toJS().changeThemes.themeName
  }),
  { logout, toggleAll }
)(App);
