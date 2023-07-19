
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PropTypes from 'prop-types';

const DatePickerComponent = ({onChange}) => {
//const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    //setSelectedDate(date);
    onChange(date); // Utilisez la prop onChange ici
  };


    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker  onChange={handleDateChange}/>
    </LocalizationProvider>
    );
};

DatePickerComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default DatePickerComponent;