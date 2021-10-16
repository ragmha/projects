import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => <a href="#">{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
];

const About = () => <div>About component </div>;

class App extends React.Component {
  state = {
    selectedRow: {},
    toProduct: false,
  };
  selectRow = record => {
    this.setState({
      selectedRow: {
        key: record.key,
        name: record.name,
      },
      toProduct: true,
    });
    console.log('I will redirect');
  };
  render() {
    const { toProduct, selectedRow } = this.state;
    console.log('State', selectedRow);
    const rowSelection = {
      selectedRow,
    };

    if (toProduct === true) {
      return <Link to="/about" />;
    }

    return (
      <Router>
        <div>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            onRow={record => ({
              onClick: () => {
                this.selectRow(record);
              },
            })}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
