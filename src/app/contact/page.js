'use client'

import { useState } from 'react'
import Button from '@/components/Button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    alert('Thank you for contacting us! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                >
                  <option value="">Select a subject</option>
                  <option value="course-inquiry">Course Inquiry</option>
                  <option value="career-guidance">Career Guidance</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="general">General Question</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <Button type="submit" variant="primary" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📧</div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">contact@iftiverse.com</p>
                    <p className="text-gray-600">support@iftiverse.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 765-4321</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-gray-600">
                      123 Learning Street<br />
                      Tech City, TC 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl">⏰</div>
                  <div>
                    <h3 className="font-semibold mb-1">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
              <p className="text-gray-600 mb-4">
                Stay connected with us on social media for updates, tips, and community discussions.
              </p>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                >
                  <span className="text-xl">f</span>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                >
                  <span className="text-xl">𝕏</span>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                >
                  <span className="text-xl">in</span>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                >
                  <span className="text-xl">▶</span>
                </a>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-accent/5 p-8 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Quick Help</h2>
              <p className="text-gray-600 mb-4">
                Looking for immediate answers? Check out our frequently asked questions.
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-accent hover:underline">→ How do I enroll in a course?</a>
                </li>
                <li>
                  <a href="#" className="text-accent hover:underline">→ What payment methods do you accept?</a>
                </li>
                <li>
                  <a href="#" className="text-accent hover:underline">→ Can I get a refund?</a>
                </li>
                <li>
                  <a href="#" className="text-accent hover:underline">→ How to access course materials?</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
