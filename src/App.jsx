import './App.css'
import { Route, Routes, Outlet } from 'react-router-dom'
import AddMovie from './Components/AddMovie/AddMovie'
import GenerePage from './Components/GenerePage/GenerePage'
import Layout from './Components/Layout/Layout'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<div>Main</div>}/>
          <Route path='add' element={<AddMovie/>}/>
          <Route path='genre/:genre' element={<GenerePage/>}/>
          <Route />
        </Route>
      </Routes>
    </>
  )
}

export default App
