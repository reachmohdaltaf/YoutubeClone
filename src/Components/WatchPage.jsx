import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  console.log(searchParam.get("v"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div>
      <iframe
        width="753"
        height="400"
        src={"https://www.youtube.com/embed/"+(searchParam.get("v"))}
        title="Tere Liye Jannatein Sajai Maine Tere Liye | Atif Aslam | Shreya Ghoshal | Hindi Romantic Song"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullscreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
