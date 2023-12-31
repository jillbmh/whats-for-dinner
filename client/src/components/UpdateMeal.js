import axiosAuth from '../lib/axios'
import axios from 'axios'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { getToken } from '../lib/auth'
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from './Spinner'

export default function UpdateMeal(){
  const [foodGroups, setFoodGroups] = useState()
  const [subgroups, setSubgroups] = useState({})
  const [selectedSubgroups, setSelectedSubgroups] = useState({})
  const [selectedIngredients, setSelectedIngredients] = useState()
  const [displayedIngredients, setDisplayedIngredients] = useState()
  const [error, setError] = useState(null)

  const navigate = useNavigate()
  const { id } = useParams()

  const handleIngredientClick = (ingredient) => {
    // Toggle the selection of the clicked ingredient
    setSelectedIngredients((prevSelected) =>
      prevSelected.find(i => i.name === ingredient.name)
        ? prevSelected.filter((item) => item.name !== ingredient.name)
        : [...prevSelected, ingredient]
    )
    //clear error message if on display
    setError(null)
  }

  useEffect(() => {
    const getMeal = async () => {
      try {
        const { data } = await axios.get(`/api/my-meals/${id}/`)
        setSelectedIngredients(data.ingredients)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getMeal()
  }, [id])

  useEffect(() => {
    async function getData() {
      try {
        // get food-groups data
        const foodGroupsResponse = await axios.get('/api/food-groups/')
        setFoodGroups(foodGroupsResponse.data)

        // get subgroups data
        const subgroupsResponse = await axios.get('/api/subgroups/')
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
  //updates a meal and passess it to the /my-meal component
  const updateMeal = async () => {
    try {
      // Extract the PKs from the selectedIngredients array
      const ingredientIds = selectedIngredients.map(ingredient => ingredient.id)
  
      // Make the POST request to create the meal
      const response = await axiosAuth.patch(`/api/my-meals/update/${id}/`, { ingredients: ingredientIds })

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
      { foodGroups && foodGroups.length > 0 ? (
        <Container className= "create-meal-container" fluid>
          <Row>
            <Col md="6" className="foodgroup-filter-container">
              {/* map over the foodgroups and create a section for each */}
              {foodGroups && foodGroups.map((foodGroup) => (
                <section key={foodGroup.id}>
                  {foodGroup.ingredients_in_foodgroup && foodGroup.ingredients_in_foodgroup.length > 0 ? (
                    <select className='foodgroup-filters' 
                    // set the value of the dropdown as the subgroups
                      value={selectedSubgroups[foodGroup.id] || ''}
                      // uses the handleSGC function to retrieve new value on change
                      onChange={(e) => handleSubgroupChange(e, foodGroup.id)}
                    >
                      <option value="">{foodGroup.name}</option>
                      {[
                        // maps over ingredients to check they belong to a subgroup, using the ids and spreading 
                        // into an array of arrays. then filtering out any that dont before creating a flat new set.
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
                        // map over the subgroups and creates an option element for each
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
                  {/* this maps over the selected ingredients and returns them as a list */}
                  {selectedIngredients && selectedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>
                      {ingredient.name}
                    </li>
                  ))}
                </ul>
                {/* //this button executes the create meal function */}
                <button className="button" onClick={updateMeal}>Update My Meal</button>
              </section>
            </Col>
            <Col md="6" className="ingredient-container">
              <h4>Select your ingredients:</h4>
              <div className="ingredient-grid">
                {/* maps over the ingredients selected and returns their image and name */}
                {displayedIngredients && displayedIngredients.map((ingredient) => (
                  //on click that when an ingredient is clicked, it is added to selected-ingredients
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