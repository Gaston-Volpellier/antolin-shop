import React, { useState } from 'react'
import axios from 'axios'

const ProfileContext = React.createContext()

export const useProfileContext = () => React.useContext(ProfileContext)

export const ProfileContextProvider = ({ children }) => {
  const [inputInfo, setInputInfo] = useState()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    await axios({
      method: 'post',
      url: '/profile-info.php?codigo=164',
      data: { inputInfo },
    })
      .then((response) => {
        const myResponse = JSON.stringify(response?.data)
        console.log('Response: ' + response.status)
        console.log('String: ' + myResponse)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        console.log('Error submitting data: ' + error)
      })
  }

  const fetchData = async () => {
    setLoading(true)

    await axios
      .get('/profile-info.php?codigo=164')
      .then((response) => {
        setInputInfo(response?.data)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        console.log('Error fetching data: ' + error)
      })
  }

  return (
    <ProfileContext.Provider
      value={{ inputInfo, setInputInfo, handleSubmit, fetchData, loading }}
    >
      {children}
    </ProfileContext.Provider>
  )
}
