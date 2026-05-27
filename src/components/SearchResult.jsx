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
    console.log(json.items)
  };

  return (
      <div>
      {videos.map((video) => (
        <h1 key={video.id.videoId}>
          {video.snippet.title}
        </h1>
      ))}
    </div>
  )
}

export default SearchResult
