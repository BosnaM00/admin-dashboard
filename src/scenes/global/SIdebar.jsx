import { useState } from "react";
import { ProSidebarProvider, Menu, MenuItem} from 'react-pro-sidebar';
//import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../therme";
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

const Item = ({ title, to, icon, selected, setSelected}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to = {to} />
    </MenuItem>
  );
};







const Sidebar = () => {
         const theme = useTheme();
         const colors = tokens(theme.palette.mode);
         const [isCollapsed, setIsCollapsed] = useState(false);
         const [selected, setSelected] = useState("Dashboard");    
    return (
        <Box
          sx={{
            "& .pro-sidebar-inner": {
              background: `${colors.primary[400]} !important`,
            },
            "& .pro-icon-wrapper": {
              backgroundColor: "transparent !important",
            },
            "& .pro-inner-item": {
              padding: "5px 35px 5px 20px !important",
            },
            "& .pro-inner-item:hover": {
              color: "#868dfb !important",
            },
            "& .pro-menu-item.active": {
              color: "#6870fa !important",
            },
          }}
        >
             <ProSidebarProvider collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon ={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >   
                                <Typography variant="h3" color={colors.grey[100]}>
                                    ADMINS
                                </Typography>
                                <IconButton 
                                    onClick={() => setIsCollapsed(!isCollapsed)}>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}                           
                    </MenuItem> 
                    {!isCollapsed && (
                      <Box mb="25px">
                        <Box display="flex" justifyContent="center" alignItems="center">
                          <img 
                            alt="profile-user"
                            width="100px"
                            height="100px"
                            src={'../../assets/user.jpg'}
                            style={{ cursor: "pointer", borderRadius: "50%"}}
                          />                                                     
                        </Box> 
                        <Box textAlign="center">
                          <Typography
                            variant="h2"
                            color={colors.grey[100]}
                            fontWeight="bold"
                            sx = {{ m: "10px 0 0 0" }}
                          >
                            John
                          </Typography>
                          <Typography
                            variant="5h"
                            color={colors.greenAccent[500]}
                          >
                            VIP ADMIN
                          </Typography>
                        </Box>
                      </Box>
                    )}

                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                      {/* <Item 
                        title="Dashboard"
                        to="/"
                        icon={<HomeOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                      /> */}
                    {/* //     <Item 
                    //     title="Manage Team"
                    //     to="/team"
                    //     icon={<PeopleOutlinedIcon />}
                    //     selected={selected}
                    //     setSelected={setSelected}
                    //   />  
                    //     <Item 
                    //     title="Contacts Information"
                    //     to="/contacts"
                    //     icon={<ContactsOutlinedIcon />}
                    //     selected={selected}
                    //     setSelected={setSelected}
                    //   />  
                    //     <Item 
                    //     title="Invoices Balances"
                    //     to="/invoices"
                    //     icon={<ReceiptOutlinedIcon />}
                    //     selected={selected}
                    //     setSelected={setSelected}
                    //   />
                    //     <Item 
                    //     title="Profile form"
                    //     to="/invoices"
                    //     icon={<PersonOutlinedIcon />}
                    //     selected={selected}
                    //     setSelected={setSelected}
                    //   />
                    //   <Item 
                    //     title="Calendar"
                    //     to="/calendar"
                    //     icon={<CalendarTodayOutlinedIcon />}
                    //     selected={selected}
                    //     setSelected={setSelected}
                    //   /> 
                    //   <Item 
                    //     title="FAQ Page"
                    //     to="/faq"
                    //     icon={<HelpOutlineOutlinedIcon />}
                    //     selected={selected}
                    //     setSelected={setSelected}
                    //   /> 
                    //   <Item 
                    //     title="Bar Chart"
                    //     to="/bar"
                    //     icon={<BarChartOutlinedIcon />}
                    //     selected={selected}
                    //     setSelected={setSelected}
                    //   /> 
                    //   <Item 
                    //     title="Pie chart"
                    //     to="/pie"
                    //     icon={<PieChartOutlinedIcon />}
                    //     selected={selected}
                    //     setSelected={setSelected}
                    //   />        
                    // <Item 
                    //     title="Line chart"
                    //     to="/line"
                    //     icon={<ShowChartOutlinedIcon />}
                    //     selected={selected}
                    //     setSelected={setSelected}
                    //   /> 
                    //   <Item 
                    //     title="Geography chart"
                    //     to="/geography"
                    //     icon={<MapOutlinedIcon />}
                    //     selected={selected}
                    //     setSelected={setSelected}
                    //   />                      */}
                    </Box>
                </Menu>
            </ProSidebarProvider> 
         </Box>
     );
};

export default Sidebar;