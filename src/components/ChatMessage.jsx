import React from 'react'

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-start gap-3 py-2 border-b border-gray-100">

      {/* Avatar */}
      <img
        className="w-8 h-8 rounded-full"
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        alt="user"
      />

      {/* Message */}
      <div>
        <span className="font-semibold text-sm text-gray-700">
          {name}
        </span>

        <span className="ml-2 text-sm text-gray-900">
          {message}
        </span>
      </div>

    </div>
  )
}

export default ChatMessage