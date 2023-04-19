import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Typography,
  TextField,
  Grid,
  Box,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
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
import { deepOrange, green } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  updateOrderStatusInStore,
} from "../../store/slices/orders-slice"; // Update this import

const OrderCard = ({ order }) => {
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getItemIcon = (itemKey) => {
    switch (itemKey) {
      case "Arbeitsunfähigkeitsbescheinigung":
        return <Receipt />;
      case "Heilmittelverordnung":
        return <Spa />;
      case "Medikamente":
        return <Healing />;
      default:
        return <ShoppingCart />;
    }
  };

  const handleApprove = async () => {
    try {
      const updatedStatus = "Approved";
      dispatch(
        updateOrderStatusInStore({ id: order._id, status: updatedStatus })
      );
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    navigate("/dashboard/all-products");
  };
  const handleAddComment = () => {
    console.log("Comment added:", comment);
    // Add your logic for adding the comment
  };

  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
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
        title={
          <Typography variant="h5">
            Order for {order.firstName} {order.secondName}
          </Typography>
        }
        subheader={
          <Typography variant="subtitle1" color="text.secondary">
            Order ID: {order._id}
          </Typography>
        }
        action={
          <Box>
            <Typography variant="subtitle2" sx={{ textAlign: "right" }}>
              {formatDate(order.createdAt)}
            </Typography>
            <Typography
              variant="subtitle2"
              display="inline"
              sx={{
                backgroundColor:
                  order.status === "Pending" ? deepOrange[500] : green[500],
                borderRadius: "5px",
                padding: "2px 5px",
                color: "white",
                textAlign: "right",
              }}
            >
              {order.status}
            </Typography>
          </Box>
        }
      />
      <Divider />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Contact Info:
            </Typography>
            <Typography>
              <Email fontSize="small" /> Email:{" "}
              <Chip label={order.email} color="primary" />
            </Typography>
            <Typography>
              <Phone fontSize="small" /> Phone:{" "}
              <Chip label={order.phone} color="secondary" />
            </Typography>
            <Typography>
              <Cake fontSize="small" /> Date of Birth:{" "}
              <Chip label={order.dateofbirth} color="default" />
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
                <ListItem key={index} disablePadding>
                  <ListItemIcon>{getItemIcon(key)}</ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" color="text.primary">
                        {key}
                      </Typography>
                    }
                    secondary={
                      <Box display="flex" flexWrap="wrap">
                        {Object.entries(item[key]).map(
                          ([subKey, value], idx) => (
                            <Chip
                              key={idx}
                              label={`${subKey}: ${value}`}
                              sx={{ marginRight: 1, marginBottom: 1 }}
                            />
                          )
                        )}
                      </Box>
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        </Box>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          paddingRight: 2,
          paddingBottom: 2,
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 450 }}>
          <TextField
            label="Comment"
            variant="outlined"
            fullWidth
            multiline
            rows={2}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            inputProps={{ style: { minHeight: "2em" } }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddComment}
            sx={{ marginTop: 1 }}
          >
            Add
          </Button>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleDelete(order._id)}
            sx={{ marginRight: 1 }}
          >
            Delete
          </Button>
          <Button variant="contained" color="primary" onClick={handleApprove}>
            Approve
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default OrderCard;
