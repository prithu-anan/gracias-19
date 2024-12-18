import { useEffect, useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router'
import { Home, Login, Puzzle, Leaderboard } from './components'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('username')
    setIsLoggedIn(false)
  }

  useEffect(() => {
    const token = localStorage.getItem('username');
    setIsLoggedIn(!!token); // Set state based on token existence
  }, []); // Run once on component mount

  return (
    <div className='app flex flex-col items-center'>
      <div className='navbar flex justify-between'>
        <div className='xs:mx-5 mx-2 w-[30vw] font-bold'>
          <Link to='/'><p>Gracias 19</p></Link>
        </div>
        <div className='flex w-[70vw] justify-end'>
          <Link to={isLoggedIn ? '/leaderboard' : '/login'}><p className='xs:mx-5 mx-2 hover:text-yellow-300'>Leaderboard</p></Link>
          <Link to={isLoggedIn ? '/puzzle' : '/login'}><p className='xs:mx-5 mx-2 hover:text-yellow-300'>Puzzle</p></Link>
          <Link to={isLoggedIn ? '/' : '/login'}>
            <p onClick={handleLogout} className='xs:mx-5 mx-2 hover:text-yellow-300'>
              {isLoggedIn ? 'Logout' : 'Login'}  
            </p>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/puzzle' element={<Puzzle />} />
      </Routes>
    </div>
  )
}

export default App
