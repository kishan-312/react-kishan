import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Top_Rated from './pages/Top_Rated.tsx'
import Kids_wear from './pages/Kids_wear.tsx'
import Mens_wear from './pages/Mens_wear.tsx'
import Electronics from './pages/Electronics.tsx'
import Trending_items from './pages/Trending_items.tsx'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'

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

        path : "/top_rated",
        element : <Top_Rated/>

      },
      {

        path : "/kids_wear",
        element : <Kids_wear/>

      },
      {

        path : "/mens_wear",
        element : <Mens_wear/>

      },
      {

        path : "/electronics",
        element : <Electronics/>

      },
      {

        path : "/trending_items",
        element : <Trending_items/>

      },

    ]

  }

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
