import {Box} from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
    return (
        <Box m="20xp">
           <Header title="Line Chart" subtitle="Simple Line Chart"/>
            <Box height="75vh">
                <LineChart>

                </LineChart>
            </Box>
        </Box>
    )
}

export default Line;
