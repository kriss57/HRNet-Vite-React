import { Link } from "react-router-dom";
import "./employeeList.css";
import TableComponent from "../../components/TableComponent";

const EmployeeList = () => {
  return (
    <>
      <header className="title-emp">
        <h1 className="title-txt-emp">Current Employees</h1>
      </header>
      <main id="employee-div" className="container">
        <TableComponent />
      </main>
      <nav style={{ marginTop: "35px" }}>
        <Link to="/home">Home</Link>
      </nav>
      <footer>
        <p>&copy; {new Date().getFullYear()} HRnet. Tous droits réservés.</p>
      </footer>
    </>
  );
};

export default EmployeeList;
