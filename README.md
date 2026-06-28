# TMDB Movie Catalog Application

A modern, responsive React movie exploration application. This project was
developed as **React Homework #5 (Neoversity)**. It integrates with **The Movie
Database (TMDB) API** to fetch and display trending movies, search for movies,
view detailed information, browse cast members, and read user reviews.

---

## 🚀 Features

- 🔥 **Trending Movies**: Real-time daily trending movies displayed on the
  homepage.
- 🔍 **Movie Search**: Search for movies with URL query persistence
  (`useSearchParams`) so users can share or reload search pages directly.
- ℹ️ **Detailed Movie Information**: View comprehensive details including title,
  genres, user rating, overview, and posters.
- 👥 **Cast & Credits (Nested Route)**: Browse the cast members and their
  characters for any movie.
- 💬 **Reviews (Nested Route)**: Check out reviews and user feedback for movies.
- 🔙 **Smart Navigation**: Go Back button with navigation state memory
  (`useLocation` state) to preserve search queries and page states.
- ⚡ **Performance**: Efficient code splitting and lazy loading (`React.lazy`
  and `Suspense`) for optimized bundle sizes.
- 🎨 **Modern CSS**: Modularized styling using CSS Modules for scoped styles and
  modern layouts.

---

## 🛠️ Tech Stack & Libraries

- **Frontend Core**: [React 19](https://react.dev/) /
  [React DOM 19](https://react.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/) (supports
  dynamic, nested, and wildcard routes)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Form Management**: [Formik](https://formik.org/) &
  [Yup](https://github.com/jquense/yup) (for robust search inputs)
- **Styling**: Vanilla CSS with **CSS Modules** &
  [Modern Normalize](https://github.com/sindresorhus/modern-normalize)
- **Loading Indicator**:
  [React Spinners](https://github.com/davidhu2000/react-spinners) (`ClipLoader`)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Code Quality**: [ESLint](https://eslint.org/),
  [Prettier](https://prettier.io/), [Husky](https://typicode.github.io/husky/),
  and [Lint-Staged](https://github.com/okonet/lint-staged)

---

## 📂 Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── AppLayout/       # Shared page layout wrapper
│   ├── Container/       # Common container for content alignment
│   ├── GoBackBtn/       # Back button with navigation state fallback
│   ├── Heading/         # Typography heading component
│   ├── Loader/          # Spinner/loading feedback component
│   ├── MovieCredits/    # Movie cast subcomponent (route nested)
│   ├── MovieDetails/    # Information layout for movie details
│   ├── MovieList/       # Renders lists of movies
│   ├── MovieReviews/    # Movie reviews subcomponent (route nested)
│   ├── Navigation/      # Header navigation bar
│   ├── SearchBar/       # Search input form built with Formik
│   └── ...
├── constants/           # Global application constants (e.g. ROUTES)
├── pages/               # Page components
│   ├── HomePage/        # Displays daily trending movies
│   ├── MoviesPage/      # Movie searching dashboard
│   ├── MovieDetailsPage/# Handles specific movie information layout
│   └── NotFoundPage/    # Fallback page for 404 routes
├── services/            # API integration modules (Axios client for TMDB)
├── styles/              # Global styles and variables
├── App.jsx              # Main App entry incorporating AppRouter
├── index.css            # Global stylesheet
├── main.jsx             # DOM mounting entrypoint
└── router.jsx           # React Router v7 configuration (Lazy loaded routes)
```

---

## 🔧 Installation & Local Setup

This project uses **pnpm** as its package manager. Follow the steps below to run
the application locally:

### 1. Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed.

### 2. Clone the Repository

```bash
git clone https://github.com/atoptun/goit-neo-react-hw-module5
cd goit-neo-react-hw-module5
```

### 3. Install Dependencies

```bash
pnpm install
```

### 4. Setup Environment Variables

To authenticate with the TMDB API, copy `.env.example` to `.env` and fill in
your API credentials:

```bash
cp .env.example .env
```

Open the `.env` file and replace `<your_access_token_here>` with your
credentials obtained from
[The Movie Database API Settings](https://www.themoviedb.org/settings/api).

```env
VITE_TMDB_API_ACCESS_TOKEN=your_actual_read_access_token
```

### 5. Start Development Server

```bash
pnpm run dev
```

Open `http://localhost:5173` in your browser.

---

## ⚡ Available Scripts

- `dev` - Launches Vite dev server at local address.
- `build` - Bundles production-ready assets into the `dist/` directory.
- `lint` - Analyzes codebase using ESLint.
- `lint-fix` - Automatically fixes fixable ESLint rules.
- `format` - Formats the codebase with Prettier.
- `preview` - Previews the production bundle locally.
