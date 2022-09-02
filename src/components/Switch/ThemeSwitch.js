import { FormControlLabel, FormGroup, Switch } from '@mui/material'
import React from 'react'

const ThemeSwitch = (props) => {
  const { changeTheme, isDarkTheme } = props

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={isDarkTheme}
            onChange={changeTheme}
            color="default"
          />
        }
        label="Dark mode"
      />
    </FormGroup>
  )
}

export default ThemeSwitch
