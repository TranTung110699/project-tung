import RootLayout from '../layouts';
import NewInfo from '../components/NewInfo';

import routes from '../constants/routes';
import Testroute from "../layouts/testroute";
import routesSideLeft from "../constants/routes-side-left";
import routesSideRight from "../constants/routes-side-right";
import Testroutes from "../layouts/testroutes";
import NewSideLeft from "../components/NewInfo/new-side-left";
import NewDetail from "../components/NewInfo/new-detail";
import BestSeller from "../components/best-seller";
import BestSellerDetail from "../components/best-seller/best-seller-detail";
import TopPrice from "../components/top-price";
import TopPriceDetail from "../components/top-price/top-price-detail";
import GeneralAssess from "../components/general-assess";
import SideRight from "../components/NewInfo/new-side-right";
import BrandAssess from "../components/brand-assess";
import CompareLeft from "../components/comparison/compare-left";
import CompareRight from "../components/comparison/compare-right";
import Comparison from "../components/comparison";
import BuyCar from "../components/buy-car";

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
        component: GeneralAssess,
      },
      {
        path: routes.brandAssess,
        component: BrandAssess,
      },
      {
        path: routes.getComparison,
        component: Comparison,
      },
      {
        path: routes.buyCar,
        component: BuyCar,
      },
    ],
    routesSideLeft: [
      {
        path: '/',
        component: NewSideLeft,
        exact: true,
      },
      {
        path: `${routesSideLeft.getNewDetail}:niid`,
        component: NewSideLeft,
      },
      {
        path: routes.getComparison,
        component: CompareLeft,
      },

    ],
    routesSideRight: [
      {
        path: '/',
        component: SideRight,
        exact: true,
      },
      {
        path: `${routesSideRight.getNewDetail}:niid`,
        component: SideRight,
      },
      {
        path: routes.getComparison,
        component: CompareRight,
      },
    ],
  },
];
