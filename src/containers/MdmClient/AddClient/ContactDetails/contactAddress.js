import React from "react";
import { Form, Row, Col, Select, Input } from "antd";
// import { ClientsDetails } from "../../../../components/uielements/styles/client.style";

const FormItem = Form.Item;
const { Option } = Select;

class ContactAddress extends React.Component {
  state = {
    expandIconPosition: "left"
  };

  onPositionChange = expandIconPosition => {
    this.setState({ expandIconPosition });
  };

  render() {
    // const { expandIconPosition } = this.state;
    const { form } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        {/* <Collapse
          defaultActiveKey={['1']}
          // onChange={callback}
          // expandIconPosition={expandIconPosition}
          expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
        >
          <Panel header="Address 1" key="1" style={customPanelStyle}> */}

        <Row>
          <Col span={6}>
            <FormItem label="Address">
              {getFieldDecorator("Address", {
                rules: [
                  {
                    // required: true,
                    message: "Input something!"
                  }
                ]
              })(<Input placeholder="Enter Address" />)}
            </FormItem>
          </Col>

          <Col span={6}>
            <FormItem label="City/Town">
              {getFieldDecorator("cityTown", {
                rules: [
                  {
                    // required: true,
                    message: "Input something!"
                  }
                ]
              })(<Input placeholder="Enter City/Town" />)}
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="County">
              {getFieldDecorator("County", {
                rules: [
                  {
                    // required: true,
                    message: "Input something!"
                  }
                ]
              })(<Input placeholder="Enter County" />)}
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="Postcode">
              {getFieldDecorator("Postcode", {
                rules: [
                  {
                    // required: true,
                    message: "Input something!"
                  }
                ]
              })(<Input placeholder="Enter Postcode" />)}
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="Country">
              {form.getFieldDecorator("Country")(
                <Select
                  placeholder="Country"
                  style={{ width: "266px" }}
                  // style={{ width: 562, 'paddingLeft': '10px' }}
                  // defaultActiveFirstOption={false}
                  showArrow={true}
                >
                  <Option value="usa">USA</Option>
                  <Option value="uk">UK</Option>
                </Select>
              )}
            </FormItem>
          </Col>
        </Row>
        {/* </Panel> */}
        {/* <Panel header="Address 2" key="2" style={customPanelStyle}>
          <Row>
              <Col span={6}>
                <FormItem label="Address">
                  {getFieldDecorator("Address", {
                    rules: [
                      {
                        // required: true,
                        message: "Input something!"
                      }
                    ]
                  })(<Input placeholder="Enter Address" />)}
                </FormItem>
              </Col>

              <Col span={6}>
                <FormItem label="City/Town">
                  {getFieldDecorator("cityTown", {
                    rules: [
                      {
                        // required: true,
                        message: "Input something!"
                      }
                    ]
                  })(<Input placeholder="Enter City/Town" />)}
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem label="County">
                  {getFieldDecorator("County", {
                    rules: [
                      {
                        // required: true,
                        message: "Input something!"
                      }
                    ]
                  })(<Input placeholder="Enter County" />)}
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem label="Postcode">
                  {getFieldDecorator("Postcode", {
                    rules: [
                      {
                        // required: true,
                        message: "Input something!"
                      }
                    ]
                  })(<Input placeholder="Enter Postcode" />)}
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem label="Country">
                  {getFieldDecorator("Country", {
                    rules: [
                      {
                        // required: true,
                        message: "Input something!"
                      }
                    ]
                  })(<Input placeholder="Enter Country" />)}
                </FormItem>
              </Col>
            </Row>
          </Panel>
          <Panel header="Address 3" key="3" style={customPanelStyle}>
          <Row>
              <Col span={6}>
                <FormItem label="Address">
                  {getFieldDecorator("Address", {
                    rules: [
                      {
                        // required: true,
                        message: "Input something!"
                      }
                    ]
                  })(<Input placeholder="Enter Address" />)}
                </FormItem>
              </Col>

              <Col span={6}>
                <FormItem label="City/Town">
                  {getFieldDecorator("cityTown", {
                    rules: [
                      {
                        // required: true,
                        message: "Input something!"
                      }
                    ]
                  })(<Input placeholder="Enter City/Town" />)}
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem label="County">
                  {getFieldDecorator("County", {
                    rules: [
                      {
                        // required: true,
                        message: "Input something!"
                      }
                    ]
                  })(<Input placeholder="Enter County" />)}
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem label="Postcode">
                  {getFieldDecorator("Postcode", {
                    rules: [
                      {
                        // required: true,
                        message: "Input something!"
                      }
                    ]
                  })(<Input placeholder="Enter Postcode" />)}
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem label="Country">
                  {getFieldDecorator("Country", {
                    rules: [
                      {
                        // required: true,
                        message: "Input something!"
                      }
                    ]
                  })(<Input placeholder="Enter Country" />)}
                </FormItem>
              </Col>
            </Row>
          </Panel>
        </Collapse> */}
      </div>
    );
  }
}

export default ContactAddress;
