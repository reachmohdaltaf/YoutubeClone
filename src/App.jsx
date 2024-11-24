import { Provider } from "react-redux"
import Body from "./Components/Body"
import Navbar from "./Components/Navbar"
import Store from "./Utils/Store"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Body />
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
