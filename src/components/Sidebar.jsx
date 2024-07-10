import React from "react";
import { Box, Button, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { AccountCircle, Security, Notifications, PriceChange, AttachMoney, SupervisorAccount, Backup } from '@mui/icons-material';

export const Sidebar = () => {
    return (
        <Box className="flex w-2/5 md:w-1/4 h-screen bg-gray-100">
            <Box className="mx-auto py-10">
                <List>
                    <ListItem button className="hover:text-[#EC5252] duration-150">
                        <ListItemIcon>
                            <AccountCircle />
                        </ListItemIcon>
                        <ListItemText primary="Account" className="font-semibold" />
                    </ListItem>
                    <ListItem button className="hover:text-[#EC5252] duration-150">
                        <ListItemIcon>
                            <Security />
                        </ListItemIcon>
                        <ListItemText primary="Security" className="font-semibold" />
                    </ListItem>
                    <ListItem button className="hover:text-[#EC5252] duration-150">
                        <ListItemIcon>
                            <Notifications />
                        </ListItemIcon>
                        <ListItemText primary="Notifications" className="font-semibold" />
                    </ListItem>
                    <ListItem button className="hover:text-[#EC5252] duration-150">
                        <ListItemIcon>
                            <PriceChange />
                        </ListItemIcon>
                        <ListItemText primary="Pricing" className="font-semibold" />
                    </ListItem>
                    <ListItem button className="hover:text-[#EC5252] duration-150">
                        <ListItemIcon>
                            <AttachMoney />
                        </ListItemIcon>
                        <ListItemText primary="Sales" className="font-semibold" />
                    </ListItem>
                    <ListItem button className="hover:text-[#EC5252] duration-150">
                        <ListItemIcon>
                            <SupervisorAccount />
                        </ListItemIcon>
                        <ListItemText primary="User Roles" className="font-semibold" />
                    </ListItem>
                    <ListItem button className="hover:text-[#EC5252] duration-150">
                        <ListItemIcon>
                            <Backup />
                        </ListItemIcon>
                        <ListItemText primary="Backups" className="font-semibold" />
                    </ListItem>
                </List>
                <Box mt={4} textAlign="center">
                    <Button variant="contained" color="primary">
                        Logout
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};
