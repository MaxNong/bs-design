import { useNavigate } from "react-router-dom";

import { ComponentListItem, GroupMapping } from "./home.d";
import components from "../index";

import "./home.scss";

const groupClassify = () => {
  const groupMap: GroupMapping = {};
  const list = Object.values(components);

  list.forEach((listItem: ComponentListItem) => {
    const currentList = groupMap[listItem.type.name] || [];
    groupMap[listItem.type.name] = [{ ...listItem }, ...currentList];
  });

  return groupMap;
};

const ComponentsList = () => {
  const navigate = useNavigate();
  const groupComponents = groupClassify();
  const classifiedKeys = Object.keys(groupComponents);

  const ListItem = (props: { listData: ComponentListItem }) => {
    const { listData } = props;
    const { name, routerName } = listData;

    return (
      <div
        className="list-item"
        onClick={() => {
          navigate(`/${routerName}`);
        }}
      >
        <div className="list-item-title">{name}</div>
        <div className="list-item-content">
          <div className="list-item-content-mask"></div>
          <div>组件图片展示</div>
          {/* <CurrentComponent /> */}
        </div>
      </div>
    );
  };

  return (
    <>
      {classifiedKeys.map((itemKey) => {
        return (
          <div className="block-item" key={itemKey}>
            <h3 className="block-item-title">{itemKey}</h3>
            <div className="block-item-box">
              {groupComponents[itemKey].map((item: ComponentListItem) => (
                <ListItem key={item.routerName} listData={item} />
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};

const Home = (): JSX.Element => {
  return (
    <div className="component-container">
      <ComponentsList />
    </div>
  );
};

export default Home;
