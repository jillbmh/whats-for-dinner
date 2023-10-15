import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function AllMeals() {
  const [meals, setMeals] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const getMeals = async () => {
      try {
        const response = await axios.get('/api/my-meals/')
        setMeals(response.data)
        console.log(response.data)
      } catch (error) {
        if (error.response) {
          if (error.response.status === 403) {
            setError('You need to log in to see your meals')
          } else {
            setError(error.response.data.detail)
          }
          console.error(error.response)
        } else if (error.request) {
          setError('Network Error')
          console.error(error.request)
        } else {
          setError('Ooops, something went wrong, please try again later')
          console.error('Error', error.message)
        }
      }
    }
  
    getMeals()
  }, [])
  
  

  return (
    <main>
      <h1>Here are the meals you have created:</h1>
      {error ? (
        <p>{error}</p>
      ) : meals.length === 0 ? (
        <p>Looks like you havent created any yet.</p>
      ) : (
        <section>
          {meals.map((meal) => (
            <Link to={`/my-meals/${meal.id}`} className="ingredient-plate" key={`meal-${meal.id}`}>
              <div className="ingredient-images">
                {meal.ingredients.map((ingredient, index) => (
                  <img
                    key={index}
                    src={ingredient.image}
                    alt={ingredient.name}
                  />
                ))}
              </div>
            </Link>
          ))}
        </section>
      )}
      <section className="button-container">
        <Link to="/create-meal" className="button">Create another</Link>
        <Link to="*" className="button">Print</Link>
      </section>
    </main>
  )
}
