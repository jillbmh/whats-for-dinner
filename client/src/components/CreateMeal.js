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
    const selectedSubgroupId = e.target.value

    if (selectedSubgroupId) {
      // Log associated ingredients
      if (subgroups[selectedSubgroupId] && subgroups[selectedSubgroupId].ingredients) {
        subgroups[selectedSubgroupId].ingredients.forEach((ingredient) => {
          console.log('Ingredient Name:', ingredient.name)
          console.log('Ingredient Image:', ingredient.image)
        })
      }
    }

    setSelectedSubgroups((prevSelected) => ({
      ...prevSelected,
      [foodGroupId]: selectedSubgroupId,
    }))
  }

  return (
    <main className="foodgroup-filters">
      {foodGroups.map((foodGroup) => (
        <section key={foodGroup.id}>
          {foodGroup.ingredients_in_foodgroup && foodGroup.ingredients_in_foodgroup.length > 0 ? (
            <select
              value={selectedSubgroups[foodGroup.id] || ''}
              onChange={(e) => handleSubgroupChange(e, foodGroup.id)}
            >
              <option value="">{foodGroup.name}</option>
              {[
                ...new Set(
                  foodGroup.ingredients_in_foodgroup
                    .map((ingredient) => {
                      if (ingredient.subgroups && ingredient.subgroups.length > 0) {
                        return ingredient.subgroups[0]
                      } else {
                        return null
                      }
                    })
                    .filter((subgroupId) => subgroupId !== null)
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
    </main>
  )
}
