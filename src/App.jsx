import { Navigate, Route, Routes } from 'react-router-dom'
import GameEngine from './components/GameEngine.jsx'
import HomePage from './components/HomePage.jsx'
import QuickViewPage from './components/QuickViewPage.jsx'
import StorySelectorPage from './components/StorySelectorPage.jsx'
import WorkDetailsKrgogoodsPage from './components/WorkDetailsKrgogoodsPage.jsx'
import WorkDetailsLaPersonaPage from './components/WorkDetailsLaPersonaPage.jsx'
import WorkDetailsSandLite1000Page from './components/WorkDetailsSandLite1000Page.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/story-selector" element={<StorySelectorPage />} />
      <Route path="/quick-view" element={<QuickViewPage />} />
      <Route path="/work/la-persona" element={<WorkDetailsLaPersonaPage />} />
      <Route path="/work/krgogoods" element={<WorkDetailsKrgogoodsPage />} />
      <Route path="/work/sand-lite-1000" element={<WorkDetailsSandLite1000Page />} />
      <Route path="/game" element={<GameEngine />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
