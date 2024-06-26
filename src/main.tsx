import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { store } from "./app/store"
import { Layout } from "./components/layout"
import { AuthGuard } from "./features/user/authGuard"
import { AllMovies } from "./pages/allMovies"
import { Auth } from "./pages/auth"
import { Movies } from "./pages/movies"
import { Search } from "./pages/search"
import "./scss/app.scss"
import Movie from "./pages/movie"

const router = createBrowserRouter([
  { path: "/auth", element: <Auth /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Movies /> },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/films",
        element: <AllMovies />,
      },
      {
        path: "/films/:id",
        element: <Movie />,
      },
      {
        path: "/profile",
        element: <div>Profile</div>,
      },
      {
        path: "*",
        element: <div>404</div>,
      },
    ],
  },
])

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <AuthGuard>
          <RouterProvider router={router} />
        </AuthGuard>
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
