import React from "react";
// import ClientSelect from "../../../components/clients/clientSelect";
import Box from "../../../../components/utility/box";
// import BillingForm from './billing-form';
// import OrderInfo from './order-info';
import { ClientsDetails } from "../../../../components/uielements/styles/client.style";
// import { Tabs } from "antd";
import { Row, Col, Form, Modal, Tabs, Button } from "antd";
import LayoutContentWrapper from "../../../../components/utility/layoutWrapper";
import LayoutContent from "../../../../components/utility/layoutContent";
import ContactData from "./contactData";
// import ContactInputData from './contactInputData';
import DeleteIcon from "../../../../image/icons/delete.svg";
import EditIcon from "../../../../image/icons/edit.svg";
import CopyIcon from "../../../../image/icons/copy.svg";
import AddIcon from "../../../../image/icons/add.svg";

const label = "Text 1";
const label1 = "Text 2";
const label2 = "Text 3";
const label3 = "Text 4";
const { TabPane } = Tabs;

const primaryButton = {
  width: "150px",
  backgroundColor: "#00AED0",
  borderColor: "#00AED0",
  borderRadius: "30px",
  color: "white"
};

const actionBtnStyle = {
  padding: "25px",
  position: "relative",
  float: "left",
  top: "85%",
  display: "flex",
  left: "55%"
};
const cancelStyle = {
  width: "150px",
  marginLeft: "10px",
  backgroundColor: "black",
  borderColor: "black",
  borderRadius: "30px",
  color: "white"
};

const imageStyle = {
  width: "12px",
  height: "12px",
  position: "relative",
  transform: "translateX(50%)",
  top: "-2px"
};

const selectValue = [
  {
    key: 1,
    value: "one"
  },
  {
    key: 2,
    value: "two"
  },
  {
    key: 3,
    value: "three"
  },
  {
    key: 4,
    value: "four"
  },
  {
    key: 5,
    value: "five"
  }
];

class ContactDetails extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: "Contact 1", content: "Content of Tab Pane 1", key: "1" }
      // { title: "Tab 2", content: "Content of Tab Pane 2", key: "2" }
    ];
    this.state = {
      activeKey: panes[0].key,
      panes
    };
  }
  onChange = activeKey => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: "Contact", content: "New Tab Pane", key: activeKey });
    this.setState({ panes, activeKey });
  };

  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };
  render() {
    console.log(this.props);
    const { form } = this.props;
    return (
      <ClientsDetails>
        <LayoutContent style={{ padding: "0", border: 0 }}>
          <div>
            <Row>
              <Col span={24} style={{ paddingBottom: "20px" }}>
                <div style={{ marginBottom: 16 }}>
                  <Button
                    onClick={this.add}
                    style={{
                      backgroundColor: "#00AED0",
                      borderRadius: "35px",
                      color: "#fff"
                    }}
                  >
                    Add Contact
                    <img src={AddIcon} style={imageStyle} alt="add" />
                  </Button>
                  <div style={{ float: "right" }}>
                    <Button
                      style={{
                        backgroundColor: "#00AED0",
                        borderRadius: "35px",
                        color: "#fff",
                        marginLeft: "10px"
                      }}
                    >
                      Edit
                      <img src={EditIcon} style={imageStyle} alt="edit" />
                    </Button>
                    <Button
                      style={{
                        backgroundColor: "#00AED0",
                        borderRadius: "35px",
                        color: "#fff",
                        marginLeft: "10px"
                      }}
                    >
                      Copy to New
                      <img src={CopyIcon} style={imageStyle} alt="copy" />
                    </Button>
                    <Button
                      style={{
                        backgroundColor: "#00AED0",
                        borderRadius: "35px",
                        color: "#fff",
                        marginLeft: "10px"
                      }}
                    >
                      Delete
                      <img src={DeleteIcon} style={imageStyle} alt="delete" />
                    </Button>
                  </div>
                </div>

                <Tabs
                  hideAdd
                  onChange={this.onChange}
                  activeKey={this.state.activeKey}
                  type="editable-card"
                  onEdit={this.onEdit}
                  onTabClick={this.onTabClick}
                >
                  {this.state.panes.map(pane => (
                    <TabPane tab={pane.title} key={pane.key}>
                      {/* // <TabPane tab= {<ContactInputData/>} key={pane.key}> */}
                      <ContactData form={form} />
                    </TabPane>
                  ))}
                </Tabs>
              </Col>
            </Row>

            <Row>
              <div style={actionBtnStyle}>
                <Button htmlType="submit" size="default" style={primaryButton}>
                  SAVE
                </Button>

                <Button htmlType="button" size="default" style={cancelStyle}>
                  CANCEL
                </Button>
              </div>
            </Row>
          </div>
        </LayoutContent>
        {/* </LayoutContentWrapper> */}
      </ClientsDetails>
    );
  }
}

export default ContactDetails;
