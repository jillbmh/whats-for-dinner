import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { setToken } from '../lib/auth'


    
export default function Register() {

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


  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/auth/register/', formData) 
      setToken('access-token', data.access)
      setToken('refresh-token', data.refresh)
      // setMessage('Registration was successful')
      navigate('/create-meal')
    } catch (error) {
      setMessage(error.response.data.detail)
    }
  }

  return (
    <main>
      <section className='register-form'>
        <h3>Register</h3>
        <form onSubmit={handleRegister}> 
          <input type="text" name="username" placeholder="Email" value={formData.username} onChange={handleChange} />
          <br />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}  />
          <br />
          <input type="password" name="password_confirmation" placeholder="Confirm Password" value={formData.password_confirmation} onChange={handleChange}  />
          <br />
          {message && <p>{message}</p>}
          <input type="submit" value="Register" />
        </form>
      </section>
      <Link to="/account/login" className="link-text">Already registered? Login instead</Link>
    </main>
  )
}
