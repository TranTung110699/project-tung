import RootLayout from '../layouts';
import NewInfo from '../components/NewInfo';

import routes from '../constants/routes';
import Testroute from "../layouts/testroute";
import routesside from "../constants/routesside";
import Testroutes from "../layouts/testroutes";
import NewSideLeft from "../components/NewInfo/new-side-left";
import NewDetail from "../components/NewInfo/new-detail";

export default [
  {
    component: RootLayout,
    routes: [
      {
        path: '/',
        component: NewInfo,
        exact: true,
      },
      {
        path: `${routes.getNewDetail}:niid`,
        component: NewDetail,
      },
      {
        path: routes.bestSeller,
        component: Testroute,
      },
    ],
    routesside: [
      {
        path: '/',
        component: NewSideLeft,
        exact: true,
      },
      {
        path: `${routesside.getNewDetail}:niid`,
        component: NewSideLeft,
      },
      {
        path: routesside.bestSeller,
        component: Testroutes,
      },
    ],
  },
];
