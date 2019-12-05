import React, { Component } from "react";
import { Popover } from "antd";
import { connect } from "react-redux";
import HelpIcon from "../../image/icons/Help.svg";

class TopbarHelp extends Component {
  constructor(props) {
    super(props);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
    this.hide = this.hide.bind(this);
    this.state = {
      visible: false
    };
  }
  hide() {
    this.setState({ visible: false });
  }
  handleVisibleChange() {
    this.setState({ visible: !this.state.visible });
  }
  render() {
    // const { customizedTheme } = this.props;
    const content = <p>Help conntent</p>;
    return (
      <Popover
        content={content}
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
        placement="bottomLeft"
      >
        <div className="isoIconWrapper">
          {/* <i
            className="ion-ios-information-outline"
            style={{ color: customizedTheme.textColor }}
          />   */}
          <img src={HelpIcon} style={{ width: "23px" }} alt="help" />
        </div>

        <div className="isoImgTextNot">
          <p>Help</p>
        </div>
      </Popover>
    );
  }
}

export default connect(state => ({
  ...state.App.toJS(),
  customizedTheme: state.ThemeSwitcher.toJS().topbarTheme
}))(TopbarHelp);
