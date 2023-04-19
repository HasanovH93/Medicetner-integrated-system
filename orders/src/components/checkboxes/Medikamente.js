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

const Medikamente = ({ formData, handleChange }) => {
  const [showMedikamenteFields, setShowMedikamenteFields] = useState(false);
  const [medikamenteFields, setMedikamenteFields] = useState([{ id: 1 }]);

  const handleMedikamenteChange = (event) => {
    setShowMedikamenteFields(event.target.checked);
    handleChange(event);
  };

  const addMedikamenteFields = () => {
    setMedikamenteFields([
      ...medikamenteFields,
      { id: medikamenteFields.length + 1 },
    ]);
    handleChange({
      target: {
        type: "checkbox",
        name: `Medikamente.formMedikament${medikamenteFields.length + 1}`,
        checked: true,
      },
    }); 
  };

  const removeMedikamenteFields = (id) => {
    setMedikamenteFields(medikamenteFields.filter((field) => field.id !== id));
    handleChange({
      target: {
        type: "checkbox",
        name: `Medikamente.formMedikament${id}`,
        checked: false,
      },
    }); // Add this line
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
                    id={`Medikamente.Medikament${field.id}`}
                    name={`Medikamente. Medikament${field.id}`}
                    label={`Medikament ${field.id}`}
                    placeholder="Medikament"
                    fullWidth
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6} sm={3}>
                  <TextField
                    id={`Medikamente.Dosierung${field.id}`}
                    name={`Medikamente.Dosierung${field.id}`}
                    label={`Dosierung ${field.id}`}
                    placeholder="Dosierung"
                    fullWidth
                    onChange={handleChange}
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
