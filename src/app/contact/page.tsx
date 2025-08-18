"use client";

import React, { JSX, useState } from 'react';
import FlowerSVG from '@/components/flower-svg';

// icons
import { Mail, Phone, MapPin, Clock, Send, Heart, ExternalLink } from 'lucide-react';
import DefaultLayout from '@/layouts/default-layout';

export default function ContactPage(): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You would typically send this data to your backend
  };

  return (
    <DefaultLayout>
      <div className='min-h-screen bg-gradient-to-br from-orange-50 via-amber-25 to-yellow-50 relative overflow-hidden' style={{ backgroundColor: '#fcefe3' }}>
        {/* Top Right Flower */}
        <FlowerSVG
          className="absolute top-0 right-0 w-80 h-80 opacity-40 animate-pulse"
          position="top-right"
        />

        {/* Bottom Left Flower */}
        <FlowerSVG
          className="absolute bottom-0 left-0 w-96 h-96 opacity-30 animate-pulse"
          position="bottom-left"
        />

        {/* Additional decorative elements */}
        <div className="absolute top-20 right-40 w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' } as React.CSSProperties} />
        <div className="absolute top-32 right-60 w-3 h-3 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '1s' } as React.CSSProperties} />
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' } as React.CSSProperties} />
        <div className="absolute bottom-60 left-40 w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '2s' } as React.CSSProperties} />

        {/* Floating animation elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-orange-300 rounded-full opacity-60 animate-ping" style={{ animationDelay: '3s' } as React.CSSProperties} />
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-amber-400 rounded-full opacity-60 animate-ping" style={{ animationDelay: '4s' } as React.CSSProperties} />

        <div className='relative z-10 w-full mx-auto md:container h-full min-h-screen flex flex-col gap-10 items-center py-10'>
          {/* Header Section */}
          <div className='w-full md:w-4/5 lg:w-3/4 flex flex-col gap-8 px-5 md:px-2 text-center'>
            <div className='flex flex-col gap-5'>
              <h1 className='text-3xl md:text-4xl font-bold text-gray-900'>Get in Touch</h1>
              <p className='text-lg md:text-xl text-gray-600 max-w-2xl mx-auto'>
                {`We'd`} love to hear from you! Whether you have questions about our sustainable fashion,
                need styling advice, or want to share feedback, {`we're`} here to help.
              </p>

              {/* Decorative element */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-600 blur-lg opacity-30 animate-pulse" />
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                    <Heart className="w-8 h-8 mx-auto text-orange-500" />
                    <p className="mt-2 text-sm font-medium text-gray-800">We Care About You</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className='w-full md:w-4/5 lg:w-3/4 grid md:grid-cols-2 gap-12 px-5 md:px-2'>

            {/* Contact Information */}
            <div
              className='flex flex-col gap-8'>
              <div>
                <h2 className='text-2xl font-bold text-gray-900 mb-6'>Contact Information</h2>
                <div className='space-y-6'>

                  {/* Email */}
                  <div className='flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300'>
                    <div className='w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0'>
                      <Mail className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-gray-900 mb-1'>Email Us</h3>
                      <div className='text-gray-600 space-y-1'>
                        <p><a href="mailto:hello@melu-clothes-shop.com" className='text-orange-600 hover:text-orange-700 underline'>hello@melu-clothes-shop.com</a></p>
                        <p><a href="mailto:support@melu-clothes-shop.com" className='text-orange-600 hover:text-orange-700 underline'>support@melu-clothes-shop.com</a></p>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className='flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300'>
                    <div className='w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0'>
                      <Phone className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-gray-900 mb-1'>Call Us</h3>
                      <div className='text-gray-600 space-y-1'>
                        <p>Customer Service: <a href="tel:+251936657001" className='text-orange-600 font-medium'>+2519 3665 7001</a></p>
                        <p>Orders & Returns: <a href="tel:+251913778245" className='text-orange-600 font-medium'>+2519 1377 8245</a></p>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div
                    id="visit-us"
                    className='flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300'>
                    <div className='w-12 h-12 bg-gradient-to-br from-red-400 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0'>
                      <MapPin className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-gray-900 mb-1'>Visit Our Store</h3>
                      <div className='text-gray-600'>
                        <button
                          className='flex flex-row items-center justify-start gap-1 cursor-pointer hover:underline hover:text-orange-600'
                          onClick={() => {
                            window.open("https://maps.app.goo.gl/XZiS5s23adFD4UvZ7");
                          }}>
                          Open on Map <ExternalLink className='w-4 h-4' />
                        </button>
                        <p>Jackross Road, Beside Awash Bank</p>
                        <p>Addis Ababa, Ethiopia</p>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className='flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300'>
                    <div className='w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0'>
                      <Clock className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-gray-900 mb-1'>Business Hours</h3>
                      <div className='text-gray-600 space-y-1'>
                        <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                        <p>Sunday: 6:00 AM - 8:00 PM</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className='flex flex-col gap-8'>
              <div>
                <h2 className='text-2xl font-bold text-gray-900 mb-6'>Send Us a Message</h2>

                <div className='space-y-6'>
                  <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                      <label htmlFor="name" className='block text-sm font-medium text-gray-700 mb-2'>Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300'
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-2'>Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300'
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className='block text-sm font-medium text-gray-700 mb-2'>Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className='w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300'
                    >
                      <option value="">Select a subject</option>
                      <option value="order-inquiry">Order Inquiry</option>
                      <option value="product-question">Product Question</option>
                      <option value="return-exchange">Return/Exchange</option>
                      <option value="styling-advice">Styling Advice</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className='block text-sm font-medium text-gray-700 mb-2'>Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className='w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none'
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className='w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer'
                  >
                    <Send className='w-5 h-5' />
                    Send Message
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* FAQ Section */}
          <div
            id='faq'
            className='w-full md:w-4/5 lg:w-3/4 px-5 md:px-2 mt-12'>
            <div className='bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg'>
              <h2 className='text-2xl font-bold text-gray-900 mb-6 text-center'>Quick Answers</h2>
              <div className='grid md:grid-cols-2 gap-6 text-sm'>
                <div>
                  <h3 className='font-semibold text-gray-900 mb-2'>📦 Order & Shipping</h3>
                  <p className='text-gray-600'>Most orders ship within 1-2 business days. Free shipping on orders.</p>
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900 mb-2'>↩️ Returns & Exchanges</h3>
                  <p className='text-gray-600'>We {`don't`} accept returns, only exchanges if it is in a perfect condition</p>
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900 mb-2'>📏 Size Guide</h3>
                  <p className='text-gray-600'>Check our detailed size guide on each product page for the perfect fit.</p>
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900 mb-2'>🌱 Sustainability</h3>
                  <p className='text-gray-600'>All our pieces are ethically made with sustainable materials and practices.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Response Time Notice */}
          <div className='text-center text-gray-500 text-sm px-5'>
            <p>We typically respond to all inquiries within 24 hours during business days.</p>
          </div>

        </div>
      </div>
    </DefaultLayout>
  );
}