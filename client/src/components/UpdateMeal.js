import axios from 'axios'
import { useLocation } from 'react-router-dom'


export default function UpdateMeal(){
  const location = useLocation()
  // const { mealId } = useParams()
  const selectedIngredients = location.state && location.state.selectedIngredients ? location.state.selectedIngredients : []

  console.log('update selected ingredients =>',selectedIngredients)
  return (
    <main>
      <h1>Update Meal</h1>
    </main>
  )

}