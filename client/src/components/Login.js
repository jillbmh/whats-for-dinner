import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { setToken, clearTokens } from '../lib/auth'

export default function Login(){

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    password_confirmation: '', 
  })

  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/auth/login/', formData)
      setToken('access-token', data.access)
      setToken('refresh-token', data.refresh)
      navigate('/')
    } catch (error) {
      setMessage(error.response.data.detail)
    }
  }

  const handleLogout = () => {
    clearTokens() 
    navigate('/')
    setMessage('Logged out successfully')
  }

  return (
    <main className='form'>
      <section>
        <h3>Login Here:</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Email" value={formData.username} onChange={handleChange} />
          <br />
          <input type="password" name="password"  placeholder="Password" value={formData.password} onChange={handleChange}  />
          <br />
          {message && <p>{message}</p>}
          <input className='button' type="submit" value="Login" />
        </form>
      </section>
      <button className='button' onClick={handleLogout}>Log Out</button>
      <Link to="/account/register" className="link-text">Need to register first?</Link>
    </main>
  )
}
