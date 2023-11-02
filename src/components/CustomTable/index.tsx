import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid";
import { TableRows } from "../../common/interfaces";
import { useState } from "react";
import { CustomModal } from "../CustomModal";

const columns: GridColDef[] = [
  { field: "id", headerName: "Date", width: 170 },
  { field: "date", headerName: "Date", width: 170 },
  { field: "description", headerName: "Description", width: 330 },
  { field: "payee", headerName: "Payee", width: 130 },
  {
    field: "spent",
    headerName: "Spent",
    type: "number",
    width: 120,
  },
  {
    field: "received",
    headerName: "Received",
    type: "number",
    width: 120,
  },
];

export const CustomTable = ({ rows }: { rows: TableRows[] }) => {
  const [open, setOpen] = useState(false);
  const [rowClicked, setRowClicked] = useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleEvent: GridEventListener<"rowClick"> = (params) => {
    handleOpen();
    setRowClicked(params.row.id);
  };
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        onRowClick={handleEvent}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        columnVisibilityModel={{
          id: false,
        }}
      />
      <CustomModal
        open={open}
        handleClose={handleClose}
        info={{
          date: rows.length > 0 ? rows[rowClicked].date : "",
          description: rows.length > 0 ? rows[rowClicked].description : "",
          payee: rows.length > 0 ? rows[rowClicked].payee : "",
        }}
      />
    </div>
  );
};
