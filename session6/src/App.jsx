import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Home.jsx'
import IntroPage from './pages/Intro.jsx'
import ErrorPage from './pages/Error.jsx'
import RootLayout from './components/RootLayout.jsx'
import IntroLayout from './components/IntroLayout.jsx'
import Detail from './pages/Detail.jsx'
import Work from './pages/Work.jsx'
import WorkLayout from './components/WorkLayout.jsx'
import React from './pages/React.jsx'
import ReactLayout from './components/ReactLayout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Homepage/>
      },
      {
        path: 'intro',
        element: <IntroLayout/>,
        children: [
          {
            index: true,
            element: <IntroPage/>
          },
          {
            path: ':id',
            element: <Detail/>
          }
        ]
      },
      {
        path: 'work',
        element: <WorkLayout/>,
        children: [
          {
            index: true,
            element: <Work/>
          }
        ]
      },
      {
        path: 'react',
        element: <ReactLayout/>,
        children: [
          {
            index: true,
            element: <React/>
          }
        ]
      }
    ]
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;
