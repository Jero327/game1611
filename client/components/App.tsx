// import { useFruits } from '../hooks/useFruits.ts'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import Game from './Game.tsx'

function App() {
  // const { data } = useFruits()

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <Link to={`/`}>Home</Link><br />
        <Link to={`/game`}>Game</Link>
        {/* <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul> */}

        <Outlet />
      </div>
    </>
  )
}

export default App
