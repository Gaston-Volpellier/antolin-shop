import React from 'react'
import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import Card from '../../Card/Card'

const GridContainer = (props) => {
  return (
    <Container maxWidth="sm" sx={{ mt: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{
          alignItems: 'center',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Card
          imgSrc="https://nantolin.shopinteligente.com/images/Muestra-pajaro.jpg"
          imgAlt="Muestra Pajaro"
          title="Pajaro de fuego"
          subtitle="Coleccion 2022"
        ></Card>
        <Card
          imgSrc="https://nantolin.shopinteligente.com/images/Muestra-Natalia.jpg"
          imgAlt="Muestra Natalia"
          title="Natalia antolin"
          subtitle="Coleccion propia"
        ></Card>
        <Card
          imgSrc="https://nantolin.shopinteligente.com/images/Muestra-china.jpg"
          imgAlt="Muestra china"
          title="China Suarez"
          subtitle="Coleccion exclusiva"
        ></Card>
      </Grid>
    </Container>
  )
}

export default GridContainer
