import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logoImage from "../img/logo_footer.svg";
import arrowImage from "../img/arrow_wh.svg";
import shapesImage from "../img/foot_shaps.png";
import vec9 from "../img/vec9.png";
import vec2 from "../img/vec2.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { supabase } from "../supabaseClient";

const fallbackSvg =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=";

const Footer = ({
  email = "digivents02@gmail.com",
  phone = "+9779852623936",
  formAction = "https://api.web3forms.com/submit",
  accessKey = "7c2eb98c-c23d-4f3c-a91b-84d697c2996f",
  companyName = "DigiVents",
  copyrightYear = "2024",
}) => {
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    setIsSubmittingContact(true);
    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(formAction, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        form.reset();
        alert("Contact form submitted successfully!");
      } else {
        alert(
          "An error occurred while submitting the contact form. Please try again."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        "An error occurred while submitting the contact form. Please try again."
      );
    } finally {
      setIsSubmittingContact(false);
    }
  };

  const handleNewsletterSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    setIsSubmittingNewsletter(true); // Set loading state

    const formData = new FormData(event.target);
    const email = formData.get("email");

    try {
      const { error } = await supabase.from("news_letter").insert([{ email }]);

      if (error) {
        throw new Error(error.message);
      }

      alert("✅ Subscription successful!");
      event.target.reset(); // Clear the form
    } catch (error) {
      console.error("❌ Error:", error.message);
      alert("Subscription failed. Please try again.");
    } finally {
      setIsSubmittingNewsletter(false);
    }
  };

  return (
    <footer
      className="relative bg-gradient-to-b from-gray-50 to-[#510a3d] font-['Hanken_Grotesk',sans-serif] overflow-hidden pt-16 pb-12"
      id="footerSection"
      aria-labelledby="footer-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Logo and Contact Info */}
          <div className="space-y-6">
            <h2 id="footer-heading" className="sr-only">
              {companyName} Footer
            </h2>
            <Link to="/" className="block">
              <img
                src={logoImage}
                srcSet={`${logoImage} 1x, ${logoImage.replace(
                  ".webp",
                  "-2x.webp"
                )} 2x`}
                sizes="(max-width: 768px) 200px, 250px"
                alt={`${companyName} logo`}
                className="w-full max-w-[200px] sm:max-w-[250px] transition-opacity hover:opacity-90"
                loading="lazy"
                onError={(e) => (e.target.src = fallbackSvg)}
              />
            </Link>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${phone}`}
                  className="text-base sm:text-lg text-gray-700 hover:text-pink-600 transition-colors"
                  aria-label={`Call ${companyName} at ${phone}`}
                >
                  {phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="text-base sm:text-lg text-gray-700 hover:text-pink-600 transition-colors"
                  aria-label={`Email ${companyName} at ${email}`}
                >
                  {email}
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-6" aria-label="Footer navigation">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
              Explore
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/", text: "Home" },
                { to: "/about", text: "About" },
                { to: "/services", text: "Services" },
                { to: "/blog", text: "Blog" },
                { to: "/contact", text: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-base sm:text-lg text-gray-700 hover:text-pink-600 transition-colors"
                    aria-label={`Navigate to ${link.text} page`}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter Form */}
          <div className="space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
              Stay Updated
            </h3>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Your email address*"
                className="w-full p-3 bg-white/10 backdrop-blur-sm text-gray-700 border-b-2 border-gray-200 focus:border-pink-600 focus:outline-none transition-colors placeholder-gray-400 rounded-md"
                required
                aria-label="Enter your email to subscribe to the newsletter"
              />
              <button
                type="submit"
                className="group bg-gradient-to-r from-[#510a3d] to-[#6b7280] text-white py-2.5 px-5 rounded-md hover:bg-gradient-to-r hover:from-[#6b7280] hover:to-[#510a3d] transition-all disabled:opacity-50 flex items-center gap-2 w-full sm:w-auto"
                disabled={isSubmittingNewsletter}
                aria-label="Subscribe to the newsletter"
              >
                {isSubmittingNewsletter ? "Subscribing..." : "Subscribe"}
                {!isSubmittingNewsletter && (
                  <img
                    src={arrowImage}
                    alt="Arrow icon for newsletter subscription"
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  />
                )}
              </button>
            </form>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
              Contact Us
            </h3>
            <form
              method="post"
              id="contactForm"
              className="space-y-4 bg-white/10 backdrop-blur-sm p-5 sm:p-6 rounded-xl"
              action={formAction}
              onSubmit={handleContactSubmit}
            >
              <input type="hidden" name="access_key" value={accessKey} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First name*"
                  className="w-full p-3 bg-transparent border-b-2 border-gray-200 text-gray-700 focus:border-pink-600 focus:outline-none transition-colors placeholder-gray-400"
                  required
                  aria-label="Enter your first name"
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last name*"
                  className="w-full p-3 bg-transparent border-b-2 border-gray-200 text-gray-700 focus:border-pink-600 focus:outline-none transition-colors placeholder-gray-400"
                  required
                  aria-label="Enter your last name"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address*"
                  className="w-full p-3 bg-transparent border-b-2 border-gray-00 text-gray-700 focus:border-pink-600 focus:outline-none transition-colors placeholder-gray-400"
                  required
                  aria-label="Enter your email address"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number*"
                  className="w-full p-3 bg-transparent border-b-2 border-gray-200 text-gray-700 focus:border-pink-600 focus:outline-none transition-colors placeholder-gray-400"
                  required
                  aria-label="Enter your phone number"
                />
              </div>
              <textarea
                rows="3"
                name="message"
                placeholder="Your message*"
                className="w-full p-3 bg-transparent border-b-2 border-gray-200 text-gray-700 focus:border-pink-600 focus:outline-none transition-colors placeholder-gray-400 resize-none"
                required
                aria-label="Enter your message"
              ></textarea>
              <button
                type="submit"
                className="group bg-gradient-to-r from-[#510a3d] to-[#6b7280] text-white py-2.5 px-5 rounded-md hover:bg-gradient-to-r hover:from-[#6b7280] hover:to-[#510a3d] transition-all disabled:opacity-50 flex items-center gap-2 w-full sm:w-auto"
                disabled={isSubmittingContact}
                aria-label="Submit contact form"
              >
                {isSubmittingContact ? "Submitting..." : "Submit Now"}
                {!isSubmittingContact && (
                  <img
                    src={arrowImage}
                    alt="Arrow icon for contact form submission"
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  />
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-400/20 text-center">
          <p className="text-sm text-gray-400">
            Copyright © {copyrightYear} by{" "}
            <Link
              to="/"
              className="text-gray-400 hover:text-pink-600 hover:underline transition-colors"
              aria-label={`Visit ${companyName} homepage`}
            >
              {companyName}
            </Link>
            . All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Footer Shapes */}
      <img
        src={shapesImage}
        srcSet={`${shapesImage} 1x, ${shapesImage.replace(
          ".webp",
          "-2x.webp"
        )} 2x`}
        sizes="100vw"
        alt="Decorative background shapes for footer"
        className="absolute inset-0 w-full h-full object-cover object-top opacity-10"
        loading="lazy"
        onError={(e) => (e.target.src = fallbackSvg)}
      />
      <img
        src={vec9}
        srcSet={`${vec9} 1x, ${vec9.replace(".webp", "-2x.webp")} 2x`}
        sizes="(max-width: 768px) 80px, 100px"
        alt="Decorative shape in footer top left"
        className="absolute top-5 left-5 z-[1] pointer-events-none h-20 sm:h-24 opacity-15 animate-parallax"
        loading="lazy"
        onError={(e) => (e.target.src = fallbackSvg)}
      />
      <img
        src={vec2}
        srcSet={`${vec2} 1x, ${vec2.replace(".webp", "-2x.webp")} 2x`}
        sizes="(max-width: 768px) 80px, 100px"
        alt="Decorative shape in footer bottom right"
        className="absolute bottom-5 right-5 z-[1] pointer-events-none h-20 sm:h-24 opacity-15 animate-parallax-reverse"
        loading="lazy"
        onError={(e) => (e.target.src = fallbackSvg)}
      />

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes parallax {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-10px) translateX(5px);
          }
        }

        @keyframes parallax-reverse {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(10px) translateX(-5px);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.8s ease-out;
        }

        .animate-parallax {
          animation: parallax 8s ease-in-out infinite;
        }

        .animate-parallax-reverse {
          animation: parallax-reverse 10s ease-in-out infinite;
        }

        @media (max-width: 640px) {
          .animate-parallax,
          .animate-parallax-reverse {
            animation-duration: 6s;
          }

          .animate-slideIn {
            animation-duration: 0.6s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-slideIn,
          .animate-parallax,
          .animate-parallax-reverse {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </footer>
  );
};

Footer.propTypes = {
  email: PropTypes.string,
  phone: PropTypes.string,
  formAction: PropTypes.string,
  accessKey: PropTypes.string,
  companyName: PropTypes.string,
  copyrightYear: PropTypes.string,
};

export default Footer;
