import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { CreateEmployee, UpdateEmployee } from "../../services/services";

const EmployeeFormDialog = ({ dialogOpen, setDialogOpen, employeeData }) => {
  const [name, setName] = useState(employeeData?.employeeName || "");
  const [email, setEmail] = useState(employeeData?.email || "");

  const [empFormData, setEmpFormData] = useState({
    name: employeeData?.employeeName || "",
    email: employeeData?.email || "",
  });

  const userRole = localStorage.getItem("userRole");

  console.log("employeeData", employeeData);
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onClose = () => {
    setDialogOpen(false);
  };
console.log('empFormData', empFormData)
  const handleSubmit = async () => {
    try {
      // const model = {
      //   employeeName: name,
      //   email: email,
      // };
      // console.log('model', model)
      if (userRole === "manager") {
        const response = await UpdateEmployee(employeeData._id, empFormData, userRole);
        console.log('response', response)
      } else {
        console.log('empFormData', empFormData)
        const response = await CreateEmployee(empFormData);
        console.log('response', response);
      }
    } catch (error) {
      
    }

    onClose(); // Close dialog
  };


  return (
    <Dialog open={dialogOpen} onClose={onClose}>
      {employeeData ? (
        <DialogTitle>Edit Employee</DialogTitle>
      ) : (
        <DialogTitle>Add Employee</DialogTitle>
      )}

      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Name"
          type="text"
          fullWidth
          value={empFormData?.name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="email"
          label="Email"
          type="email"
          fullWidth
          value={empFormData?.email}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          {employeeData ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmployeeFormDialog;
