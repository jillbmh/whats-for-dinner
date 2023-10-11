import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'


export default function SingleMeal() {
  const location = useLocation()
  const selectedIngredients = location.state && location.state.selectedIngredients ? location.state.selectedIngredients : []


  return (
    <main className='my-meal-container'>
      <h1>Great choice! Here is your meal:</h1>
      <section className='ingredient-plate'>
        {selectedIngredients.map((ingredient) => (
          <div key={ingredient.id}>
            <img src={ingredient.image} alt={ingredient.name} />
          </div>
        ))}
      </section>
      <section className='ingredients-list'>
        <h3>Ingredients:</h3>
        <ul>
          {selectedIngredients.map((ingredient, index) => (
            <li key={index}>{ingredient.name}</li>
          ))}
        </ul>
      </section>
      <section className='button-container'>
        <Link to="/my-meals" className="button">Go to my meals!</Link>
        <Link to="/create-meal" className="button">Create another</Link>
        <Link to="*" className="button">Print</Link>
      </section>
    </main>
  )
}