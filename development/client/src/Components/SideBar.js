import React from 'react';
import './SideBar.css';
import 'antd/dist/antd.css';

import { Typography } from 'antd';

const { Title } = Typography;

class SideBar extends React.Component {
  state = {
  }

  render() {
    return(
      <div className="sidenav">
        <Title style={{margin: "16px"}} level={1}>Editor</Title>
        <div className="yellow-chip"><Title level={3}>Person</Title></div>
        <div className="green-chip"><Title level={3}>Organization</Title></div>
        <div className="pink-chip"><Title level={3}>GRE</Title></div>
        <div className="blue-chip"><Title level={3}>Date</Title></div>
      </div>
    );
  }
}

export default SideBar;