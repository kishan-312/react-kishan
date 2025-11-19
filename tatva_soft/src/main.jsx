import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import Technologies from './pages/Technologies.jsx'
import Industries from './pages/Industries.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Insights from './pages/Insights.jsx'

const router = createBrowserRouter([

  {

    path : "/",
    element : <App/>,
    children : [

      {

        path : "/",
        element : <Home/>

      },

      {

        path : "/about",
        element : <About/>

      },
      {

        path : "/contact",
        element : <Contact/>

      },
      {

        path : "/services",
        element : <Services/>

      },
      {

        path : "/technologies",
        element : <Technologies/>

      },
      {

        path : "/industries",
        element : <Industries/>

      },
      {

        path : "/portfolio",
        element : <Portfolio/>

      },
      {

        path : "/insights",
        element : <Insights/>

      },

    ]

  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
