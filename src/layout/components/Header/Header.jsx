import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Menu from "../Menu";

export default function Header({ title, toolbar }) {
    const [open, setOpen] = React.useState(false);

    function toggleMenu() {
        setOpen(prevOpen => !prevOpen);
    }

    const menuWidth = 240;
    return (
        <>
            <AppBar sx={(theme) => ({
                zIndex: theme.zIndex.drawer + 1,
                transition: theme.transitions.create(['width', 'margin'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                ...(open && {
                    marginLeft: menuWidth,
                    width: `calc(100% - ${menuWidth}px)`,
                    transition: theme.transitions.create(['width', 'margin'], {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.enteringScreen,
                    }),
                }),
            })}>
                <Toolbar sx={{pr: '24px'}}> {/* keep right padding when drawer closed */}
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleMenu}
                        sx={{
                            marginRight: '36px',
                            ...(open && {display: 'none'}),
                        }}
                    >
                        <MenuIcon/>
                    </IconButton>
                    {toolbar ?? (
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{flexGrow: 1}}
                        >
                            {title ?? 'Kolibri Multi Tool'}
                        </Typography>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" sx={(theme) => ({
                '& .MuiDrawer-paper': {
                    position: 'relative',
                    whiteSpace: 'nowrap',
                    width: menuWidth,
                    transition: theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.enteringScreen,
                    }),
                    boxSizing: 'border-box',
                    overflowX: 'hidden',
                    ...(!open && {
                        transition: theme.transitions.create('width', {
                            easing: theme.transitions.easing.sharp,
                            duration: theme.transitions.duration.leavingScreen,
                        }),
                        width: theme.spacing(7),
                        [theme.breakpoints.up('sm')]: {
                            width: theme.spacing(9),
                        },
                    }),
                },
            })}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [1],
                    }}
                >
                    <IconButton onClick={toggleMenu}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </Toolbar>
                <Divider/>
                <List component="nav">
                    <Menu/>
                </List>
            </Drawer>
        </>
    )
}