import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchInvoices } from "../../redux/invoices";
import { AppDispatch, RootState } from "../../redux/store";

import { CustomTable } from "../../components/CustomTable";
import { map } from "lodash";

export const Invoices = () => {
  const dispatch = useDispatch<AppDispatch>();
  const invoices = useSelector((state: RootState) => state.invoices.invoices);
  const invoicesStatus = useSelector(
    (state: RootState) => state.invoices.status
  );

  useEffect(() => {
    if (invoicesStatus === "idle") {
      dispatch(fetchInvoices());
    }
  }, [invoicesStatus, dispatch]);

  return (
    <div style={{ margin: "3rem" }}>
      <CustomTable
        rows={map(
          invoices,
          ({ issued_at, contact_name, amount, document_number }, index) => {
            return {
              id: index,
              date: new Date(issued_at).toLocaleDateString(),
              description: document_number,
              payee: contact_name,
              spent: amount,
              received: amount,
            };
          }
        )}
      />
    </div>
  );
};
