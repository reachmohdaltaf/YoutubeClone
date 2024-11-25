import logo1 from "../assets/logo1.png";
import microphone from "../assets/microphone.png";
import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import { RiVideoAddLine } from "react-icons/ri";
import { HiMiniUserCircle } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [SearchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);

  // Predefined suggestions list (you can customize this as per your requirement)
  const predefinedSuggestions = [
    "Apple iPhone 15 unboxing",
    "iPhone 15 pink color",
    "Miniphone review",
    "Apple products",
    "iPhone 15 pro features",
    "Best iPhones of 2024",
    "iPhone 15 vs iPhone 14",
    "Unboxing iPhone 15 pink",
    "iPhone 14 unboxing",
    "iPhone 13 review",
    "iPhone 15 camera features",
    "iPhone 15 vs iPhone 12",
    "Apple event highlights",
    "How to use iPhone 15",
    "iPhone 15 tips and tricks",
    "iPhone 15 battery life",
    "iPhone 15 vs Samsung Galaxy S24",
    "Apple iPhone 15 accessories",
    "iPhone 15 setup guide",
    "iPhone 15 vs Google Pixel 9",
    "iPhone 15 vs OnePlus 12",
    "How to fix iPhone 15 issues",
    "Best iPhone 15 cases",
    "iPhone 15 screen protector installation",
    "iPhone 15 color options",
    "Top apps for iPhone 15",
    "iPhone 15 updates and news",
    "Apple iPhone 15 gaming performance",
    "iPhone 15 vs iPhone SE 3rd gen",
    "iPhone 15 vs iPhone 11",
    "How to transfer data to iPhone 15",
    "iPhone 15 specs comparison",
    "iPhone 15 unboxing and first impressions"
  ];
  

  useEffect(() => {
    if (SearchQuery === "") {
      setSuggestion([]); // Clear suggestions if search query is empty
      return;
    }

    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
  };
  }, [SearchQuery]);

  const getSearchSuggestions = () => {
    // Filter the predefined suggestions based on the search query
    const filteredSuggestions = predefinedSuggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(SearchQuery.toLowerCase())
    );

    // Update the suggestion state with the filtered suggestions
    setSuggestion(filteredSuggestions);
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="bg-white flex items-center justify-between pl-5 pr-5">
      {/* section 1 of youtube */}
      <div className="section-1 flex items-center gap-3 h-14 cursor-pointer">
        <div onClick={toggleMenuHandler} className="menu-bar-logo flex items-center">
          <FaBars className="h-full" />
        </div>
        <div className="logo h-full items-center">
          <img src={logo1} className="h-full" alt="" />
        </div>
      </div>

      {/* section 2 of youtube */}
      <div className="section-2 flex items-center gap-2 cursor-pointer">
        <div className="searchbar items-center justify-center flex h-9 shadow-sm rounded-xl">
          <input
            type="text"
            placeholder="search"
            value={SearchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-[550px] p-2 h-full rounded-l-xl border border-[#bdbcbc] outline-none"
          />
          <div className="bg-[#ECECEC] w-10 justify-center h-full text-xl rounded-r-xl border-[#bdbcbc] border flex items-center">
            <CiSearch />
          </div>
        </div>

        {/* Search suggestions */}
        {SearchQuery && (
          <div className="searchsuggestion fixed bg-white top-12 px-5 w-[35rem] rounded-lg shadow-lg">
            <ul className="flex flex-col gap-1 p-1">
              {suggestion.map((s, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CiSearch /> {s}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="microphone h-4">
          <img src={microphone} className="h-full" alt="microphone-icon" />
        </div>
      </div>

      {/* section 3 for youtube */}
      <div className="section-3 flex items-center text-2xl gap-6 pr-4 cursor-pointer">
        <div className="createVideo">
          <RiVideoAddLine />
        </div>
        <div className="Notification ">
          <IoIosNotifications />
        </div>
        <div className="User text-3xl">
          <HiMiniUserCircle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
