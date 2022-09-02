import { createTheme as createMuiTheme } from '@mui/material/styles'
import customLightTheme from './LightTheme'
import customDarkTheme from './DarkTheme'

const light = {
  palette: {
    mode: 'light',
  },
}

const dark = {
  palette: {
    mode: 'dark',
  },
}

export const createTheme = (config) => {
  let theme = createMuiTheme(
    config.mode === 'dark' ? customDarkTheme : customLightTheme,
  )
  return theme
}
