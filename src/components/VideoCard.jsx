import React from "react";

const VideoCard = ({ info }) => {

  if (!info) return null;

  const { snippet, statistics } = info;

  if (!snippet) return null;

  const { channelTitle, title, thumbnails } = snippet;

  return (
 <div className="p-3 shadow-lg rounded-xl hover:scale-105 transition-transform duration-200 cursor-pointer bg-white w-full">

      <img
        className="rounded-xl w-full"
        alt="thumbnail"
        src={thumbnails?.medium?.url}
      />

      <ul className="mt-3">
        <li className="font-bold text-md py-1 line-clamp-2">
          {title}
        </li>

        <li className="text-gray-600 text-sm mt-1">
          {channelTitle}
        </li>

        <li className="text-gray-500 text-sm">
          {statistics?.viewCount} views
        </li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-500 rounded-xl">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;