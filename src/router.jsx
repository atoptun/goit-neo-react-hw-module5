import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Loader from './components/Loader/Loader';

const AppLayout = lazy(() => import('./components/AppLayout/AppLayout'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(
  () => import('./pages/MovieDetailsPage/MovieDetailsPage'),
);
const MovieCredits = lazy(
  () => import('./components/MovieCredits/MovieCredits'),
);
const MovieReviews = lazy(
  () => import('./components/MovieReviews/MovieReviews'),
);
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const withSuspense = Component => (
  <Suspense fallback={<Loader />}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: withSuspense(AppLayout),
    children: [
      {
        index: true,
        element: withSuspense(HomePage),
      },
      {
        path: 'movies',
        element: withSuspense(MoviesPage),
      },
      {
        path: 'movies/:movieId',
        element: withSuspense(MovieDetailsPage),
        children: [
          { path: 'credits', element: withSuspense(MovieCredits) },
          { path: 'reviews', element: withSuspense(MovieReviews) },
        ],
      },
      {
        path: '*',
        element: withSuspense(NotFoundPage),
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
