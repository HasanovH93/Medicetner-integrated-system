import React, { useState } from "react";
import {
  Grid,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  Typography,
  TextField,
} from "@mui/material";

const Heilmittel = ({ formData, handleChange }) => {
  const [showHlFields, setShowHlFields] = useState(false);

  const handleHeilmittelverordnungChange = (event) => {
    const isChecked = event.target.checked;
    setShowHlFields(isChecked);

    handleChange(event);
  };

  const radioFontSize = "0.8rem";

  return (
    <>
      <Grid item>
        <FormControlLabel
          control={
            <Checkbox
              name="Heilmittelverordnung"
              onChange={handleHeilmittelverordnungChange}
            />
          }
          label="Heilmittelverordnung"
        />
      </Grid>
      {showHlFields && (
        <Grid container spacing={2}>
          <Grid item>
            <RadioGroup
              row
              name="Heilmittelverordnung.therapie"
              onChange={handleChange}
            >
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
            <Grid item>
              <TextField
                id="formGrund"
                label="Grund"
                placeholder="Grund"
                name="Heilmittelverordnung.grund"
                value={formData.grund}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Heilmittel;
