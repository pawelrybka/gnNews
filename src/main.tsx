import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ErrorPage from './Components/Main/ErrorPage/ErrorPage';
import Main from './Components/Main/Main';
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: 'country/:countryId',
        element: <Main />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)



