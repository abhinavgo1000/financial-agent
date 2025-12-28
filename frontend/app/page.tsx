import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Home() {
    return (
        <React.Fragment>
            <Box sx={{ p: 2 }}>
                <Typography variant='h4' component='h1' gutterBottom>
                    Welcome to the Financial Agent
                </Typography>
            </Box>
        </React.Fragment>
    );
}
