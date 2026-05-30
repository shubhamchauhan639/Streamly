import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { key } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

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

    if (!json.items || json.items.length === 0) return;

    setVideoData(json.items[0]);
  };

  if (!videoData) return null;

  const { snippet, statistics } = videoData;

  return (

    <div className="w-full py-5">

      {/* VIDEO + LIVE CHAT */}
      <div className="flex items-start gap-5 px-4 w-full">

        {/* LEFT SIDE */}
       <div className="w-[calc(100vw-520px)]">

          {/* Video */}
          <iframe
            className="rounded-2xl w-full h-[76vh]"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allowFullScreen
          ></iframe>

          {/* Video Details */}
          <div className="w-full mt-4">

            <h1 className="text-2xl font-bold">
              {snippet.title}
            </h1>

            <div className= "flex items-center justify-between mt-4">

              <div>
                <h2 className="font-semibold text-lg">
                  {snippet.channelTitle}
                </h2>
              </div>

              <div className="flex gap-4">
                <p>Like : {statistics.likeCount}</p>
                <p>Views : {statistics.viewCount}</p>
              </div>

            </div>

            {/* Description */}
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

        </div>

        {/* RIGHT SIDE LIVE CHAT */}
        <div
          className="
            w-[420px]
            h-[calc(100vh-110px)]
            border
            border-gray-300
            rounded-2xl
            bg-white
            overflow-hidden
            sticky
            top-5
            flex
            flex-col
            shrink-0
          "
        >
          <LiveChat />
        </div>

      </div>

      {/* COMMENTS */}
      <div className="w-full px-4 mt-8">
        <CommentsContainer />
      </div>

    </div>
  );
};

export default WatchPage;