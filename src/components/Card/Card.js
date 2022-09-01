import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Card = (props) => {
  return (
    <Grid item xs={4}>
      <Grid container justifyContent={'center'}>
        <Box
          component="img"
          sx={{
            height: 150,
            borderRadius: '50%',
          }}
          alt={props.imgAlt}
          src={props.imgSrc}
        />
      </Grid>
      <Typography component="h3" variant="h5" sx={{ textAlign: 'center ' }}>
        <Box paddingX={4}>{props.title}</Box>
      </Typography>
      <Typography
        component="h4"
        variant="subtitle2"
        sx={{ textAlign: 'center ' }}
      >
        <Box paddingX={2}>{props.subtitle}</Box>
      </Typography>
    </Grid>
  )
}

export default Card
