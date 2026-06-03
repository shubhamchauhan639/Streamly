import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {  YOUTUBE_VIDEOS_API , key } from "../utils/constants";


const SearchResult = () => {
      const [videos, setVideos] = useState([]);

  const [searchParams] = useSearchParams();

  const query = searchParams.get("search_query");

  useEffect(() => {
    getSearchResults();
  }, [query]);

  const getSearchResults = async () => {

     const data = await fetch(
    "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=20&q="
    + query +
    "&key=" +
    key
  );

    const json = await data.json();

    setVideos(json.items);
   
  };

return (
  <div className="p-5">

    {videos.map((video) => {

      const { snippet } = video;

      return (

        <div
          key={video.id.videoId}
          className="flex gap-4 mb-8 cursor-pointer"
        >

          {/* Thumbnail */}
          <img
            className="w-[500px] h-[280px] rounded-2xl object-cover"
            src={snippet.thumbnails.medium.url}
            alt="thumbnail"
          />

          {/* Video Info */}
          <div className="flex flex-col">

            <h1 className="text-2xl font-semibold line-clamp-2">
              {snippet.title}
            </h1>

            <p className="text-gray-600 mt-2">
              {snippet.channelTitle}
            </p>

            <p className="text-gray-500 text-sm mt-1">
              {snippet.publishedAt.slice(0, 10)}
            </p>

            <p className="text-gray-700 mt-4 line-clamp-3">
              {snippet.description}
            </p>

          </div>

        </div>
      );
    })}

  </div>
);
}

export default SearchResult
