import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from './Spinner'
import axiosAuth from '../lib/axios'


export default function CreateMeal() {
  const [foodGroups, setFoodGroups] = useState([])
  const [subgroups, setSubgroups] = useState({})
  const [selectedSubgroups, setSelectedSubgroups] = useState({})
  const [selectedIngredients, setSelectedIngredients] = useState([])
  const [displayedIngredients, setDisplayedIngredients] = useState([])
  const [error, setError] = useState(null)



  const navigate = useNavigate()

  const handleIngredientClick = (ingredient) => {
    // Toggle the selection of the clicked ingredient
    setSelectedIngredients((prevSelected) =>
      prevSelected.includes(ingredient)
        ? prevSelected.filter((item) => item !== ingredient)
        : [...prevSelected, ingredient]
    )
    //clear error message if on display
    setError(null)
  }

  useEffect(() => {
    async function getData() {
      try {
        // get food-groups data
        const foodGroupsResponse = await axiosAuth.get('/api/food-groups/')
        setFoodGroups(foodGroupsResponse.data)

        // get subgroups data
        const subgroupsResponse = await axiosAuth.get('/api/subgroups/')
        const subgroupData = subgroupsResponse.data

        // Organise subgroup data into an object, iterate over it to get IDs
        const subgroupMap = {}
        subgroupData.forEach((subgroup) => {
          subgroupMap[subgroup.id] = subgroup
        })

        // use state to setSubgroups to contain the subgroup data
        setSubgroups(subgroupMap)
      } catch (error) {
        console.error(error)
        setError('You need to log in to create a meal')
      }
    }
    getData()
  }, [])

  //retrieve the value of the selected subgroup
  const handleSubgroupChange = (e, foodGroupId) => {
    const selectedSubgroupId = e.target.value
    // Clear the previously selected ingredients
    setDisplayedIngredients([])
    // if its truthy and the subgroup exists and has ingredients, console log the name and image
    if (selectedSubgroupId) {
      if (subgroups[selectedSubgroupId] && subgroups[selectedSubgroupId].ingredients) {
        setDisplayedIngredients(subgroups[selectedSubgroupId].ingredients)
      }
    }
    // take previous state and reassigns it to the newly selected subgroup
    setSelectedSubgroups((prevSelected) => ({
      ...prevSelected,
      [foodGroupId]: selectedSubgroupId,
    }))
  }
  //creates a meal and passess it to the /my-meal component

  const createMeal = async () => {
    try {
      // Extract the PKs from the selectedIngredients array
      const ingredientIds = selectedIngredients.map(ingredient => ingredient.id)
  
      // Make the POST request to create the meal
      const response = await axios.post('/api/my-meals/create-meal/', { ingredients: ingredientIds })
      console.log('Meal created successfully:', response.data)
  
      // Navigate to the '/my-meal' component 
      navigate(`/my-meals/${response.data.id}`, { state: { selectedIngredients } })
    } catch (error) {
      console.error('Error creating meal:', error)
      //send an error message to the user if not created
      setError('Select an ingredient to continue.')
    }
  }
  
  

  return (
    <main>
      {error ? (
        <>
          <p>{error}</p>
          <Link to="/account/login" className="button">Log in</Link>
        </>
      ) : foodGroups.length > 0 ? (
        <Container className="create-meal-container" fluid> 
          <Row>
            <Col md="6" className="foodgroup-filter-container">
              {foodGroups.map((foodGroup) => (
                <section key={foodGroup.id}>
                  {foodGroup.ingredients_in_foodgroup && foodGroup.ingredients_in_foodgroup.length > 0 ? (
                    <select className='foodgroup-filters' 
                      value={selectedSubgroups[foodGroup.id] || ''}
                      onChange={(e) => handleSubgroupChange(e, foodGroup.id)}
                    >
                      <option value="">{foodGroup.name}</option>
                      {[
                        ...new Set(
                          foodGroup.ingredients_in_foodgroup
                            .map((ingredient) => {
                              if (ingredient.subgroups && ingredient.subgroups.length > 0) {
                                return ingredient.subgroups
                              } else {
                                return null
                              }
                            })
                            .filter((subgroupId) => subgroupId !== null)
                            .flat()
                        )
                      ].map((subgroupId) => (
                        <option key={subgroupId} value={subgroupId}>
                          {subgroups[subgroupId] ? subgroups[subgroupId].subgroupname : 'Loading...'}
                        </option>
                      ))}
                    </select>
                  ) : 'No subgroups available'}
                </section>
              ))}
              <section className='selected-ingredients'>
                <h4>Your meal so far:</h4>
                <ul>
                  {selectedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>
                      {ingredient.name}
                    </li>
                  ))}
                </ul>
              </section>
              <button className='button' onClick={createMeal}>Create My Meal</button>
            </Col>
            <Col md="6" className="ingredient-container">
              <h4>Select your ingredients:</h4>
              <div className="ingredient-grid">
                {displayedIngredients.map((ingredient) => (
                  <div key={ingredient.id} className="ingredient-card" onClick={() => handleIngredientClick(ingredient)}>
                    <img src={ingredient.image} alt={ingredient.name} />
                    <p>{ingredient.name}</p>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <Spinner />
      )}
    </main>
  )
}
