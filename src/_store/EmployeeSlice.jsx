import { createSlice } from "@reduxjs/toolkit";
// $("#employee-table").DataTable({
//   data: employees,
//   columns: [
//     { title: "First Name", data: "firstName" },
//     { title: "Last Name", data: "lastName" },
//     { title: "Start Date", data: "startDate" },
//     { title: "Department", data: "department" },
//     { title: "Date of Birth", data: "dateOfBirth" },
//     { title: "Street", data: "street" },
//     { title: "City", data: "city" },
//     { title: "State", data: "state" },
//     { title: "Zip Code", data: "zipCode" },
//   ],
// });

export const EmployeeSlice = createSlice({
  name: "employee",
  initialState: {
    employees: [],
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
  },
});
