import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from './Theme/index'
import CssBaseline from '@mui/material/CssBaseline'
import DrawerAppBar from './components/navigation/Toolbar/Toolbar'
import Footer from './components/navigation/Footer/Footer'
import Profile from './pages/Profile/Profile'
import { useState } from 'react'

const App = () => {
  // The light theme is used by default
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  // This function is triggered when the Switch component is toggled
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <BrowserRouter>
      <ThemeProvider
        theme={
          isDarkTheme
            ? createTheme({ mode: 'dark' })
            : createTheme({ mode: 'light' })
        }
      >
        <CssBaseline />
        <DrawerAppBar theme={isDarkTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" exact element={<Profile />} />
        </Routes>
        <Footer change={changeTheme} theme={isDarkTheme} />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
