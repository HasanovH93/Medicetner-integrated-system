import React, { useState } from "react";
import { Container, Grid, TextField, Button, Typography } from "@mui/material";
import Aucheckbox from "./checkboxes/Au";
import Heilmittel from "./checkboxes/Heilmittel";
import Medikamente from "./checkboxes/Medikamente";
import styles from "./SimpleForm.module.css";
import { createOrder } from "../api";

const CustomForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    phone: "",
    email: "",
    dateofbirth: "",
    street: "",
    city: "",
    postcode: "",
    chosenCheckboxes: [],
  });

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prevFormData) => {
        const checkboxIndex = prevFormData.chosenCheckboxes.findIndex(
          (checkbox) => checkbox.hasOwnProperty(parent)
        );

        let updatedChosenCheckboxes = [...prevFormData.chosenCheckboxes];
        if (checkboxIndex !== -1) {
          updatedChosenCheckboxes[checkboxIndex] = {
            ...updatedChosenCheckboxes[checkboxIndex],
            [parent]: {
              ...updatedChosenCheckboxes[checkboxIndex][parent],
              [child]: value,
            },
          };
        } else if (value !== "") {
          updatedChosenCheckboxes = [
            ...updatedChosenCheckboxes,
            { [parent]: { [child]: value } },
          ];
        }

        return {
          ...prevFormData,
          chosenCheckboxes: updatedChosenCheckboxes.filter((checkbox) => {
            const key = Object.keys(checkbox)[0];
            return Object.keys(checkbox[key]).length > 0;
          }),
        };
      });
    } else if (type !== "checkbox") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    createOrder(formData);
  };

  return (
    <div className={styles.orderForm}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Bestellungen
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Ihre Name"
                placeholder="Ihre Name"
                name="firstName"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Vorname"
                placeholder="Ihre Vorname"
                name="secondName"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Telefonnummer"
                placeholder="Ihre Telefonnummer"
                name="phone"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                placeholder="Ihre Email"
                type="email"
                name="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Geburtsdatum"
                type="date"
                InputLabelProps={{ shrink: true }}
                name="dateofbirth"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Straße und Hausnummer"
                placeholder="Straße und Hausnummer"
                name="street"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Stadt"
                placeholder="Stadt"
                name="city"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Postleitzahl"
                placeholder="Postleitzahl"
                name="postcode"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                spacing={3}
                direction="row"
                justifyContent="space-between"
                onChange={handleChange}
              >
                <Grid item>
                  <Aucheckbox formData={formData} handleChange={handleChange} />
                  <Heilmittel formData={formData} handleChange={handleChange} />
                  <Medikamente
                    formData={formData}
                    handleChange={handleChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} container justifyContent="center">
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default CustomForm;
