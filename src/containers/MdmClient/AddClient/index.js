import React from "react";
import ContractDetails from "./ContractDetails/";
import ClientDetails from "./ClientDetails/";
import ContactDetails from "./ContactDetails";
import { Form, Collapse, Icon, Row, Col, Select } from "antd";
// import { ClientsDetails } from "../../../components/uielements/styles/client.style";
import { connect } from "react-redux";

// import Button from "../../../components/uielements/button";

import basicStyle from "../../../config/basicStyle";
import "antd/dist/antd.css";
import "./clients.css";

import LayoutContentWrapper from "../../../components/utility/layoutWrapper";
import LayoutContent from "../../../components/utility/layoutContent";
import actions from "../../../redux/clients/actions";
import { getParam } from "../../../config";

const { Panel } = Collapse;
// const Option = Select.Option;
const { getAllClients, searchMasterClientData } = actions;

const customPanelStyle = {
  background: "#F1F0F0",
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: "hidden"
};

const customColStyle = {
  textAlign: "right"
};

const labelStyle = {
  color: "#00AED0",
  textDecoration: "none",
  backgroundColor: "transparent",
  outline: "none",
  cursor: "pointer",
  fontWeight: "bold",
  textTransform: "uppercase"
};

class ClientHome extends React.Component {
  state = {
    openPanel: "1",
    clientsList: []
  };

  onChange = key => {
    let header = document.querySelectorAll(".ant-collapse-header");

    if (key === "expand")
      //header[0].click();
      header[1].click();
    //header[2].click();
    this.setState({
      openPanel: ["1", "2", "3"]
    });
    if (key === "collapse")
      this.setState({
        openPanel: []
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleChange = value => {
    if (!!value) {
      let { clientsList } = this.state;
      let res = clientsList.filter(item => item.ClientId === value).shift();

      this.props.searchMasterClientData({
        clientId: value,
        accessId: res.AccessId,
        buyingOrganisationIds: getParam("globalBuyOrgId")
      });
    }
    console.log(`selected ${value}`);
    console.log("clientsList");
  };

  handleBlur = () => {
    console.log("blur");
  };

  handleFocus = () => {
    console.log("focus");
  };

  componentDidMount() {
    let { clientsList } = this.props;
    console.log("hi");
    if (clientsList) {
      this.setState({
        clientsList: clientsList
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.clientsList) {
      this.setState({
        clientsList: nextProps.clientsList
      });
    }
  }

  render() {
    const { rowStyle, gutter } = basicStyle;
    const { clientsList } = this.state;

    return (
      <LayoutContentWrapper style={{ padding: "25px 25px 0 35px " }}>
        <LayoutContent
          style={{ padding: "0", border: 0, background: "transparent" }}
        >
          <Row style={rowStyle} gutter={gutter} justify="start">
            <Col span={8}>
              Parent Client :
              <span>
                <Select
                  showSearch
                  style={{
                    width: 200,
                    marginLeft: "10px",
                    marginBottom: "10px"
                  }}
                  placeholder="Select a parent client"
                  optionFilterProp="children"
                  onChange={this.handleChange}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {clientsList.map(clients => (
                    <Select.Option
                      key={clients.ClientId}
                      value={clients.ClientId}
                    >
                      {clients.ClientName}
                    </Select.Option>
                  ))}
                </Select>
              </span>
            </Col>

            <Col span={10}>
              <label style={labelStyle}>Copy Campaign</label>
            </Col>
            <Col span={6} style={customColStyle}>
              <label
                style={labelStyle}
                onClick={() => {
                  this.onChange("collapse");
                }}
              >
                {" "}
                COLLAPSE ALL{" "}
              </label>
              <label
                style={labelStyle}
                onClick={() => {
                  this.onChange("expand");
                }}
              >
                | EXPAND ALL{" "}
              </label>
            </Col>
          </Row>
          <Form layout="vertical" onSubmit={this.handleSubmit}>
            <Collapse
              bordered={true}
              // defaultActiveKey={this.state.openPanel}
              // destroyInactivePanel={true}
              defaultActiveKey={["1"]}
              expandIconPosition="right"
              expandIcon={({ isActive }) => (
                <Icon type="caret-up" rotate={isActive ? 180 : 0} />
              )}
            >
              <Panel
                header="Client Details"
                forceRender={true}
                key="1"
                style={customPanelStyle}
              >
                <ClientDetails form={this.props.form} />
              </Panel>
              <Panel
                header="Contact Details"
                forceRender={true}
                key="2"
                style={customPanelStyle}
              >
                <ContactDetails form={this.props.form} />
              </Panel>
              <Panel
                header="Contract Details"
                forceRender={true}
                key="3"
                style={customPanelStyle}
              >
                <ContractDetails />
              </Panel>
            </Collapse>
          </Form>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    clientsList: state.AllClientsList.allClientsList,
    masterClientData: state.MasterClientData.masterClientData
  };
}

const allClientList = connect(mapStateToProps, {
  getAllClients,
  searchMasterClientData
})(ClientHome);

// export default Form.create()(searchUser);

// const ClientDetailsForm = Form.create({ name: "client_form" })(ClientHome);

export default Form.create({ name: "client_form" })(allClientList);
