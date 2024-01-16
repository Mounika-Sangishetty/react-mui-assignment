import { brown, orange} from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Theme } from '@mui/material/styles';
import "@mui/styles";

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

let appTheme = createTheme({
    spacing: (factor: number) => `${0.25 * factor}rem`,
    palette: {
      primary: {
        main: brown[900],
      },
      secondary: orange,     
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'capitalize',
          },
        },
      },
    },
});

appTheme = responsiveFontSizes(appTheme, { breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'] });
export { appTheme };