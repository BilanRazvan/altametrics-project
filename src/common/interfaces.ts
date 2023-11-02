export interface NavigationData {
  name: string;
  to: string;
  expandable: boolean;
}

export interface TableRows {
  id: number;
  date: string;
  description: string;
  payee: string;
  spent: number;
  received: number;
}
