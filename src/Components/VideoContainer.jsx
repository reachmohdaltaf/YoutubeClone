import { useState, useEffect } from "react";
import { YOUTUBE_VIDEO_API } from "../Utils/constant";
import VideoCard from "./VideoCard";

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
        <VideoCard key={video.id} info={video} />
      ))}  
    </div>
    
  );
};

export default VideoContainer;
