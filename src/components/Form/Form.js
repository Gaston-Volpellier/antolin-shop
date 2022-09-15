import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { FormControl, Grid } from '@mui/material'
import './Form.css'
import TextField from '@mui/material/TextField'
import ProfileAvatar from '../Avatar/ProfileAvatar'

const Form = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [inputInfo, setInputInfo] = useState({
    name: '',
    lastname: '',
    alias: '',
    phone: '',
    adress: '',
    city: '',
    province: '',
    cp: '',
    email: '',
  })

  const handleInput = (event) => {
    setInputInfo({ ...inputInfo, [event.target.name]: event.target.value })
  }

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get('/profile-info.php?codigo=164')
        .then((response) => {
          console.log('response: ' + response.data)
        })
        .catch((error) => setError(error))
    }
    fetchData()
  }, [])

  console.log('State name: ' + inputInfo.name)

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
                value={inputInfo.name}
                onChange={(event) => handleInput(event)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField required name="lastname" label="Apellido" />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                name="alias"
                label="Razón social"
                placeholder="Razon social"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="phone"
                label="Teléfono"
                type="tel"
                placeholder="11 1234-5678"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="adress"
                label="Dirección"
                placeholder="Direccion para envíos"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField name="city" label="Ciudad" placeholder="Ciudad" />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="province"
                label="Provincia"
                placeholder="Provincia"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField name="cp" label="Codigo postal" placeholder="CP" />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="email"
                label="Correo electrónico"
                placeholder="micorreo@dominio.com"
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
