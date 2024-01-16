import { Box, Container, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, Typography } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const MailBox = () => {
    return (
        <Container maxWidth="md" sx={{ bgcolor: 'secondary.main', borderRadius: {md:'8px',xs:'0'}, margin:{xs:'2rem 0',md:'2rem auto'} }}>
            <Box
                sx={{ display: 'flex', flexDirection:{md:'row',xs:'column'},gap:'20px',justifyContent: 'space-between', backgroundColor: 'secondary', padding: {md:'50px',xs:'20px'}, margin: {md:'40px 0 70px 0',sm:'20px 0 35px 0'} }} >
                
                <Typography variant="h4" color={"white"}>Subscribe to our newsletter to receive the latest updates.</Typography>
                
                <Box sx={{width:{md:'60%',sm:'100%'},backgroundColor:'secondary.light', padding:'10px', borderRadius:'6px'}}>
                    <FormControl sx={{ width: '100%', mb: 0 }} variant="filled">
                        <InputLabel htmlFor="filled-adornment-password">Enter Your Email</InputLabel>
                        <FilledInput sx={{backgroundColor:'white', border:'none', borderRadius:'4px'}}
                            id="filled-adornment-password"
                            type={'email'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton>
                                        <ArrowForwardIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </Box>
            </Box>
        </Container>
    )
}
export default MailBox;