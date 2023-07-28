import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

import "./home.css";
import ModalComponent from "../../components/ModalComponent";
import DatePickerComponent from "../../components/DatePickerComponent";

import dayjs from "dayjs";
import Dropdown from "../../components/Dropdown";
import StateComponent from "../../components/StateComponent";
import ZipCode from "../../components/ZipCode";

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

    setFormData(employee);
  };

  return (
    <>
      <header className="title">
        <h1 className="title-txt">HRnet</h1>
      </header>

      <main className="container">
        <nav>
          <Link to="/employee-list">View Current Employees</Link>
        </nav>

        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <section className="infoUserContainer">
            <label htmlFor="firstName" id="firstNameLabel">
              First Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="firstName"
              aria-labelledby="firstNameLabel"
            />

            <label htmlFor="lastName" id="lastNameLabel">
              Last Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="lastName"
              aria-labelledby="lastNameLabel"
            />

            <label htmlFor="dateOfBirth">Date of Birth</label>
            <DatePickerComponent
              onChange={(date) =>
                handleChange({
                  target: {
                    id: "dateOfBirth",
                    value: dayjs(date).toISOString(),
                  },
                })
              }
            />

            <label htmlFor="startDate">Start Date</label>
            <DatePickerComponent
              onChange={(date) =>
                handleChange({
                  target: { id: "startDate", value: dayjs(date).toISOString() },
                })
              }
            />
            <Dropdown
              onChange={(select) =>
                handleChange({ target: { id: "department", value: select } })
              }
            />
          </section>
          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street" id="streetLabel">
              Street
            </label>
            <input
              onChange={handleChange}
              id="street"
              type="text"
              aria-labelledby="streetLabel"
            />

            <label htmlFor="city" id="cityLabel">
              City
            </label>
            <input
              onChange={handleChange}
              id="city"
              type="text"
              aria-labelledby="cityLabel"
            />

            <label htmlFor="state">State</label>
            <StateComponent
              onChange={(select) =>
                handleChange({ target: { id: "state", value: select } })
              }
            />
            <ZipCode
              onChange={(select) =>
                handleChange({ target: { id: "zipCode", value: select } })
              }
            />
          </fieldset>
        </form>
        <ModalComponent onSave={handleSave} />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} HRnet. Tous droits réservés.</p>
      </footer>
    </>
  );
};

export default Home;
