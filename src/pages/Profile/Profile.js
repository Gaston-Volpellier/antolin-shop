import React from 'react'
import Form from '../../components/Form/Form'
import { ProfileContextProvider } from '../../containers/ProfileContext/ProfileContext'

const Profile = () => {
  return (
    <>
      <ProfileContextProvider>
        <Form />
      </ProfileContextProvider>
    </>
  )
}

export default Profile
