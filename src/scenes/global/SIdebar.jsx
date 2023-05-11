import { useState } from "react";
import { ProSidebarProvider, Menu, MenuItem} from 'react-pro-sidebar';
//import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../therme";
import { HomeOutlined } from "@mui/icons-material";
import { PeopleOutlined } from "@mui/icons-material/PeopleOutlined";
import { ContactsOutlined } from "@mui/icons-material/ContactsOutlined";
import { ReceiptOutlined } from "@mui/icons-material/ReceiptOutlined";
import { PersonOutlined } from "@mui/icons-material/PersonOutlined";
import { CalendarTodayOutlined } from "@mui/icons-material/CalendarTodayOutlined";
import { HelpOutlined } from "@mui/icons-material/HelpOutlined";
import { BarChartOutlined } from "@mui/icons-material/BarChartOutlined";
import { PieChartOutlined } from "@mui/icons-material/PieChartOutlined";
import { TimelineOutlined } from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { MapOutlined } from "@mui/icons-material/MapOutlined";


const Sidebar = () => {
         const theme = useTheme();
         const colors = tokens(theme.palette.mode);
        const [isCollapsed, setIsCollapsed] = useState(false);
        const [selected, setSelected] = useState("Dashboard");    
    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`
                },
                "& .pro-icon-wrapper": {
                    background: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item:active": {
                    color: "#6870fa !important",
                },    
            }}
        >
            { <ProSidebarProvider collapsed={isCollapsed}>
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
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>

                            </Box>
                        )}    
                        
                    </MenuItem>    
                </Menu>
            </ProSidebarProvider> }
         </Box>
     );
};

export default Sidebar;