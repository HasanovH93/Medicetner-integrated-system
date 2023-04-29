import React, { useState } from "react";
import { TextField, MenuItem, Button, Grid, Box } from "@mui/material/";

const CustomForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    timeOfDay: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} maxWidth="md">
          <Grid item xs={12} sm={6}>
            <TextField
              name="firstName"
              label="First Name"
              variant="outlined"
              fullWidth
              required
              value={formData.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="lastName"
              label="Last Name"
              variant="outlined"
              fullWidth
              required
              value={formData.lastName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="phoneNumber"
              label="Phone Number"
              variant="outlined"
              fullWidth
              required
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="timeOfDay"
              label="Tageszeitwunsch"
              select
              variant="outlined"
              fullWidth
              required
              value={formData.timeOfDay}
              onChange={handleChange}
            >
              <MenuItem value="Vormittag">Vormittag</MenuItem>
              <MenuItem value="Nachmittag">Nachmittag</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="message"
              label="Wunschtermine"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Geben Sie Ihre Wunschtermine ab..."
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Terminanfrage senden
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default CustomForm;
