import React, { Component } from 'react';
import { connect } from 'react-redux';
import DesktopView from './desktopView';
import MobileView from './mobileView';
// import TabView from './tabView';

class Home extends Component {
  render() {
    const { view, height } = this.props;
    const MailView =
      view === 'DesktopView'
        ? DesktopView
        : view === 'TabView' ? DesktopView : MobileView;
    return (
      <div >
        <MailView height={height} />
      </div>
    );
  }
}
export default connect(state => ({
  ...state.App.toJS()
}))(Home);
