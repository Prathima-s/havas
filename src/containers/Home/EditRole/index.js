import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Row,
  Col,
  // Form,
  Modal
} from "antd";
import LayoutContentWrapper from "../../../components/utility/layoutWrapper";
import LayoutContent from "../../../components/utility/layoutContent";
import Tabs, { TabPane } from "../../../components/uielements/tabs";
import "./blankPage.css";
import Button from "../../../components/uielements/button";
import SelectButton from "../../../components/editRole/selectButton";
import { buyingOrganisation, Roles } from "./fakeData";
// import { Link } from "react-router-dom";
// import SearchIcon from "../../../image/icons/Search.svg";
import "../../App/commonStyle";
// import UserList from "../../Home/fakeData";
// import userDetail from "./userFakeData";
import "../../Home/home.css";
import actions from "../../../redux/editRole/actions";

const cancelStyle = {
  width: "150px",
  marginLeft: "15px",
  backgroundColor: "black",
  borderColor: "black",
  borderRadius: "30px",
  color: "white"
};

const primaryButton = {
  width: "150px",
  backgroundColor: "#00AED0",
  borderColor: "#00AED0",
  borderRadius: "30px",
  color: "white"
};

const { saveUser } = actions;
const { confirm } = Modal;

class EditRole extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mmsRoles: [],
      cidRoles: [],
      mdmAccess: [],
      userDetail: [],
      isMdmAccessVisible: false,
      defaultbuyingOrg: [],
      defaultMmsRole: [],
      defaultCidRole: [],
      selectedBuyingOrgs: [],
      visible: false,
      isDataChanged: false,
      updatedUserInfo: [],
      currentTab: 1,
      userInfo: this.props.userInfo,
      buyingOrganisation: [],
      userRole: [],
      Roles: []
    };

    this.callback = this.callback.bind(this);
    this.mdmAccessVisible = this.mdmAccessVisible.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.reset = this.reset.bind(this);
  }

  callback(key) {
    this.setState({
      currentTab: key
    });
    if (key !== 2) document.getElementById("mdm-access").style.display = "none";
    else {
      if (this.state.isMdmAccessVisible) {
        document.getElementById("mdm-access").style.display = "block";
      }
    }
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  showConfirm = () => {
    confirm({
      title: "You have unsaved data, do you want to continue?",
      // content: 'When clicked the OK button, this dialog will be closed after 1 second',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log("Oops errors!"));
      },
      onCancel() {}
    });
  };

  reset = () => {
    this.setState({
      selectedBuyingOrgs: buyingOrganisation
    });
    this.forceUpdate();
  };

  mdmAccessVisible(currentRole) {
    if (currentRole["MDM Admin"] || currentRole["MDM View"]) {
      document.getElementById("mdm-access").style.display = "block";
      this.setState({
        isMdmAccessVisible: true
      });
    } else {
      document.getElementById("mdm-access").style.display = "none";
      this.setState({
        isMdmAccessVisible: false
      });
    }
  }

  updateUser(userInfo) {
    this.setState({
      isDataChanged: true
    });
  }

  // To get list of Buying Organisation
  componentWillReceiveProps(nextProps) {
    if (!!nextProps.defaultbuyingOrg) {
      this.setState(
        {
          defaultbuyingOrg: nextProps.defaultbuyingOrg
        },
        () => {
          this.setSelectedValues();
          this.getBuyOrganisation();
        }
      );
    }

    if (!!nextProps.defaultMmsRole) {
      this.setState({
        defaultMmsRole: nextProps.defaultMmsRole.MMSRoles || [],
        defaultCidRole: nextProps.defaultMmsRole.CIDRoles || []
      });
    }
  }

  /**
   * Fetch Buying Organisation
   */
  getBuyOrganisation = () => {
    let { userDetail, defaultbuyingOrg } = this.state;

    if (Object.keys(userDetail).length > 0) {
      const buyingOrgs = new Set(
        userDetail.UserBuyingOrganisation.map(
          friend => friend.BuyingOrganizationId
        )
      );

      let newBuyingOrgs = defaultbuyingOrg.map(friend => ({
        BuyingOrganizationId: friend.BuyingOrganizationId,
        BuyingOrganizationName: friend.BuyingOrganizationName,
        IsSelected: buyingOrgs.has(friend.BuyingOrganizationId)
      }));

      this.setState({
        selectedBuyingOrgs: newBuyingOrgs
      });
    }
  };

  /**
   *
   */
  setSelectedValues = () => {
    let { userDetail } = this.state;
    if (Object.keys(userDetail).length > 0) {
      let { defaultCidRole, defaultMmsRole } = this.state;

      const currentMMSRoles = new Set(
        userDetail.UserRoles.map(user => user.RoleId)
      );
      const currentCIDRoles = new Set(
        userDetail.UserCIDRoles.map(user => user.RoleName)
      );
      const currentMDMRoles = new Set(
        userDetail.UserMDMAccess.map(user => user.RoleId)
      );

      const getPrimary = rolename => {
        return (
          userDetail.UserCIDRoles.filter(
            user => user.RoleName === rolename && user.IsPrimary
          ).length === 1
        );
      };
      let userMMSRoles = defaultMmsRole.map(role => ({
        RoleId: "MMS_" + role.RoleId,
        RoleName: role.RoleName,
        IsSelected: currentMMSRoles.has(role.RoleId),
        IsPrimary: userDetail.CurrentRoleId === role.RoleId ? true : false
      }));

      let userCIDRoles = defaultCidRole.map(role => ({
        RoleId: "CID_" + role.RoleId,
        RoleName: role.RoleName,
        IsSelected: currentCIDRoles.has(role.RoleName),
        IsPrimary: getPrimary(role.RoleName)
      }));

      let userMDMRoles = Roles.MDMAccess.map(role => ({
        RoleId: "MDM_" + role.RoleId,
        RoleName: role.RoleName,
        IsSelected: currentMDMRoles.has(role.RoleId)
      }));

      this.setState({
        mmsRoles: userMMSRoles,
        cidRoles: userCIDRoles,
        mdmAccess: userMDMRoles
      });
    }
  };

  componentDidMount() {
    let { defaultbuyingOrg, defaultMmsRole, location } = this.props;
    if (defaultbuyingOrg) {
      this.setState({
        defaultbuyingOrg: defaultbuyingOrg
      });
    }

    if (!!defaultMmsRole) {
      this.setState({
        defaultMmsRole: defaultMmsRole.MMSRoles || [],
        defaultCidRole: defaultMmsRole.CIDRoles || []
      });
    }

    if (!!location) {
      let { state } = location;
      this.setState(
        {
          userDetail: state
        },
        () => {
          this.setSelectedValues();
          this.getBuyOrganisation();
        }
      );
    }
  }

  componentWillUnmount() {
    console.log("UNMOUNT");
  }

  render() {
    let {
      userDetail,
      selectedBuyingOrgs,
      mdmAccess,
      cidRoles,
      mmsRoles
    } = this.state;

    return (
      <div>
        <LayoutContentWrapper style={{ padding: "25px 20px 0 35px " }}>
          <LayoutContent style={{ padding: "0", border: 0 }}>
            <div>
              <Row>
                <Col span={24} style={{ paddingBottom: "20px" }}>
                  <Tabs
                    defaultActiveKey="1"
                    onChange={this.callback}
                    type="card"
                  >
                    <TabPane
                      tab={userDetail.DisplayName}
                      key="0"
                      disabled
                    ></TabPane>
                    <TabPane tab="Buying Organization" key="1">
                      <Row>
                        {selectedBuyingOrgs.map(buyorg => (
                          <Col span={5}>
                            <SelectButton
                              radio="no"
                              updateUserInfo={this.updateUser}
                              isSelected={buyorg.IsSelected}
                              mdmSelect={this.mdmAccessVisible}
                              keys={buyorg.BuyingOrganizationId}
                              value={buyorg.BuyingOrganizationName}
                            />
                          </Col>
                        ))}
                      </Row>
                    </TabPane>
                    <TabPane tab="MMS+ Roles" key="2">
                      <Row>
                        {mmsRoles.map(role => (
                          <Col span={5}>
                            <SelectButton
                              radio="yes"
                              roleType="1"
                              mdmSelect={this.mdmAccessVisible}
                              isPrimary={role.IsPrimary}
                              isSelected={role.IsSelected}
                              keys={role.RoleId}
                              value={role.RoleName}
                            />
                          </Col>
                        ))}
                      </Row>
                    </TabPane>
                    <TabPane tab="CID Roles" key="3">
                      <Row>
                        {cidRoles.map(role => (
                          <Col span={5}>
                            <SelectButton
                              radio="yes"
                              roleType="2"
                              isPrimary={role.IsPrimary}
                              isSelected={role.IsSelected}
                              keys={role.RoleId}
                              value={role.RoleName}
                            />
                          </Col>
                        ))}
                      </Row>
                    </TabPane>
                  </Tabs>
                </Col>
              </Row>
            </div>
          </LayoutContent>
        </LayoutContentWrapper>
        <div id="mdm-access" style={{ display: "none", paddingTop: "10px" }}>
          <LayoutContentWrapper
            style={{ height: "25vh", padding: "0px 20px 10px 35px " }}
          >
            <LayoutContent style={{ padding: "0", border: 0 }}>
              <Row>
                <Col span={24}>
                  <Tabs type="card" defaultActiveKey="1">
                    <TabPane tab="MDM Access" key="1">
                      <Row>
                        {mdmAccess.map(role => (
                          <Col span={5}>
                            <SelectButton
                              radio="yes"
                              isSelected={role.IsSelected}
                              keys={role.RoleId}
                              value={role.RoleName}
                            />
                          </Col>
                        ))}
                      </Row>
                    </TabPane>
                  </Tabs>
                </Col>
              </Row>
            </LayoutContent>
          </LayoutContentWrapper>
        </div>
        <div style={{ padding: "25px", float: "right" }}>
          <Button
            type="default"
            size="default"
            style={primaryButton}
            onClick={this.showConfirm}
          >
            SAVE
          </Button>

          <Button
            type="default"
            size="default"
            style={cancelStyle}
            onClick={this.reset}
          >
            CANCEL
          </Button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    defaultbuyingOrg: state.BuyingOrg.buyingOrgs,
    defaultMmsRole: state.MmsRole.mmsRole || []
  };
}

export default connect(mapStateToProps, {
  saveUser
})(EditRole);

// export default Form.create()(saveRoleUser);
// export defau.lt EditRole;
