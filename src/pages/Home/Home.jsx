import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

import "./home.css";
import ModalComponent from "../../components/ModalComponent";
import DatePickerComponent from "../../components/DatePickerComponent"

import dayjs from 'dayjs';
import Dropdown from "../../components/Dropdown"

const Home = () => {
  const employee = {
    firstName: "",
    lastName: "",
    startDate: "",
    department: "",
    dateOfBirth: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  };

  const [formData, setFormData] = useState(employee);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSave = () => {
    dispatch({
      type: "employee/addEmployee",
      payload: formData,
    });
    alert("Employee Created");
    setFormData(employee);
  };

  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="firstName">First Name</label>
          <input onChange={handleChange} type="text" id="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <input onChange={handleChange} type="text" id="lastName" />

          <label htmlFor="dateOfBirth">Date of Birth</label>
          <DatePickerComponent  onChange={(date) => handleChange({ target: { id: 'dateOfBirth', value: dayjs(date).toISOString() } })} />
          {/* <input onChange={handleChange} id="dateOfBirth" type="text" /> */}

          
          <label htmlFor="startDate">Start Date</label>
          <input onChange={handleChange} id="startDate" type="text" />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input onChange={handleChange} id="street" type="text" />

            <label htmlFor="city">City</label>
            <input onChange={handleChange} id="city" type="text" />

            
            <label htmlFor="state">State</label>
            <select onChange={handleChange} name="state" id="state"></select>

            <label htmlFor="ziCode">Zip Code</label>
            <input onChange={handleChange} id="zipCode" type="number" />
          </fieldset>

            <Dropdown/>
          {/* <label htmlFor="department">Department</label>
          <select onChange={handleChange} name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select> */}
        </form>

        <button onClick={handleSave}>Save</button>
        <ModalComponent />
        
      </div>
    </>
  );
};

export default Home;
