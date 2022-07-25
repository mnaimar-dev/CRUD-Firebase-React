import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// Componentes
import Show from './components/Show'
import Edit from './components/Edit'
import Create from './components/Create'
import NavBar from './components/NavBar'

// Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [description, setDescription] = useState( '' )
  const [stock, setStock] = useState( 0 )
  const [price, setPrice] = useState( 0 )

  return (
    <div className="App">
      
      <Router>
        <NavBar />
        {/* <h1 className=''>Firebase + React CRUD</h1> */}
        <Routes>
          <Route path='/' element = { <Show /> } />
          <Route path='/create' element = { <Create description = { description } setDescription = { setDescription } stock = { stock } setStock = { setStock } price = { price } setPrice = { setPrice } /> } />
          <Route path='/edit/:id' element = { <Edit description = { description } setDescription = { setDescription } stock = { stock } setStock = { setStock } price = { price } setPrice = { setPrice }  /> } />
        </Routes>
      </Router>

    </div>
  )
}

export default App
