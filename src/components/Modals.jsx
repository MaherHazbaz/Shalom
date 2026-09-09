import React, { useState } from 'react';
import { X, CheckCircle, Send, Play, Heart, Sparkles } from 'lucide-react';
import { CHURCH_INFO } from '../data/churchInfo';

export function PlanVisitModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceDate: '',
    serviceTime: '9:00 AM',
    adultsCount: '1',
    hasKids: false,
    needsHost: true
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gold-500/30 overflow-hidden">
        {/* Header */}
        <div className="bg-slate-50 text-slate-900 p-6 relative border-b border-slate-200">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-gold-500/10 text-gold-800 border border-gold-500/30 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            We Look Forward To Welcoming You
          </div>
          <h3 className="text-2xl font-serif font-bold text-slate-900">Plan Your Visit</h3>
          <p className="text-slate-600 text-sm mt-1">
            Let us know you're coming and our welcoming team will be ready to greet you!
          </p>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-serif font-bold text-slate-900 mb-2">We Can't Wait To Meet You!</h4>
              <p className="text-slate-600 mb-6 text-sm">
                Thank you, <strong className="text-slate-900">{formData.name}</strong>. A member of our welcoming team will reach out shortly to ensure your visit is comfortable and blessed.
              </p>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs text-slate-700 space-y-2 mb-6">
                <p><strong>Service Selected:</strong> {formData.serviceTime} ({formData.serviceDate || 'Upcoming Sunday'})</p>
                <p><strong>Location:</strong> {CHURCH_INFO.services[0].location}</p>
                <p><strong>Questions? Call:</strong> <a href={`tel:${CHURCH_INFO.phones[0].tel}`} className="text-gold-700 font-bold underline">{CHURCH_INFO.phones[0].display}</a></p>
              </div>
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full text-sm transition-all shadow-sm"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 7708263471"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Which Service? *</label>
                  <select
                    value={formData.serviceTime}
                    onChange={(e) => setFormData({ ...formData, serviceTime: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:bg-white"
                  >
                    <option value="Sunday 9:00 AM">Sunday Morning — 9:00 AM</option>
                    <option value="Sunday 11:00 AM">Sunday Divine Service — 11:00 AM</option>
                    <option value="Wednesday 7:00 PM">Wednesday Bible Study — 7:00 PM</option>
                    <option value="Friday 7:00 PM">Friday Prayer Meeting — 7:00 PM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    value={formData.serviceDate}
                    onChange={(e) => setFormData({ ...formData, serviceDate: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:bg-white"
                  />
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={formData.hasKids}
                    onChange={(e) => setFormData({ ...formData, hasKids: e.target.checked })}
                    className="w-4 h-4 text-gold-600 rounded border-slate-300 focus:ring-gold-500"
                  />
                  <span>I am bringing children (We will reserve kids check-in)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={formData.needsHost}
                    onChange={(e) => setFormData({ ...formData, needsHost: e.target.checked })}
                    className="w-4 h-4 text-gold-600 rounded border-slate-300 focus:ring-gold-500"
                  />
                  <span>I'd love a host to meet me at the entrance</span>
                </label>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-white font-bold rounded-xl shadow-md transition-all text-sm uppercase tracking-wider"
                >
                  Confirm Visit Plan
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export function PrayerRequestModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    isConfidential: true,
    request: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gold-500/30 overflow-hidden">
        <div className="bg-slate-50 text-slate-900 p-6 relative border-b border-slate-200">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-gold-500/10 text-gold-800 border border-gold-500/30 mb-2">
            <Heart className="w-3.5 h-3.5 fill-gold-500 text-gold-600" />
            We Believe In The Power Of Prayer
          </div>
          <h3 className="text-2xl font-serif font-bold text-slate-900">Submit a Prayer Request</h3>
          <p className="text-slate-600 text-sm mt-1">
            Our pastoral team and 24/7 intercessors will stand with you in faith.
          </p>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 fill-gold-500" />
              </div>
              <h4 className="text-xl font-serif font-bold text-slate-900 mb-2">Your Prayer Has Been Received</h4>
              <p className="text-slate-600 mb-4 text-sm">
                "The prayer of a righteous person is powerful and effective." — James 5:16
              </p>
              <p className="text-slate-500 text-xs mb-6">
                Pastor Philip. M. Murugan and the JSM Intercessory Prayer Team are lifting your petition before the Lord.
              </p>
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full text-sm transition-all shadow-sm"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Your Name (or Anonymous)</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Leave blank for anonymous"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Contact Phone (Optional if you'd like a pastoral call)</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 7708263471"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Your Prayer Request *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.request}
                  onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                  placeholder="Share what is on your heart (Healing, family, breakthrough, salvation, peace)..."
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                ></textarea>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="confidential"
                  checked={formData.isConfidential}
                  onChange={(e) => setFormData({ ...formData, isConfidential: e.target.checked })}
                  className="w-4 h-4 text-gold-600 rounded border-slate-300 focus:ring-gold-500"
                />
                <label htmlFor="confidential" className="text-xs text-slate-600 cursor-pointer font-medium">
                  Keep strictly confidential with Pastoral &amp; Intercession team
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 text-white font-bold rounded-xl shadow-md transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Prayer Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export function SermonPlayerModal({ sermon, isOpen, onClose }) {
  if (!isOpen || !sermon) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl bg-white text-slate-900 rounded-3xl shadow-2xl border border-gold-500/30 overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200 bg-slate-50">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-gold-700">{sermon.category}</span>
            <h3 className="text-lg font-serif font-bold text-slate-900 line-clamp-1">{sermon.title}</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Window */}
        <div className="relative aspect-video bg-slate-950 flex items-center justify-center">
          <img 
            src={sermon.image} 
            alt={sermon.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="relative z-10 text-center p-6 text-white">
            <div className="w-16 h-16 rounded-full bg-gold-500 text-white flex items-center justify-center mx-auto mb-4 shadow-xl hover:scale-110 transition-transform cursor-pointer">
              <Play className="w-8 h-8 fill-white ml-1" />
            </div>
            <p className="text-white font-serif text-lg font-bold">{sermon.title}</p>
            <p className="text-slate-200 text-sm mt-1">{sermon.speaker} &bull; {sermon.date}</p>
            <p className="text-xs text-gold-300 mt-2 font-mono font-semibold">Scripture: {sermon.scripture}</p>
          </div>
        </div>

        {/* Notes & info */}
        <div className="p-6 bg-white">
          <p className="text-slate-600 text-sm leading-relaxed mb-4">{sermon.description}</p>
          {sermon.keyPoints && (
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gold-700 mb-2">Key Message Insights</h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {sermon.keyPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-gold-600 font-bold">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function EventRegisterModal({ event, isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', attendees: '1' });

  if (!isOpen || !event) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gold-500/30 overflow-hidden">
        <div className="bg-slate-50 text-slate-900 p-6 relative border-b border-slate-200">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-xs font-bold uppercase tracking-wider text-gold-700">{event.category}</span>
          <h3 className="text-xl font-serif font-bold text-slate-900 mt-1">{event.title}</h3>
          <p className="text-slate-500 text-xs mt-1">Date: {event.date.fullDate} &bull; {event.time}</p>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-serif font-bold text-slate-900 mb-2">Registration Confirmed!</h4>
              <p className="text-slate-600 text-sm mb-4">
                We have registered <strong>{formData.name}</strong> for {event.title}.
              </p>
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="px-6 py-2 bg-slate-900 text-white font-bold rounded-full text-xs uppercase shadow-sm"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 7708263471"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Number of Attendees</label>
                <select
                  value={formData.attendees}
                  onChange={(e) => setFormData({ ...formData, attendees: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3-4 Family Members</option>
                  <option value="5+">5+ Group</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 text-white font-bold rounded-xl shadow-md transition-all text-sm uppercase tracking-wider"
                >
                  Reserve Your Spot
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
