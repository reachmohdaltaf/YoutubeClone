import MainContainer from "./MainContainer"
import Sidebar from "./Sidebar"

const Body = () => {
  return (
    <div className="flex w-full" >
      <Sidebar/>
      <MainContainer/>
    </div>
  )
}

export default Body