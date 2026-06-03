import { useSelector } from "react-redux";

const Subscriptions = () => {
  const channels = useSelector((store) => store.subscriptions);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Subscriptions</h1>

      {channels.map((channel, index) => (
        <div key={index}>
          {channel.channelTitle}
        </div>
      ))}
    </div>
  );
};

export default Subscriptions;