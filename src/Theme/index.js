import { createTheme as createMuiTheme } from '@mui/material/styles'
import customLightTheme from './LightTheme'
import customDarkTheme from './DarkTheme'

export const createTheme = (config) =>
  createMuiTheme(config.mode === 'dark' ? customDarkTheme : customLightTheme)
