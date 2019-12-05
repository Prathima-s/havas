import React from "react";
import { Input, Form } from "antd";

import ClientSelect from "../../../../components/clients/clientSelect";
import ExceptionSelect from "../ClientDetails/exception-select";

import {
  BillingFormWrapper,
  InputBoxWrapper
} from "../../../../components/uielements/styles/client.style";
import { Radio, Switch, Upload, Button } from "antd";

import "antd/dist/antd.css";

const { TextArea } = Input;

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

const inputStyle = {
  height: "35px",
  borderRadius: "20px",
  backgroundColor: "#f9f9f9"
};

const labelStyle = {
  color: "#00AED0",
  textDecoration: "none",
  backgroundColor: "transparent",
  outline: "none",
  cursor: "pointer"
};

const cancelStyle = {
  width: "150px",
  marginLeft: "10px",
  backgroundColor: "black",
  borderColor: "black",
  borderRadius: "30px",
  color: "white"
};

let id = 0;

class ClientDetailsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fileList: [],
      uploading: false
    };
  }

  remove = (k, caller) => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue(caller);
    // We need at least one passenger
    if (keys.length === 0) {
      return;
    }

    if (caller === "advanceKeys") {
      form.setFieldsValue({
        advanceKeys: keys.filter(key => key !== k)
      });
    } else {
      form.setFieldsValue({
        arrearsKeys: keys.filter(key => key !== k)
      });
    }
  };

  add = e => {
    const { form } = this.props;
    var keys;
    // can use data-binding to get
    if (e === "Advance") {
      keys = form.getFieldValue("advanceKeys");
    } else {
      keys = form.getFieldValue("arrearsKeys");
    }
    const nextKeys = keys.concat(id++);
    // can use data-binding to set
    // important! notify form to detect changes

    if (e === "Advance") {
      form.setFieldsValue({
        advanceKeys: nextKeys
      });
    } else {
      form.setFieldsValue({
        arrearsKeys: nextKeys
      });
    }
  };

  normFile = e => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  render() {
    const { form } = this.props;
    const { fileList } = this.state;

    const { getFieldDecorator, getFieldValue } = this.props.form;
    const props = {
      onRemove: file => {
        this.setState(state => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList
          };
        });
      },
      beforeUpload: file => {
        this.setState(state => ({
          fileList: [...state.fileList, file]
        }));
        return false;
      },
      fileList
    };

    getFieldDecorator("advanceKeys", { initialValue: [] });
    getFieldDecorator("arrearsKeys", { initialValue: [] });

    const advanceKeys = getFieldValue("advanceKeys");
    const arrearsKeys = getFieldValue("arrearsKeys");

    return (
      <BillingFormWrapper className="isoBillingForm">
        <div className="isoInputFieldset">
          <InputBoxWrapper className="isoInputBox">
            <label style={{ fontWeight: "normal" }}>Client</label>
            <Form.Item>
              {form.getFieldDecorator("clientName", {
                rules: [
                  {
                    required: false,
                    message: "Please input Client Name",
                    whitespace: true
                  }
                ]
              })(<Input style={inputStyle} />)}
            </Form.Item>
          </InputBoxWrapper>

          <InputBoxWrapper className="isoInputBox">
            <label style={{ fontWeight: "normal" }}>Status</label>
            <Form.Item>
              {form.getFieldDecorator("switch", { valuePropName: "checked" })(
                <Switch />
              )}
            </Form.Item>
          </InputBoxWrapper>

          <InputBoxWrapper className="isoInputBox">
            <label style={{ fontWeight: "normal" }}>Client Acc. No.</label>
            <Form.Item>
              {form.getFieldDecorator("clientAccNo", {
                rules: [
                  {
                    required: false,
                    message: "Please input Client Account Number",
                    whitespace: true
                  }
                ]
              })(<Input style={inputStyle} />)}
            </Form.Item>
          </InputBoxWrapper>

          <InputBoxWrapper className="isoInputBox">
            <label style={{ fontWeight: "normal" }}>Trading Name</label>
            <Form.Item>
              {form.getFieldDecorator("tradingName", {
                rules: [
                  {
                    required: false,
                    message: "Please input Client Account Number",
                    whitespace: true
                  }
                ]
              })(<Input style={inputStyle} />)}
            </Form.Item>
          </InputBoxWrapper>
        </div>

        <div className="isoInputFieldset">
          <InputBoxWrapper className="isoInputBox">
            <ClientSelect
              form={form}
              txtLabel="Company reg. No"
              id="companyReg"
              selectValue={selectValue}
            />
          </InputBoxWrapper>
          <InputBoxWrapper className="isoInputBox">
            <ClientSelect
              form={form}
              txtLabel="Currency"
              id="currency"
              selectValue={selectValue}
            />
          </InputBoxWrapper>
          <InputBoxWrapper className="isoInputBox">
            <ClientSelect
              form={form}
              txtLabel="Country"
              id="country"
              selectValue={selectValue}
            />
          </InputBoxWrapper>
          <InputBoxWrapper className="isoInputBox">
            <ClientSelect
              form={form}
              txtLabel="Buying Org."
              id="buyingOrg"
              selectValue={selectValue}
            />
          </InputBoxWrapper>
        </div>

        <div className="isoInputFieldset">
          <InputBoxWrapper className="isoInputBox">
            <ClientSelect
              form={form}
              txtLabel="Business Director"
              id="businessDirector"
              selectValue={selectValue}
            />
          </InputBoxWrapper>
          <InputBoxWrapper className="isoInputBox">
            <ClientSelect
              form={form}
              txtLabel="Group"
              id="group"
              selectValue={selectValue}
            />
          </InputBoxWrapper>
          <InputBoxWrapper className="isoInputBox">
            <ClientSelect
              form={form}
              txtLabel="Magnitude Code"
              id="magCode"
              selectValue={selectValue}
            />
          </InputBoxWrapper>
          <InputBoxWrapper className="isoInputBox">
            <ClientSelect
              form={form}
              txtLabel="Sector"
              id="sector"
              selectValue={selectValue}
            />
          </InputBoxWrapper>
        </div>

        <div className="isoInputFieldset">
          <InputBoxWrapper className="isoInputBox">
            <ClientSelect
              form={form}
              txtLabel="Tax Applied"
              id="taxApplied"
              selectValue={selectValue}
            />
          </InputBoxWrapper>
          <InputBoxWrapper className="isoInputBox">
            <ClientSelect
              form={form}
              txtLabel="VAT"
              id="vat"
              selectValue={selectValue}
            />
          </InputBoxWrapper>
          <InputBoxWrapper className="isoInputBox">
            <ClientSelect
              form={form}
              txtLabel="Tax Exceptions"
              id="taxExcep"
              selectValue={selectValue}
            />
          </InputBoxWrapper>
          <InputBoxWrapper className="isoInputBox"></InputBoxWrapper>
        </div>

        <div className="isoInputFieldset">
          <InputBoxWrapper className="isoInputBox">
            <label style={{ fontWeight: "normal" }}>PO Client</label>
            <Form.Item>
              {form.getFieldDecorator("poClient", { initialValue: "a" })(
                <Radio.Group name="poClient">
                  <Radio value="a">Yes</Radio>
                  <Radio value="b">No</Radio>
                </Radio.Group>
              )}
            </Form.Item>
          </InputBoxWrapper>

          <InputBoxWrapper className="isoInputBox">
            <label style={{ fontWeight: "normal" }}>Pre Pay</label>
            <Form.Item>
              {form.getFieldDecorator("prePay", { initialValue: "a" })(
                <Radio.Group name="prePay">
                  <Radio value="a">Yes</Radio>
                  <Radio value="b">No</Radio>
                </Radio.Group>
              )}
            </Form.Item>
          </InputBoxWrapper>

          <InputBoxWrapper className="isoInputBox">
            <label style={{ fontWeight: "normal" }}>Plan Option Name</label>
            <Form.Item>
              {form.getFieldDecorator("planOptionName", { initialValue: "a" })(
                <Radio.Group name="planOptionName">
                  <Radio value="a">Yes</Radio>
                  <Radio value="b">No</Radio>
                </Radio.Group>
              )}
            </Form.Item>
          </InputBoxWrapper>
          <InputBoxWrapper className="isoInputBox"></InputBoxWrapper>
        </div>

        <div className="isoInputFieldset">
          <InputBoxWrapper className="isoInputBox">
            <ClientSelect
              form={form}
              txtLabel="Credit Insured"
              id="creditInsured"
              selectValue={selectValue}
            />
          </InputBoxWrapper>
          <InputBoxWrapper className="isoInputBox">
            <ClientSelect
              form={form}
              txtLabel="Invoice Template"
              id="invoiceTemp"
              selectValue={selectValue}
            />
          </InputBoxWrapper>
          <InputBoxWrapper className="isoInputBox">
            <ClientSelect
              form={form}
              txtLabel="Invoice Logo"
              id="invoiceLogo"
              selectValue={selectValue}
            />
          </InputBoxWrapper>
          <InputBoxWrapper className="isoInputBox"></InputBoxWrapper>
        </div>

        <div className="isoInputFieldset">
          <h4>Payment Terms </h4>
        </div>

        <div className="isoInputFieldset">
          <InputBoxWrapper className="isoInputBox">
            <ClientSelect
              form={form}
              txtLabel="Advance Invoice"
              id="advInvoice"
              selectValue={selectValue}
            />
          </InputBoxWrapper>

          <InputBoxWrapper className="isoInputBox">
            <ClientSelect
              form={form}
              txtLabel="Arrears Invoice"
              id="arrInvoice"
              selectValue={selectValue}
            />
          </InputBoxWrapper>

          <InputBoxWrapper className="isoInputBox">
            <label style={{ fontWeight: "normal" }}>Exception</label>
            <label
              onClick={() => {
                this.add("Advance");
              }}
              style={labelStyle}
            >
              Add Advance Invoice
            </label>
            {advanceKeys.length > 0 ? (
              <label style={{ fontWeight: "normal" }}>Advance Invoice</label>
            ) : null}
            <ExceptionSelect
              form={form}
              keys={advanceKeys}
              removeKey={this.remove}
              caller="advanceKeys"
            />
          </InputBoxWrapper>
          <InputBoxWrapper className="isoInputBox">
            <label style={{ fontWeight: "normal" }}> &nbsp;</label>
            <label
              onClick={() => {
                this.add("Arrears");
              }}
              style={labelStyle}
            >
              Add Arrears Invoice
            </label>
            {arrearsKeys.length > 0 ? (
              <label style={{ fontWeight: "normal" }}>Arrears Invoice</label>
            ) : null}
            <ExceptionSelect
              form={form}
              keys={arrearsKeys}
              removeKey={this.remove}
              caller="arrearsKeys"
            />
          </InputBoxWrapper>
        </div>

        <div className="isoInputFieldset">
          <InputBoxWrapper className="isoInputBox">
            <label style={{ fontWeight: "normal" }}>Comments</label>
            <Form.Item>
              {form.getFieldDecorator("comment")(
                <TextArea
                  placeholder="textarea with clear icon"
                  allowClear
                  autoSize={{ minRows: 3, maxRows: 3 }}
                />
              )}
            </Form.Item>
          </InputBoxWrapper>
        </div>
        <div className="isoInputFieldset">
          <InputBoxWrapper className="isoInputBox">
            <label style={{ fontWeight: "normal" }}>Products</label>
            <Form.Item>
              {form.getFieldDecorator("comment")(
                <TextArea
                  placeholder="textarea"
                  allowClear
                  autoSize={{ minRows: 3, maxRows: 3 }}
                />
              )}
            </Form.Item>
          </InputBoxWrapper>
        </div>
        <div className="isoInputFieldset">
          <InputBoxWrapper className="isoInputBox">
            <label style={{ fontWeight: "normal" }}>Attachments</label>
            <Form.Item>
              {getFieldDecorator("upload", {
                valuePropName: "fileList",
                getValueFromEvent: this.normFile
              })(
                <Upload {...props}>
                  <Button style={cancelStyle}>Upload Documents</Button>
                </Upload>
              )}
            </Form.Item>
          </InputBoxWrapper>
        </div>
      </BillingFormWrapper>
    );
  }
}

ClientDetailsForm = Form.create()(ClientDetailsForm);

export default ClientDetailsForm;
