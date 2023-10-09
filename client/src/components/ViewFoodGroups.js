import { useState, useEffect } from 'react'
import axios from 'axios'

export default function ViewFoodGroups({ filter, setFilter }) {
  const [foodGroups, setFoodGroups] = useState([])

  useEffect(() => {

    const FoodGroups = async () => {
      try {
        const response = await axios.get('api/food-groups/')

        setFoodGroups(response.data)
      } catch (error) {
        console.error('Error fetching food groups:', error)
      }
    }


    FoodGroups()
  }, [])

  return (
    <section className='filters-container'>
      <select
        value={filter.foodgroups}
        onChange={(e) =>
          setFilter((prev) => ({ ...prev, foodGroup: e.target.value }))
        }
      >
        <option value=''>Food Group</option>
        {foodGroups.map((foodGroup) => (
          <option key={foodGroup.pk} value={foodGroup.fields.name}>
            {foodGroup.fields.name}
          </option>
        ))}
      </select>
    </section>
  )
}
