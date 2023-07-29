import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";

import { states } from "../../src/_mockData/stateData";

import { ThemeProvider, createTheme } from "@mui/material";

const customTheme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgb(125, 202, 235)", // Couleur du contour  lorsque l'input est en focus
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "#646cff", // Couleur du texte  lorsque l'input est en focus
          },
        },
      },
    },
  },
});

const StateComponent = ({ onChange }) => {
  const [state, setState] = useState("");

  const handleChange = (event) => {
    setState(event.target.value);
    onChange(event.target.value);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ minWidth: 120, backgroundColor: "white", marginTop: "10px" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">State</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state}
            label="department"
            onChange={handleChange}
          >
            {states.map((st) => (
              <MenuItem key={st.name} value={st.abbreviation}>
                {st.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
};

StateComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
};

StateComponent.PropTypes = {
  states: PropTypes.object,
};

export default StateComponent;
