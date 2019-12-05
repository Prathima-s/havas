import React, { Component } from "react";
import { connect } from "react-redux";
import authAction from "../../redux/auth/actions";
import { Select } from "antd";

const { logout } = authAction;
const { Option } = Select;

const rowStyle = {
  border: "none"
};

class TopbarUser extends Component {
  constructor(props) {
    super(props);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
    this.hide = this.hide.bind(this);
    this.state = {
      visible: false
    };
  }
  hide() {
    this.setState({ visible: false });
  }
  handleVisibleChange() {
    this.setState({ visible: !this.state.visible });
  }
  handleChange(value) {
    console.log(`selected ${value}`);
  }

  render() {
    return (
      <div>
        <div className="isoImgWrapper">
          <span className="userActivity online">JW</span>
        </div>
        <div className="isoImgText">
          <span>Johnson</span>
          {/* <span>(Administrator)</span> */}
          <span>
            {/* <Dropdown overlay={rolemenu} trigger={["click"]}>
                <a className="ant-dropdown-link" href="#">
                 (Administrator) <Icon type="caret-down" theme="filled" />
                </a>
              </Dropdown> */}
            <Select
              defaultValue="MDM Admin"
              style={rowStyle}
              onChange={this.handleChange}
            >
              <Option value="administrator">Administrator</Option>
              <Option value="Planner Buyer">MDM Admin</Option>
              <Option value="Trading Manager">Trading Manager</Option>
            </Select>
          </span>
          <span style={{ marginLeft: "25px" }}>|</span>
        </div>
      </div>
    );
  }
}
export default connect(null, { logout })(TopbarUser);
