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
import NewsSection from './home/news';


const Home = () => {

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
    <div className=" bg-white">
      <HeroSlider />
      <AboutSection />
      <ProjectsSection />
      {/* <ProgramsSection /> */}
      <GallerySection />
      <NewsSection />
      {/* <JoinSection /> */}
    </div>
  );
};

export default Home;
