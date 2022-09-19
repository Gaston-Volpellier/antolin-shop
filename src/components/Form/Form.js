import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FormControl, Grid } from '@mui/material'
import './Form.css'
import TextField from '@mui/material/TextField'
import ProfileAvatar from '../Avatar/ProfileAvatar'

const Form = () => {
  const [inputInfo, setInputInfo] = useState()

  const handleInput = (event) => {
    setInputInfo({ ...inputInfo, [event.target.name]: event.target.value })
  }

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get('/profile-info.php?codigo=164')
        .then((response) => {
          setInputInfo(response?.data)
        })
        .catch((error) => console.log(error))
    }
    fetchData()
  }, [])

  return (
    <FormControl margin="normal">
      <Grid container className="profile-form" spacing={6}>
        <Grid item xs={2}>
          <ProfileAvatar />
        </Grid>
        <Grid item xs={6}>
          <Grid container rowSpacing={5}>
            <Grid item xs={6}>
              <TextField
                required
                name="name"
                label="Nombre"
                value={inputInfo?.name || ''}
                onChange={(event) => handleInput(event)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                name="lastname"
                label="Apellido"
                value={inputInfo?.lastname || ''}
                onChange={(event) => handleInput(event)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                name="alias"
                label="Razón social"
                value={inputInfo?.alias || ''}
                placeholder="Razon social"
                onChange={(event) => handleInput(event)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="phone"
                label="Teléfono"
                type="tel"
                value={inputInfo?.phone || ''}
                placeholder="11 1234-5678"
                onChange={(event) => handleInput(event)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="adress"
                label="Dirección"
                value={inputInfo?.adress || ''}
                placeholder="Direccion para envíos"
                onChange={(event) => handleInput(event)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="city"
                label="Ciudad"
                placeholder="Ciudad"
                value={inputInfo?.city || ''}
                onChange={(event) => handleInput(event)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="province"
                label="Provincia"
                value={inputInfo?.province || ''}
                placeholder="Provincia"
                onChange={(event) => handleInput(event)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="cp"
                label="Codigo postal"
                placeholder="CP"
                value={inputInfo?.zip || ''}
                onChange={(event) => handleInput(event)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="email"
                label="Correo electrónico"
                placeholder="micorreo@dominio.com"
                value={inputInfo?.email || ''}
                onChange={(event) => handleInput(event)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          Mesures
        </Grid>
      </Grid>
    </FormControl>
  )
}

export default Form
