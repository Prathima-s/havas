import React, { Component } from 'react';
import { InputBoxWrapper } from '../../components/uielements/styles/client.style';
import Select, { SelectOption } from '../../components/uielements/select';
import { Form } from 'antd';

const Option = SelectOption;


class ClientSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        
    }


    render() {
        let options = this.props.selectValue.map(curr => {
            return <Option key={curr.key}>{curr.value}</Option>
        })
        const { form, id } = this.props;

        return (
            <InputBoxWrapper className="isoInputBox">
                <label style={{ fontWeight: 'normal' }}>{this.props.txtLabel}</label>
                <Form.Item hasFeedback>
                    {form.getFieldDecorator(id, {
                        rules: [{ required: false, message: 'Please select a value.'}],
                    })(
                        <Select
                            mode="default"
                            style={{ width: '100%' }}
                            placeholder="Select"
                            onChange={this.handleChange}
                        >
                            {options}
                        </Select>
                        )}
                </Form.Item>
            </InputBoxWrapper>
        );
    }
}

export default ClientSelect;