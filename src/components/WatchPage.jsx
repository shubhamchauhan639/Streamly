import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { key } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { addLikedVideo , removeLikedVideo} from "../utils/likedVideoSlice";
import { addSubscription , removeSubscription } from "../utils/subscribedChannelsSlice";
import { useSelector } from "react-redux";



const WatchPage = () => {
  const likedVideos = useSelector((store) => store.likedVideos);
const subscriptions = useSelector((store) => store.subscriptions);


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
    const isLiked = likedVideos.some(
  (video) => video.id === videoId
);
const isSubscribed = subscriptions.some(
  (channel) => channel.channelTitle === snippet.channelTitle
);

  return (

  <div className="w-full py-5 px-2 md:px-5 lg:ml-10">

    {/* VIDEO + LIVE CHAT */}
    <div className="flex flex-col lg:flex-row gap-4 items-start w-full">

      {/* LEFT SIDE */}
      <div className="w-full lg:w-[calc(100vw-450px)] xl:w-[calc(100vw-520px)]">

        {/* Video */}
        <iframe
          className="rounded-2xl w-full h-[30vh] sm:h-[45vh] lg:h-[68vh] aspect-video"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allowFullScreen
        ></iframe>

        {/* Video Details */}
        <div className="w-full mt-4">

          <h1 className="text-2xl font-bold">
            {snippet.title}
          </h1>

<div className="flex flex-col md:flex-row md:items-center justify-between mt-4">

  <div>
    <h2 className="font-semibold text-lg">
      {snippet.channelTitle}
    </h2>

    <div className="flex gap-3 mt-3">

    <button
  onClick={() => {
    if (isLiked) {
      dispatch(removeLikedVideo(videoId));
    } else {
      dispatch(
        addLikedVideo({
          id: videoId,
          title: snippet.title,
          thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
          channelTitle: snippet.channelTitle,
        })
      );
    }
  }}
  className={`px-4 py-2 rounded-full font-medium transition
    ${
      isLiked
        ? "bg-blue-500 text-white"
        : "bg-white border border-gray-300 text-black"
    }`}
>
  👍 {isLiked ? "Liked" : "Like"}
</button>

     <button
  onClick={() => {
    if (isSubscribed) {
      dispatch(removeSubscription(snippet.channelTitle));
    } else {
      dispatch(
        addSubscription({
          channelTitle: snippet.channelTitle,
        })
      );
    }
  }}
  className={`px-4 py-2 rounded-full font-medium transition
    ${
      isSubscribed
        ? "bg-red-600 text-white"
        : "bg-white border border-gray-300 text-black"
    }`}
>
  {isSubscribed ? "Subscribed" : "Subscribe"}
</button>

    </div>

  </div>

  <div className="flex gap-4 mt-4 md:mt-0">
    <p>👍 {statistics.likeCount}</p>
    <p>👁️ {statistics.viewCount}</p>
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

        {/* COMMENTS */}
        <div className="w-full mt-8">
          <CommentsContainer />
        </div>

      </div>

      {/* RIGHT SIDE LIVE CHAT */}
      <div
        className="
        w-full lg:w-[400px] xl:w-[420px]
        h-[50vh] lg:h-[76vh]
        border
        border-gray-300
        rounded-2xl
        bg-white
        overflow-hidden
        sticky
        top-[20px]
        flex
        flex-col
      "
      >
        <LiveChat />
      </div>

    </div>

  </div>
);
};

export default WatchPage;