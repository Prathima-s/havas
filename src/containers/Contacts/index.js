import React, { Component } from "react";
import LayoutContentWrapper from "../../components/utility/layoutWrapper";
import LayoutContent from "../../components/utility/layoutContent";
import Breadcrumb from "../../components/uielements/breadcrumb";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import ClientSearchBox from "../../components/clientSearchBox/clientSearchBox";
import SearchButton from "../../components/searchbutton/index";
import Tabs, { TabPane } from "../../components/uielements/tabs";
import "./blankPage.css";
import Button from "../../components/uielements/button";
import SelectButton from '../../components/editRole/selectButton';
import { buyingOrganisation, userRole } from "./fakeData";
import { Link } from 'react-router-dom';
import SearchIcon from '../../image/icons/Search.svg';
import "../App/commonStyle";
import { Select } from "antd";
import UserList from '../Mail/fakeData';

const Option = Select.Option;

const styling = {
  background: "transparent",
  border: "1px solid black",
  height: "40px",
  lineHeight: "40px",
  fontSize: "13px",
  borderRadius: "30px",
  margin: "10px",
  width: "215px",
  textAlign: "center"
};

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

class EditRole extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userRole: [],
      isMdmAccessVisible: false
    };
    this.callback = this.callback.bind(this);
    this.mdmAccessVisible = this.mdmAccessVisible.bind(this);
  }
  callback(key) {
   
    if (key != 2)
      document.getElementById('mdm-access').style.display = 'none';
    else {
      if (this.state.isMdmAccessVisible) {
        document.getElementById('mdm-access').style.display = 'block';
      }
    }
  }

  mdmAccessVisible(currentRole) {
    if (currentRole['MDM Admin'] || currentRole['MDM View']) {
      document.getElementById('mdm-access').style.display = 'block';
      this.setState({
        isMdmAccessVisible: true
      })
    } else {
      document.getElementById('mdm-access').style.display = 'none';
      this.setState({
        isMdmAccessVisible: false
      })
    }
  }

  componentDidMount() {
    console.log(userRole);
    let roles = userRole.filter(
      (thing, index, self) =>
        index === self.findIndex(t => t.RoleId === thing.RoleId)
    );
    console.log(roles);

    this.setState({ userRole: roles });
  }

  render() {
    let { userRole } = this.state;
    return (
      <div>
        {/* <Breadcrumb style={{ padding: "25px" }}>
          <Breadcrumb.Item>Administrator</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Home</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item style={{ fontWeight: "bold" }}>
            Edit Roles
          </Breadcrumb.Item>
        </Breadcrumb> */}
        <LayoutContentWrapper style={{ paddingBottom: "0", paddingTop: 0 }}>
          <LayoutContent>
            <div>
              <Row>
                <Col span={24}>Search by User Name</Col>
              </Row>
              <Row>
                <Col span={12}>
                  {/* <ClientSearchBox /> */}
                  <Select
              showSearch
              className="userSearch"
              placeholder="User Name"
              optionFilterProp="children"
            >
              <Option key="" value="">
                --Select Users --
              </Option>
              {UserList.map(user => (
                <Option key={user.id} value={user.id}>
                  {" "}
                  {user.name}
                </Option>
              ))}
            </Select>
                </Col>
                <Col span={12}>
                <div className="searchButton">
              {/* <SearchButton /> */}
              <Button type="primary"><img src={SearchIcon} style={{ "width": "15px" }} alt="search" />
                  <Link to={'/dashboard/home/editRole'}>Search</Link>
                </Button>
            </div>
                </Col>
              </Row>
            </div>
          </LayoutContent>
        </LayoutContentWrapper>
        <LayoutContentWrapper
          style={{ height: "50vh", paddingTop: "25px", paddingBottom: "10px" }}
        >
          <LayoutContent style={{ padding: "0", border: 0 }}>
            <div>
              <Row>
                <Col span={24}>
                  <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="Buying Organization" key="1">
                      <Row>
                        {buyingOrganisation.map(buyorg => (
                          <Col span={5}>
                            {/* <div style={styling}>Acumen</div> */}
                            <SelectButton radio="no" mdmSelect = {this.mdmAccessVisible} keys={buyorg.BuyingOrganizationId}
                                value={buyorg.BuyingOrganizationName}  />
                            {/* <div class="formrow">
                              <input
                                class="checkbox"
                                type="checkbox"
                                name="check1"
                                id="check1"
                                key={buyorg.BuyingOrganizationId}
                                value={buyorg.BuyingOrganizationId}
                              />
                              <label class="checklabel" for="check1">
                                {buyorg.BuyingOrganizationName}
                              </label>
                            </div> */}
                          </Col>
                        ))}
                      </Row>
                    </TabPane>
                    <TabPane tab="MMS+ Roles" key="2">
                      <Row>
                        {userRole.map(role => (
                          <Col span={5}>
                             <SelectButton radio="yes" mdmSelect = {this.mdmAccessVisible}  keys={role.RoleId} value={role.RoleName} />
                            {/* <div
                              style={styling}
                              key={role.RoleId}
                              value={role.RoleId}
                            >
                              {" "}
                              {role.RoleName}
                            </div> */}
                          </Col>
                        ))}
                        {/* <Col span={5}> <div style={styling}>MDM Admin</div> </Col>
                        <Col span={5}> <div style={styling}>Finance Controller</div> </Col>
                        <Col span={5}> <div style={styling}>MDM View</div> </Col>
                        <Col span={5}> <div style={styling}>Billing Officer</div> </Col> */}
                      </Row>
                      {/* <Row>
                        <Col span={5}> <div style={styling}>Accounts Manager</div> </Col>
                        <Col span={5}> <div style={styling}>TV Planner</div> </Col>
                        <Col span={5}> <div style={styling}>Planner / Buyer</div> </Col>
                        <Col span={5}> <div style={styling}>TV Manager</div> </Col>
                        <Col span={5}> <div style={styling}>Bussiness Director</div> </Col>
                      </Row>
                      <Row>
                        <Col span={5}> <div style={styling}>TV Manager Lite</div> </Col>
                        <Col span={5}> <div style={styling}>Trading Manager</div> </Col>

                      </Row> */}
                    </TabPane>
                    <TabPane tab="CID Roles" key="3">
                      <Row>
                        <Col span={5}>
                          {" "}
                          <div style={styling}>CID Manager</div>{" "}
                        </Col>
                        <Col span={5}>
                          {" "}
                          <div style={styling}>GBD</div>{" "}
                        </Col>
                        <Col span={5}>
                          {" "}
                          <div style={styling}>Senior Management</div>{" "}
                        </Col>
                        <Col span={5}>
                          {" "}
                          <div style={styling}>Executive</div>{" "}
                        </Col>
                        <Col span={5}>
                          {" "}
                          <div style={styling}>Time Forcaster</div>{" "}
                        </Col>
                      </Row>
                      <Row>
                        <Col span={5}>
                          {" "}
                          <div style={styling}>Forcaster Manager</div>{" "}
                        </Col>
                      </Row>
                    </TabPane>
                  </Tabs>
                </Col>
              </Row>
            </div>
          </LayoutContent>
        </LayoutContentWrapper>
        <div id="mdm-access" style={{ display: "none" }}>
          <LayoutContentWrapper
            style={{ height: "25vh", paddingTop: "0", paddingBottom: "10px" }}
          >
            <LayoutContent style={{ padding: "0", border: 0 }}>
              <Row>
                <Col span={24}>
                  <Tabs defaultActiveKey="1">
                    <TabPane tab="MDM Access" key="1">
                      <Row>
                        <Col span={5}>
                          {" "}
                          <div style={styling}>Client</div>{" "}
                        </Col>
                        <Col span={5}>
                          {" "}
                          <div style={styling}>Media Owner</div>{" "}
                        </Col>
                      </Row>
                    </TabPane>
                  </Tabs>
                </Col>
              </Row>
            </LayoutContent>
          </LayoutContentWrapper>
        </div>
        <div style={{ padding: "25px", float: "right" }}>
          <Button type="default" size="default" style={primaryButton}>
            SAVE
          </Button>
          <Button type="default" size="default" style={cancelStyle}>
            CANCEL
          </Button>
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   const { productQuantity, products } = state.Ecommerce.toJS();
//   return { productQuantity, products };
// }
export default EditRole;
