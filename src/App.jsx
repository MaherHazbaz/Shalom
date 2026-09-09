import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { 
  PlanVisitModal, 
  PrayerRequestModal, 
  SermonPlayerModal, 
  EventRegisterModal 
} from './components/Modals';

import Home from './pages/Home';
import About from './pages/About';
import Ministries from './pages/Ministries';
import Sermons from './pages/Sermons';
import Events from './pages/Events';
import Missions from './pages/Missions';
import Contact from './pages/Contact';

// ScrollToTop helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function MainLayout() {
  const [planVisitOpen, setPlanVisitOpen] = useState(false);
  const [prayerRequestOpen, setPrayerRequestOpen] = useState(false);
  const [selectedSermon, setSelectedSermon] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-navy-900 selection:bg-gold-500/30 selection:text-navy-950 font-sans">
      <ScrollToTop />

      {/* Navigation */}
      <Navbar 
        onOpenPlanVisit={() => setPlanVisitOpen(true)}
        onOpenPrayerRequest={() => setPrayerRequestOpen(true)}
      />

      {/* Page Content */}
      <main className="flex-1">
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                onOpenPlanVisit={() => setPlanVisitOpen(true)}
                onOpenPrayerRequest={() => setPrayerRequestOpen(true)}
                onPlaySermon={(sermon) => setSelectedSermon(sermon)}
                onRegisterEvent={(event) => setSelectedEvent(event)}
              />
            } 
          />
          <Route 
            path="/about" 
            element={
              <About 
                onOpenPlanVisit={() => setPlanVisitOpen(true)}
                onOpenPrayerRequest={() => setPrayerRequestOpen(true)}
              />
            } 
          />
          <Route 
            path="/ministries" 
            element={
              <Ministries 
                onOpenPlanVisit={() => setPlanVisitOpen(true)}
                onOpenPrayerRequest={() => setPrayerRequestOpen(true)}
              />
            } 
          />
          <Route 
            path="/sermons" 
            element={
              <Sermons 
                onPlaySermon={(sermon) => setSelectedSermon(sermon)}
                onOpenPlanVisit={() => setPlanVisitOpen(true)}
                onOpenPrayerRequest={() => setPrayerRequestOpen(true)}
              />
            } 
          />
          <Route 
            path="/events" 
            element={
              <Events 
                onRegisterEvent={(event) => setSelectedEvent(event)}
                onOpenPlanVisit={() => setPlanVisitOpen(true)}
                onOpenPrayerRequest={() => setPrayerRequestOpen(true)}
              />
            } 
          />
          <Route 
            path="/missions" 
            element={
              <Missions 
                onOpenPlanVisit={() => setPlanVisitOpen(true)}
                onOpenPrayerRequest={() => setPrayerRequestOpen(true)}
              />
            } 
          />
          <Route 
            path="/contact" 
            element={
              <Contact 
                onOpenPrayerRequest={() => setPrayerRequestOpen(true)}
              />
            } 
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer 
        onOpenPlanVisit={() => setPlanVisitOpen(true)}
        onOpenPrayerRequest={() => setPrayerRequestOpen(true)}
      />

      {/* Global Interactive Modals */}
      <PlanVisitModal 
        isOpen={planVisitOpen} 
        onClose={() => setPlanVisitOpen(false)} 
      />

      <PrayerRequestModal 
        isOpen={prayerRequestOpen} 
        onClose={() => setPrayerRequestOpen(false)} 
      />

      <SermonPlayerModal 
        sermon={selectedSermon}
        isOpen={!!selectedSermon} 
        onClose={() => setSelectedSermon(null)} 
      />

      <EventRegisterModal 
        event={selectedEvent}
        isOpen={!!selectedEvent} 
        onClose={() => setSelectedEvent(null)} 
      />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}
