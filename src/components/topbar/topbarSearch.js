import React, { Component } from "react";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import { Select } from "antd";
import "./topbarSearch.css";
import { saveParam, getParam, removeParam } from "../../config";
import clientActions from "../../redux/editRole/actions";

const Option = Select.Option;
const { searchclientList } = clientActions;

class TopbarSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jour: [],
      jours: [],
      joursId: [],
      buyingOrgList: [],
      setBuyOrgId: []
    };
    // this.handleJourChange = this.handleJourChange.bind(this);
  }
  componentDidMount() {
    let { buyingOrgList } = this.props;
    if (buyingOrgList) {
      this.setState({
        buyingOrgList: buyingOrgList
      });
    }
    if (!!getParam("globalBuyOrgId")) {
      this.setState({
        setBuyOrgId: getParam("globalBuyOrgId")
          .split(",")
          .map(Number)
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!!nextProps.buyingOrgList) {
      this.setState({
        buyingOrgList: nextProps.buyingOrgList
      });
    }
  }

  // if (jour.includes("all")) {
  //   this.setState(prevState => ({
  //     jour: prevState.jours.map(item => item.jour)
  //   }));
  // } else {
  //   this.setState({
  //     jour
  //   });
  // }

  handleChange = id => {
    if (!!id) {
      removeParam("globalBuyOrgId");
      this.setState(
        {
          setBuyOrgId: id
        },
        () => {
          this.props.searchclientList(id);
          saveParam("globalBuyOrgId", id);
        }
      );
    }
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };
  handleBlur = () => {
    setTimeout(() => {
      this.setState({
        visible: false
      });
    }, 200);
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  render() {
    let { buyingOrgList, setBuyOrgId } = this.state;
    const { modifyTopBar } = this.props;
    return (
      <div>
        <Select
          id="motif"
          name="motif"
          value={setBuyOrgId}
          mode="multiple"
          disabled={modifyTopBar}
          showArrow
          allowClear
          showSearch
          style={{ width: "350px" }}
          placeholder="Select Buying Organisation"
          onChange={this.handleChange}
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          <Option value="all" label={this.state.buyingOrgList}>
            Select All
          </Option>
          {buyingOrgList.map(user => (
            <Option
              key={user.BuyingOrganizationId}
              value={user.BuyingOrganizationId}
            >
              {user.BuyingOrganizationName}
            </Option>
          ))}
        </Select>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    buyingOrgList: state.EditRole.buyingOrgs
  };
}

export default connect(mapStateToProps, {
  searchclientList
})(TopbarSearch);

// export default connect(state => ({
//   ...state.App.toJS(),
//   customizedTheme: state.ThemeSwitcher.toJS().topbarTheme
// }))(TopbarSearch);
