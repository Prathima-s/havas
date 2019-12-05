import React from "react";
import ClientSelect from "../../../components/clients/clientSelect";

import { ClientsDetails } from "../../../components/uielements/styles/client.style";
import { Tabs } from "antd";
import { Row, Col } from "antd";
import LayoutContentWrapper from "../../../components/utility/layoutWrapper";
import LayoutContent from "../../../components/utility/layoutContent";

const { TabPane } = Tabs;

class ContactDetails extends React.Component {
  render() {
    return (
      <ClientsDetails>
        {/* <ClientSelect txtLabel = {label}  selectValue = {selectValue}/>
          <ClientSelect txtLabel = {label1}  selectValue = {selectValue}/>
          <ClientSelect txtLabel = {label2}  selectValue = {selectValue}/>
          <ClientSelect txtLabel = {label3}  selectValue = {selectValue}/> */}
        {/* <div className="card-container">
    <Tabs type="card">
      <TabPane tab="Tab Title 1" key="1">
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
      </TabPane>
      <TabPane tab="Tab Title 2" key="2">
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
      </TabPane>
      <TabPane tab="Tab Title 3" key="3">
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
      </TabPane>
    </Tabs>
  </div> */}

        <LayoutContentWrapper style={{ padding: "25px 20px 0 35px " }}>
          <LayoutContent style={{ padding: "0", border: 0 }}>
            <div>
              <Row>
                <Col span={24} style={{ paddingBottom: "20px" }}>
                  <Tabs
                    defaultActiveKey="0"
                    onChange={this.callback}
                    type="card"
                  >
                    <TabPane tab="Contact 1" key="0">
                      <ClientSelect />
                    </TabPane>
                    <TabPane tab="Contact 2" key="1">
                      <Row>
                        <ClientSelect />
                      </Row>
                    </TabPane>
                    <TabPane tab="Contact 3" key="2">
                      <Row>
                        <ClientSelect />
                      </Row>
                    </TabPane>
                    <TabPane tab="Contact 4" key="3">
                      <Row>
                        <ClientSelect />
                      </Row>
                    </TabPane>
                  </Tabs>
                </Col>
              </Row>
            </div>
          </LayoutContent>
        </LayoutContentWrapper>
      </ClientsDetails>
    );
  }
}

export default ContactDetails;
