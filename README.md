# Neoversity — React Homework #4: Unsplash Image Search Gallery

An educational React application that allows users to search, filter, and view
high-quality images from the Unsplash library. This project demonstrates
state-of-the-art React practices, asynchronous data fetching using Axios, form
management with Formik, modal overlays, dynamic column-count grid rendering, and
styling with CSS Modules.

## 📋 Overview

**Unsplash Image Search Gallery** allows users to:

- **Search images by keyword** — Search through Unsplash database in real-time.
- **Filter and customize search results**:
  - **Color**: Black and White, Black, White, Yellow, Orange, Red, Purple,
    Magenta, Green, Teal, Blue.
  - **Orientation**: Landscape, Portrait, Squarish.
  - **Order By**: Relevant, Latest.
- **Toggle Filters Panel** — Smooth collapsible filters panel using a
  settings/slider control.
- **Infinite Pagination** — Load more results using the "Load more" button with
  status tracking.
- **Rich Image Modal Preview** — Click on any image to open a beautiful
  fullscreen modal viewer with transition animations, smooth
  close-on-esc/overlay support, and image description captions.
- **Responsive Adaptive Design** — Automatic column-count detection adjusting to
  available window width.
- **Error & Loading States** — Handled via animated spinner indicator
  (`react-spinners`) and helpful messages.

## 🛠 Technology Stack

- **React 19** — modern UI library
- **Vite** — fast build tool and dev server
- **Axios** — promise-based HTTP client for API requests
- **Formik** — form state management
- **CSS Modules** — modular, isolated component styling
- **react-modal** — accessible overlay dialogs
- **react-spinners** — loading animations
- **react-hot-toast** — beautiful error and validation alerts
- **react-icons** — flexible SVG icon library
- **clsx** — conditional CSS class composition
- **fast-deep-equal** — deep state checking to prevent redundant API fetches
- **modern-normalize** — CSS normalization

## 📁 Project Structure

```text
src/
├── api/
│   └── unsplash-api.js       # Unsplash API client configuration
├── components/
│   ├── AppLayout/            # Global page layout wrapper
│   ├── Container/            # Centered layout container wrapper
│   ├── Footer/               # Footer section
│   ├── Header/               # Header section with logo/search container
│   ├── ImageCard/            # Individual image item with load states
│   ├── ImageGallery/         # Dynamic grid showing image search results
│   ├── ImageModal/           # Fullscreen image viewer (react-modal)
│   ├── LoadMoreBtn/          # Load more results pagination button
│   ├── Loader/               # Spinner loader (react-spinners)
│   ├── Main/                 # Content wrapper section
│   ├── SearchBar/            # Input search query & filters form (Formik)
│   ├── Section/              # Section content container wrapper
│   └── StateMessage/         # Status and warning text messages handler
├── styles/
│   ├── reset.css             # Base styles reset
│   └── variables.css         # CSS root design variables
├── App.jsx                   # Root application component containing core logic
├── index.css                 # Global styles and modern-normalize import
└── main.jsx                  # Application entry point
```

## ⚙️ Environment Configuration

To interact with the Unsplash API, you need to register a developer account on
[Unsplash Developers](https://unsplash.com/developers) and create an application
to obtain an Access Key.

1. Create a `.env` file in the root directory based on `.env.example`:

   ```bash
   cp .env.example .env
   ```

2. Open `.env` and add your Unsplash Access Key:

   ```env
   VITE_UNSPLASH_API_KEY=your_access_key_here
   ```

## 🚀 Installation & Running

1. **Install dependencies**:

   ```bash
   pnpm install
   ```

2. **Start development server** (with hot-reload):

   ```bash
   pnpm run dev
   ```

3. **Build for production**:

   ```bash
   pnpm run build
   ```

4. **Preview production build locally**:

   ```bash
   pnpm run preview
   ```

## 🎨 Additional Scripts

- `pnpm run lint` — check code style and quality with ESLint
- `pnpm run format` — auto-format code with Prettier
