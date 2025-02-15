"use client"

import * as React from "react"

export default function HeroVideo() {
  const [isPlaying, setIsPlaying] = React.useState(true)
  const videoRef = React.useRef<HTMLVideoElement>(null)

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      <video ref={videoRef} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/demo-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-start justify-center leading-10 p-6 sm:p-12 lg:p-24">
        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-white mb-4  tracking-wider animate-in slide-in-from-left duration-500">
        Game-Changing <br /> <span className="text-primary">Electric Golf Bikes</span> 
        </h1>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-[600px] animate-in slide-in-from-left duration-500 delay-150">
          Balance comfort, performance, and personalization for the ride you crave.
        </p>
      </div>
      
    </section>
  )
}
