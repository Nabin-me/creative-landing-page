"use client";
import React, { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  autoplay?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, autoplay = false }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(autoplay);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (isPlaying) {
      timeoutRef.current = setTimeout(() => {
        setIsHovering(false);
      }, 2000);
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const playVideo = () => {
        videoElement
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Autoplay was prevented:", error);
            setIsPlaying(false);
          });
      };

      if (autoplay) {
        if (videoElement.readyState >= 2) {
          // HAVE_CURRENT_DATA or higher
          playVideo();
        } else {
          videoElement.addEventListener("canplay", playVideo, { once: true });
        }
      }

      return () => {
        videoElement.removeEventListener("canplay", playVideo);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
  }, [autoplay]);

  return (
    <div
      className="relative w-full h-full group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={src}
        playsInline
        loop
        muted
      >
        Your browser does not support the video tag.
      </video>
      <button
        onClick={togglePlay}
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-4 text-white hover:bg-opacity-75 transition-opacity duration-300 ${
          isPlaying && !isHovering
            ? "opacity-0 group-hover:opacity-100"
            : "opacity-100"
        }`}
      >
        {isPlaying ? (
          <Pause className="w-8 h-8" />
        ) : (
          <Play className="w-8 h-8" />
        )}
      </button>
    </div>
  );
};

export default VideoPlayer;
