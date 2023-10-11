import { useLocation } from 'react-router-dom'


export default function SingleMeal() {
  const location = useLocation()
  const selectedIngredients = location.state && location.state.selectedIngredients ? location.state.selectedIngredients : []


  return (
    <div>
      <h1>Your Meal</h1>
      <ul>
        {selectedIngredients.map((ingredient, index) => (
          <li key={index}>{ingredient.name}</li>
        ))}
      </ul>
    </div>
  )
}