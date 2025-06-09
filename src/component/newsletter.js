import React, { useState } from 'react';
import PropTypes from 'prop-types';
import vec9 from '../img/vec9.png';
import vec2 from '../img/vec2.png';
import arrowImage from '../img/arrow_wh.svg';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Fallback SVG for testing
const fallbackSvg =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=';

const NewsletterSubscribe = ({
  title = 'Stay Updated',
  subtitle = 'Subscribe to our newsletter for the latest projects, design tips, and industry insights.',
  formAction = 'https://api.web3forms.com/submit',
  accessKey = '7c2eb98c-c23d-4f3c-a91b-84d697c2996f',
  companyName = 'DigiVents',
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = event.target;
    const formData = new FormData(form);
    const email = formData.get('email');

    // Client-side email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(formAction, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        form.reset();
        alert('Subscribed successfully! Thank you for joining our newsletter.');
      } else {
        setError('An error occurred while subscribing. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setError('An error occurred while subscribing. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="relative py-[100px] bg-gray-50 font-['Hanken_Grotesk',sans-serif] overflow-hidden"
      id="newsletterSubscribeSection"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 animate-fadeIn">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left text-[#510a3d]">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight drop-shadow-md">
              {title}
            </h2>
            <p className="mt-4 text-[16px] text-gray-400 leading-relaxed max-w-md mx-auto lg:mx-0">
              {subtitle}
            </p>
          </div>

          {/* Right Form */}
          <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center lg:justify-end">
            <form
              method="post"
              id="newsletterForm"
              className="w-full max-w-md bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg"
              action={formAction}
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="access_key" value={accessKey} />
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address*"
                  className="w-full p-3 bg-transparent border-b-2 border-[#510a3d] text-[#510a3d] focus:border-[#6b7280] focus:outline-none transition-colors placeholder-gray-400"
                  required
                />
                <button
                  type="submit"
                  className="group bg-[#510a3d] text-white py-3 px-6 rounded-lg hover:bg-[#6b7280] hover:scale-105 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  {!isSubmitting && (
                    <img
                      src={arrowImage}
                      alt="arrow"
                      className="inline-block w-4 transform group-hover:translate-x-1 transition-transform"
                    />
                  )}
                </button>
              </div>
              {error && (
                <p className="mt-2 text-[14px] text-red-500 text-center">{error}</p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Decorative Shapes */}
      <img
        src={vec9}
        alt="decorative shape"
        className="absolute top-[20%] left-0 z-[1] pointer-events-none h-[100px] opacity-20 animate-pulse"
        onError={(e) => (e.target.src = fallbackSvg)}
      />
      <img
        src={vec2}
        alt="decorative shape"
        className="absolute bottom-[20%] right-0 z-[1] pointer-events-none h-[100px] opacity-20 animate-pulse"
        onError={(e) => (e.target.src = fallbackSvg)}
      />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>
    </section>
  );
};

NewsletterSubscribe.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  formAction: PropTypes.string,
  accessKey: PropTypes.string,
  companyName: PropTypes.string,
};

export default NewsletterSubscribe;