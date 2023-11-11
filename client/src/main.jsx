import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'

import App from './App.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';
import Pricing from './pages/Pricing.jsx';


import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/product',
        element: <Product />
      },
      {
        path: '/pricing',
        element: <Pricing />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
