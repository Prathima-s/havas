import React from "react";
import LayoutWrapper from "../../components/utility/layoutWrapper";
import { ClientsDetails } from "../../components/uielements/styles/client.style";
import { Button } from "antd";
import { Select } from "antd";
import "./home.css";
// import actions from "../../redux/mail/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import UserList from "./fakeData";
import SearchIcon from "../../image/icons/Search.svg";
import "../App/commonStyle";

// const { userSearch, usersLists } = actions;
const Option = Select.Option;

class DesktopView extends React.Component {
  render() {
    return (
      <ClientsDetails>
        <LayoutWrapper className="isoCheckoutPage">
          <div className="welcomeText">
            <p>Welcome Johnson, have a good day!</p>
          </div>
          <div className="layoutBox">
            <p>Search by User Name</p>
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

            <div className="searchButton">
              {/* <SearchButton /> */}
              <Button type="primary">
                <img
                  src={SearchIcon}
                  style={{ width: "15px", "background-color": "#00AED0" }}
                  alt="search"
                />
                <Link to={"/dashboard/EditRole"}>Search</Link>
              </Button>
            </div>
            <div className="userButton">
              {UserList.map(user => (
                <Button value={user.id}>
                  {user.name}
                  <Link to={"/dashboard/Contacts"}></Link>
                </Button>
              ))}
            </div>
          </div>
        </LayoutWrapper>
      </ClientsDetails>
    );
  }
}

// function mapStateToProps(state) {
//   console.log("state.Users.userList", state.Users.usersList);
//   return {
//     userList: state.Users.usersList
//   };

// }

export default connect()(DesktopView);
// mapStateToProps,
// {
//   usersLists,
//   userSearch
// }
