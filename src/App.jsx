import { Provider } from "react-redux"
import Body from "./Components/Body"
import Navbar from "./Components/Navbar"
import Store from "./Utils/Store"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainContainer from "./Components/MainContainer"
import WatchPage from "./Components/WatchPage"

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Body />,
      children: [
        {
          path: '/',
          element: <MainContainer/>
        },
        {
          path: 'watch',
          element: <WatchPage />
        }

      ]
    }
  ]
)

const App = () => {
  return (
    <Provider store={Store}>
    <div className="">
      <Navbar/>
      <RouterProvider router={router}/>
    </div>
    </Provider>
  )
}

export default App;
