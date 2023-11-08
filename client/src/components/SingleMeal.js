import axios from 'axios'
import axiosAuth from '../lib/axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getToken } from '../lib/auth'

export default function SingleMeal() {
  const navigate = useNavigate()
  const [ingredients, setIngredients] = useState(null)
  const { id } = useParams()

  async function deleteMeal() {
    try {
      await axiosAuth.delete(`/api/my-meals/${id}/`)
      navigate('/my-meals')
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    const getMeal = async () => {
      try {
        const { data } = await axiosAuth.get(`/api/my-meals/${id}/`)
        setIngredients(data.ingredients)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getMeal()
  }, [id])

  return (
    <main className='my-meal-container'>
      <h1>Great choice! Here is your meal:</h1>
      <section className='ingredient-plate'>
        {ingredients && ingredients.map((ingredient) => (
          <div key={ingredient.id}>
            <img src={ingredient.image} alt={ingredient.name} />
          </div>
        ))}
      </section>
      <section className='ingredients-list'>
        <h3>Ingredients:</h3>
        <ul>
          {ingredients && ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.name}</li>
          ))}
        </ul>
      </section>
      <section className='button-container'>
        <Link to="/my-meals" className="button">Go to my meals!</Link>
        <Link to="/create-meal" className="button">Create another</Link>
        <Link to="*" className="button">Print</Link>
        <Link to={`/my-meals/${id}/update`} className="button">Edit Meal</Link>
        <Link to="/my-meals" className="button" onClick={deleteMeal}>Delete Meal</Link>
      </section> 
    </main>
  )
}