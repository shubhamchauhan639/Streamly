# Streamly 🎥

A modern YouTube-inspired video streaming application built with React, Redux Toolkit, Tailwind CSS, and the YouTube Data API.

## 🚀 Features

### Home Page

- Browse trending videos
- Responsive video grid layout
- Sidebar navigation
- Shimmer loading UI
- Dynamic video cards

### Search Functionality

- Real-time search suggestions
- Debounced API calls
- Search result page
- Redux-powered search cache
- Optimized API usage

### Video Watch Page

- Embedded YouTube video player
- Video title and channel information
- Like and view statistics
- Expandable description with Read More / Show Less
- Responsive layout

### Comments System

- Nested comments support
- Recursive comment rendering
- YouTube-style comment UI
- Scalable comment structure

### Live Chat Simulation

- Real-time chat updates
- Redux-powered chat state
- Random user/message generation
- Auto message limiting
- Send custom messages
- Scrollable chat container

### Sidebar

- Collapsible navigation menu
- Redux state management
- Overlay behavior on Watch Page
- Dynamic menu toggle

## 🛠️ Tech Stack

### Frontend

- React.js
- React Router DOM
- Redux Toolkit
- Tailwind CSS

### APIs

- YouTube Data API v3
- YouTube Search Suggestion API

### State Management

- Redux Toolkit
- Search Cache Store
- App State Store
- Chat Store

## 📂 Project Structure

src/
├── components/
│ ├── Header.jsx
│ ├── SideBar.jsx
│ ├── MainContainer.jsx
│ ├── WatchPage.jsx
│ ├── SearchResult.jsx
│ ├── CommentsContainer.jsx
│ ├── Comment.jsx
│ ├── LiveChat.jsx
│ └── ChatMessage.jsx
│
├── utils/
│ ├── store.js
│ ├── appSlice.js
│ ├── searchSlice.js
│ ├── chatSlice.js
│ ├── helper.js
│ └── constants.js

## ⚡ Performance Optimizations

### Debouncing

Search API requests are delayed to avoid excessive network calls.

### Search Caching

Previously searched terms are stored in Redux.

Example:

{
"react": [...suggestions],
"javascript": [...suggestions]
}

### Chat Memory Management

Live chat messages are capped using:

- push()
- shift()

This prevents memory growth during long sessions.

## 🎯 Implemented Features Timeline

### Phase 1

- Project setup
- React Router
- Redux Store
- Sidebar

### Phase 2

- Home feed
- Video cards
- YouTube API integration

### Phase 3

- Search suggestions
- Debouncing
- Search caching

### Phase 4

- Search results page
- Video watch page

### Phase 5

- Nested comments
- Recursive rendering

### Phase 6

- Live chat simulation
- Chat state management

### Phase 7

- UI polishing
- Responsive layout improvements
- Read More feature
- Sidebar overlay behavior

## 🔮 Future Improvements

- User authentication
- Dark mode
- Infinite scrolling
- Live streaming support
- WebSocket-based live chat
- Like and subscribe system
- Playlist management
- Video upload functionality
- Recommendation engine
- User profiles

## 👨‍💻 Author

Shubham Chauhan

Built as a learning project to master:

- React
- Redux Toolkit
- Tailwind CSS
- API Integration
- Performance Optimization
- Real-Time UI Patterns
