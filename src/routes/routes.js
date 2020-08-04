import RootLayout from '../layouts';
import NewInfo from '../components/NewInfo';

import routes from '../constants/routes';
import Testroute from "../layouts/testroute";
import routesside from "../constants/routesside";
import Testroutes from "../layouts/testroutes";
import NewSideLeft from "../components/NewInfo/new-side-left";
import NewDetail from "../components/NewInfo/new-detail";
import BestSeller from "../components/best-seller";
import BestSellerDetail from "../components/best-seller/best-seller-detail";
import TopPrice from "../components/top-price";
import TopPriceDetail from "../components/top-price/top-price-detail";

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
        component: BestSeller,
      },
      {
        path: `${routes.bestSeller}:cid`,
        component: BestSellerDetail,
      },
      {
        path: routes.topPrice,
        component: TopPrice,
      },
      {
        path: `${routes.topPrice}:cid`,
        component: TopPriceDetail,
      },
      {
        path: routes.generalAssess,
        component: TopPrice,
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
      // {
      //   path: routesside.bestSeller,
      //   component: Testroutes,
      // },
      // {
      //   path: `${routes.bestSeller}:cid`,
      //   component: Testroutes,
      // },
    ],
  },
];
