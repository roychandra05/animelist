"use client";
import { Eye, EyeClosed, XCircle } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";
export const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);
  const option = {
    width: "300",
    heigh: "250",
  };
  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          className="float-right text-main-accent border-2 rounded-lg"
          onClick={handleVideoPlayer}
        >
          <Eye size={32} />
        </button>
        <YouTube
          videoId={youtubeId}
          onPlay={(event) => event.target.pauseVideo}
          opts={option}
        />
      </div>
    );
  };

  const OpenPlayer = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          className="float-right text-main-accent border-2 rounded-lg"
          onClick={handleVideoPlayer}
        >
          <EyeClosed size={32} />
        </button>
      </div>
    );
  };

  return isOpen ? <Player /> : <OpenPlayer />;
};
export default VideoPlayer;
