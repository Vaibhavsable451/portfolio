import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          // Attempting to play unmuted as requested
          videoRef.current.muted = false;
          await videoRef.current.play();
        } catch (error) {
          console.log("Autoplay with sound was blocked. This is a browser security feature.", error);
          // Fallback: Mute and play if unmuted play fails
          videoRef.current.muted = true;
          await videoRef.current.play();
        }
      }
    };

    playVideo();
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <motion.div 
        className="w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-full aspect-video md:aspect-[21/9]">
          <video 
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            playsInline
            // Removing the 'muted' attribute to try playing sound immediately
          >
            <source src="/VaibhavPortfolio.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Subtle overlay to blend with surrounding sections */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
};

export default VideoSection;
