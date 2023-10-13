import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getToken } from '../lib/auth'


export default function SingleMeal() {

  const location = useLocation()
  const navigate = useNavigate()
  const [ meal, setMeal ] = useState(null)
  const { mealId } = useParams()


  const selectedIngredients = location.state && location.state.selectedIngredients ? location.state.selectedIngredients : []
  console.log('selected ingredients =>',selectedIngredients)
  // console.log('mealId in SingleMeal', mealId)


  async function deleteMeal() {
    try {
      await axios.delete(`/api/my-meals/${mealId}`, {  
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      navigate('/my-meals')
    } catch (error) {
      console.log(error)
    }
  }
  async function getMeals() {
    try {
      const { data } = await axios.get(`/api/my-meals/${mealId}`, {  
        headers: {
          Authorization: `Bearer ${getToken()}`,
        }, 
      })
      setMeal(data)
      console.log('get meal data', data)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(meal)
  getMeals()

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
        <Link to="/update" className="button">Edit Meal</Link>
        <Link to="/my-meals" className="button" onClick={deleteMeal}>Delete Meal</Link>
      </section>

    </main>
  )
}
