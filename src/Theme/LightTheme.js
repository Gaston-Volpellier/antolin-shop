import { createTheme } from '@mui/material/styles'

const customLightTheme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'variant1',
          },
          style: {
            color: 'white',
          },
        },
        {
          props: {
            variant: 'variant2',
          },
          style: {
            color: '#3c3c3c',
          },
        },
      ],
    },
  },
  palette: {
    mode: 'light',
    primary: {
      light: '#112233',
      main: '#445566',
      dark: '#778899',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f0e6e6',
      main: '#c93434',
      dark: '#3c3c3c',
      contrastText: '#000',
    },
    background: {
      default: '#e3fcfc',
    },
    variant1: {
      main: '#445566',
    },
  },
})

export default customLightTheme
