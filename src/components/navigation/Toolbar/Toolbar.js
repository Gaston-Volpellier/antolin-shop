import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Logo from '../../../assets/logo.png'
import LogoWhite from '../../../assets/logo-white.png'
import { Link } from '@mui/material'
import './Toolbar.css'

const drawerWidth = 240
const navItems = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Perfil',
    route: '/profile',
  },
  {
    label: 'Historial',
    route: '/history',
  },
  {
    label: 'Calendario',
    route: '/calendar',
  },
  { label: 'Shop', route: 'https://www.shopnantolin.com/' },
]

function DrawerAppBar(props) {
  const { window, isDarkTheme } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Box
          component="img"
          sx={{
            height: 25,
          }}
          alt="Natalia antolin"
          src={isDarkTheme ? LogoWhite : Logo}
        />
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ label, route }) => (
          <ListItem key={label} disablePadding>
            <ListItemButton sx={{ justifyContent: 'center' }}>
              <Link
                variant="variant2"
                color="main"
                key={label}
                href={route}
                underline="none"
              >
                <ListItemText primary={label} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" color="primary">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Box
              component="img"
              sx={{
                height: 35,
              }}
              alt="Natalia antolin"
              src={isDarkTheme ? LogoWhite : Logo}
            />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(({ label, route }) => (
              <Link
                variant="variant1"
                color="main"
                key={label}
                href={route}
                underline="none"
                className="links"
              >
                {label}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </Box>
  )
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
}

export default DrawerAppBar
