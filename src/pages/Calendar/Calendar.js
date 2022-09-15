import * as React from 'react'
import dayjs from 'dayjs'
import TextField from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const Desktop = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}))

const Mobile = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },
}))

const disableDates = (day) => {
  const dates = ['30-09-2022', '28-09-2022']
  const myDate = dayjs(day, 'DD-MM-YYYY')
  let shouldDisable = false

  dates.forEach((element) => {
    if (dayjs(element, 'DD-MM-YYYY').isSame(myDate, 'day')) shouldDisable = true
  })
  return shouldDisable
}

const Calendar = () => {
  const [value, setValue] = React.useState(dayjs())

  return (
    <Box mt={5}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Mobile>
          <MobileDatePicker
            label="For mobile"
            inputFormat="DD/MM/YYYY"
            value={value}
            onChange={(newValue) => {
              setValue(newValue)
            }}
            shouldDisableDate={disableDates}
            renderInput={(params) => <TextField {...params} />}
          />
        </Mobile>
        <Desktop>
          <DesktopDatePicker
            label="For desktop"
            value={value}
            inputFormat="DD/MM/YYYY"
            disablePast={true}
            onChange={(newValue) => {
              setValue(newValue)
            }}
            shouldDisableDate={disableDates}
            renderInput={(params) => <TextField {...params} />}
          />
        </Desktop>
      </LocalizationProvider>
    </Box>
  )
}

export default Calendar
