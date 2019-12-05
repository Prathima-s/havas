import React from "react";
import { ClientsDetails } from "../../../../components/uielements/styles/client.style";
import { Row, Col, Tabs, Button } from "antd";
import LayoutContent from "../../../../components/utility/layoutContent";
import ContactData from "./contactData";
// import ContactInputData from './contactInputData';
import DeleteIcon from "../../../../image/icons/delete.svg";
import EditIcon from "../../../../image/icons/edit.svg";
import CopyIcon from "../../../../image/icons/copy.svg";
import AddIcon from "../../../../image/icons/add.svg";

const { TabPane } = Tabs;

const primaryButton = {
  width: "150px",
  backgroundColor: "#00AED0",
  borderColor: "#00AED0",
  borderRadius: "30px",
  color: "white",
  marginLeft: "10px"
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
                <div style={{ marginBottom: 16, marginLeft: 10 }}>
                  <Button
                    onClick={this.add}
                    style={{
                      backgroundColor: "#00AED0",
                      borderRadius: "35px",
                      color: "#fff"
                    }}
                  >
                    Create Contact
                    <img src={AddIcon} style={imageStyle} alt="add" />
                  </Button>
                </div>
                <Row>
                  <Col span={24} style={{ paddingBottom: "20px" }}>
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
                        onClick={this.add}
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
                  </Col>
                </Row>
                <Tabs
                  hideAdd
                  onChange={this.onChange}
                  activeKey={this.state.activeKey}
                  type="editable-card"
                  onEdit={this.onEdit}
                  onTabClick={this.onTabClick}
                  style={{ paddingLeft: "10px" }}
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

                <Button htmlType="submit" size="default" style={cancelStyle}>
                  PUBLISH
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
