import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello! I'm ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/251911234567?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-white to-amber-50 py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Get In Touch
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Have questions or ready to order? We're here to help you find the perfect traditional attire
          </p>
          <div className="mx-auto h-1 w-24 bg-amber-500"></div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-gray-900">WhatsApp</h4>
                    <a
                      href="https://wa.me/251910796861"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-gray-600 hover:text-green-600 transition-colors"
                    >
                      +251910796861
                    </a>
                    <a
                      href="https://wa.me/251911234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-gray-600 hover:text-green-600 transition-colors"
                    >
                      +251943312608
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-100">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-gray-900">Phone</h4>
                    <a
                      href="tel:+251910796861"
                      className="block text-gray-600 hover:text-amber-600 transition-colors"
                    >
                      +251910796861
                    </a>
                    <a
                      href="tel:+251911234567"
                      className="block text-gray-600 hover:text-amber-600 transition-colors"
                    >
                      +251943312608
                    </a>
                    <p className="mt-1 text-sm text-gray-500">Call us anytime</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-gray-900">Email</h4>
                    <a
                      href="mailto:info@solinahabesha.com"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      info@solinahabesha.com
                    </a>
                    <p className="mt-1 text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Shiromeda, Addis Ababa</p>
                    <p className="text-gray-600">Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <div className="aspect-video w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.8665558!2d38.78!3d9.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMzYuMCJOIDM4wrA0Nic0OC4wIkU!5e0!3m2!1sen!2set!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Solina Habesha Location"
                ></iframe>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Send Us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block font-semibold text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
       
                    className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition-colors focus:border-amber-500 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block font-semibold text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition-colors focus:border-amber-500 focus:outline-none"
                    placeholder="+251 911 234 567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block font-semibold text-gray-700">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition-colors focus:border-amber-500 focus:outline-none"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-amber-600 hover:shadow-xl"
                >
                  <Send className="h-5 w-5" />
                  Send Message via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
