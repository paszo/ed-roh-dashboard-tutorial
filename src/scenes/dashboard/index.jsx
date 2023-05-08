import React from 'react';
import Header from '../../components/Header';
import {Box} from "@mui/material";

const Dashboard = () => {
    return (
        <Box  m="20px">
            <Box dispaly="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard"></Header>
            </Box>

        </Box>
    );
};

export default Dashboard;