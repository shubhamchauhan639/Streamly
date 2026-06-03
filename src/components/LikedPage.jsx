import { useSelector } from "react-redux";

const LikedVideos = () => {
  const videos = useSelector((store) => store.likedVideos);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Liked Videos</h1>

      {videos.map((video) => (
        <div key={video.id}>
          <h2>{video.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default LikedVideos;