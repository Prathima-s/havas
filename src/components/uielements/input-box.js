import React from 'react';
import Input from './input';
import { InputBoxWrapper } from './styles/client.style';

class InputBox extends React.Component {
  render() {
    const { label, placeholder } = this.props;
    return (
      <InputBoxWrapper className="isoInputBox">
        <label>
          {label}
          {this.props.important ? <span className="asterisk">*</span> : null}
        </label>
        <Input size="large" placeholder={placeholder} />
      </InputBoxWrapper>
    );
  }
}
export default InputBox;
