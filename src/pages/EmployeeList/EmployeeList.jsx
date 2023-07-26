import { Link } from "react-router-dom";
import "./employeeList.css";
import TableComponent from "../../components/TableComponent";

const EmployeeList = () => {
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <TableComponent />
      <Link to="/home">Home</Link>
    </div>
  );
};

export default EmployeeList;
