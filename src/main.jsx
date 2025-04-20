import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './Home.jsx';
import { createBrowserRouter, RouterProvider,} from "react-router";
import ErrorPage from './ErrorPage.jsx';
import CountryDetail from './CountryDetail.jsx';

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, 
    children: ([
      {
        path: "/", 
        element: <Home />,
      },
      {
        path: "/:country",
        element: <CountryDetail />,
      },
    ])
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
