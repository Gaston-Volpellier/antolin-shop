import React from 'react'
import { Box, Button } from '@mui/material'
import { TailSpin } from 'react-loader-spinner'

const SubmitButton = (props) => {
  const { buttonText, clickEvent, loading } = props

  return (
    <Box display="flex" justifyContent="center" alignItems="center" m={2}>
      {loading ? (
        <TailSpin
          height="40"
          width="40"
          color="#778899"
          ariaLabel="tail-spin-loading"
          radius="1"
          visible={true}
        />
      ) : (
        <Button variant="contained" color="primary" onClick={clickEvent}>
          {buttonText}
        </Button>
      )}
    </Box>
  )
}

export default SubmitButton
