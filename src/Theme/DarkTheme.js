import { createTheme } from '@mui/material/styles'

const customDarkTheme = createTheme({
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
            color: 'white',
          },
        },
      ],
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      light: '#112233',
      main: '#080808',
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
      default: '#303030',
    },
    variant1: {
      default: '#fff',
    },
  },
})

export default customDarkTheme
