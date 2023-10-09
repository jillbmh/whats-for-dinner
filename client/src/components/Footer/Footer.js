import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <p> &copy; Whats For Dinner (UK) </p>
      <nav>
        <Link to='/contact-us'>Contact Us</Link>
        <Link to='/cookie-policy'>Cookie Policy</Link>
        <Link to='/terms-and-conditions'>Terms & Conditions</Link>
        <Link to='/privacy-notice'>Privacy Notice</Link>
      </nav>
    </footer>
  )
}