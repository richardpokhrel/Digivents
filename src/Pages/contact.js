// pages/Contact.jsx
import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function ContactUs() {
  const [status, setStatus] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    project_type: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    const { error } = await supabase
      .from('contact_requests')
      .insert([{ ...form }]);

    if (error) {
      console.error(error);
      setStatus('Submission failed.');
      return;
    }

    if (error) {
        console.error(error);
        setStatus('Submission failed.');
        return;
      }
      
      // No email step — just mark success
      setStatus('Message sent!');
      setIsSubmitted(true);
      setForm({
        full_name: '',
        email: '',
        phone: '',
        project_type: '',
        message: ''
      });
    }     
    const { error } = async() => { await supabase
  .from('contact_requests')
  .insert([{ ...form }]);

if (error) {
  console.error(error);
  setStatus('Submission failed.');
  return;
}
    }

// ✅ Send email after successful DB insert
const res =  async() =>{ await fetch('https://ykqbzarozarusyultidj.supabase.co/functions/v1/contact-form', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    full_name: form.full_name,
    email: form.email,
    phone: form.phone,
    project_type: form.project_type,
    message: form.message
  })
});

if (!res.ok) {
  console.error(await res.text());
  setStatus('Saved, but email failed.');
} else {
  setStatus('Message sent!');
  setIsSubmitted(true);
  setForm({
    full_name: '',
    email: '',
    phone: '',
    project_type: '',
    message: ''
  });
}}
 

  const contactCards = [
    {
      icon: '📧',
      title: 'Email Us',
      primary: 'digivents02@gmail.com',
      secondary: 'We reply within 24 hours',
      gradient: 'from-purple-400 to-pink-400'
    },
    
    {
      icon: '🏢',
      title: 'Visit Us',
      primary: 'Birtamode, New-Bhadrapur Road',
      secondary: 'Opposite to Hangout',
      gradient: 'from-green-400 to-blue-400'
    },
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 py-12 mt-8">
      <div className="text-center mb-16">
        <div className="inline-block">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-[#510a3d] via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-pulse">
            Let's Create Together
          </h1>
          <div className="h-1 bg-gradient-to-r from-[#510a3d] to-pink-500 rounded-full transform scale-x-0 animate-[scaleX_1s_ease-out_0.5s_forwards] origin-left"></div>
        </div>
        <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
          Have an amazing project in mind? We'd love to hear about it and help bring your vision to life.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#510a3d] to-pink-500 rounded-2xl blur opacity-25"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#510a3d] via-purple-500 to-pink-500"></div>

              <div className="p-8">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#510a3d] to-pink-500 rounded-full flex items-center justify-center text-white text-xl mr-4">
                    ✨
                  </div>
                  <h2 className="text-3xl font-bold text-[#510a3d]">Send us a message</h2>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12 animate-bounce">
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="text-2xl font-bold text-green-600 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="full_name"
                      placeholder="Full Name"
                      value={form.full_name}
                      onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                      required
                      className="w-full p-2 border rounded"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="w-full p-2 border rounded"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                      className="w-full p-2 border rounded"
                    />
                    <select
                      name="project_type"
                      value={form.project_type}
                      onChange={(e) => setForm({ ...form, project_type: e.target.value })}
                      required
                      className="w-full p-2 border rounded"
                    >
                      <option value="">Select a project type</option>
                      <option value="Social-Media-Management">Social Media Management</option>
                      <option value="Digital-Marketing">Digital Marketing</option>
                      <option value="Tv-commericial">TV Commercial</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Message"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      className="w-full p-2 border rounded"
                    />
                    <button
                      type="submit"
                      className="w-full px-4 py-2 bg-pink-600 text-white rounded"
                    >
                      Send Message
                    </button>
                    {status && <p className="text-sm text-gray-600 pt-2">{status}</p>}
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Contact Cards (unchanged) */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#510a3d] mb-8 text-center lg:text-left">
              Other ways to reach us
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactCards.map((card, index) => (
                <div
                  key={index}
                  className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-110 ${
                    hoveredCard === index ? 'z-10' : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${card.gradient} rounded-2xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-500`}></div>
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    <div className="text-4xl mb-4 animate-pulse">{card.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
                    <p className="text-lg font-semibold text-[#510a3d] mb-1">{card.primary}</p>
                    <p className="text-sm text-gray-500">{card.secondary}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats block untouched */}
            <div className="mt-12 bg-gradient-to-r from-[#510a3d] to-pink-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Us?</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2 animate-pulse">150+</div>
                  <div className="text-sm opacity-90">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2 animate-pulse">24hrs</div>
                  <div className="text-sm opacity-90">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2 animate-pulse">99%</div>
                  <div className="text-sm opacity-90">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2 animate-pulse">5⭐</div>
                  <div className="text-sm opacity-90">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="fixed top-20 right-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse pointer-events-none"></div>
      <div className="fixed bottom-20 left-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-bounce pointer-events-none"></div>
    </div>
  );
}
