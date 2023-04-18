import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Box,
} from "@mui/material";

const OrderCard = ({ order }) => {
  console.log(order);
  console.log("order", order.chosenCheckboxes);
  return (
    <Card sx={{ minWidth: 700, maxWidth: 1200, mb: 4 }}>
      <CardHeader
        title={`Order for ${order.firstName} ${order.secondName}`}
        subheader={`Order ID: ${order._id}`}
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Contact Info:</Typography>
            <Typography>Email: {order.email}</Typography>
            <Typography>Phone: {order.phone}</Typography>
            <Typography>Date of Birth: {order.dateofbirth}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Address:</Typography>
            <Typography>Street: {order.street}</Typography>
            <Typography>City: {order.city}</Typography>
            <Typography>Postcode: {order.postcode}</Typography>
          </Grid>
        </Grid>

        <Box mt={2}>
          <Typography variant="h6">Chosen Items:</Typography>
          {order.chosenCheckboxes.map((item, index) => {
            const key = Object.keys(item)[0];
            return (
              <Box key={index} mt={1}>
                <Typography variant="subtitle1">{key}:</Typography>
                {Object.entries(item[key]).map(([subKey, value], idx) => (
                  <Typography key={idx}>
                    {subKey}: {value}
                  </Typography>
                ))}
              </Box>
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
};

export default OrderCard;
