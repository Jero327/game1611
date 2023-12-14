import App from './components/App.tsx'
import Game from './components/Game.tsx'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="game" element={<Game />} />
    </Route>
  )
)

export default router