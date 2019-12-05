import React from "react";
// import Input from "../../../../components/uielements/input";
import { SelectOption } from "../../../../components/uielements/select";

import AutoComplete from "../../../../components/uielements/autoComplete";
// import Checkbox from '../../../components/uielements/checkbox';
import InputBox from "../../../../components/uielements/input-box";
import IntlMessages from "../../../../components/utility/intlMessages";
import {
  BillingFormWrapper,
  InputBoxWrapper
} from "../../../../components/uielements/styles/client.style";
import { connect } from "react-redux";
import LayoutWrapper from "../../../../components/utility/layoutWrapper";
import { ClientsDetails } from "../../../../components/uielements/styles/client.style";
import { Button, Form, Row, Col, Select, Input, Tabs } from "antd";
import ContactAddress from "./contactAddress";
import '../clients.css';
// import { ClientsDetails } from "../../../../components/uielements/styles/client.style";
import AddIcon from "../../../../image/icons/add.svg";

// const Option = SelectOption;
const { Option } = Select;
const FormItem = Form.Item;
const InputGroup = Input.Group;
const { TabPane } = Tabs;
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

const imageStyle = {
  width: "12px",
  height: "12px",
  position: "relative",
  transform: "translateX(50%)",
  top: "-2px"
};

class ContactData extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: "Address 1", content: "Content of Tab Pane 1", key: "1" },
      // { title: "Tab 2", content: "Content of Tab Pane 2", key: "2" }
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
      dataSource: []
    };
  }
  
  handleOnChange = checkedValues => {};

  onChange = activeKey => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: "Address", content: "New Tab Pane", key: activeKey });
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
    const { form } = this.props;
    console.log(this.props);
    //  const { getFieldDecorator } = this.props.form;

    return (
      <ClientsDetails>
        <LayoutWrapper className="isoCheckoutPage">
          {/* <Form> */}
          <Row>
            <Col span={24}>
              <FormItem label="Buying Organisation">
                {form.getFieldDecorator("BuyingOrg")(
                  <Select
                    showSearch
                    placeholder="Select Buying Organisation"
                    style={{ width: 562 }}
                    // defaultActiveFirstOption={false}
                    showArrow={true}
                    multiple
                    //   onChange={this.handleChange}
                    // allowClear={true}
                    // onMouseEnter={this.handleChange}
                  >
                    <Option value="jack">Jack (100)</Option>
                    <Option value="lucy">Lucy (101)</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span={6}>
              <FormItem label="Billing Entity">
                {form.getFieldDecorator("BillingEntity")(
                  <Select
                    placeholder="Billing Entity"
                    // style={{ width: 562, 'paddingLeft': '10px' }}
                    // defaultActiveFirstOption={false}
                    showArrow={true}
                    style={{ marginLeft: "10px", width: "266px" }}
                  >
                    <Option value="jack">Jack (100)</Option>
                    <Option value="lucy">Lucy (101)</Option>
                  </Select>
                )}
              </FormItem>
            </Col>

            <Col span={6}>
              <FormItem label="VAT Status">
                {form.getFieldDecorator("VATStatus")(
                  <Select
                    placeholder="VAT Status"
                    style={{
                      marginLeft: "10px",
                      width: "266px",
                      marginTop: "-8px"
                    }}
                    // style={{ width: 562, 'paddingLeft': '10px' }}
                    // defaultActiveFirstOption={false}
                    showArrow={true}
                  >
                    <Option value="jack">Jack (100)</Option>
                    <Option value="lucy">Lucy (101)</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem label="VAT Reg.No">
                {form.getFieldDecorator("VATReg.No", {
                  rules: [
                    {
                      // required: true,
                      message: "Input something!"
                    }
                  ]
                })(<Input placeholder="VAT Reg.No" />)}
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem label="Type">
                {form.getFieldDecorator("Type")(
                  <Select
                    placeholder="Type"
                    style={{ marginLeft: "10px", width: "266px" }}
                    // style={{ width: 562, 'paddingLeft': '10px' }}
                    // defaultActiveFirstOption={false}
                    showArrow={true}
                  >
                    <Option value="jack">Jack (100)</Option>
                    <Option value="lucy">Lucy (101)</Option>
                  </Select>
                )}
              </FormItem>
            </Col>

            <Col span={6}>
              <FormItem label="Contact Person">
                {form.getFieldDecorator("ContactPerson", {
                  rules: [
                    {
                      // required: true,
                      message: "Input something!"
                    }
                  ]
                })(<Input placeholder="Contact Person" />)}
              </FormItem>
            </Col>

            <Col span={6}>
              <FormItem label="Position">
                {form.getFieldDecorator("Position", {
                  rules: [
                    {
                      // required: true,
                      message: "Input something!"
                    }
                  ]
                })(<Input placeholder="Position" />)}
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem label="Email">
                {form.getFieldDecorator("Email", {
                  rules: [
                    {
                      // required: true,
                      message: "Input something!"
                    }
                  ]
                })(<Input placeholder="Enter Email" />)}
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem label="Landline">
                {form.getFieldDecorator("Landline", {
                  rules: [
                    {
                      // required: true,
                      message: "Input something!"
                    }
                  ]
                })(<Input placeholder="Enter Landline" />)}
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem label="Mobile">
                {form.getFieldDecorator("Mobile", {
                  rules: [
                    {
                      // required: true,
                      message: "Input something!"
                    }
                  ]
                })(<Input placeholder="Enter Mobile" />)}
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem label="Fax">
                {form.getFieldDecorator("Fax", {
                  rules: [
                    {
                      // required: true,
                      message: "Input something!"
                    }
                  ]
                })(<Input placeholder="Enter Fax" />)}
              </FormItem>
            </Col>

            <Col span={24}>
              <div style={{ marginBottom: 16 }}>
                <Button
                  onClick={this.add}
                  style={{
                    backgroundColor: "#00AED0",
                    borderRadius: "35px",
                    color: "#fff"
                  }}
                >
                  Create Address
                  <img src={AddIcon} style={imageStyle} alt="add" />
                </Button>
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
                  <ContactAddress form={form} />
                    </TabPane>
                  ))}
                </Tabs> 
              {/* <ContactAddress form={form} /> */}
            </Col>
          </Row>
          {/* </Form> */}
        </LayoutWrapper>
      </ClientsDetails>
    );
  }
}

// function mapStateToProps(state) {
//   return {};
// }

// const contactList = connect(mapStateToProps, {})(ContactData);

// export default Form.create()(contactList);

export default ContactData;
