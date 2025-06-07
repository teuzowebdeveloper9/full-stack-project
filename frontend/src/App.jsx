import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'



function App() {
 

  return (
    <BrowserRouter >
      <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/create' element={<Create></Create>}></Route>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
