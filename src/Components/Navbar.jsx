import logo1 from '../assets/logo1.png'
import microphone from '../assets/microphone.png'
import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import { RiVideoAddLine } from "react-icons/ri";
import { HiMiniUserCircle } from "react-icons/hi2";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../Utils/appSlice';








const Navbar = () => {

  const dispatch = useDispatch();
  const toggleMenuHandler = () =>{
    dispatch(toggleMenu())
  }
  return (
    <div className="bg-white  flex items-center justify-between p-2">
       
       {/* section 1 of youtube  */}
      <div className='section-1 flex items-center gap-3 h-14   cursor-pointer'>
        <div onClick={toggleMenuHandler} className="menu-bar-logo    flex items-center">
          <FaBars className='h-full'/>
        </div>
        <div className="logo h-full items-center">
            <img src={logo1} className='h-full' alt="" />
        </div>
       </div>
      

      {/* section 2 of youtube  */}
       <div className='section-2 flex items-center gap-2 cursor-pointer'>
        <div className='searchbar items-center justify-center  flex h-9 shadow-inner shadow-sm rounded-xl'>
          <input type="text" placeholder='search'  className='w-[550px]   p-2 h-full rounded-l-xl border border-[#bdbcbc] outline-none' />
          <div className='bg-[#ECECEC]  w-10 justify-center h-full text-xl rounded-r-xl border-[#bdbcbc] border flex items-center'>
            <CiSearch/>
          </div>
        </div>
        <div className='microphone h-4'>
          <img src={microphone} className='h-full ' alt="microphone-icon" />
        </div>
       </div>


      {/* section 3 for youtube  */}
      <div className='section-3 flex items-center text-2xl  gap-6 pr-4 cursor-pointer'>
      <div className="createVideo">
        <RiVideoAddLine/>
      </div>
      <div className="Notification ">
        <IoIosNotifications/>
      </div>
      <div className="User text-3xl">
        <HiMiniUserCircle/>
      </div>
      </div>
        
    </div>
  )
}

export default Navbar