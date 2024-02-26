import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from '@mui/icons-material/Assignment';
import {Link, useMatch} from "react-router-dom";

export default function Menu() {
    return (
        <>
            <MenuItem title="Dashboard" href="/" Icon={DashboardIcon}/>
            <MenuItem title="Projects" href="/projects" Icon={AssignmentIcon}/>
        </>
    )
}

export function MenuItem({ title, href, Icon }) {
    const match = useMatch(href);
    return (
        <ListItemButton component={Link} to={href} selected={!!match}>
            {!!Icon && (
                <ListItemIcon><Icon/></ListItemIcon>
            )}
            <ListItemText primary={title} />
        </ListItemButton>
    )
}