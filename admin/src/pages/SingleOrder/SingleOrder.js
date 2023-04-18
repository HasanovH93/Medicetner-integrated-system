import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Box,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import {
  Email,
  Phone,
  Cake,
  Home,
  LocationOn,
  MarkunreadMailbox,
  ShoppingCart,
  Receipt,
  Spa,
  Healing,
} from "@mui/icons-material";

const OrderCard = ({ order }) => {
  const getItemIcon = (itemKey) => {
    switch (itemKey) {
      case "arbeitsunfähigkeitsbescheinigung":
        return <Receipt />;
      case "Heilmittel":
        return <Spa />;
      case "Medikamente":
        return <Healing />;
      default:
        return <ShoppingCart />;
    }
  };

  return (
    <Card sx={{ minWidth: 700, maxWidth: 1200, mb: 4 }}>
      <CardHeader
        avatar={
          <Avatar>
            {order.firstName.charAt(0)}
            {order.secondName.charAt(0)}
          </Avatar>
        }
        title={`Order for ${order.firstName} ${order.secondName}`}
        subheader={`Order ID: ${order._id}`}
      />
      <Divider />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Contact Info:
            </Typography>
            <Typography>
              <Email fontSize="small" /> Email: {order.email}
            </Typography>
            <Typography>
              <Phone fontSize="small" /> Phone: {order.phone}
            </Typography>
            <Typography>
              <Cake fontSize="small" /> Date of Birth: {order.dateofbirth}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Address:
            </Typography>
            <Typography>
              <Home fontSize="small" /> Street: {order.street}
            </Typography>
            <Typography>
              <LocationOn fontSize="small" /> City: {order.city}
            </Typography>
            <Typography>
              <MarkunreadMailbox fontSize="small" /> Postcode: {order.postcode}
            </Typography>
          </Grid>
        </Grid>

        <Box mt={3}>
          <Typography variant="h6" gutterBottom>
            Chosen Items:
          </Typography>
          <List>
            {order.chosenCheckboxes.map((item, index) => {
              const key = Object.keys(item)[0];
              return (
                <ListItem key={index}>
                  <ListItemIcon>{getItemIcon(key)}</ListItemIcon>
                  <ListItemText
                    primary={key}
                    secondary={Object.entries(item[key]).map(
                      ([subKey, value], idx) => (
                        <Typography key={idx} component="span" display="block">
                          {subKey}: {value}
                        </Typography>
                      )
                    )}
                  />
                </ListItem>
              );
            })}
          </List>
        </Box>
      </CardContent>
    </Card>
  );
};

export default OrderCard;
