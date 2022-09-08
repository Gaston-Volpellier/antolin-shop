import * as React from 'react'
import { FormControl, Grid } from '@mui/material'
import './Form.css'
import TextFields from './TextFields/TextFields'

const Form = () => {
  return (
    <FormControl margin="normal">
      <Grid container className="profile-form" spacing={6}>
        <Grid item xs={2}>
          Profile picture
        </Grid>
        <Grid item xs={6}>
          <TextFields />
        </Grid>
        <Grid item xs={4}>
          Mesures
        </Grid>
      </Grid>
    </FormControl>
  )
}

export default Form
