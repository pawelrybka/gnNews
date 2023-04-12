import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import EmptyState from './Components/Main/MainContent/EmptyState/EmptyState';
import DisplayState from './Components/Main/MainContent/DisplayState/DisplayState';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <EmptyState/>,
      },
      {
        path: "/country/:id",
        element: <DisplayState />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)



