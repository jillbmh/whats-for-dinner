import Header from './components/Header'
import Footer from './components/Footer/Footer'
import Contact from './components/Footer/Contact'
import Cookies from './components/Footer/Cookies'
import Privacy from './components/Footer/Privacy'
import Terms from './components/Footer/Terms'
import AllMeals from './components/AllMeals'
import CreateMeal from './components/CreateMeal'
import HomePage from './components/HomePage'
import NutritionalInfo from './components/NutritionalInfo'
import PageNotFound from './components/PageNotFound'
import SingleMeal from './components/SingleMeal'
import Login from './components/Login'
import Register from './components/Register'
import UpdateMeal from './components/UpdateMeal'
import Spinner from './components/Spinner'


import { BrowserRouter, Route, Routes } from 'react-router-dom'


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path ='/' element={<HomePage />} />
        <Route path ='/contact-us' element={<Contact/>} />
        <Route path ='/cookie-policy' element={<Cookies />} />
        <Route path ='/privacy-notice' element={<Privacy />} />
        <Route path ='/terms-and-conditions' element={<Terms />} />
        <Route path ='/my-meals' element={<AllMeals />} />
        <Route path ='/create-meal' element={<CreateMeal />} />
        <Route path ='/nutritional-info' element={<NutritionalInfo />} />
        <Route path ='/my-meals/:id' element={<SingleMeal />} />
        <Route path ='/account/login' element={<Login />} />
        <Route path ='/account/register' element={<Register />} />
        <Route path ='/my-meals/:id/update' element={<UpdateMeal />} />
        <Route path ='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}