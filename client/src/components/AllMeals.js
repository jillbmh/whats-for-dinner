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
        setError('Failed to get meals.')
        console.error(error.response)
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
            <div className="ingredient-plate" key={`meal-${meal.id}`}>
              <h2>Meal {meal.id}</h2>
              <div className="ingredient-images">
                {meal.ingredients.map((ingredient, index) => (
                  <img
                    key={index}
                    src={ingredient.image}
                    alt={ingredient.name}
                  />
                ))}
              </div>
            </div>
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
