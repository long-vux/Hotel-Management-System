import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const AddEmployeeModal = ({ open, handleClose }) => {
  const DB_HOST = process.env.REACT_APP_DB_HOST;

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    border: 'none',
    borderRadius: 2,
  };

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [department, setDepartment] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [salary, setSalary] = useState('');
  const [image, setImage] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const imageFile = files[0];
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(imageFile);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    try {
      const employeeData = {
        firstName,
        lastName,
        role,
        email,
        gender,
        department,
        dob,
        phoneNumber,
        address,
        salary,
        image, // Assuming the image is a base64 string
      };
      
      const response = await axios.post(DB_HOST+'api/Employee', employeeData);
      console.log(response.data);
      handleClose();
    } catch (error) {
      console.error('Error saving employee:', error);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-description" className="flex gap-4">
          <div className="flex flex-col gap-1">
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className={`border-2 border-dashed rounded-md p-4 flex items-center justify-center cursor-pointer ${
                image ? 'h-48' : 'h-32'
              }`}
              style={{ minHeight: '200px' }}
            >
              {image ? (
                <img
                  src={image}
                  className="rounded-md"
                  alt="Employee Avatar"
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                />
              ) : (
                <span>
                  Drag & Drop Image Here
                </span>
              )}
            </div>
            {/* Button to trigger file input */}
            <Button variant="outlined" component="label">
              Upload Image
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
            </Button>
          </div>

          {/* Employee details */}
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
              <TextField label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} variant="standard" />
              <TextField label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} variant="standard" />
              
              <Autocomplete
                  value={role}
                  onChange={(event, newValue) => setRole(newValue)}
                  disablePortal
                  options={Role}
                  className='w-2/3'
                  renderInput={params => (
                    <TextField {...params} label='Role' />
                  )}
                />

              <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} variant="standard" />
              <FormControl variant="standard">
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select labelId="gender-label" value={gender} onChange={(e) => setGender(e.target.value)}>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="flex flex-col gap-2">
              <TextField label="Department" value={department} onChange={(e) => setDepartment(e.target.value)} variant="standard" />
              <TextField label="DOB" type="date" value={dob} onChange={(e) => setDob(e.target.value)} variant="standard" InputLabelProps={{ shrink: true }} />
              <TextField label="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} variant="standard" />
              <TextField label="Salary" value={salary} onChange={(e) => setSalary(e.target.value)} variant="standard" />
            </div>

            <div className="flex flex-col h-full justify-between gap-2">
              <TextField label="Address" value={address} onChange={(e) => setAddress(e.target.value)} variant="standard" />
              <div className="flex justify-end flex-row gap-2">
                <Button variant="outlined" onClick={handleClose} className="hover:bg-blue-900 hover:text-white">
                  Cancel
                </Button>
                <Button variant="contained" onClick={handleSubmit} className="hover:bg-blue-900 hover:text-white">
                  Save
                </Button>
              </div>
            </div>
          </div>
        </Typography>
      </Box>
    </Modal>
  );
};

export default AddEmployeeModal;
