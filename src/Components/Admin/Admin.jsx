import React from "react";
import "./admin.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from '@mui/material/Avatar';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import Rating from '@mui/material/Rating';
import HotelIcon from '@mui/icons-material/Hotel';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleIcon from '@mui/icons-material/People';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Doughnut } from 'react-chartjs-2';





function Admin() {

    
  const HotelData = [
    {icon:AssignmentIcon,
    category:"Total Booking",
    available:"8798",
    color:"#FFA500"
},
    {icon:HotelIcon,
    category:"rooms availbe",
    available:"408",
    color:"red"
},
    {icon:PeopleIcon,
    category:"new customers",
    available:"78",
    color:'blue'
},
    {icon:MonetizationOnIcon,
    category:"Total Revenue",
    available:"476599",
    color:'green'
},
    
    
]
  return (
    <div className="admin">
      
      <div className="adminContainer">
        <div className="navbar">
          <AppBar  position="static">
            <Toolbar variant="dense" className="navbars">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              
              <div className="nav-right">
              <Badge badgeContent={4} color="primary">
              <NotificationsNoneIcon/>
              </Badge>
                <SettingsIcon/>
              <Avatar
                alt="Remy Sharp"
                
                sx={{ width: 30, height: 30 }}
              />

            </div>
            </Toolbar>
            
          </AppBar>
        </div>
        <div className="welcome">
          <div className="title">
            <h1>Hi Welcome back</h1>
            <h3>Dashborad</h3>
          </div>
          <div className="rating">
            <h3><Rating name="read-only" value={4} readOnly /></h3>
          </div>
        </div>
        <div className="hotelDetails">
            {HotelData.map((value)=>{
                return(
                    <div className="hotelDetailsContainer">
            <div className="details">
                <div className="top">
                    <div className="left" style={{backgroundColor:value.color}}>
                        <value.icon className="icon"/>
                    </div>
                    <div className="right">
                        <span>{value.category}</span>
                        <span>{value.available}</span>
                    </div>
                </div>
                <div className="bottom"></div>
            </div>
          </div>
                )
            })}
          
           
        </div>
        <div className="charts">
          <div className="graph"></div>
          <div className="bookingChart">
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
