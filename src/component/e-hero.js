import React, { useState, useEffect } from 'react';

export default function MusicEventsHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Featured music events data
  const featuredEvents = [
    {
        id: 1,
        title: "Birtamode Rock Fiesta",
        subtitle: "Live Rock Music with Nepal's Finest",
        date: "May 12, 2025",
        location: "Open Ground, Birtamode",
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&h=800&fit=crop",
        artists: ["Albatross", "Sabin Rai & The Pharaoh", "The Elements"],
        ticketsFrom: "NPR 1000",
        status: "done"
      },
      {
        id: 2,
        title: "Eastern Beats Carnival",
        subtitle: "3 Days of Music & Vibes in Birtamode",
        date: "July 15-17, 2025",
        location: "Birtamode Festival Ground",
        image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&h=800&fit=crop",
        artists: ["Purna Rai", "The Elements", "John Chamling"],
        ticketsFrom: "NPR 1200",
        status: "upcoming"
      },
      {
        id: 3,
        title: "Sunset Music Jam",
        subtitle: "Smooth Soul & Acoustic Evening",
        date: "August 22, 2025",
        location: "Mechi Campus Grounds, Birtamode",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop",
        artists: ["Sabin Rai & The Pharaoh", "John Chamling"],
        ticketsFrom: "NPR 1000",
        status: "upcoming"
      },
      {
        id: 4,
        title: "Indie Echoes: Birtamode",
        subtitle: "Nepal’s Indie Stars Unite",
        date: "April 25, 2025",
        location: "Community Hall Ground, Birtamode",
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&h=800&fit=crop",
        artists: ["Albatross", "The Elements"],
        ticketsFrom: "NPR 1000",
        status: "done"
      }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredEvents.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredEvents.length]);

  const currentEvent = featuredEvents[currentSlide];

  // Music visualizer bars animation
  const VisualizerBars = () => {
    return (
      <div className="flex items-end space-x-1 h-12">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`bg-white bg-opacity-60 rounded-t transition-all duration-300 ${
              isPlaying ? 'animate-pulse' : ''
            }`}
            style={{
              width: '3px',
              height: `${Math.random() * 40 + 8}px`,
              animationDelay: `${i * 100}ms`
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#510a3d] via-[#3d0829] to-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={currentEvent.image}
          alt={currentEvent.title}
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#510a3d]/90 via-[#510a3d]/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Floating Music Notes Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white text-opacity-20 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            🎵
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-white space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-2xl">🎸</span>
                  </div>
                  <span className="text-lg font-medium text-white text-opacity-90">Music Events</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Feel The
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300">
                    Rhythm
                  </span>
                </h1>
                
                <p className="text-xl text-white text-opacity-80 max-w-lg leading-relaxed">
                  Experience unforgettable musical journeys with world-class artists, 
                  state-of-the-art sound systems, and electrifying atmospheres.
                </p>
              </div>

              {/* Featured Event Info */}
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">{currentEvent.title}</h3>
                  <VisualizerBars />
                </div>
                
                <p className="text-white text-opacity-90 mb-4">{currentEvent.subtitle}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <span>📅</span>
                    <span>{currentEvent.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>📍</span>
                    <span>{currentEvent.location}</span>
                  </div>
                </div>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {currentEvent.artists.map((artist, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm"
                    >
                      {artist}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              

              {/* Stats */}
              <div className="flex space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm text-white text-opacity-70">Events Done</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">100K+</div>
                  <div className="text-sm text-white text-opacity-70">Happy Attendees</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm text-white text-opacity-70">Featured Artists</div>
                </div>
              </div>
            </div>

            {/* Right Content - Event Cards */}
            <div className="relative">
              <div className="space-y-4">
                {featuredEvents.map((event, index) => (
                  <div
                    key={event.id}
                    className={`transition-all duration-500 cursor-pointer ${
                      index === currentSlide
                        ? 'transform scale-105 opacity-100'
                        : 'opacity-70 hover:opacity-90'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  >
                    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-4 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
                      <div className="flex items-center space-x-4">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1 text-white">
                          <h4 className="font-semibold">{event.title}</h4>
                          <p className="text-sm text-white text-opacity-70">{event.date}</p>
                          <p className="text-sm text-white text-opacity-70">{event.location}</p>
                        </div>
                        <div className="text-right text-white">
                          <div className="font-bold">From</div>
                          <div className="text-lg font-bold text-pink-500">{event.ticketsFrom}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {featuredEvents.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-pink-500 '
                        : 'bg-white bg-opacity-40 hover:bg-opacity-60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-opacity-60 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white border-opacity-40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white bg-opacity-60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}