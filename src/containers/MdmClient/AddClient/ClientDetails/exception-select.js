import React, { Component } from 'react';
import Select, { SelectOption } from '../../../../components/uielements/select';
import { Form, Icon, Tag, Tooltip } from 'antd';

const Option = SelectOption;

class ExceptionSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      inputVisible: false,
      inputValue: '',
    };

  }

  handleClose = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    let { tags } = this.state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  };

  saveInputRef = Select => (this.input = Select);

  remove = (e, caller) => {
    this.props.removeKey(e, caller)
  }

  render() {

    const { form, keys } = this.props;
    const { tags, inputVisible } = this.state;
    
    const formItems = keys.map((k, index) => (
      <Form.Item
        required={false}
        key={k}
        style={{ marginBottom: '12px' }}
      >
        {form.getFieldDecorator(`advanceException[${k}]`, {
          rules: [
            {
              required: true,
              whitespace: true,
              message: "Please input passenger's name or delete this field.",
            },
          ],
        })(
          <div><Select
            mode="default"
            style={{ width: '90%', marginRight: '10px' }}
            placeholder="Select"
            onChange={this.handleChange}
          >
            <Option key="a">A</Option>
          </Select>
          {keys.length >= 1 ? (
          <Icon
            className="dynamic-delete-button"
            type="delete"
            onClick={() => this.remove(k, this.props.caller)}
          />
        ) : null}

          {tags.map((tag, index) => {
            const isLongTag = tag.length > 20;
            const tagElem = (
              <Tag key={tag} style={{ margin: '5px' }} closable={true} onClose={() => this.handleClose(tag)}>
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </Tag>
            );
            return isLongTag ? (
              <Tooltip title={tag} key={tag}>
                {tagElem}
              </Tooltip>
            ) : (
                tagElem
              );
          })}
          {inputVisible && (
            <div style={{ padding: '4px'}}>

              <select onChange={this.handleInputChange} style={{width: 110}} ref={this.saveInputRef} onBlur={this.handleInputConfirm}>
                <option value="" selected>Select Media</option>
                <option value="Media 1">Media 1</option>
                <option value="Media 2">Media 2</option>
                <option value="Media 3">Media 3</option>
              </select>
            </div>
          )}
            {!inputVisible && (
              <div style = {{padding: '2px'}}>
              <Tag onClick={this.showInput} style={{ color:'#00AED0', background: '#fff', borderStyle: 'none' }}>
                <Icon type="plus" /> Add Media
              </Tag>
              </div>
            )}
          </div>)}
        
      </Form.Item>
    ));
    return (
      formItems
    );
  }
}

export default ExceptionSelect;
