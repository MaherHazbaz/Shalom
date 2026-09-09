import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle
} from 'lucide-react';
import { CHURCH_INFO } from '../data/churchInfo';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact({ onOpenPrayerRequest }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full Name is required.';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required.';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Please enter a valid email address.';
    if (!formData.message.trim()) errs.message = 'Please provide your message.';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <div className="bg-white">
      
      {/* Page Header (Bright Pleasant Theme) */}
      <section className="relative py-24 md:py-32 bg-slate-50 text-slate-900 overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1920&auto=format&fit=crop"
            alt="Contact Jehova Shalom"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-slate-50"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="fade-down">
            <div className="w-16 h-16 rounded-full p-1 bg-white shadow-md border border-gold-500/30 mx-auto mb-4">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain rounded-full" />
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-gold-500/10 text-gold-800 border border-gold-500/30 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              Get In Touch
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-slate-900 tracking-tight leading-tight mb-4">
              We'd Love to Hear From You
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Reach out to our ministry team for visit inquiries, pastoral counsel, international missions, or prayer.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: Contact Information Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <ScrollReveal animation="slide-right">
                
                <div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-3">
                    Connect with Leadership
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Our leadership and pastoral prayer team are here to serve and guide you in your spiritual walk.
                  </p>
                </div>

                {/* Founder Citation */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-gold-500/30 space-y-1.5 shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-700 block">Founder &amp; General Secretary</span>
                  <p className="font-serif font-bold text-slate-900 text-base">{CHURCH_INFO.founder.name}</p>
                  <p className="text-xs text-gold-700 font-sans font-bold">{CHURCH_INFO.founder.qualifications}</p>
                  <p className="text-xs text-slate-500">{CHURCH_INFO.founder.roleDisplay}</p>
                </div>

                {/* Direct Telephone Numbers */}
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Official Contact Numbers</span>
                  
                  {CHURCH_INFO.phones.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone.tel}`}
                      className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200 hover:border-gold-500 hover:shadow-md transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gold-500/15 text-gold-700 group-hover:bg-gold-600 group-hover:text-white flex items-center justify-center font-bold transition-colors">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-500 block font-medium">{phone.label}</span>
                        <span className="text-slate-900 font-serif font-bold text-base sm:text-lg group-hover:text-gold-700">{phone.display}</span>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Location & Times */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3 text-sm text-slate-700">
                    <MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Church Location:</strong>
                      <span className="text-slate-600">{CHURCH_INFO.contact.address}</span>
                      <p className="text-xs text-slate-400 mt-0.5">{CHURCH_INFO.contact.addressNote}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-slate-700">
                    <Clock className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Sunday Service Times:</strong>
                      <span className="text-slate-600">9:00 AM &amp; 11:00 AM Worship</span>
                      <p className="text-xs text-slate-400 mt-0.5">Wed 7:00 PM (Bible Study) &bull; Fri 7:00 PM (Prayer)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-slate-700">
                    <Mail className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Email Inquiries:</strong>
                      <span className="text-slate-600 font-mono text-xs">{CHURCH_INFO.contact.email}</span>
                    </div>
                  </div>
                </div>

                {/* Prayer Request Banner (Bright Card) */}
                <div className="p-5 bg-gradient-to-r from-gold-50 to-white rounded-2xl border border-gold-500/30 flex items-center justify-between gap-4 shadow-sm">
                  <div>
                    <span className="text-gold-800 text-xs font-bold uppercase tracking-wider block">Have An Urgent Need?</span>
                    <p className="text-sm font-serif font-bold text-slate-900">Submit a 24/7 Prayer Request</p>
                  </div>
                  <button
                    onClick={onOpenPrayerRequest}
                    className="px-4 py-2 bg-gold-600 hover:bg-gold-500 text-white font-bold text-xs uppercase rounded-lg shadow-sm shrink-0"
                  >
                    Pray with Us
                  </button>
                </div>

              </ScrollReveal>
            </div>

            {/* Right: Interactive Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ScrollReveal animation="slide-left">
                <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-md">
                  
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-gold-700 block">Direct Message</span>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mt-1">Send Us a Message</h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1">
                      Fill in your details below and our team will get back to you promptly.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="text-center py-10 bg-white rounded-2xl border border-green-200 p-6 shadow-sm">
                      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h4 className="text-2xl font-serif font-bold text-slate-900 mb-2">Message Received!</h4>
                      <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                        Thank you for reaching out to <strong>Jehova Shalom International Missions</strong>. Our team will review your message and reply shortly.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase rounded-full"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Full Name"
                          className={`w-full px-4 py-3 bg-white border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all ${
                            errors.name ? 'border-red-500' : 'border-slate-200'
                          }`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Phone & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="e.g. 7708263471"
                            className={`w-full px-4 py-3 bg-white border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all ${
                              errors.phone ? 'border-red-500' : 'border-slate-200'
                            }`}
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {errors.phone}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="you@example.com"
                            className={`w-full px-4 py-3 bg-white border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all ${
                              errors.email ? 'border-red-500' : 'border-slate-200'
                            }`}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Subject / Inquiry Type
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                        >
                          <option value="">Select a topic...</option>
                          <option value="First-Time Visit Inquiry">First-Time Visit Inquiry</option>
                          <option value="Pastoral Guidance">Pastoral Guidance &amp; Meeting</option>
                          <option value="International Missions Partnership">International Missions Partnership</option>
                          <option value="Ministry Volunteer">Ministry Volunteering</option>
                          <option value="General Question">General Question</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Your Message *
                        </label>
                        <textarea
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="How can our church family help or pray for you today?"
                          className={`w-full px-4 py-3 bg-white border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all ${
                            errors.message ? 'border-red-500' : 'border-slate-200'
                          }`}
                        ></textarea>
                        {errors.message && (
                          <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.message}
                          </p>
                        )}
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 hover:from-gold-500 text-white font-bold rounded-xl text-sm uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <span>Sending...</span>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              <span>Send Message</span>
                            </>
                          )}
                        </button>
                      </div>

                    </form>
                  )}

                </div>
              </ScrollReveal>
            </div>

          </div>

        </div>
      </section>

      {/* Google Maps Location Placeholder Frame */}
      <section className="py-12 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="font-serif font-bold text-xl text-slate-900">Map &amp; Directions</h3>
                <p className="text-xs text-slate-500">{CHURCH_INFO.contact.address}</p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Maruthi+Nagar+Near+Theivam+Mordern+RiceMill+Sillampatti+Usilampatti+Madurai+625532"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-900 hover:bg-gold-600 text-white font-bold text-xs uppercase rounded-xl transition-colors shadow-sm"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="relative aspect-[21/9] bg-slate-100 rounded-2xl overflow-hidden flex items-center justify-center text-center p-6 border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
                alt="Map Background"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="relative z-10 space-y-2">
                <div className="w-12 h-12 rounded-full bg-gold-500 text-white flex items-center justify-center mx-auto font-bold shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="text-slate-900 font-serif font-bold text-lg">{CHURCH_INFO.name}</h4>
                <p className="text-slate-600 text-xs">{CHURCH_INFO.contact.address}</p>
                <span className="inline-block text-[11px] text-gold-700 font-bold">Maruthi Nagar, Near Theivam Mordern RiceMill, Sillampatti, Usilampatti, Madurai 625532</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
