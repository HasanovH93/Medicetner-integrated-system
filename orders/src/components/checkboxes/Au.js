import React, { useState } from "react";
import { Grid, FormControlLabel, Checkbox, TextField } from "@mui/material";

const ArbeitsunfähigkeitsbescheinigungCheckbox = ({
  formData,
  handleChange,
}) => {
  const [
    showArbeitsunfähigkeitsbescheinigungFields,
    setShowArbeitsunfähigkeitsbescheinigungFields,
  ] = useState(false);

  const handleArbeitsunfähigkeitsbescheinigungChange = (event) => {
    setShowArbeitsunfähigkeitsbescheinigungFields(event.target.checked);
    handleChange({
      target: {
        name: "arbeitsunfähigkeitsbescheinigung",
        type: "checkbox",
        checked: event.target.checked,
      },
    });
  };

  return (
    <>
      <Grid item>
        <FormControlLabel
          control={
            <Checkbox
              onChange={handleArbeitsunfähigkeitsbescheinigungChange}
              name="arbeitsunfähigkeitsbescheinigung"
            />
          }
          label="Arbeitsunfähigkeitsbescheinigung"
        />
      </Grid>
      {showArbeitsunfähigkeitsbescheinigungFields && (
        <Grid container spacing={2}>
          <Grid item>
            <TextField
              name="arbeitsunfähigkeitsbescheinigung.dateFrom"
              value={formData.dateFrom}
              onChange={handleChange}
              id="formDateFrom"
              label="Date From"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              name="arbeitsunfähigkeitsbescheinigung.dateTo"
              value={formData.chosenCheckboxes["dateTo"]}
              onChange={handleChange}
              id="formDateTo"
              label="Date To"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="formGrund"
              label="Grund"
              placeholder="Grund"
              name="arbeitsunfähigkeitsbescheinigung.grund"
              value={formData.grund}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ArbeitsunfähigkeitsbescheinigungCheckbox;
