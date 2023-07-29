import { useState } from "react";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

import { ThemeProvider, createTheme } from "@mui/material";

const customTheme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgb(125, 202, 235)", // Couleur du contour lorsque l'input est en focus
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "#646cff", // Couleur du texte lorsque l'input est en focus
          },
        },
      },
    },
  },
});

const ZipCode = ({ onChange }) => {
  const [zip, setZip] = useState("");

  const handleChange = (event) => {
    setZip(event.target.value);
    onChange(event.target.value);
  };

  return (
    <>
      {/* ... Autres champs de saisie ... */}
      <ThemeProvider theme={customTheme}>
        <TextField
          sx={{ width: 150, backgroundColor: "white", marginTop: "35px" }}
          id="zipCode"
          label="Zip Code"
          type="number"
          value={zip}
          onChange={handleChange}
          variant="outlined"
          inputProps={{
            min: 0, // Valeur minimale
            // max: ..., // Vous pouvez également définir une valeur maximale si nécessaire
          }}
        />
      </ThemeProvider>
    </>
  );
};

ZipCode.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ZipCode;
