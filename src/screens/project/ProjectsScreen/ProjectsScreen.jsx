import * as React from 'react';
import styles from "./ProjectsScreen.module.scss";
import Layout from "/src/layout/components/Layout";
import {useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

export default function ProjectsScreen() {
    const [projects, setProjects] = useState([]);

    return (
        <Layout title="Projects">
            <Box>
                <Button component={Link} to={'/projects/new'} variant="contained">New project</Button>
            </Box>
        </Layout>
    )
}