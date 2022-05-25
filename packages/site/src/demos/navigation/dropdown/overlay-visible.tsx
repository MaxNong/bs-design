import React from 'react';
import { Menu, Dropdown, Space } from 'eh-design';
import { DownOutlined } from '@ant-design/icons';

class OverlayVisible extends React.Component {
  state = {
    visible: false,
  };

  handleMenuClick = (e) => {
    if (e.key === '3') {
      this.setState({ visible: false });
    }
  };

  handleVisibleChange = (flag) => {
    this.setState({ visible: flag });
  };

  render() {
    const menu = (
      <Menu
        onClick={this.handleMenuClick}
        items={[
          {
            label: 'Clicking me will not close the menu.',
            key: '1',
          },
          {
            label: 'Clicking me will not close the menu also.',
            key: '2',
          },
          {
            label: 'Clicking me will close the menu.',
            key: '3',
          },
        ]}
      />
    );
    return (
      <Dropdown
        overlay={menu}
        onVisibleChange={this.handleVisibleChange}
        visible={this.state.visible}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Hover me
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    );
  }
}

export default () => <OverlayVisible />;
