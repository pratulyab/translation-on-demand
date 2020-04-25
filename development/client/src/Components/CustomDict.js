import React from 'react';
import './CustomDict.css';
import 'antd/dist/antd.css';

import { Typography, Table, Tag, Radio, Divider} from 'antd';

const { Title } = Typography;

const columns = [
    {
      title: 'String',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => record.name,
    },
    {
      title: 'Translation',
      key: 'translation',
      render: (text, record) => (
        <span>
          {/* <a style={{ marginRight: 16 }}>Invite {record.name}</a> */}
          {record.translation}
        </span>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'Phrase One',
      age: 32,
      translation: 'Lorem ipsum dolor sit amet.',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Phrase Two',
      age: 42,
      translation: 'consectetur adipiscing elit',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Phrase Threes',
      age: 32,
      translation: 'Aliquam rhoncus vehicula',
      tags: ['cool', 'teacher'],
    },
  ];


class CustomDict extends React.Component {
  state = {
  }

  render() {
    return(
      <div className="dict">
        <Title style={{margin: "16px"}} level={3}>Custom Dictionary</Title>
        <div>
    
          <Divider />
    
          <Table
            rowSelection="radio"
            columns={columns}
            dataSource={data}
          />
        </div>
      </div>
    );
  }
}

export default CustomDict;