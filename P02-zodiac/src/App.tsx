import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('./components/views/Home'));
const Details = lazy(() => import('./components/views/Details'));

function App() {
  return (
    <div className="bg-[url('./src/assets/background.png')] h-lvh max-h-lvh overflow-hidden">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:zodiacSign" element={<Details />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
