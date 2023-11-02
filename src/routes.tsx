import { RouteProps } from "react-router-dom";
import { Home } from "./pages/Home";
import { Invoices } from "./pages/Invoices";
import { Bills } from "./pages/Bills";

const routeNames = {
  home: "/",
  invoices: "/invoices",
  bills: "/bills",
};

export const routes: RouteProps[] = [
  {
    path: routeNames.home,
    element: <Home />,
  },
  {
    path: routeNames.invoices,
    element: <Invoices />,
  },
  {
    path: routeNames.bills,
    element: <Bills />,
  },
];
