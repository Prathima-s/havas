import React from "react";
import { Switch, Route } from "react-router-dom";
import asyncComponent from "../../helpers/AsyncFunc";
import getDevRouters from "../../customApp/router";

class AppRouter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userRole: {},
      dashboard: []
    };
    this.administrator = new Set(["Administrator"]);
    this.planerbuyer = new Set(["Planner Buyer"]);
    this.tradingManager = new Set(["Trading Manager"]);
  }
  render() {
    const { url } = this.props;
    return (
      <Switch>
        <Route
          exact
          path={`${url}`}
          component={asyncComponent(() => import("../Home"))}
        />
        <Route
          exact
          path={`${url}/home`}
          component={asyncComponent(() => import("../Home"))}
        />
        <Route
          exact
          path={`${url}/home/edit-role`}
          component={asyncComponent(() => import("../Home/EditRole"))}
        />
        <Route
          exact
          path={`${url}/clients`}
          component={asyncComponent(() => import("../MdmClient/home"))}
        />
   
        <Route
          exact
          path={`${url}/clients/edit`}
          component={asyncComponent(() => import("../MdmClient/AddClient"))}
        />
        <Route
          exact
          path={`${url}/clients/add`}
          component={asyncComponent(() => import("../MdmClient/AddClient"))}
        />

        <Route
            exact
            path={`${url}/client`}
            component={asyncComponent(() => import("../Clients"))}
        />
        

        {getDevRouters(url)}
      </Switch>
    );
  }
}

export default AppRouter;
