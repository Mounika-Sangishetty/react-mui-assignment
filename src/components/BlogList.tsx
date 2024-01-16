import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import books from '../assets/books.jpg';
import course2 from '../assets/course2.jpg';
import course3 from '../assets/course3.jpg';

const BlogList = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h6" color="secondary" sx={{ fontWeight: 'bold', mt: 3 }}>
          Recommended Blogs
        </Typography>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12}>
            <Card>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                <CardMedia
                  component="img"
                  sx={{ width: { xs: '100%', md: 151 } }}
                  image={books}
                  alt="Live from space album cover"
                />
                <CardContent sx={{ marginLeft: { xs: 0, md: '10px' }, flex: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    Best Books for JEE Main 2022 - Check Preparation for JEE Main
                  </Typography>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut illum, amet, fugit eligendi dolore
                    unde tempore recusandae est facilis eos beatae incidunt culpa, corrupti veritatis aliquid hic
                    reiciendis modi iusto unde tempore recusandae est facilis eos beatae incidunt culpa, corrupti
                    veritatis aliquid hic reiciendis!
                  </Typography>
                  <Typography variant="caption" component="div" mt={4}>
                    By Rithvik Dev
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                <CardMedia
                  component="img"
                  sx={{ width: { xs: '100%', md: 151 } }}
                  image={course2}
                  alt="Live from space album cover"
                />
                <CardContent sx={{ marginLeft: { xs: 0, md: '10px' }, flex: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    Best Books for JEE Main 2022 - Check Preparation for JEE Main
                  </Typography>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut illum, amet, fugit eligendi dolore
                    unde tempore recusandae est facilis eos beatae incidunt culpa, corrupti veritatis aliquid hic
                    reiciendis modi iusto unde tempore recusandae est facilis eos beatae incidunt culpa, corrupti
                    veritatis aliquid hic reiciendis!
                  </Typography>
                  <Typography variant="caption" component="div" mt={4}>
                    By Rithvik Dev
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                <CardMedia
                  component="img"
                  sx={{ width: { xs: '100%', md: 151 } }}
                  image={course3}
                  alt="Live from space album cover"
                />
                <CardContent sx={{ marginLeft: { xs: 0, md: '10px' }, flex: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    Best Books for JEE Main 2022 - Check Preparation for JEE Main
                  </Typography>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut illum, amet, fugit eligendi dolore
                    unde tempore recusandae est facilis eos beatae incidunt culpa, corrupti veritatis aliquid hic
                    reiciendis modi iusto unde tempore recusandae est facilis eos beatae incidunt culpa, corrupti
                    veritatis aliquid hic reiciendis!
                  </Typography>
                  <Typography variant="caption" component="div" mt={4}>
                    By Rithvik Dev
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default BlogList;
