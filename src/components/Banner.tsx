import React from 'react';
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { grey, indigo, } from '@mui/material/colors';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


const Banner = () => {
    return (
        <>
        <Box sx={{marginBottom:'2rem'}}>
            <Box
                style={{
                    backgroundImage: 'url("https://images.pexels.com/photos/3860805/pexels-photo-3860805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', // url("../assets/banner.jpg")
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '500px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',                     
                }}
                >          
            </Box>
            <Card sx={{maxWidth:"85%", marginTop:'-4rem', mx: 'auto', px:'2rem'}}>
                <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{display:'flex',justifyContent:'space-between'}}>
                            <Typography variant='h5' sx={{marginBottom:'10px', fontWeight:'bold'}}>
                                One of Saturn's largest rings may be newer than anyone
                            </Typography>
                            <Button variant="outlined" color="secondary" sx={{borderRadius:'25px', borderWidth:'3px',letterSpacing:'2px'}}>
                                Follow
                                <AddOutlinedIcon/>
                            </Button>
                        </Box>       
                        <Box sx={{display:'flex',flexDirection:'column',lineHeight:'.6'}}>
                            <Typography variant='subtitle1' sx={{fontWeight:'medium', color:indigo['A700']}}>Rickie Baroch</Typography>   
                            <Typography variant='subtitle1' sx={{fontWeight:'medium', color: indigo['A700']}}>Category: Government Job</Typography>   
                            <Typography variant='subtitle1' sx={{fontWeight:'medium', color: grey['A700']}}>June 6, 2019</Typography>    
                        </Box>                 
                        
                        <Typography my='10px' variant='body1'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit bibendum vehicula. Donec urna lorem, tincidunt vel porttitor quis, viverra id eros. Aenean quis finibus lacus. Vivamus commodo massa quis urna dignissim placerat. Mauris vestibulum vestibulum quam a finibus. Suspendisse at viverra elit. Proin tortor ante, tempus in mollis sit amet, lacinia sit amet augue. Suspendisse ut rhoncus risus. Nulla eget sodales diam.

                            Suspendisse potenti. Nam auctor justo luctus risus eleifend varius. Nullam accumsan eget lacus eu pulvinar. Pellentesque pulvinar quis lorem non eleifend. Vestibulum vitae nibh orci. Mauris id enim at odio tempor imperdiet. Praesent eu purus sapien. Proin lorem velit, lacinia ac sodales at, commodo quis eros. Aliquam viverra, elit a vestibulum ornare, tellus turpis varius ex, eget facilisis nunc nisl interdum ex. Vestibulum aliquam accumsan leo, ac porttitor tellus tempus lacinia. Vestibulum porttitor finibus eros vitae consectetur.
                        </Typography>
                        <Typography mb='10px' variant='body1'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit bibendum vehicula. Donec urna lorem, tincidunt vel porttitor quis, viverra id eros. Aenean quis finibus lacus. Vivamus commodo massa quis urna dignissim placerat. Mauris vestibulum vestibulum quam a finibus. Suspendisse at viverra elit. Proin tortor ante, tempus in mollis sit amet, lacinia sit amet augue. Suspendisse ut rhoncus risus. Nulla eget sodales diam.

                            Suspendisse potenti. Nam auctor justo luctus risus eleifend varius. Nullam accumsan eget lacus eu pulvinar. Pellentesque pulvinar quis lorem non eleifend. Vestibulum vitae nibh orci. Mauris id enim at odio tempor imperdiet. Praesent eu purus sapien. Proin lorem velit, lacinia ac sodales at, commodo quis eros. Aliquam viverra, elit a vestibulum ornare, tellus turpis varius ex, eget facilisis nunc nisl interdum ex. Vestibulum aliquam accumsan leo, ac porttitor tellus tempus lacinia. Vestibulum porttitor finibus eros vitae consectetur.
                        </Typography>
                        <Typography mb='10px' variant='body1' sx={{fontWeight:'medium', color: indigo['A700']}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit bibendum vehicula. Donec urna lorem, tincidunt vel.
                        </Typography>
                        <Typography mb='10px' variant='body1'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit bibendum vehicula. Donec urna lorem, tincidunt vel porttitor quis, viverra id eros. Aenean quis finibus lacus. Vivamus commodo massa quis urna dignissim placerat. Mauris vestibulum vestibulum quam a finibus. Suspendisse at viverra elit. Proin tortor ante, tempus in mollis sit amet, lacinia sit amet augue. Suspendisse ut rhoncus risus. Nulla eget sodales diam.

                            Suspendisse potenti. Nam auctor justo luctus risus eleifend varius. Nullam accumsan eget lacus eu pulvinar. Pellentesque pulvinar quis lorem non eleifend. Vestibulum vitae nibh orci. Mauris id enim at odio tempor imperdiet. Praesent eu purus sapien. Proin lorem velit, lacinia ac sodales at, commodo quis eros. Aliquam viverra, elit a vestibulum ornare, tellus turpis varius ex, eget facilisis nunc nisl interdum ex. Vestibulum aliquam accumsan leo, ac porttitor tellus tempus lacinia. Vestibulum porttitor finibus eros vitae consectetur.
                        </Typography>
                        <Typography mb='10px' variant='body1'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit bibendum vehicula. Donec urna lorem, tincidunt vel porttitor quis, viverra id eros. Aenean quis finibus lacus. Vivamus commodo massa quis urna dignissim placerat. Mauris vestibulum vestibulum quam a finibus. Suspendisse at viverra elit. Proin tortor ante, tempus in mollis sit amet, lacinia sit amet augue. Suspendisse ut rhoncus risus. Nulla eget sodales diam.

                            Suspendisse potenti. Nam auctor justo luctus risus eleifend varius. Nullam accumsan eget lacus eu pulvinar. Pellentesque pulvinar quis lorem non eleifend. Vestibulum vitae nibh orci. Mauris id enim at odio tempor imperdiet. Praesent eu purus sapien. Proin lorem velit, lacinia ac sodales at, commodo quis eros. Aliquam viverra, elit a vestibulum ornare, tellus turpis varius ex, eget facilisis nunc nisl interdum ex. Vestibulum aliquam accumsan leo, ac porttitor tellus tempus lacinia. Vestibulum porttitor finibus eros vitae consectetur.
                        </Typography>
                        <Box sx={{borderRadius:'250px', width:'13px', display: 'flex', gap:'10px' }}>
                        <Button variant="outlined" color="secondary" sx={{borderRadius:'250px'}}>
                            #exam 
                        </Button>
                        <Button variant="outlined" color="secondary" sx={{borderRadius:'250px'}}>
                            #exam 
                        </Button>
                        <Button variant="outlined" color="secondary" sx={{borderRadius:'250px'}}>
                            #exam 
                        </Button>
                        <Button variant="outlined" color="secondary" sx={{borderRadius:'250px'}}>
                            #exam 
                        </Button>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
          
        </>
       
    );
};

export default Banner;
