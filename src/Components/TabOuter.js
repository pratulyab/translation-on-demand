import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';
import Tab1Contents from './Tab1Contents';
import Tab2Contents from './Tab2Content'

const TabOuter = (props) => {
    const [activeTab, setActiveTab] = useState('1');
  
const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
}
        return(
            <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }} style={{fontWeight:'900'}}
          >
            Sentence Translation    
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }} style={{fontWeight:'900'}}
          >
            Word Translation
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
            <Tab1Contents />
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Tab2Contents />
          </Row>
        </TabPane>
      </TabContent>
    </div>
        );

}

export default TabOuter;