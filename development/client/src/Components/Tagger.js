import React from 'react';
import './Tagger.css';
import 'antd/dist/antd.css';

import { Typography, Input } from 'antd';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons'

const { Title } = Typography;

class Tagger extends React.Component {
  state = {
  }

  render() {
    return(
      <div className="tagger">
        <Title style={{margin: "16px"}} level={3}>Label Set</Title>
        <div style={{marginLeft: "32px", marginBottom: "24px", textAlign: "left"}}>
          <div className="add-chip"><Input placeholder="Add label"/></div>
          <PlusOutlined style={{fontSize: '16px', marginLeft: "16px"}}/>
        </div>

        <div style={{marginLeft: "32px", marginBottom: "24px", textAlign: "left"}}>
          <div className="yellow-chip"><Title level={4}>Person</Title></div>
          <CloseOutlined style={{fontSize: '16px', marginLeft: "16px"}}/>
        </div>
        
        <div style={{marginLeft: "32px", marginBottom: "24px", textAlign: "left"}}>
            <div className="green-chip"><Title level={4}>Organization</Title></div>
          <CloseOutlined style={{fontSize: '16px', marginLeft: "16px"}}/>
        </div>
        
        <div style={{marginLeft: "32px", marginBottom: "24px", textAlign: "left"}}>
            <div className="pink-chip"><Title level={4}>GRE</Title></div>
          <CloseOutlined style={{fontSize: '16px', marginLeft: "16px"}}/>
        </div>
        
        <div style={{marginLeft: "32px", marginBottom: "24px", textAlign: "left"}}>
            <div className="blue-chip"><Title level={4}>Date</Title></div>
          <CloseOutlined style={{fontSize: '16px', marginLeft: "16px"}}/>
        </div>
      </div>
    );
  }
}

export default Tagger;