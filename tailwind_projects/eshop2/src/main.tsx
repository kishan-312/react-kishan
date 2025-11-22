import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Top_Rated from './pages/Top_Rated.tsx'
import Kids_Wear from './pages/Kids_Wear.tsx'
import Mens_wear from './pages/Mens_wear.tsx'
import Electronics from './pages/Electronics.tsx'
import Trending_items from './pages/Trending_items.tsx'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import Home from './pages/Home.tsx'
import "../src/index.css"

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
        element : <Kids_Wear/>

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
