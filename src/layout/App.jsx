import * as React from 'react';
import {
    createHashRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import '/src/styles/app.scss';
import {
    createTheme,
    CssBaseline,
    ThemeProvider,
} from "@mui/material";
import HomeScreen from "/src/screens/HomeScreen";
import ProjectsScreen from "../screens/project/ProjectsScreen";
import ProjectScreen from "../screens/project/ProjectScreen";
import {ProjectScreenLoader} from "../screens/project/ProjectScreen/ProjectScreen";

const Router = (
    <>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/projects" element={<ProjectsScreen/>}/>
        <Route path="/projects/:id" element={<ProjectScreen/>} loader={ProjectScreenLoader}/>
    </>
);

function App() {
    const defaultTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <RouterProvider router={createHashRouter(createRoutesFromElements(Router))} />
        </ThemeProvider>
    )
}

export default App;
