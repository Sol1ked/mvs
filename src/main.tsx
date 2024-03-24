import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Layout } from "./layout"
import "./index.scss"
import { Movies } from "./pages/movies"

const router = createBrowserRouter([
  { path: "/auth", element: <div>Auth</div> },
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "", element: <Movies /> }],
  },
])

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
