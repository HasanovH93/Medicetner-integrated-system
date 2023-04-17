import React, { useState } from "react";
import {
  Grid,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

const Heilmittel = ({ formData, handleChange }) => {
  const [showHeilmittelverordnungFields, setShowHeilmittelverordnungFields] =
    useState(false);

  const handleHeilmittelverordnungChange = (event) => {
    const isChecked = event.target.checked;
    setShowHeilmittelverordnungFields(isChecked);

    handleChange(event);
  };

  const radioFontSize = "0.8rem";

  return (
    <>
      <Grid item>
        <FormControlLabel
          control={
            <Checkbox
              name="Heilmittel"
              onChange={handleHeilmittelverordnungChange}
            />
          }
          label="Heilmittelverordnung"
        />
      </Grid>
      {showHeilmittelverordnungFields && (
        <Grid container spacing={2}>
          <Grid item>
            <RadioGroup row name="Heilmittel.therapie" onChange={handleChange}>
              <FormControlLabel
                control={<Radio />}
                label={
                  <Typography sx={{ fontSize: radioFontSize }}>
                    Physiotherapie
                  </Typography>
                }
                value="Physiotherapie"
              />
              <FormControlLabel
                control={<Radio />}
                label={
                  <Typography sx={{ fontSize: radioFontSize }}>
                    Ergotherapie
                  </Typography>
                }
                value="Ergotherapie"
              />
              <FormControlLabel
                control={<Radio />}
                label={
                  <Typography sx={{ fontSize: radioFontSize }}>
                    Logopädie
                  </Typography>
                }
                value="Logopädie"
              />
              <FormControlLabel
                control={<Radio />}
                label={
                  <Typography sx={{ fontSize: radioFontSize }}>
                    Podologie
                  </Typography>
                }
                value="Podologie"
              />
              <FormControlLabel
                control={<Radio />}
                label={
                  <Typography sx={{ fontSize: radioFontSize }}>
                    Ernährungstherapie
                  </Typography>
                }
                value="Ernährungstherapie"
              />
            </RadioGroup>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Heilmittel;
