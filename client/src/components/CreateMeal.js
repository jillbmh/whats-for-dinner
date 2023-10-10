import { useEffect } from 'react'
import axios from 'axios'
import ViewFoodGroups from './FilterMenus'


export default function CreateMeal(){

  // useEffect(() => {
  //   async function getData(){
  //     try {
  //       const { data } = await axios.get('/api/ingredients/') // <---- Replace with your endpoint to test the proxy
  //       console.log(data)
  //     } catch (error) {
  //       console.log(error.response.data)
  //     }
  //   }
  //   getData()
  // }, [])


  return (
    <main>
      <h1>Create Meal</h1>
      <section className='food-filters'>
        <ViewFoodGroups />
      </section>
    </main>

  )
}



