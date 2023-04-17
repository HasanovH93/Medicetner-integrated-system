import React, { useState } from "react";
import {
  Grid,
  Box,
  FormControlLabel,
  Checkbox,
  TextField,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";

const Medikamente = () => {
  const [showMedikamenteFields, setShowMedikamenteFields] = useState(false);
  const [medikamenteFields, setMedikamenteFields] = useState([{ id: 1 }]);

  const handleMedikamenteChange = (event) => {
    setShowMedikamenteFields(event.target.checked);
  };

  const addMedikamenteFields = () => {
    setMedikamenteFields([
      ...medikamenteFields,
      { id: medikamenteFields.length + 1 },
    ]);
  };

  const removeMedikamenteFields = (id) => {
    setMedikamenteFields(medikamenteFields.filter((field) => field.id !== id));
  };

  return (
    <>
      <Grid item>
        <FormControlLabel
          control={<Checkbox onChange={handleMedikamenteChange} />}
          label="Medikamente"
        />
      </Grid>
      {showMedikamenteFields && (
        <>
          {medikamenteFields.map((field, index) => (
            <Box key={field.id} marginBottom={2}>
              <Grid container spacing={2} key={field.id} alignItems="center">
                <Grid item xs={6} sm={3}>
                  <TextField
                    id={`formMedikament${field.id}`}
                    label={`Medikament ${field.id}`}
                    placeholder="Medikament"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6} sm={3}>
                  <TextField
                    id={`formDosierung${field.id}`}
                    label={`Dosierung ${field.id}`}
                    placeholder="Dosierung"
                    fullWidth
                  />
                </Grid>
                <Grid item container xs={6} sm={4} alignItems="center">
                  <Grid item>
                    {index === medikamenteFields.length - 1 && (
                      <IconButton
                        color="primary"
                        onClick={addMedikamenteFields}
                      >
                        <AddIcon />
                      </IconButton>
                    )}
                  </Grid>
                  <Grid item>
                    {index !== 0 && (
                      <Box marginLeft={1}>
                        <IconButton
                          color="secondary"
                          onClick={() => removeMedikamenteFields(field.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          ))}
        </>
      )}
    </>
  );
};

export default Medikamente;
