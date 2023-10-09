import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <nav>
        <Link to= '/'>Whats for Dinner</Link>
        <Link to= '/nutritional-info'>Nutritional Info</Link>
        <Link to= '/account'>Login / Register</Link>
        <Link to= '/create-meal'>Create Meal</Link>
        <Link to= '/my-meals'> My Meals</Link>
      </nav>
    </header>
  )
}