import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

const columns = [
  {
    field: "firstName",
    headerClassName: "super-app-theme--header",
    headerName: "First name",
    width: 129,
  },
  {
    field: "lastName",
    headerClassName: "super-app-theme--header",
    headerName: "Last name",
    width: 129,
  },
  {
    field: "StartDate",
    headerClassName: "super-app-theme--header",
    headerName: "Start Date",
    width: 120,
  },
  {
    field: "Departpment",
    headerClassName: "super-app-theme--header",
    headerName: "Departpment",
    width: 120,
  },
  {
    field: "Date",
    headerClassName: "super-app-theme--header",
    headerName: "Date of Birth",
    type: "number",
    width: 120,
  },
  {
    field: "Street",
    headerClassName: "super-app-theme--header",
    headerName: "Street",
    width: 120,
  },
  {
    field: "City",
    headerClassName: "super-app-theme--header",
    headerName: "City",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 120,
    // valueGetter: (params) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "State",
    headerClassName: "super-app-theme--header",
    headerName: "State",
    width: 120,
  },
  {
    field: "ZipCode",
    headerClassName: "super-app-theme--header",
    headerName: "Zip Code",
    width: 120,
  },
];

const TableComponent = () => {
  const employees = useSelector((state) => state.employee.employees);

  const transformedEmployees = employees.map((employee) => ({
    id: employee.firstName, // L'id peut être n'importe quelle propriété unique de l'employé
    firstName: employee.firstName,
    lastName: employee.lastName,
    StartDate: dayjs(employee.startDate).format("DD/MM/YYYY"),
    Departpment: employee.department,
    Date: employee.dateOfBirth
      ? dayjs(employee.dateOfBirth).format("DD/MM/YYYY")
      : null,
    Street: employee.street,
    City: employee.city,
    State: employee.state,
    ZipCode: employee.zipCode,
  }));

  return (
    <div style={{ height: 400, width: "100%", backgroundColor: "whitesmoke" }}>
      <Box
        sx={{
          height: 400,
          width: "100%",
          "& .super-app-theme--header": {
            backgroundColor: "rgb(47, 46, 51)",
            color: "white",
          },
          "& .super-app-theme--footer": {
            backgroundColor: "white",
            color: "white",
          },
        }}
      >
        <DataGrid
          sx={{ boxShadow: 1, border: 1, color: "black", borderColor: "white" }}
          rows={transformedEmployees}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </Box>
    </div>
  );
};

export default TableComponent;
