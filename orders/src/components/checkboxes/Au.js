import React, { useState } from "react";
import { Grid, FormControlLabel, Checkbox, TextField } from "@mui/material";

const AuCheckbox = ({ formData, handleChange }) => {
  const [showAugFields, setShowAuFields] = useState(false);

  const handleAuChange = (event) => {
    setShowAuFields(event.target.checked);
    handleChange({
      target: {
        name: "Arbeitsunfähigkeitsbescheinigung",
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
              onChange={handleAuChange}
              name="Arbeitsunfähigkeitsbescheinigung"
            />
          }
          label="Arbeitsunfähigkeitsbescheinigung"
        />
      </Grid>
      {showAugFields && (
        <Grid container spacing={2}>
          <Grid item>
            <TextField
              name="Arbeitsunfähigkeitsbescheinigung.dateFrom"
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
              name="Arbeitsunfähigkeitsbescheinigung.dateTo"
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
              name="Arbeitsunfähigkeitsbescheinigung.grund"
              value={formData.grund}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default AuCheckbox;
