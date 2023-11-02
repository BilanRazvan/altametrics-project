import { NavigationData } from "./interfaces";

export const navigationData: NavigationData[] = [
  { name: "Home", to: "/", expandable: false },
  { name: "Dashboards", to: "/", expandable: true },
  { name: "Invoices", to: "/invoices", expandable: true },
  { name: "Bills", to: "/bills", expandable: true },
  { name: "Expenses", to: "/", expandable: true },
  { name: "Reports", to: "/", expandable: true },
  { name: "Accounting", to: "/", expandable: true },
];
