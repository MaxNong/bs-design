import React from 'react';
import { Menu, Dropdown, Space } from 'eh-design';
import { DownOutlined } from '@ant-design/icons';

const menu = (
  <Menu
    items={[
      {
        label: 'Submit and continue',
        key: '1',
      },
    ]}
  />
);
class App extends React.Component {
  state = {
    loadings: [],
  };

  enterLoading = (index) => {
    const newLoadings = [...this.state.loadings];
    newLoadings[index] = true;
    this.setState({
      loadings: newLoadings,
    });
    setTimeout(() => {
      newLoadings[index] = false;
      this.setState({ loadings: newLoadings });
    }, 6000);
  };

  render() {
    const { loadings } = this.state;
    return (
      <Space direction="vertical">
        <Dropdown.Button type="primary" loading overlay={menu}>
          Submit
        </Dropdown.Button>
        <Dropdown.Button type="primary" size="small" loading overlay={menu}>
          Submit
        </Dropdown.Button>
        <Dropdown.Button
          type="primary"
          loading={loadings[0]}
          overlay={menu}
          onClick={() => this.enterLoading(0)}
        >
          Submit
        </Dropdown.Button>
        <Dropdown.Button
          icon={<DownOutlined />}
          loading={loadings[1]}
          overlay={menu}
          onClick={() => this.enterLoading(1)}
        >
          Submit
        </Dropdown.Button>
      </Space>
    );
  }
}
export default App;
