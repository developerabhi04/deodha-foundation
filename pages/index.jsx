// Home.jsx - Complete Implementation
import React from 'react';
import {
  Menu, X, ChevronDown, ChevronRight, Phone, Mail, MapPin,
  Facebook, Heart, Users, BookOpen, Heart as HeartIcon,
  Calendar, TrendingUp, Award, Target, Eye, Lightbulb,
  ArrowRight, Download, Send, UserPlus, DollarSign
} from 'lucide-react';
import HeroSlider from '@/components/HeroSlider';
import AboutSection from './home/about';
import ProjectsSection from './home/project';
import ProgramsSection from './home/program';


const Home = () => {


  // Events Data
  const upcomingEvents = [
    {
      id: 1,
      title: 'Durga Puja Cultural Program',
      date: '2025-10-20',
      location: 'Dheodha Village',
      description: 'Traditional folk drama "डोमरा-डुमरी का नाच" and cultural evening.',
    },
    {
      id: 2,
      title: 'Digital Library Inauguration',
      date: '2026-01-15',
      location: 'Dheodha Village',
      description: 'Launch of new digital library with e-learning resources.',
    },
  ];




  // Gallery Section
  const GallerySection = () => (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Moments capturing our journey of community development
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80', caption: 'Dheodha village landscape' },
            { url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80', caption: 'Education initiatives' },
            { url: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80', caption: 'Road repair project' },
            { url: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&q=80', caption: 'Cultural programs' },
            { url: 'https://images.unsplash.com/photo-1509099836639-18ba9f7b5d3d?w=600&q=80', caption: 'Women empowerment' },
            { url: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&q=80', caption: 'Health awareness' },
          ].map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <img src={item.url} alt={item.caption} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-semibold">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#gallery"
            className="inline-flex items-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-full font-semibold border-2 border-gray-300 hover:border-green-500 hover:text-green-600 transition-all"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );

  // News & Updates Section
  const NewsSection = () => (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">News & Updates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed about Dheodha's development journey
          </p>
        </div>

        {/* Announcements */}
        <div id="announcements" className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Latest Announcements</h3>
          <div className="space-y-4">
            {[
              { title: 'Main Gate Construction Progressing Well', date: 'October 14, 2025', type: 'Project Update' },
              { title: 'Digital Library Planning Phase Completed', date: 'October 10, 2025', type: 'Education' },
              { title: 'Women SHG Registration Open', date: 'October 5, 2025', type: 'Empowerment' },
            ].map((announcement, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-green-50 transition-colors border border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {announcement.type}
                      </span>
                      <span className="text-sm text-gray-500">{announcement.date}</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">{announcement.title}</h4>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Events */}
        <div id="events" className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold">{new Date(event.date).getDate()}</div>
                    <div className="text-xs">{new Date(event.date).toLocaleString('default', { month: 'short' })}</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notice Board */}
        <div id="notice-board" className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Notice Board</h3>
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-8">
            <div className="flex items-start space-x-4">
              <Download className="w-8 h-8 text-yellow-600 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Important Documents Available</h4>
                <p className="text-gray-700 mb-4">
                  Download project reports, financial statements, and meeting minutes for complete transparency.
                </p>
                <div className="space-y-2">
                  {[
                    'Main Gate Project Budget Report',
                    'Road Repair Completion Certificate',
                    'Samiti Financial Statement 2025',
                  ].map((doc, index) => (
                    <a
                      key={index}
                      href="#"
                      className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium"
                    >
                      <Download className="w-4 h-4" />
                      <span>{doc}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Reports */}
        <div id="progress-reports">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Progress Reports</h3>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">₹3.93L</div>
                <div className="text-gray-700">Total Investment</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">2</div>
                <div className="text-gray-700">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">3</div>
                <div className="text-gray-700">Ongoing Initiatives</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Join Us Section
  const JoinSection = () => (
    <section id="join" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Be part of Dheodha's transformation journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Volunteer Registration */}
          <div id="volunteer-registration" className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <UserPlus className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Volunteer</h3>
            <p className="text-gray-600 text-center mb-6">
              Join 100+ active volunteers contributing time and skills for community development.
            </p>
            <ul className="space-y-2 mb-6 text-sm text-gray-700">
              <li className="flex items-start space-x-2">
                <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Participate in community programs</span>
              </li>
              <li className="flex items-start space-x-2">
                <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Share your professional expertise</span>
              </li>
              <li className="flex items-start space-x-2">
                <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Make a lasting impact</span>
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Register Now
            </button>
          </div>


        </div>
      </div>
    </section>
  );




  return (
    <div className="min-h-screen bg-white">
      <HeroSlider />
      <AboutSection />
      <ProjectsSection />
      <ProgramsSection />
      <GallerySection />
      <NewsSection />
      <JoinSection />
    </div>
  );
};

export default Home;
