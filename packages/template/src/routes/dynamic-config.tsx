import ComponentBox from "../pages/home/ComponentBox";
import Home from "../pages/home/index";
import components from "../pages/index";

const getRoutesConfig = () => {
  return components.map((item) => {
    return {
      path: `/${item.routerName}`,
      element: (
        <ComponentBox>
          <item.component />
        </ComponentBox>
      )
    };
  });
};

const routes = [
  {
    path: `/`,
    element: <Home />
  },
  ...getRoutesConfig()
];

export default routes;
