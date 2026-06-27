import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import HomePage from './pages/HomePage/HomePage';

export default function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
}
