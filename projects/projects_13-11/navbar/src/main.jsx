import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import { Provider } from "react-redux"
import { store } from './app/store.js'
import Data from './pages/Data.jsx'


const router = createBrowserRouter([

  {

    path: "/",
    element: <App />,
    children: [

      {

        path: "/",
        element: <Home />

      },

      {

        path: "/about",
        element: <About />

      },
      {

        path: "/contact",
        element: <Contact />

      },
      {

        path: "/data",
        element: <Data />

      },

    ]

  }


])


createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <RouterProvider router={router} />
  </Provider>
)
