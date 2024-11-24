/* eslint-disable react/prop-types */

const VideoCard = ({ info }) => {
  const {
    snippet: { title, channelTitle, thumbnails, description },
    statistics: { viewCount, likeCount },
  } = info;

  return (
    
    <div className="w-80 h-80   bg-white rounded-lg shadow-md overflow-y-hidden  border border-gray-200">
      <img
        src={thumbnails.high.url}
        alt={title}
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">
          {description.length > 100 ? `${description.slice(0, 100)}...` : description}
        </p>
        <p className="text-sm text-gray-700 mb-2">
          <span className="font-semibold">Channel:</span> {channelTitle}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Views:</span> {parseInt(viewCount).toLocaleString()}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Likes:</span> {parseInt(likeCount).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
