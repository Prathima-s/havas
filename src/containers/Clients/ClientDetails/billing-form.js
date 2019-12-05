import React from 'react';
// import Input from '../../../components/uielements/input';
import Select, { SelectOption } from '../../../components/uielements/select';

import AutoComplete from '../../../components/uielements/autoComplete';
// import Checkbox from '../../../components/uielements/checkbox';
import InputBox from '../../../components/uielements/input-box';
import IntlMessages from '../../../components/utility/intlMessages';
import { BillingFormWrapper, InputBoxWrapper } from '../../../components/uielements/styles/client.style';

const Option = SelectOption;

class BillingForm extends React.Component {
  state = {
    dataSource: [],
  };
  handleOnChange = checkedValues => {};

  render() {
    return (
      <BillingFormWrapper className="isoBillingForm">
        <div className="isoInputFieldset">
          <InputBox
            label={<IntlMessages id="Client Acc. No:" />}
            
          />
          <InputBox
            label={<IntlMessages id="Trading Name:" />}
            
          />
          <InputBox
            label={<IntlMessages id="Company Reg. No:" />}
            
          />
        </div> 

         <AutoComplete
                    dataSource={this.state.dataSource}
                    style={{ width: 200 }}
                    onChange={this.handleChange}
                    placeholder="Email"
                  />
        <div className="isoInputFieldset">
          <InputBoxWrapper className="isoInputBox">
            <label>{<IntlMessages id="Currency" />}</label>
            <Select size="large" defaultValue="unitedkingdom">
              <Option value="argentina">Pound Sterling - GBP</Option>
              <Option value="australia">Euro - EUR</Option>
              <Option value="brazil">Yuan - CNY</Option>
              <Option value="france">Indian Rupee - INR</Option>
              <Option value="germany">Yen - JPY</Option>
              <Option value="southafrica">Lebanese Pound - LBP</Option>
              <Option value="spain">New Zealand Dollar - NZD</Option>
              <Option value="unitedstate">US Dollar - USD</Option>
              <Option value="unitedkingdom">Baht - THB</Option>
            </Select>
          </InputBoxWrapper>

          <InputBoxWrapper className="isoInputBox">
            <label>{<IntlMessages id="Country" />}</label>
            <Select size="large" defaultValue="unitedkingdom">
              <Option value="australia">AUSTRALIA</Option>
              <Option value="brazil">BRAZIL</Option>
              <Option value="france">FRANCE</Option>
              <Option value="germany">GERMANY</Option>
              <Option value="southafrica">SOUTH AFRICA</Option>
              <Option value="spain">SPAIN</Option>
              <Option value="unitedstate">UNITED STATE</Option>
              <Option value="unitedkingdom">UNITED KINGDOM</Option>
            </Select>
          </InputBoxWrapper>

          <InputBox label={<IntlMessages id="checkout.billingform.city" />} />
        </div>
        

        <div className="isoInputFieldset">
        <InputBoxWrapper className="isoInputBox">
            <label>{<IntlMessages id="Business Director" />}</label>
            <Select size="large" defaultValue="arenamedia">
              <Option value="arenam">Arena M</Option>
              <Option value="arenamed">Arena Med </Option>
              <Option value="arenamedia">Arena Media</Option>
             
            </Select>
          </InputBoxWrapper>

          <InputBoxWrapper className="isoInputBox">
            <label>{<IntlMessages id="Group" />}</label>
            <Select size="large" defaultValue="yes">
              <Option value="yes">Yes</Option>
              <Option value="no">No </Option>
            </Select>
          </InputBoxWrapper>

          <InputBoxWrapper className="isoInputBox">
            <label>{<IntlMessages id="Magnitude Code" />}</label>
            <Select size="large" defaultValue="select">
              <Option value="select">Select</Option>
              <Option value="code1">11111</Option>
              <Option value="code2">22222</Option>
              <Option value="code3">33333</Option>
            </Select>
          </InputBoxWrapper>
        </div>

        <div className="isoInputFieldset sectorField">
        <InputBoxWrapper className="isoInputBox">
            <label>{<IntlMessages id="Sector" />}</label>
            <Select size="large" defaultValue="select">
              <Option value="select">Select</Option>
              <Option value="code1">11111</Option>
              <Option value="code2">22222</Option>
              <Option value="code3">33333</Option>
            </Select>
          </InputBoxWrapper>         
        </div>

        <div className="isoInputFieldset">
        <InputBoxWrapper className="isoInputBox">
            <label>{<IntlMessages id="Tax Applied:" />}</label>
            <Select size="large" defaultValue="standardrate">
              <Option value="standardrate">Standard Rate</Option>
              <Option value="chargeablerate">Chargeable Rate</Option>
            </Select>
          </InputBoxWrapper>

          <InputBoxWrapper className="isoInputBox">
            <label>{<IntlMessages id="Trading Name:" />}</label>
            <Select size="large" defaultValue="vatstandardrate">
              <Option value="vatstandardrate">VAT - Standard Rate</Option>
              <Option value="vatchargeablerate">VAT - Chargeable Rate</Option>
            </Select>
          </InputBoxWrapper>

          <label>{<IntlMessages id="TAX EXCEMPTIONS" />}</label>
            
        </div>

        {/* <Checkbox onChange={this.handleOnChange}>
          <IntlMessages id="checkout.billingform.checkbox" />
        </Checkbox> */}
      </BillingFormWrapper>
    );
  }
}
export default BillingForm;
