import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import books from '../assets/books.jpg'
const BlogList = () => {
    return(
        <>
        <Container maxWidth="lg">
            <Typography variant="h6" color="secondary" sx={{ fontWeight: 'bold' }}>Recommended Blogs</Typography>
                <Grid container spacing={3} sx={{mt:3}}>
                    <Grid item xs={12}>
                        <Card>
                            <Box sx={{display:'flex'}}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 151 }} 
                                    image={books}
                                    alt="Live from space album cover"
                                />
                                <CardContent sx={{marginLeft:'10px'}}>
                                    <Typography variant="h6" gutterBottom>
                                        Best Books for JEE Main 2022 - Check Preparation for JEE Main
                                    </Typography>
                                    <Typography variant="body1">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut illum, amet,
                                         fugit eligendi dolore unde tempore recusandae est facilis eos beatae incidunt culpa,
                                          corrupti veritatis aliquid hic reiciendis modi iusto  unde tempore recusandae est facilis eos beatae incidunt culpa,
                                          corrupti veritatis aliquid hic reiciendis !
                                    </Typography>
                                    <Typography variant="caption" component="div" mt={4}>By Rithvik Dev</Typography>
                                </CardContent>
                            
                            </Box>
                        </Card>
                    </Grid>                 
                </Grid>
        </Container>
        </>
    )
}
export default BlogList;