import React from "react";
import LayoutWrapper from "../../components/utility/layoutWrapper";
import { ClientsDetails } from "../../components/uielements/styles/client.style";
import {
  Button,
  Form,
  Row,
  Col,
  Select,
  // Input,
  message
} from "antd";
import "./home.css";
import actions from "../../redux/mail/actions";
import { connect } from "react-redux";
import SearchIcon from "../../image/icons/Search.svg";
import "../App/commonStyle";
import { Redirect } from "react-router";
import { getParam } from "../../config";

const FormItem = Form.Item;
const { userSearch } = actions;

class DesktopView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userList: [],
      // message: "Welcome Johnson, have a good day!",
      data: [],
      searchUser: {},
      value: undefined,
      redirect: false,
      selectedItems: [],
      userInfo: [],
      sessionItem: ""
    };
  }

  handleChange = selectedItems => {
    this.setState({
      selectedItems
    });
  };

  onPressEnter = () => {};

  handleOnClick = value => {
    let userDetail = this.props.form.getFieldValue("UserName");
    if (!!userDetail) {
      userDetail = this.state.userList
        .filter(x => x.UserName === userDetail)
        .shift();
      this.props.userSearch(userDetail);
    } else {
      message.destroy();
      message.warning("Please Select Users");
    }
  };

  componentDidMount() {
    let { userList, userInfo } = this.props;
    if (userList) {
      this.setState({
        userList: userList
      });
    }

    if (getParam("userSearch")) {
      const initValues = JSON.parse(getParam("userSearch"));
      this.setState({
        sessionItem: initValues
      });
    }

    if (!!userInfo) {
      this.setState({
        userInfo: userInfo || []
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userList) {
      this.setState({
        userList: nextProps.userList
      });
    }

    if (!!nextProps.userInfo) {
      this.setState({
        userInfo: nextProps.userInfo || []
      });
    }
  }

  // componentWillMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       message: ""
  //     });
  //   }, 5000);
  // }

  render() {
    const { userList, selectedItems } = this.state;
    const { getFieldDecorator } = this.props.form;
    const filteredOptions = userList.filter(o => !selectedItems.includes(o));

    if (this.state.redirect) {
      return (
        <Redirect
          push
          to={{
            pathname: "/dashboard/home/edit-role",
            state: { detail: this.state.searchUser }
          }}
        />
      );
    }
    return (
      <ClientsDetails>
        <LayoutWrapper className="isoCheckoutPage">
          <div className="layoutBox">
            <Row>
              <Col span={24}>
                <p>Search by User Name</p>
              </Col>
            </Row>

            <Row>
              <Col span={18}>
                <FormItem>
                  {getFieldDecorator("UserName")(
                    <Select
                      showSearch
                      placeholder="User Name"
                      style={{ width: 562 }}
                      defaultActiveFirstOption={false}
                      showArrow={true}
                      onChange={this.handleChange}
                      optionFilterProp="children"
                      // onMouseEnter={this.handleChange}
                    >
                      {filteredOptions.map(user => (
                        <Select.Option
                          key={user.UserName}
                          value={user.DisplayName}
                        >
                          {user.DisplayName}
                        </Select.Option>
                      ))}
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={6}>
                <div className="searchButton">
                  <Button type="primary" onClick={() => this.handleOnClick()}>
                    <img
                      src={SearchIcon}
                      style={{ width: "15px" }}
                      alt="search"
                    />
                    Search
                  </Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <FormItem>
                  {getFieldDecorator("UserName")(
                    <div className="userButton">
                      {userList.slice(0, 12).map(user => (
                        <Button
                          value={user.DisplayName}
                          key={user.UserName}
                          onClick={() => this.handleOnClick()}
                        >
                          {user.DisplayName}
                        </Button>
                      ))}
                    </div>
                  )}
                </FormItem>
              </Col>
            </Row>
          </div>
        </LayoutWrapper>
      </ClientsDetails>
    );
  }
}

function mapStateToProps(state) {
  return {
    userList: state.Users.usersList,
    userInfo: state.UserInfos.usersInfo
  };
}

const searchUser = connect(mapStateToProps, { userSearch })(DesktopView);

export default Form.create()(searchUser);
