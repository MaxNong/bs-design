import Tabs from "eh-design/components/tabs/index";

import "eh-design/components/tabs/style/index";

const { TabPane } = Tabs;

const TabsDemo = (): JSX.Element => {
  function callback(key: string) {
    console.log(key);
  }
  return (
    <div>
      <h3>默认样式</h3>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="基础信息" key="1">
          基础信息....
        </TabPane>
        <TabPane tab="联系人信息" key="2">
          联系人信息...
        </TabPane>
        <TabPane tab="个性化设置" key="3">
          个性化设置...
        </TabPane>
        <TabPane tab="激活背景激活背景" key="4">
          激活背景...
        </TabPane>
      </Tabs>
      <div style={{ height: 30 }}></div>
      <h3>backgroundMode: tint</h3>
      <Tabs defaultActiveKey="1" onChange={callback} backgroundMode="tint">
        <TabPane tab="基础信息" key="1">
          基础信息....
        </TabPane>
        <TabPane tab="联系人信息" key="2">
          联系人信息...
        </TabPane>
        <TabPane tab="个性化设置" key="3">
          个性化设置...
        </TabPane>
        <TabPane tab="激活背景激活背景" key="4">
          激活背景...
        </TabPane>
      </Tabs>
      <div style={{ height: 30 }}></div>
      <h3>ellipse</h3>
      <Tabs defaultActiveKey="1" onChange={callback} ellipse backgroundMode="tint">
        <TabPane tab="基础信息" key="1">
          基础信息....
        </TabPane>
        <TabPane tab="联系人信息" key="2">
          联系人信息...
        </TabPane>
        <TabPane tab="个性化设置" key="3">
          个性化设置...
        </TabPane>
        <TabPane tab="激活背景激活背景" key="4">
          激活背景...
        </TabPane>
      </Tabs>
      <div style={{ height: 30 }}></div>
      <h3>backgroundMode: white</h3>
      <Tabs defaultActiveKey="1" onChange={callback} backgroundMode="white">
        <TabPane tab="基础信息" key="1">
          基础信息....
        </TabPane>
        <TabPane tab="联系人信息" key="2">
          联系人信息...
        </TabPane>
        <TabPane tab="个性化设置" key="3">
          个性化设置...
        </TabPane>
        <TabPane tab="激活背景激活背景" key="4">
          激活背景...
        </TabPane>
      </Tabs>
      <div style={{ height: 30 }}></div>
      <h3>table场景</h3>
      <Tabs defaultActiveKey="1" onChange={callback} displayScene="table">
        <TabPane tab="基础信息" key="1">
          基础信息....
        </TabPane>
        <TabPane tab="联系人信息" key="2">
          联系人信息...
        </TabPane>
        <TabPane tab="个性化设置" key="3">
          个性化设置...
        </TabPane>
        <TabPane tab="激活背景激活背景" key="4">
          激活背景...
        </TabPane>
      </Tabs>
    </div>
  );
};

export default TabsDemo;
