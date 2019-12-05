import React from 'react';
import ContractDetails from './ContractDetails';
import ClientDetails from './ClientDetails';
import ContactDetails from './ContactDetails';
import { Collapse, Icon, Button } from 'antd';
import 'antd/dist/antd.css';
import "./clients.css";

import LayoutContentWrapper from "../../components/utility/layoutWrapper";
import LayoutContent from "../../components/utility/layoutContent";

const { Panel } = Collapse;

const customPanelStyle = {
    background: '#F1F0F0',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
  };


class ClientHome extends React.Component {
    state = {
        openPanel: "1"
    };

    onChange = key => {
        if (key === 'expand')
            this.setState({
                openPanel: ['1', '2', '3']
            });
        if (key === 'collapse')
            this.setState({
                openPanel: []
            });
    };
          
  render() {
    return (
        <LayoutContentWrapper style={{ padding: "25px 20px 0 35px " }}>
            <LayoutContent style={{ padding: "0", border: 0 }}>
                <div>
                    Header text <Button
                    type="primary"
                    onClick={() => {
                      this.onChange('expand');
                    }}
                  > expand </Button>
                  <Button
                    type="primary"
                    onClick={() => {
                      this.onChange('collapse');
                    }}
                  > collapse </Button>
                </div>
                <Collapse
                    bordered={true}
                    defaultActiveKey={this.state.openPanel} 
                    // destroyInactivePanel={true}
                    // defaultActiveKey={['1']}
                    expandIconPosition='right'
                    expandIcon={({ isActive }) => <Icon type="caret-up" rotate={isActive ? 180 : 0} />}
                >
                    <Panel header="Client Details" forceRender={true} key="1" style={customPanelStyle}>
                        <ClientDetails />
                    </Panel>
                    <Panel header="Contact Details" forceRender={true} key="2" style={customPanelStyle}>
                        <ContactDetails />
                    </Panel>
                    <Panel header="Contract Details" forceRender={true} key="3" style={customPanelStyle}>

                        <ContractDetails />
                    </Panel>
                </Collapse>
            </LayoutContent>
        </LayoutContentWrapper>
    );
  }
}
export default ClientHome;
