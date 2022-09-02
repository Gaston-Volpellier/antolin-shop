import React from 'react'
import GridContainer from '../../components/navigation/GridContainer/GridContainer'
import Divider from '@mui/material/Divider'

const Home = () => {
  return (
    <div className="App">
      <GridContainer />
      <Divider variant="middle" sx={{ m: 4 }} />
    </div>
  )
}

export default Home
