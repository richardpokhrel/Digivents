import React, { useState } from 'react';

// Mock supabase for demo purposes
const supabase = {
  from: () => ({
    insert: () => Promise.resolve({ error: null })
  })
};

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

    // Simulate email sending
    setTimeout(() => {
      setStatus('Message sent!');
      setIsSubmitted(true);
      setForm({
        full_name: '',
        email: '',
        phone: '',
        project_type: '',
        message: ''
      });
    }, 1000);
  };

  const contactCards = [
    {
      icon: '📧',
      title: 'Email Us',
      primary: 'digivents02@gmail.com',
      secondary: 'We reply within 24 hours'
    },
    {
      icon: '🏢',
      title: 'Visit Us',
      primary: 'Birtamode, New-Bhadrapur Road',
      secondary: 'Opposite to Hangout'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 top-8">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center mt-6">
          <h1 className="text-4xl md:text-5xl font-light text-[#510a3d] mb-4">
            Get in Touch
          </h1>
          <div className="w-16 h-0.5 bg-pink-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your vision to life? We'd love to hear about your project and discuss how we can help.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#510a3d] h-1"></div>
            
            <div className="p-8">
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-[#510a3d] rounded-full flex items-center justify-center text-white text-sm mr-3">
                  ✉
                </div>
                <h2 className="text-2xl font-light text-[#510a3d]">Send Message</h2>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Message Sent Successfully</h3>
                  <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="full_name"
                      placeholder="Full Name"
                      value={form.full_name}
                      onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#510a3d] focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#510a3d] focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#510a3d] focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  
                  <div>
                    <select
                      name="project_type"
                      value={form.project_type}
                      onChange={(e) => setForm({ ...form, project_type: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#510a3d] focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select Project Type</option>
                      <option value="Social-Media-Management">Social Media Management</option>
                      <option value="Digital-Marketing">Digital Marketing</option>
                      <option value="Tv-commericial">TV Commercial</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Tell us about your project..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#510a3d] focus:border-transparent transition-all duration-200 resize-none"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={status === 'Submitting...'}
                    className="w-full bg-[#510a3d] text-white py-3 px-6 rounded-md hover:bg-pink-500 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'Submitting...' ? 'Sending...' : 'Send Message'}
                  </button>
                  
                  {status && status !== 'Submitting...' && (
                    <p className={`text-sm text-center ${status.includes('failed') ? 'text-red-600' : 'text-green-600'}`}>
                      {status}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-light text-[#510a3d] mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {contactCards.map((card, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">{card.icon}</div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">{card.title}</h3>
                        <p className="text-[#510a3d] font-medium mb-1">{card.primary}</p>
                        <p className="text-sm text-gray-500">{card.secondary}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-[#510a3d] rounded-lg p-8 text-white">
              <h3 className="text-xl font-light mb-8 text-center">Our Commitment</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-light mb-2">150+</div>
                  <div className="text-sm text-pink-200">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light mb-2">24hrs</div>
                  <div className="text-sm text-pink-200">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light mb-2">99%</div>
                  <div className="text-sm text-pink-200">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light mb-2">5⭐</div>
                  <div className="text-sm text-pink-200">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}