import * as React from 'react';
import styles from "./ProjectScreen.module.scss";
import Layout from "/src/layout/components/Layout";
import {useLoaderData} from "react-router-dom";

export async function ProjectScreenLoader({ params }) {
    const slug = params.slug;
    if (slug === 'new') {
        return {}
    }
    return { slug };
}

export default function ProjectScreen() {
    const { title, slug } = useLoaderData();
    return (
        <Layout title={`Project: "${title ?? 'New project'}"`}>
            New project
        </Layout>
    )
}