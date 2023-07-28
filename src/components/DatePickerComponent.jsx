import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import PropTypes from "prop-types";

// style import
import "./date.css";
import { ThemeProvider, createTheme } from "@mui/material";

const customTheme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgb(125, 202, 235)",
          },
        },
      },
    },
  },
});

const DatePickerComponent = ({ onChange }) => {
  const handleDateChange = (date) => {
    onChange(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={customTheme}>
        <DatePicker
          theme={customTheme}
          sx={{ marginBottom: "10px" }}
          className="date-theme"
          onChange={handleDateChange}
        />
      </ThemeProvider>
    </LocalizationProvider>
  );
};

DatePickerComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default DatePickerComponent;
