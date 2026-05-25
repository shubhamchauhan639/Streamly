import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { key, YOUTUBE_VIDEOS_API } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const [showMore, setShowMore] = useState(false);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const dispatch = useDispatch();

  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    dispatch(closeMenu());
    getVideoData();
  }, []);

 const getVideoData = async () => {
  const data = await fetch(
    "https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=" +
      searchParams.get("v") +
      "&key=" +
     key
  );

  const json = await data.json();

  console.log(json);


  if (!json.items || json.items.length === 0) return;

  console.log(json.items[0]);
   setVideoData(json.items[0]);
};
  if (!videoData) return null;

  const { snippet, statistics } = videoData;

  return (
    <div className="p-5">
      {/* Video */}
      <iframe
        className="rounded-2xl w-full max-w-5xl aspect-video"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allowFullScreen
      ></iframe>

      {/* Video Details */}
      <div className="max-w-5xl mt-4">
        <h1 className="text-2xl font-bold">
          {snippet.title}
        </h1>

        <div className="flex items-center justify-between mt-4">
          <div>
            <h2 className="font-semibold text-lg">
              {snippet.channelTitle}
            </h2>
          </div>

          <div className="flex gap-4">
            <p> Like :{statistics.likeCount}</p>
            <p> Views : {statistics.viewCount}</p>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl mt-4">
           <p className="whitespace-pre-line text-sm leading-7">
    {showMore
      ? snippet.description
      : snippet.description.slice(0, 250) + "..."}
  </p>

  <button
    onClick={() => setShowMore(!showMore)}
    className="font-semibold mt-3 hover:text-blue-600"
  >
    {showMore ? "Show less" : "Read more"}
  </button>

</div>
      </div>
      <CommentsContainer/>
    </div>
  );
};

export default WatchPage;