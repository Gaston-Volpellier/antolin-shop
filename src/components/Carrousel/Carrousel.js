import { Button, Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Carrousel.css'

const Carrousel = (props) => {
  const { images, autoPlay } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(images[0])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        selectNewImage()
      }, 3000)
      return () => clearInterval(interval)
    }
  })

  const selectNewImage = (next = true) => {
    setLoaded(false)

    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1

      setSelectedImage(images[nextIndex])
      setSelectedIndex(nextIndex)
    }, 600)
  }

  const previous = () => {
    selectNewImage(false)
  }

  const next = () => {
    selectNewImage()
  }

  return (
    <>
      <Box className="center">
        <Box
          component="img"
          className={loaded ? 'images loaded' : 'images'}
          alt="Coleccion"
          onLoad={() => setLoaded(true)}
          src={require(`../../assets/images/${selectedImage}`)}
        />
      </Box>
      <Stack direction="row" spacing={0.5} className="center">
        <Button className="margin" onClick={previous} variant="contained">
          {'<'}
        </Button>
        <Button className="margin" onClick={next} variant="contained">
          {'>'}
        </Button>
      </Stack>
    </>
  )
}

export default Carrousel
