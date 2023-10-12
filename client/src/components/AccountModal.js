import { useState } from 'react'
import axios from 'axios'
import { setToken } from '../lib/auth'

export default function AccountModal(){

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    password_confirmation: '', 
  })

  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/auth/login/', formData)
      setToken('access-token', data.access)
      setToken('refresh-token', data.refresh)
      setMessage('Login was successful')
    } catch (error) {
      setMessage(error.response.data.detail)
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/auth/register/', formData) 
      setToken('access-token', data.access)
      setToken('refresh-token', data.refresh)
      setMessage('Registration was successful')
    } catch (error) {
      setMessage(error.response.data.detail)
    }
  }

  return (
    <main>
      <section className='login-form'>
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          <br />
          <input type="password" name="password" value={formData.password} onChange={handleChange}  />
          <br />
          {message && <p>{message}</p>}
          <input type="submit" value="Submit" />
        </form>
      </section>
      <section className='register-form'>
        <h3>or..register</h3>
        <form onSubmit={handleRegister}> 
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          <br />
          <input type="password" name="password" value={formData.password} onChange={handleChange}  />
          <br />
          <input type="password" name="password_confirmation" value={formData.password_confirmation} onChange={handleChange}  />
          <br />
          {message && <p>{message}</p>}
          <input type="submit" value="Submit" />
        </form>
      </section>
    </main>
  )
}
