import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Discover from './components/Discover'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-primary">
      <div className='main-container flex flex-col ss:flex-row'>
        <Sidebar />
        <Routes>
          <Route path="/tv-shows" element={<Discover type="series" />}></Route>
          <Route path="/movies" element={<Discover type="movie" />}></Route>
          <Route path="/" element={<Discover />}></Route>
          <Route path="*" element={<Discover type="not-configured"/>}></Route>
        </Routes>

        {/* <Discover /> */}
      </div>
    </div>
  )
}

export default App
