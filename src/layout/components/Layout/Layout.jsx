import * as React from "react";
import Header from "../Header";
import {Box, Container, Toolbar} from "@mui/material";

export default function Layout({ children, title }) {
    return (
        <Box sx={{ display: 'flex' }}>
            <Header title={title}/>
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