import React from "react";
import ContractDetails from "./ContractDetails/";
import ClientDetails from "./ClientDetails/";
import ContactDetails from "./ContactDetails";
import { Form, Collapse, Icon, Row, Col, Select } from "antd";
import { ClientsDetails } from "../../../components/uielements/styles/client.style";

import Button from "../../../components/uielements/button";

import basicStyle from "../../../config/basicStyle";
import "antd/dist/antd.css";
import "./clients.css";

import LayoutContentWrapper from "../../../components/utility/layoutWrapper";
import LayoutContent from "../../../components/utility/layoutContent";


const { Panel } = Collapse;
const Option = Select.Option;

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

const cancelStyle = {
  width: "150px",
  marginLeft: "10px",
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

const actionBtnStyle = {
  padding: "25px",
  position: "fixed",
  float: "right",
  top: "85%",
  display: "flex",
  left: "55%"
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

const selectStyle = {
    borderRadius: "35px",
    backgroundColor: "rgb(249, 249, 249)",
    border: "0.5px solid #3a3a3a"
}
class ClientHome extends React.Component {
  state = {
    openPanel: "1"
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

  handleChange = (value) => {
    console.log(`selected ${value}`);
  }
  
  handleBlur = () => {
    console.log('blur');
  }
  
  handleFocus = () =>  {
    console.log('focus');
  }

  render() {
    const { rowStyle, gutter } = basicStyle;

    return (
       
      <LayoutContentWrapper style={{ padding: "25px 25px 0 35px " }}>
        <LayoutContent
          style={{ padding: "0", border: 0, background: "transparent"}}
        >
          <Row style={rowStyle} gutter={gutter} justify="start">
            <Col span={8}>
              Parent Client : American Express
             
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

const ClientDetailsForm = Form.create({ name: "client_form" })(ClientHome);

export default ClientDetailsForm;
