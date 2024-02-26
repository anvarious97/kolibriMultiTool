import * as React from 'react';
import styles from "./ProjectScreen.module.scss";
import Layout from "/src/layout/components/Layout";
import {useLoaderData} from "react-router-dom";
import {useState} from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import ProjectStore from "/src/db/stores/Project";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export async function ProjectScreenLoader({params}) {
    const id = params.id;
    if (id === 'new') {
        return {}
    }
    return {id};
}

export default function ProjectScreen() {
    const {title: initialTitle, ...other} = useLoaderData();
    const [data, setData] = useState({title: initialTitle ?? 'New project', ...other});
    const [snackbar, setSnackbar] = useState({
        open: false
    });

    async function onSave() {
        const result = await (
            !!data?._id
                ? ProjectStore.update(data._id, {title: data.title})
                : ProjectStore.create({title: data.title})
        );

        if (result.error) {
            setSnackbar({
                open: true,
                title: "Error while saving project",
                msg: !!result.errors?.length
                    ? ("Project " + result.errors[0].message)
                    : "Unknown error, check debug console"
            })
        } else {
            setData({...result});
        }
    }


    return (
        <Layout headerProps={{
            toolbar: (
                <Box sx={{display: "flex", alignItems: 'center', justifyContent: 'space-between', flexGrow: 1}}>
                    <TextField size="small" value={data.title ?? ""}
                               onChange={e => setData(prevData => ({...prevData, title: e.target.value}))}/>
                    <IconButton size="large" aria-label="save" onClick={onSave}>
                        <SaveOutlinedIcon/>
                    </IconButton>
                </Box>
            )
        }}>
            <Snackbar
                anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                open={!!snackbar?.open && !!snackbar?.msg}
                onClose={() => setSnackbar({open: false})}
                message={snackbar?.msg ?? ""}
                autoHideDuration={5000}
            >
                <Alert variant="filled" severity="error">
                    <AlertTitle>{snackbar?.title ?? "Error"}</AlertTitle>
                    {snackbar?.msg}
                </Alert>
            </Snackbar>
        </Layout>
    )
}