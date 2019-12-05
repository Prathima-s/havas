import React from "react";
import LayoutWrapper from "../../components/utility/layoutWrapper";
import { ClientsDetails } from "../../components/uielements/styles/client.style";
import { Button, Form, Row, Col, message, Select } from "antd";
import "../Home/home.css";
import actions from "../../redux/mail/actions";
import { connect } from "react-redux";
// import SearchIcon from "../../image/icons/Search.svg";
import "../App/commonStyle";
import { Redirect } from "react-router";
import { getParam } from "../../config";
// import MailAction from "../../components/mail/singleMailActions";
import { Link } from "react-router-dom";
import "./client.css";
import ClientList from "./fakeData";
import clientActions from "../../redux/editRole/actions";

// const FormItem = Form.Item;
const { userSearch } = actions;
const { searchclientList } = clientActions;
const { Option } = Select;

class MdmClient extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userList: [],
      message: "Welcome Johnson, have a good day!",
      data: [],
      searchUser: {},
      value: undefined,
      redirect: false,
      selectedItems: [],
      userInfo: [],
      sessionItem: "",
      clientSearch: {},
      clientsList: []
    };
  }

  handleChange = selectedItems => {
    this.setState({
      selectedItems
    });
  };

  onChange = value => {
    console.log("value", value);
    this.setState({ value });
  };

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

  // getClient = (id) => {
  //   if(!!id) {
  //   fetch('http://dev.planitservices.com/api/ClientInfo/GetBuyingOrganisationClients/'+ id).then(result => {
  //     console.log(result);
  //   });
  // }
  // };

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

    if (!!getParam("globalBuyOrgId")) {
      let glbBuyOrgId = getParam("globalBuyOrgId");

      this.props.searchclientList(glbBuyOrgId);
      // this.setState({
      //   clientsList: clientsList || []
      // });
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

    if (!!nextProps.clientsList) {
      this.setState({
        clientsList: nextProps.clientsList || []
      });
    }
  }

  render() {
    const { clientsList } = this.state;

    if (this.state.redirect) {
      return (
        <Redirect
          push
          to={{
            pathname: "/dashboard/clients/add-edit",
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
                <p>Client</p>
              </Col>
            </Row>

            <Row>
              <Col span={14}>
                <Select
                  showSearch
                  style={{ width: 438 }}
                  // value={this.state.value}
                  dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                  placeholder="Select Client Name"
                  allowClear
                  // multiple={true}
                  // searchValue
                  // treeDefaultExpandAll
                  onChange={this.onChange}
                >
                  {clientsList.map(clients => (
                    <Option
                      value={clients.ClientName}
                      // title="American Express"
                      key={Math.random()}
                      // defaultValue="American Express"
                    >
                      {clients.ClientName}
                    </Option>
                  ))}
                  {/* <TreeNode
                    value="American Express"
                    title="American Express"
                    key="0-1"
                    defaultValue="American Express"
                  > */}
                  {/* <TreeNode
                      value="American Express 1"
                      title="American Express 1"
                      key="random"
                    />
                    <TreeNode
                      value="American Express 2"
                      title="American Express 2"
                      key="random1"
                    />
                  </TreeNode>
                  <TreeNode
                    value="American Express ABC"
                    title="American Express ABC"
                    key="0-2"
                  >
                    <TreeNode
                      value="American Express ABC 1"
                      title="American Express ABC 1"
                      key="random2"
                    />
                    <TreeNode
                      value="American Express ABC 2"
                      title="American Express ABC 2"
                      key="random3"
                    />
                  </TreeNode>
                  <TreeNode value="Express XYZ" title="Express XYZ" key="0-3">
                    <TreeNode
                      value="Express XYZ 1"
                      title="Express XYZ 1"
                      key="random4"
                    />
                    <TreeNode
                      value="Express XYZ 2"
                      title="Express XYZ 2"
                      key="random5"
                    /> */}
                  {/* </TreeNode> */}
                </Select>
              </Col>
              <Col span={4}>
                <div className="searchButton">
                  <Button
                    type="primary"
                    style={{ width: 130 }}
                    // onClick={() => this.handleOnClick()}
                  >
                    <Link
                      to="/dashboard/clients/edit"
                      style={{ padding: "0 20px" }}
                    >
                      SEARCH
                    </Link>
                  </Button>
                </div>
              </Col>
              <Col span={4}>
                <div className="searchButton">
                  <Button
                    type="primary"
                    style={{ width: 130, marginLeft: "55px" }}
                    // onClick={() => this.handleOnClick()}
                  >
                    <Link
                      to="/dashboard/clients/add"
                      style={{ padding: "0 10px" }}
                    >
                      ADD CLIENT
                    </Link>
                  </Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div className="userButton">
                  {ClientList.map((user, index) => (
                    <Button value={user.ClientName} key={index} maxLength={10}>
                      {user.ClientName}
                    </Button>
                  ))}
                </div>
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
    userInfo: state.UserInfos.usersInfo,
    clientsList: state.EditRole.clientsList
  };
}

const searchUser = connect(mapStateToProps, { userSearch, searchclientList })(
  MdmClient
);

export default Form.create()(searchUser);
