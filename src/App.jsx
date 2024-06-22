import { useState } from 'react'
import './App.css'
import './business.jsx'
import BusinessList from './businessList.jsx'
import SearchBar from './searchBar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div >
		<h1>ravenous</h1>
		<SearchBar />
		<BusinessList />
      </div>
    </>
  )
}

export default App
