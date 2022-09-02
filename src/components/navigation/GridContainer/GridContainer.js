import React from 'react'
import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import Card from '../../Card/Card'

const GridContainer = (props) => {
  return (
    <Container maxWidth="md" sx={{ mt: 3 }}>
      <Grid
        container
        spacing={3}
        columnSpacing={4}
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
        />
        <Card
          imgSrc="https://nantolin.shopinteligente.com/images/Muestra-Natalia.jpg"
          imgAlt="Muestra Natalia"
          title="Natalia antolin"
          subtitle="Coleccion propia"
        />
        <Card
          imgSrc="https://nantolin.shopinteligente.com/images/Muestra-china.jpg"
          imgAlt="Muestra china"
          title="China Suarez"
          subtitle="Coleccion exclusiva"
        />
      </Grid>
    </Container>
  )
}

export default GridContainer
