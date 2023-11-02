export interface Bill {
  issued_at: string;
  amount: number;
  contact_name: string;
  document_number: string;
}

export interface BillState {
  bills: Array<Bill>;
  status: string;
  error?: string;
}
