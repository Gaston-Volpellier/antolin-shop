import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ThemeSwitch from '../../Switch/ThemeSwitch'

const Footer = (props) => {
  const { change, theme } = props

  return (
    <Box>
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            px: 2,
          }}
        >
          <BottomNavigationAction
            value="theme"
            icon={<ThemeSwitch changeTheme={change} isDarkTheme={theme} />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  )
}

export default Footer
