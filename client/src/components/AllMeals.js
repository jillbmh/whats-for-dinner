import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import axiosAuth from '../lib/axios'

export default function AllMeals() {
  const [meals, setMeals] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const getMeals = async () => {
      try {
        const response = await axiosAuth.get('/api/my-meals/')
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
          setError('You need to log in to see your meals')
          console.error('Error', error.message)
        }
      }
    }
  
    getMeals()
  }, [])
  
  
  return (
    <>
      <main>
        {error ? (
          <>
            <p>{error}</p>
            <Link to="/account/login" className="button">Log in</Link>
          </>
        ) : meals.length === 0 ? (
          <>
            <p>Looks like you havent created any yet.</p>
            <Link to="/create-meal" className="button">Get Started!</Link>
          </>
        ) : (
          <section>
            <h1>Here are the meals you have created:</h1>
            {meals.map((meal) => (
              <Link to={`/my-meals/${meal.id}`} className="plate-holder" key={`meal-${meal.id}`}>
                <section className="ingredient-plate">
                  {meal.ingredients.map((ingredient, index) => (
                    <div key={ingredient.id}>
                      <img
                        key={index}
                        src={ingredient.image}
                        alt={ingredient.name}
                      />
                    </div>
                  ))}
                </section>
              </Link>
            ))}
          </section>
        )}
  
        {!error && meals.length > 0 && (
          <section className="button-container">
            <Link to="/create-meal" className="button">Create a Meal</Link>
            <Link to="*" className="button">Print</Link>
          </section>
        )}
      </main>
    </>
  )
}