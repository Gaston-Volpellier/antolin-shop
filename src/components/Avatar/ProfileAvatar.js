import { Avatar } from '@mui/material'
import React from 'react'
import './ProfileAvatar.css'

const ProfileAvatar = () => {
  return (
    <>
      <Avatar
        sx={{ height: 80, width: 80 }}
        alt="Avatar alt"
        src="/images/avatar/profile-gaston.jpg"
      />
    </>
  )
}

export default ProfileAvatar
