import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {

  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);
  console.log(chatMessages)
  useEffect(() => {
    const i = setInterval(() => {
      // API Polling

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + " 🚀",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

return (
  <div className="flex flex-col h-full">

    {/* Header */}
    <div className="px-4 py-3 border-b bg-white">
      <h2 className="font-semibold text-lg">Live Chat</h2>
    </div>

    {/* Messages */}
    <div className="flex-1 overflow-y-scroll flex flex-col-reverse bg-gray-50 px-3 py-2">

      <div>
        {chatMessages.map((c, i) => (
          <ChatMessage
            key={i}
            name={c.name}
            message={c.message}
          />
        ))}
      </div>

    </div>

    {/* Input */}
    <form
      className="p-3 border-t bg-white flex gap-2"
      onSubmit={(e) => {
        e.preventDefault();

        if (!liveMessage.trim()) return;

        dispatch(
          addMessage({
            name: "Shubham Chauhan",
            message: liveMessage,
          })
        );

        setLiveMessage("");
      }}
    >
      <input
        type="text"
        placeholder="Say something..."
        value={liveMessage}
        onChange={(e) => setLiveMessage(e.target.value)}
        className="
          flex-1
          border
          border-gray-300
          rounded-full
          px-4
          py-2
          outline-none
          focus:border-blue-500
        "
      />

      <button
        className="
          px-5
          rounded-full
          bg-blue-500
          text-white
          hover:bg-blue-600
        "
      >
        Send
      </button>
    </form>

  </div>
);
};
export default LiveChat;