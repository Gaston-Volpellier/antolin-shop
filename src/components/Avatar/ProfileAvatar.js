import { Avatar } from '@mui/material'
import React from 'react'
import './ProfileAvatar.css'

const ProfileAvatar = () => {
  return (
    <>
      <Avatar
        imgProps={{ height: 60, width: 60 }}
        alt="Avatar alt"
        src="/images/avatar/profile-gaston.jpg"
      />
    </>
  )
}

export default ProfileAvatar
