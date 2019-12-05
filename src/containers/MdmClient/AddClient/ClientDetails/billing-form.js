import React from 'react';
import { Input, Form } from 'antd';

import ClientSelect from '../../../../components/clients/clientSelect';
import { BillingFormWrapper, InputBoxWrapper } from '../../../../components/uielements/styles/client.style';
import { Radio, Switch } from 'antd';
import 'antd/dist/antd.css';
import { connect } from "react-redux";

const { TextArea } = Input;

const selectValue = [{
  key: 1,
  value: 'one'
},{
  key: 2,
  value: 'two'
},{
  key: 3,
  value: 'three'
},{
  key: 4,
  value: 'four'
},{
  key: 5,
  value: 'five'
}]

const inputStyle = {
  height: '35px',
  borderRadius: '20px',
  backgroundColor: '#f0f2f6'
}

class BillingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };

  }
  
  handleOnChange = checkedValues => {};

  render() {
    const {form} = this.props;
    
    
    return ( 
      <BillingFormWrapper className="isoBillingForm">
        <div className="isoInputFieldset">
          <InputBoxWrapper className="isoInputBox">
            <label style={{ fontWeight: 'normal' }}>Client</label>
            <Form.Item>
              {form.getFieldDecorator('clientName', {
                rules: [{ required: true, message: 'Please input Client Name', whitespace: true }],
              })(<Input style={inputStyle}/>)}
            </Form.Item>
          </InputBoxWrapper>

          <InputBoxWrapper className="isoInputBox">
            <label style={{ fontWeight: 'normal' }}>Status</label>
            <Form.Item>
              {form.getFieldDecorator('switch', { valuePropName: 'checked' })(<Switch />)}
            </Form.Item>
          </InputBoxWrapper>

          <InputBoxWrapper className="isoInputBox">
            <label style={{ fontWeight: 'normal' }}>Client Acc. No.</label>
            <Form.Item>
              {form.getFieldDecorator('clientAccNo', {
                rules: [{ required: true, message: 'Please input Client Account Number', whitespace: true }],
              })(<Input  style={inputStyle}/>)}
            </Form.Item>
          </InputBoxWrapper>

          <InputBoxWrapper className="isoInputBox">
            <label style={{ fontWeight: 'normal' }}>Trading Name</label>
            <Form.Item>
              {form.getFieldDecorator('tradingName', {
                rules: [{ required: true, message: 'Please input Client Account Number', whitespace: true }],
              })(<Input style={inputStyle} />)}
            </Form.Item>
          </InputBoxWrapper>
        </div>

        <div className="isoInputFieldset">
          <InputBoxWrapper className="isoInputBox">
            <ClientSelect form={form} txtLabel="Company reg. No" id="companyReg" selectValue={selectValue} />
          </InputBoxWrapper>
          <InputBoxWrapper className="isoInputBox">
            <ClientSelect form={form} txtLabel="Currency" id="currency" selectValue={selectValue} />
          </InputBoxWrapper>
          <InputBoxWrapper className="isoInputBox">
            <ClientSelect form={form} txtLabel="Country" id="country" selectValue={selectValue} />
          </InputBoxWrapper>
          <InputBoxWrapper className="isoInputBox">
            <ClientSelect form={form} txtLabel="Buying Org." id="buyingOrg" selectValue={selectValue} />
          </InputBoxWrapper>
        </div>
        

        <div className="isoInputFieldset">
          <InputBoxWrapper className="isoInputBox">
            <ClientSelect form={form} txtLabel="Business Director" id="businessDirector" selectValue={selectValue} />
          </InputBoxWrapper>
          <InputBoxWrapper className="isoInputBox">
            <ClientSelect form={form} txtLabel="Group" id="group" selectValue={selectValue} />
          </InputBoxWrapper>
          <InputBoxWrapper className="isoInputBox">
            <ClientSelect form={form} txtLabel="Magnitude Code" id="magCode" selectValue={selectValue} />
          </InputBoxWrapper>
          <InputBoxWrapper className="isoInputBox">
            <ClientSelect form={form} txtLabel="Sector" id="sector" selectValue={selectValue} />
          </InputBoxWrapper>
        </div>

        <div className="isoInputFieldset">
          <InputBoxWrapper className="isoInputBox">
            <ClientSelect form={form} txtLabel="Tax Applied" id="taxApplied" selectValue={selectValue} />
          </InputBoxWrapper>
          <InputBoxWrapper className="isoInputBox">
            <ClientSelect form={form} txtLabel="VAT" id="vat" selectValue={selectValue} />
          </InputBoxWrapper>
          <InputBoxWrapper className="isoInputBox">
            <ClientSelect form={form} txtLabel="Tax Exceptions" id="taxExcep" selectValue={selectValue} />
          </InputBoxWrapper>
          <InputBoxWrapper className="isoInputBox">
          </InputBoxWrapper>
        </div>

        <div className="isoInputFieldset">
          <InputBoxWrapper className="isoInputBox">
            <label style={{ fontWeight: 'normal' }}>PO Client</label>
            <Form.Item>
              {form.getFieldDecorator('poClient', { initialValue: 'a' })(
                <Radio.Group name="poClient">
                  <Radio value='a'>Yes</Radio>
                  <Radio value='b'>No</Radio>
                </Radio.Group>
              )}
            </Form.Item>
          </InputBoxWrapper>

          <InputBoxWrapper className="isoInputBox">
            <label style={{ fontWeight: 'normal' }}>Pre Pay</label>
            <Form.Item>
              {form.getFieldDecorator('prePay', { initialValue: 'a' })(
                <Radio.Group name="prePay">
                  <Radio value='a'>Yes</Radio>
                  <Radio value='b'>No</Radio>
                </Radio.Group>
              )}
            </Form.Item>
          </InputBoxWrapper>

          <InputBoxWrapper className="isoInputBox">
            <label style={{ fontWeight: 'normal' }}>Plan Option Name</label>
            <Form.Item>
              {form.getFieldDecorator('planOptionName', { initialValue: 'a' })(
                <Radio.Group name="planOptionName">
                  <Radio value='a'>Yes</Radio>
                  <Radio value='b'>No</Radio>
                </Radio.Group>
              )}
            </Form.Item>
          </InputBoxWrapper>
          <InputBoxWrapper className="isoInputBox">
          </InputBoxWrapper>
        </div>

        <div className="isoInputFieldset">
          <InputBoxWrapper className="isoInputBox">
            <ClientSelect form={form} txtLabel="Credit Insured" id="creditInsured" selectValue={selectValue} />
          </InputBoxWrapper>
          <InputBoxWrapper className="isoInputBox">
            <ClientSelect form={form} txtLabel="Invoice Template" id="invoiceTemp" selectValue={selectValue} />
          </InputBoxWrapper>
          <InputBoxWrapper className="isoInputBox">
            <ClientSelect form={form} txtLabel="Invoice Logo" id="invoiceLogo" selectValue={selectValue} />
          </InputBoxWrapper>
          <InputBoxWrapper className="isoInputBox">
          </InputBoxWrapper>
        </div>

        <div className="isoInputFieldset">
          <h4>Payment Terms </h4>
        </div>

        <div className="isoInputFieldset">
          <InputBoxWrapper className="isoInputBox">
            <ClientSelect form={form} txtLabel="Advance Invoice" id="advInvoice" selectValue={selectValue} />
          </InputBoxWrapper>
          <InputBoxWrapper className="isoInputBox">
            <ClientSelect form={form} txtLabel="Arrears Invoice" id="arrInvoice" selectValue={selectValue} />
          </InputBoxWrapper>
          <InputBoxWrapper className="isoInputBox">
            <label style={{ fontWeight: 'normal' }}>Exception</label>
            <a href="">Add Advance Invoice</a>
            <ClientSelect form={form} txtLabel="Advance Invoice" id="expAdvInvoice" selectValue={selectValue} />
          </InputBoxWrapper>
          <InputBoxWrapper className="isoInputBox">
            <label style={{ fontWeight: 'normal' }}> &nbsp;</label>
            <a href="">Add Arrears Invoice</a>
            <ClientSelect form={form} txtLabel="Arrears Invoice" id="expArrInvoice" selectValue={selectValue} />
          </InputBoxWrapper>
        </div>

        <div className="isoInputFieldset">
          <InputBoxWrapper className="isoInputBox">
            <label style={{ fontWeight: 'normal' }}>Comments</label>
            <Form.Item>
              {form.getFieldDecorator('comment')(
                <TextArea placeholder="textarea" allowClear autoSize={{ minRows: 3, maxRows: 3 }} />
              )}
            </Form.Item>
          </InputBoxWrapper>
        </div>
        

      </BillingFormWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

const clientData = connect(mapStateToProps, {})(BillingForm);

export default Form.create()(clientData);

// export default BillingForm;
