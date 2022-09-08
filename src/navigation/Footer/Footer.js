import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import React from 'react'
import ThemeSwitch from '../../components/Switch/ThemeSwitch'

const Footer = (props) => {
  const { change, isDarkTheme } = props

  return (
    <BottomNavigation
      showLabels
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        px: 2,
        position: 'fixed',
        bottom: 0,
        zIndex: 1,
      }}
    >
      <BottomNavigationAction
        value="theme"
        icon={<ThemeSwitch changeTheme={change} isDarkTheme={isDarkTheme} />}
      />
    </BottomNavigation>
  )
}

export default Footer
