import React from 'react'
import Divider from '@mui/material/Divider'
import Carrousel from '../../components/Carrousel/Carrousel'

const Home = () => {
  const images = ['img_1.jpg', 'img_2.jpg', 'img_3.jpg']

  return (
    <div className="App">
      <Carrousel images={images} autoPlay={true} />
      <Divider variant="middle" sx={{ m: 4 }} />
    </div>
  )
}

export default Home
