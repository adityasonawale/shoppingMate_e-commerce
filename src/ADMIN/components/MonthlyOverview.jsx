import { CurrencyRupee, TrendingUp } from "@mui/icons-material";
import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import CategoryIcon from "@mui/icons-material/Category";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const salesData = [
  {
    stats: "254k",
    title: "Sales",
    color: "primary",
    icon: <TrendingUp sx={{ fontSize: "1.75rem" ,color:'#30336B'}} />,
  },
  {
    stats: "12.5k",
    title: "Customers",
    color: "Success",
    icon: <PeopleIcon sx={{ fontSize: "1.75rem",color:'#30336B' }} />,
  },
  {
    stats: "1.54k",
    title: "Products",
    color: "warning",
    icon: <CategoryIcon sx={{ fontSize: "1.75rem" ,color:'#30336B'}} />,
  },
  {
    stats: "254k",
    title: "Revenue",
    color: "info",
    icon: <CurrencyRupeeIcon sx={{ fontSize: "1.75rem",color:'#30336B' }} />,
  },
];

const renderStats = () => {
  return salesData.map((item, index) => (
    <Grid item xs={12} sm={3} key={index}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          variant="rounded"
          sx={{
            mr: 3,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: "white",
            backgroundColor: `${item.color}`,
          }}
        >
          {item.icon}
        </Avatar>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="caption">{item.title}</Typography>
          <Typography variant="h6">{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ));
};

const MonthlyOverview = () => {
  return (
    <div>
      <Card sx={{bgcolor:'#DFAF2B',color:'whitesmoke'}}>
        <CardHeader
          title="Monthly Overview"
          action={
            <IconButton size="small">
              <MoreVertIcon />
            </IconButton>
          }
          subheader={
            <Typography variant="body2">
              <Box
                component="span"
                sx={{ fontWeight: 600, color: "whitesmoke",mx:2 }}
              >
                Total 48.5% growth
              </Box>{" "}
              this month
            </Typography>
          }
          titleTypographyProps={{
            sx: {
              mb: 2.5,
              lineHeight: "2rem !important",
              letterSpacing: ".15px !important",
            },
          }}
        />
        <CardContent sx={{pt:theme=>`${theme.spacing(3)} !important`}}>
        <Grid container spacing={[5,0]}>
          {renderStats()}
        </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default MonthlyOverview;
