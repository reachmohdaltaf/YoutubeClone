import { useState, useEffect } from "react";
import { YOUTUBE_VIDEO_API } from "../Utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      setVideos(json.items || []); // Ensure `items` exists
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <div className="bg-red-2 justify-center flex   h-[78vh] overflow-y-scroll gap-4 flex-wrap ">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v="+video.id}><VideoCard  info={video} /></Link>
      ))}  
    </div>
    
  );
};

export default VideoContainer;
