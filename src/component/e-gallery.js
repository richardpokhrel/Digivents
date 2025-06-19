import React, { useState, useEffect } from 'react';

export default function MusicEventsGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleImages, setVisibleImages] = useState(8);

  // Gallery categories
  const categories = [
    { id: 'all', name: 'All Events', icon: '🎵' },
    { id: 'electronic', name: 'Electronic', icon: '🎧' },
    { id: 'jazz', name: 'Jazz', icon: '🎷' },
    { id: 'rock', name: 'Rock', icon: '🎸' },
    { id: 'classical', name: 'Classical', icon: '🎼' }
  ];

  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      title: "Electric Nights Main Stage",
      category: "electronic",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop",
      event: "Electric Nights Festival",
      date: "July 2024",
      description: "Epic moments from the main stage featuring world-class DJ performances"
    },
    {
      id: 2,
      title: "Jazz Under The Stars Atmosphere",
      category: "jazz",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      event: "Jazz Under The Stars",
      date: "August 2024",
      description: "Intimate jazz performances under the beautiful night sky"
    },
    {
      id: 3,
      title: "Rock Revival Energy",
      category: "rock",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop",
      event: "Rock Revival Concert",
      date: "September 2024",
      description: "High-energy rock performances that shook the ground"
    },
    {
      id: 4,
      title: "Crowd Goes Wild",
      category: "electronic",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop",
      event: "Electronic Music Festival",
      date: "June 2024",
      description: "Thousands of music lovers united by the beat"
    },
    {
      id: 5,
      title: "Saxophonist Solo",
      category: "jazz",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop",
      event: "Smooth Jazz Evening",
      date: "May 2024",
      description: "Mesmerizing saxophone solos that touched the soul"
    },
    {
      id: 6,
      title: "Guitar Hero Moment",
      category: "rock",
      image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=800&h=600&fit=crop",
      event: "Rock Legends Live",
      date: "April 2024",
      description: "Epic guitar solos that defined rock history"
    },
    {
      id: 7,
      title: "Orchestra Symphony",
      category: "classical",
      image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&h=600&fit=crop",
      event: "Classical Night",
      date: "March 2024",
      description: "Beautiful orchestral performances in perfect harmony"
    },
    {
      id: 8,
      title: "DJ Booth Lights",
      category: "electronic",
      image: "https://images.unsplash.com/photo-1520637836862-4d197d17c55a?w=800&h=600&fit=crop",
      event: "Techno Underground",
      date: "February 2024",
      description: "Spectacular light shows synchronized with electronic beats"
    },
    {
      id: 9,
      title: "Violin Virtuoso",
      category: "classical",
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&h=600&fit=crop",
      event: "Chamber Music Series",
      date: "January 2024",
      description: "Exquisite violin performances showcasing classical mastery"
    },
    {
      id: 10,
      title: "Blues Night Intimacy",
      category: "jazz",
      image: "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=800&h=600&fit=crop",
      event: "Blues & Soul Night",
      date: "December 2023",
      description: "Intimate blues performances in a cozy venue setting"
    },
    {
      id: 11,
      title: "Festival Fireworks",
      category: "rock",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop",
      event: "Summer Rock Festival",
      date: "November 2023",
      description: "Grand finale with spectacular fireworks display"
    },
    {
      id: 12,
      title: "Electronic Visuals",
      category: "electronic",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
      event: "Visual Electronic Experience",
      date: "October 2023",
      description: "Stunning visual effects complementing electronic music"
    }
  ];

  // Filter images based on selected category
  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  // Animation for category change
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleCategoryChange = (categoryId) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedCategory(categoryId);
      setVisibleImages(8);
      setIsTransitioning(false);
    }, 300);
  };

  // Load more images
  const loadMoreImages = () => {
    setVisibleImages(prev => Math.min(prev + 4, filteredImages.length));
  };

  // Modal functions
  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Floating music notes for background
  const FloatingNotes = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute text-white text-opacity-10 animate-bounce"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 1}s`,
            animationDuration: `${4 + Math.random() * 2}s`
          }}
        >
          🎵
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#510a3d] via-[#3d0829] to-black py-20">
      <FloatingNotes />
      
      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-16">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-2xl">📷</span>
            </div>
            <span className="text-lg font-medium text-white text-opacity-90">Event Gallery</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Captured
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300">
              Moments
            </span>
          </h2>
          
          <p className="text-xl text-white text-opacity-80 max-w-3xl mx-auto leading-relaxed">
            Relive the magic through our curated collection of unforgettable moments, 
            from electrifying performances to intimate musical experiences.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 ${
                selectedCategory === category.id
                  ? 'bg-white text-[#510a3d] shadow-xl'
                  : 'bg-white bg-opacity-20 backdrop-blur-sm text-white hover:bg-opacity-30 border border-white border-opacity-30'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500 ${
          isTransitioning ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
        }`}>
          {filteredImages.slice(0, visibleImages).map((image, index) => (
            <div
              key={image.id}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
              onClick={() => openModal(image)}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="relative overflow-hidden rounded-xl bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-white text-opacity-80">{image.event}</p>
                    <p className="text-xs text-white text-opacity-60">{image.date}</p>
                  </div>
                </div>

                {/* Play Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white border-opacity-30">
                    <span className="text-2xl text-white">👁️</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleImages < filteredImages.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMoreImages}
              className="px-8 py-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-full font-semibold text-lg text-white hover:bg-opacity-30 transition-all duration-300 border border-white border-opacity-30 transform hover:scale-105"
            >
              Load More Images ({filteredImages.length - visibleImages} remaining)
            </button>
          </div>
        )}

        {/* Gallery Stats */}
        <div className="flex justify-center space-x-8 mt-16 pt-8 border-t border-white border-opacity-20">
          <div className="text-center text-white">
            <div className="text-3xl font-bold">{galleryImages.length}</div>
            <div className="text-sm text-white text-opacity-70">Total Photos</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl font-bold">{categories.length - 1}</div>
            <div className="text-sm text-white text-opacity-70">Categories</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl font-bold">12</div>
            <div className="text-sm text-white text-opacity-70">Events Covered</div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="relative max-w-4xl w-full bg-white bg-opacity-10 backdrop-blur-md rounded-2xl border border-white border-opacity-20 overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all duration-300 z-10"
            >
              ✕
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-square lg:aspect-auto">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8 text-white space-y-4">
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold">{selectedImage.title}</h3>
                  <p className="text-xl text-pink-400">{selectedImage.event}</p>
                  <p className="text-white text-opacity-70">{selectedImage.date}</p>
                </div>
                
                <div className="w-12 h-px bg-gradient-to-r from-pink-400 to-purple-300"></div>
                
                <p className="text-white text-opacity-80 leading-relaxed">
                  {selectedImage.description}
                </p>
                
                <div className="pt-4">
                  <span className="px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm capitalize">
                    {selectedImage.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}