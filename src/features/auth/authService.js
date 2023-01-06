import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://anyreview-backend.onrender.com/api'
})

// Register user
const register = async (userData) => {
  const response = await instance.post('/users/signup', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await instance.post('/users/login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService
