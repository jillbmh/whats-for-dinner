import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function CreateMeal() {
  const [foodGroups, setFoodGroups] = useState([])
  const [subgroups, setSubgroups] = useState({})
  const [selectedSubgroups, setSelectedSubgroups] = useState({})

  useEffect(() => {
    async function fetchData() {
      try {
        const foodGroupsResponse = await axios.get('/api/food-groups/')
        setFoodGroups(foodGroupsResponse.data)

        // Fetch subgroup data 
        const subgroupsResponse = await axios.get('/api/subgroups/')
        const subgroupData = subgroupsResponse.data

        // Organise subgroup data into an object 
        const subgroupMap = {}
        subgroupData.forEach((subgroup) => {
          subgroupMap[subgroup.id] = subgroup
        })

        setSubgroups(subgroupMap)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  const handleSubgroupChange = (e, foodGroupId) => {
    setSelectedSubgroups((prevSelected) => ({
      ...prevSelected,
      [foodGroupId]: e.target.value,
    }))
  }

  return (
    <main className='foodgroup-filters'>
      {foodGroups.map((foodGroup) => (
        <section key={foodGroup.id}>
          {foodGroup.ingredients_in_foodgroup && foodGroup.ingredients_in_foodgroup.length > 0 ? (
            <select
              value={selectedSubgroups[foodGroup.id] || ''}
              onChange={(e) => handleSubgroupChange(e, foodGroup.id)}
            >
              <option value=''>{foodGroup.name}</option> 
              {foodGroup.ingredients_in_foodgroup.map((ingredient) => {
                if (ingredient.subgroups && ingredient.subgroups.length > 0) {
                  return ingredient.subgroups.map((subgroupId) => (
                    <option key={subgroupId} value={foodGroup.name}>
                      {subgroups[subgroupId] ? subgroups[subgroupId].subgroupname : 'Loading...'}
                    </option>
                  ))
                } else {
                  return null // No subgroups available for this ingredient
                }
              })}
            </select>
          ) : 'No subgroups available'}
        </section>
      ))}
    </main>
  )
}
