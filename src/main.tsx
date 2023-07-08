import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './components/pages/home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Description from './components/pages/description/Description';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element: <Home />
      }
    ]
  },
  {
    path: "/description/:id",
    element: <Description />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
