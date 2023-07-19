import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//import { Modal } from "vite-modalisa";

import "./employeeList.css";
import ModalComponent from "../../components/ModalComponent";

//import { useReactTable } from "@tanstack/react-table";

const EmployeeList = () => {
  const employees = useSelector((state) => state.employee.employees);
  console.log(employees);

  const columns = [
    { title: "First Name", data: "firstName" },
    { title: "Last Name", data: "lastName" },
    { title: "Start Date", data: "startDate" },
    { title: "Department", data: "department" },
    { title: "Date of Birth", data: "dateOfBirth" },
    { title: "Street", data: "street" },
    { title: "City", data: "city" },
    { title: "State", data: "state" },
    { title: "Zip Code", data: "zipCode" },
  ];

  //const table = useReactTable(columns);

  return (
    /////////////////////////////////////////////////////////////////////
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <div className="header-table" style={{ marginTop: "35px" }}>
        <div className="entries-container">
          <label htmlFor="entries">Show </label>
          <select
            style={{ width: "60px", borderRadius: "5px" }}
            name="entries"
            id="entries"
          >
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
          <span> entries</span>
        </div>
        <div className="show-container">
          <label htmlFor="search">Search: </label>
          <input style={{ height: "20px" }} id="search" type="texte" />
        </div>
      </div>
      <table id="employee-table" className="display">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.title}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.firstName}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.startDate}</td>
              <td>{employee.department}</td>
              <td>{employee.dateOfBirth}</td>
              <td>{employee.street}</td>
              <td>{employee.city}</td>
              <td>{employee.state}</td>
              <td>{employee.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/home">Home</Link>
      <ModalComponent />
    </div>
  );
};

export default EmployeeList;
