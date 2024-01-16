import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import { Box, Container } from '@mui/material';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs() {
    return (
        <Container maxWidth='lg'>
            <Box>
                <div role="presentation" onClick={handleClick}>
                    <Breadcrumbs style={{
                        padding: '1px',                     
                        display: 'flex',
                    }} separator="›" sx={{ mx: 3, mt: 6, mb: 3 }}>
                        <Link underline="hover" color="inherit" href="/">
                            <Typography color="secondary">Overview</Typography>
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/material-ui/getting-started/installation/"
                        >
                            Blog
                        </Link>
                        <Link underline="hover" color="inherit" href="/">
                            <Typography>One of Saturn's largest rings</Typography>
                        </Link>
                    </Breadcrumbs>
                </div>
            </Box>
        </Container>
       
    );
}
