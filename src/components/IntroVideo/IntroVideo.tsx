"use client";
import { useRef, useState } from "react";

export default function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full h-72 flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        src="/images/video_bg/intro_video.mp4"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        loop
        // Remove 'muted' to enable sound
      />

      {/* Content */}
      <div className="relative text-center text-white z-10 flex flex-col items-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          We’re the Best Organic Farm in the World
        </h1>
        <button
          onClick={togglePlayPause}
          className="w-16 h-16 flex items-center justify-center border-4 border-white rounded-full hover:scale-110 transition"
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 9v6m4-6v6"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-5.197-3.482A1 1 0 008 8.515v6.97a1 1 0 001.555.832l5.197-3.482a1 1 0 000-1.664z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
