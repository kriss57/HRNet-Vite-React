import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import PropTypes from "prop-types";
import { departmentData } from "../../src/_mockData/departmentData.js";

import "./date.css";
import { ThemeProvider, createTheme } from "@mui/material";

const customTheme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgb(125, 202, 235)", // Couleur du contour en rouge lorsque l'input est en focus
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "#646cff", // Couleur du texte en rouge lorsque l'input est en focus
          },
        },
      },
    },
  },
});

const Dropdown = ({ onChange }) => {
  const [department, setDepartment] = useState("");

  const handleChange = (event) => {
    setDepartment(event.target.value);
    onChange(event.target.value);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ width: 100, backgroundColor: "grey", marginTop: "35px" }}>
        <FormControl className="dep-theme">
          <InputLabel id="demo-simple-select-label">Department</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={department}
            label="department"
            onChange={handleChange}
          >
            {departmentData.map((dep) => (
              <MenuItem key={dep.name} value={dep.name}>
                {dep.abbreviation}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
};

Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
};

Dropdown.propTypes = {
  departmentData: PropTypes.object,
};

export default Dropdown;
