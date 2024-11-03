import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const apiBaseUrl = process.env.REACT_APP_DB_HOST
  const navigate = useNavigate()

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await axios.post(
          `${apiBaseUrl}api/account/logout`,
          {},
          { withCredentials: true }
        )

        // Redirect to login page after successful logout
        navigate('/login')
      } catch (error) {
        console.error('Logout failed:', error)
      }
    }

    handleLogout()
  }, [apiBaseUrl, navigate])

  return <div>Logging out...</div>
}

export default Logout
