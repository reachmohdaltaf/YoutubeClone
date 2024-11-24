import { useSelector } from "react-redux"
import './sidebar.css'


const Sidebar = () => {
  const isMenuOpen = useSelector(store=> store.app.isMenuOpen)
  //early return pattern
  if(!isMenuOpen) return null;
  return (
    <div className="bg-white sidebar  min-w-60   pl-5 max-h-[85vh] overflow-y-scroll p-2 cursor-pointer pt-4 text-sm">
      <ul className=" w-full flex flex-col">
        <li className="w-full hover:bg-[#EEEE] font-bold bg-[#EEEE] flex items-center p-3 rounded-lg">Home</li>
        <li className="w-full hover:bg-[#EEEE]  flex items-center p-3 rounded-lg">Shorts</li>
        <li className="w-full hover:bg-[#EEEE]  flex items-center p-3 rounded-lg">Subscriptions</li>
      </ul>
      <div className="h-[0.5px] w-full bg-black"></div>
      <ul className=" w-full flex flex-col">
      <h1 className="font-bold hover:bg-[#EEEE] pt-2 pb-2 p-1">You</h1>
      <li className="w-full hover:bg-[#EEEE]  flex items-center p-3 rounded-lg">History</li>
        <li className="w-full hover:bg-[#EEEE]  flex items-center p-3 rounded-lg">Playlist</li>
        <li className="w-full hover:bg-[#EEEE]  flex items-center p-3 rounded-lg">Your Videos</li>
        <li className="w-full hover:bg-[#EEEE]  flex items-center p-3 rounded-lg">Watch later</li>
        <li className="w-full hover:bg-[#EEEE]  flex items-center p-3 rounded-lg">Liked Videos</li>

      </ul>
      <div className="h-[0.5px] w-full bg-black"></div>
        <ul className=" w-full flex flex-col">
        <h3 className="font-bold hover:bg-[#EEEE] pt-2 pb-2 p-1 ">Subscription</h3>
        <li className="w-full hover:bg-[#EEEE]  flex items-center p-3 rounded-lg">Subscribed</li>
        <li className="w-full hover:bg-[#EEEE]  flex items-center p-3 rounded-lg">Gaming channel</li>
        <li className="w-full hover:bg-[#EEEE]  flex items-center p-3 rounded-lg">Nature</li>
      </ul>


      <div className="h-[0.5px] w-full bg-black"></div>
        <ul className=" w-full flex flex-col">
        <h3 className="font-bold hover:bg-[#EEEE] pt-2 pb-2 p-1 ">Subscription</h3>
        <li className="w-full hover:bg-[#EEEE]  flex items-center p-3 rounded-lg">Subscribed</li>
        <li className="w-full hover:bg-[#EEEE]  flex items-center p-3 rounded-lg">Gaming channel</li>
        <li className="w-full hover:bg-[#EEEE]  flex items-center p-3 rounded-lg">Nature</li>
      </ul>


      <div className="h-[0.5px] w-full bg-black"></div>
        <ul className=" w-full flex flex-col">
        <h3 className="font-bold hover:bg-[#EEEE] pt-2 pb-2 p-1 ">Subscription</h3>
        <li className="w-full hover:bg-[#EEEE]  flex items-center p-3 rounded-lg">Subscribed</li>
        <li className="w-full hover:bg-[#EEEE]  flex items-center p-3 rounded-lg">Gaming channel</li>
        <li className="w-full hover:bg-[#EEEE]  flex items-center p-3 rounded-lg">Nature</li>
      </ul>

      <div className="h-[0.5px] w-full bg-black"></div>
        <ul className=" w-full flex flex-col">
        <h3 className="font-bold hover:bg-[#EEEE] pt-2 pb-2 p-1 ">Subscription</h3>
        <li className="w-full hover:bg-[#EEEE]  flex items-center p-3 rounded-lg">Subscribed</li>
        <li className="w-full hover:bg-[#EEEE]  flex items-center p-3 rounded-lg">Gaming channel</li>
        <li className="w-full hover:bg-[#EEEE]  flex items-center p-3 rounded-lg">Nature</li>
      </ul>

      <div className="h-[0.5px] w-full bg-black"></div>
        <ul className=" w-full flex flex-col">
        <h3 className="font-bold hover:bg-[#EEEE] pt-2 pb-2 p-1 ">Subscription</h3>
        <li className="w-full hover:bg-[#EEEE]  flex items-center p-3 rounded-lg">Subscribed</li>
        <li className="w-full hover:bg-[#EEEE]  flex items-center p-3 rounded-lg">Gaming channel</li>
        <li className="w-full hover:bg-[#EEEE]  flex items-center p-3 rounded-lg">Nature</li>
      </ul>

      <div className="h-[0.5px] w-full bg-black"></div>
        <ul className=" w-full flex flex-col">
        <h3 className="font-bold hover:bg-[#EEEE] pt-2 pb-2 p-1 ">Subscription</h3>
        <li className="w-full hover:bg-[#EEEE]  flex items-center p-3 rounded-lg">Subscribed</li>
        <li className="w-full hover:bg-[#EEEE]  flex items-center p-3 rounded-lg">Gaming channel</li>
        <li className="w-full hover:bg-[#EEEE]  flex items-center p-3 rounded-lg">Nature</li>
      </ul>

      <div className="h-[0.5px] w-full bg-black"></div>
        <ul className=" w-full flex flex-col">
        <h3 className="font-bold hover:bg-[#EEEE] pt-2 pb-2 p-1 ">Subscription</h3>
        <li className="w-full hover:bg-[#EEEE]  flex items-center p-3 rounded-lg">Subscribed</li>
        <li className="w-full hover:bg-[#EEEE]  flex items-center p-3 rounded-lg">Gaming channel</li>
        <li className="w-full hover:bg-[#EEEE]  flex items-center p-3 rounded-lg">Nature</li>
      </ul>
    </div>
  )
}

export default Sidebar