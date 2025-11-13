// pages/About.jsx - Main About Page
import React, { useState } from 'react';
import Hero from '@/components/Hero';
import { useLanguage } from '../lib/LanguageContext';
import AboutHero from '../components/about/AboutHero';
import AboutStory from '../components/about/AboutStory';
import AboutVisionMission from '../components/about/AboutVisionMission';
import AboutFeatures from '../components/about/AboutFeatures';
import AboutStructure from '../components/about/AboutStructure';
import AboutCTA from '../components/about/AboutCTA';


const About = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('story');

  return (
    <>
      <Hero
        title={language === 'hi' ? 'हमारे बारे में' : 'About Us'}
        subtitle={
          language === 'hi'
            ? 'धेवधा विकास समिति - गांव के विकास के लिए समर्पित एक गैर-राजनीतिक सामाजिक संगठन'
            : 'Dheodha Vikas Samiti - A non-political social organization dedicated to village development'
        }
        backgroundImage="https://res.cloudinary.com/dusalynec/image/upload/v1762001895/IMG_2626_jrqyt0.jpg"
      />

      <div className="relative bg-white overflow-hidden">
        {/* Hero Section with Stats & Places */}
        <AboutHero />

        {/* Content Tabs Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { id: 'story', label: language === 'hi' ? 'हमारी कहानी' : 'Our Story' },
                { id: 'vision', label: language === 'hi' ? 'विज़न और मिशन' : 'Vision & Mission' },
                { id: 'features', label: language === 'hi' ? 'हमारी विशेषताएँ' : 'Our Features' },
                { id: 'structure', label: language === 'hi' ? 'संगठनात्मक संरचना' : 'Structure' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-4 rounded-full font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'story' && <AboutStory />}
            {activeTab === 'vision' && <AboutVisionMission />}
            {activeTab === 'features' && <AboutFeatures />}
            {activeTab === 'structure' && <AboutStructure />}
          </div>
        </section>

      

        {/* CTA Section */}
        <AboutCTA />
      </div>
    </>
  );
};

export default About;
