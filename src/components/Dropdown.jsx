
import { useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Dropdown = () => {
    
 const [department, setDepartment] = useState('')

  const handleChange = (event) => {
    setDepartment(event.target.value);
  }

    return (
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Department</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={department}
          label="department"
          onChange={handleChange}
        >
          <MenuItem value={10}>Sales</MenuItem>
          <MenuItem value={20}>Marketing</MenuItem>
          <MenuItem value={30}>Engineering</MenuItem>
          <MenuItem value={40}>Human Ressources</MenuItem>
          <MenuItem value={50}>Legal</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
    );
};

export default Dropdown;