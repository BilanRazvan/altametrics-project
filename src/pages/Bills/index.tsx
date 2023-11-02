import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../redux/store";

import { CustomTable } from "../../components/CustomTable";
import { map } from "lodash";
import { fetchBills } from "../../redux/bills";

export const Bills = () => {
  const dispatch = useDispatch<AppDispatch>();
  const bills = useSelector((state: RootState) => state.bills.bills);
  const billsStatus = useSelector((state: RootState) => state.bills.status);

  useEffect(() => {
    if (billsStatus === "idle") {
      dispatch(fetchBills());
    }
  }, [billsStatus, dispatch]);

  return (
    <div style={{ margin: "3rem" }}>
      <CustomTable
        rows={map(
          bills,
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
