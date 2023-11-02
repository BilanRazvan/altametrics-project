export interface Invoice {
  issued_at: string;
  amount: number;
  contact_name: string;
  document_number: string;
}

export interface InvoiceState {
  invoices: Array<Invoice>;
  status: string;
  error?: string;
}
