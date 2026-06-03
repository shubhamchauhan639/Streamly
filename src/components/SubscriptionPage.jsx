import { useSelector } from "react-redux";

const Subscriptions = () => {
  const subscriptions = useSelector(
    (store) => store.subscriptions
  );

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">
        Subscriptions
      </h1>

      {subscriptions.length === 0 ? (
        <div className="text-center mt-20">
          <h2 className="text-xl font-semibold text-gray-600">
            Subscribe to channels
          </h2>

          <p className="text-gray-500 mt-2">
            Your subscribed channels will appear here.
          </p>
        </div>
      ) : (
        subscriptions.map((channel, index) => (
          <div
            key={index}
            className="p-4 mb-3 border rounded-lg"
          >
            📺 {channel.channelTitle}
          </div>
        ))
      )}
    </div>
  );
};

export default Subscriptions;