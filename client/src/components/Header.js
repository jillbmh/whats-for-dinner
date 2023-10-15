import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <Link to= '/' className='logo'>What&apos;s for Dinner?</Link>
      <nav className='header-nav'>
        <Link to= '/create-meal'>Create Meal</Link>
        <Link to= '/nutritional-info'>Nutritional Info</Link>
        <Link to= '/account/login'>Account </Link>
        {/* <Link to= '/my-meals'> My Meals</Link> */}
      </nav>
    </header>
  )
}