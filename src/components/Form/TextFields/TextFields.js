import React from 'react'
import TextField from '@mui/material/TextField'
import { Grid } from '@mui/material'

const TextFields = () => {
  return (
    <Grid container rowSpacing={5}>
      <Grid item xs={6}>
        <TextField required id="user-name" label="Nombre" defaultValue="" />
      </Grid>
      <Grid item xs={6}>
        <TextField
          required
          id="user-lastname"
          label="Apellido"
          defaultValue=""
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          required
          id="user-alias"
          label="Razón social"
          defaultValue=""
          placeholder="Razon social"
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="user-phone"
          label="Teléfono"
          type="tel"
          placeholder="11 1234-5678"
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="user-adress"
          label="Dirección"
          defaultValue=""
          placeholder="Direccion para envíos"
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="user-city"
          label="Ciudad"
          defaultValue=""
          placeholder="Ciudad"
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="user-province"
          label="Provincia"
          defaultValue=""
          placeholder="Provincia"
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="user-cp"
          label="Codigo postal"
          defaultValue=""
          placeholder="CP"
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="user-email"
          label="Correo electrónico"
          defaultValue=""
          placeholder="micorreo@dominio.com"
        />
      </Grid>
    </Grid>
  )
}

export default TextFields
