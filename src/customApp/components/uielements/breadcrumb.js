import { Breadcrumb } from 'antd';
import React, { Component } from 'react';
import { AntBreadcrumb } from './styles/breadcrumb.style';

class Breadcrumbs extends Component {
    render() {
        return (
            <AntBreadcrumb>
            <Breadcrumb>
    <Breadcrumb.Item>Administrator</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="" >Home</a>
    </Breadcrumb.Item>
  </Breadcrumb>
  </AntBreadcrumb>
        )
    }
}

export default Breadcrumbs;