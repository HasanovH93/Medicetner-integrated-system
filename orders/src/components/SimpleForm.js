import React, { useState } from "react";
import { Container, Grid, TextField, Button, Typography } from "@mui/material";
import ArbeitsunfähigkeitsbescheinigungCheckbox from "./checkboxes/Au";
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
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      setFormData((prevFormData) => {
        const existingCheckboxIndex = prevFormData.chosenCheckboxes.findIndex(
          (item) => item.hasOwnProperty(name)
        );

        let updatedChosenCheckboxes;

        if (checked) {
          if (existingCheckboxIndex === -1) {
            updatedChosenCheckboxes = [
              ...prevFormData.chosenCheckboxes,
              { [name]: {} },
            ];
          } else {
            updatedChosenCheckboxes = prevFormData.chosenCheckboxes;
          }
        } else {
          updatedChosenCheckboxes = prevFormData.chosenCheckboxes.filter(
            (item) => !item.hasOwnProperty(name)
          );
        }

        return {
          ...prevFormData,
          chosenCheckboxes: updatedChosenCheckboxes,
        };
      });
    } else {
      if (name.includes(".")) {
        setFormData((prevFormData) => {
          const updatedChosenCheckboxes = prevFormData.chosenCheckboxes.map(
            (item) => {
              if (item.hasOwnProperty(name.split(".")[0])) {
                return {
                  ...item,
                  [name.split(".")[0]]: {
                    ...item[name.split(".")[0]],
                    [name.split(".")[1]]: value,
                  },
                };
              } else {
                return item;
              }
            }
          );

          return {
            ...prevFormData,
            chosenCheckboxes: updatedChosenCheckboxes,
          };
        });
      } else {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send formData to the server
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
                  <ArbeitsunfähigkeitsbescheinigungCheckbox
                    formData={formData}
                    handleChange={handleChange}
                  />
                  <Heilmittel formData={formData} handleChange={handleChange} />
                  <Medikamente />
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
