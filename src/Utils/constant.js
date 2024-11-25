const GOOGLE_API_KEY = "AIzaSyDHy3bbqLO-mVmbq5Ep2ZBanoJgJxwXqsw";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const SEARCH_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=";


 export const predefinedSuggestions = [
    "Apple iPhone 15 unboxing",
    "iPhone 15 pink color",
    "Miniphone review",
    "Apple products",
    "iPhone 15 pro features",
    "Best iPhones of 2024",
    "iPhone 15 vs iPhone 14",
    "Unboxing iPhone 15 pink"
  ];