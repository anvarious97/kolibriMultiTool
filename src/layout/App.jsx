import * as React from 'react';
import {HashRouter, Route, Routes } from "react-router-dom";
import '/src/styles/app.scss';
import {
    createTheme,
    CssBaseline,
    ThemeProvider,
} from "@mui/material";
import HomeScreen from "/src/screens/HomeScreen";
import ProjectsScreen from "../screens/ProjectsScreen";

function App() {
    const defaultTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    return (
        <ThemeProvider theme={defaultTheme}>
            <HashRouter>
                <CssBaseline />
                <Routes>
                    <Route path="/" element={<HomeScreen/>}/>
                    <Route path="/projects" element={<ProjectsScreen/>}/>
                </Routes>
            </HashRouter>
        </ThemeProvider>
    )
}

export default App;
