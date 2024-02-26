import * as React from "react";
import Header from "../Header";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

export default function Layout({ children, headerProps }) {
    return (
        <Box sx={{ display: 'flex' }}>
            <Header {...headerProps}/>
            <Box
                component="main"
                sx={(theme) => ({
                    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 100 : 900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                })}
            >
                <Toolbar />
                <Container maxWidth={false} sx={{ my: 4 }}>
                    {children}
                </Container>
            </Box>
        </Box>
    )
}