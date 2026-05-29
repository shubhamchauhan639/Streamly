import React from 'react'
import ChatMessage from './ChatMessage'

const LiveChat = () => {
  return (

    <div className="w-full h-full bg-white rounded-2xl border border-gray-300 overflow-hidden flex flex-col">

      {/* Header */}
      <div className="p-4 border-b font-semibold text-lg bg-white">
        Live Chat
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-scroll p-3 bg-gray-50 space-y-3">

        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />

      </div>

    </div>

  )
}

export default LiveChat