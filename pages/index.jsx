// Home.jsx - Complete Implementation
import React, { useState, useEffect } from 'react';
import {
  Menu, X, ChevronDown, ChevronRight, Phone, Mail, MapPin,
  Facebook, Heart, Users, BookOpen, Heart as HeartIcon,
  Calendar, TrendingUp, Award, Target, Eye, Lightbulb,
  ArrowRight, Download, Send, UserPlus, DollarSign
} from 'lucide-react';
import HeroSlider from '@/components/HeroSlider';
import Footer from '@/components/Footer/Footer';

const Home = () => { 

  // Stats Data
  const stats = [
    { label: 'Children Supported', value: 500, suffix: '+', icon: Users, color: 'bg-blue-500' },
    { label: 'Women Empowered', value: 200, suffix: '+', icon: HeartIcon, color: 'bg-pink-500' },
    { label: 'Villagers Reached', value: 1000, suffix: '+', icon: Users, color: 'bg-green-500' },
    { label: 'Active Volunteers', value: 100, suffix: '+', icon: UserPlus, color: 'bg-purple-500' },
  ];

  // Focus Areas Data
  const focusAreas = [
    {
      id: 'education',
      title: 'Education',
      titleHindi: 'शिक्षा',
      icon: '📚',
      description: 'Transforming education through quality improvement, digital learning, and student engagement',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'health',
      title: 'Health & Hygiene',
      titleHindi: 'स्वास्थ्य और स्वच्छता',
      icon: '🏥',
      description: 'Promoting healthcare access, hygiene awareness, and preventive health measures',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'women-empowerment',
      title: 'Women Empowerment',
      titleHindi: 'महिला सशक्तिकरण',
      icon: '👩‍🏫',
      description: 'Empowering women through safety, skill development, and inclusive participation',
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 'agriculture',
      title: 'Agriculture',
      titleHindi: 'कृषि',
      icon: '🌾',
      description: 'Supporting farmers with modern techniques and sustainable practices',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'digitalization',
      title: 'Digitalization',
      titleHindi: 'डिजिटलीकरण',
      icon: '💻',
      description: 'Creating digital infrastructure and ensuring transparent governance',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 'cultural-revival',
      title: 'Cultural Revival',
      titleHindi: 'सांस्कृतिक पुनरुत्थान',
      icon: '🎭',
      description: 'Reviving folk arts, traditional performances, and cultural institutions',
      color: 'from-purple-500 to-purple-600'
    },
  ];

  // Projects Data
  const ongoingProjects = [
    {
      id: 1,
      title: 'Main Gate Beautification Project',
      description: 'Construction of grand entrance gate (स्वागत द्वार) symbolizing village pride and identity.',
      budget: '₹2.42 lakh',
      progress: 60,
      status: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
    },
    {
      id: 2,
      title: 'Educational Quality Improvement',
      description: 'Digital library setup, teacher training, and after-school tuition programs.',
      budget: 'Multi-phase',
      progress: 35,
      status: 'Planning',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80',
    },
    {
      id: 3,
      title: 'Cultural Revival Programs',
      description: 'Revival of Rastriya Natya Kala Parishad and traditional folk arts.',
      budget: 'Community funded',
      progress: 40,
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&q=80',
    },
  ];

  const completedProjects = [
    {
      id: 1,
      title: 'Road Repair & Drainage Cleaning',
      description: 'Major community-driven infrastructure project eliminating waterlogging.',
      budget: '₹1.51 lakh',
      completionDate: 'August 2025',
      impact: '500+ families benefited',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80',
    },
    {
      id: 2,
      title: 'Sanitation & Awareness Campaigns',
      description: 'Village-wide cleanliness drives and social awareness programs.',
      completionDate: '2025',
      impact: 'Improved village hygiene',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80',
    },
  ];

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

 

  // About Section
  const AboutSection = () => (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision & Mission */}
        <div id="vision-mission" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vision & Mission</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our roadmap for transforming Dheodha into a model village
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To transform Dheodha into a model village that blends cultural heritage with modern development—ensuring quality education, sustainable infrastructure, economic empowerment, and a safe, inclusive environment for all.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-500 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To promote education, health, cleanliness, employment, and social harmony for the overall development of the village through transparent, community-driven initiatives.
              </p>
            </div>
          </div>
        </div>

        {/* Founding Members */}
        <div id="founding-members" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Founding Members</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the visionaries behind Dheodha Vikas Samiti
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Rajesh Kumar', role: 'President (अध्यक्ष)', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
              { name: 'Chandan Kumar', role: 'Vice President (उपाध्यक्ष)', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
              { name: 'Mitendra Kumar', role: 'Secretary (सचिव)', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80' },
              { name: 'Devkant Mishra', role: 'Treasurer (कोषाध्यक्ष)', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80' },
              { name: 'Brajesh Kumar', role: 'Vice Secretary (उप-सचिव)', image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80' },
              { name: 'Rishav Mishra', role: 'Website & Tech Manager', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src={member.image} alt={member.name} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Focus Areas */}
        <div id="focus-areas">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Focus Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Strategic pillars driving Dheodha's transformation
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area) => (
              <div key={area.id} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-6 border border-gray-100 hover:border-green-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{area.titleHindi}</p>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // Projects Section
  const ProjectsSection = () => (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ongoing Projects */}
        <div id="ongoing-projects" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ongoing Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Current initiatives transforming Dheodha
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ongoingProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {project.status}
                    </span>
                    <span className="text-green-600 font-bold">{project.budget}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Progress</span>
                      <span className="font-semibold">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Projects */}
        <div id="completed-projects" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Completed Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Milestones achieved through community effort
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {completedProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Award className="w-5 h-5 text-green-600" />
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                      Completed
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    {project.budget && (
                      <div className="flex justify-between">
                        <span>Budget:</span>
                        <span className="font-semibold">{project.budget}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Completed:</span>
                      <span className="font-semibold">{project.completionDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Impact:</span>
                      <span className="font-semibold text-green-600">{project.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Reports */}
        <div id="impact-reports" className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Impact Reports</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transparent reporting of our community development work
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}{stat.suffix}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="#"
              className="inline-flex items-center space-x-2 bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              <Download className="w-5 h-5" />
              <span>Download Detailed Report</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  // Community Programs Section
  const ProgramsSection = () => (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Community Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive initiatives addressing education, health, empowerment, and cultural revival
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Education Program */}
          <div id="education" className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Education Programs</h3>
            <p className="text-sm text-gray-600 mb-4">शैक्षिक कार्यक्रम</p>
            <p className="text-gray-700 mb-6">
              Improving school quality, digital library setup, after-school tuition, and student awareness campaigns to transform education in Dheodha.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start space-x-2 text-gray-700">
                <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Digital library with e-learning resources</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-700">
                <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Free after-school tuition support</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-700">
                <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Teacher training and engagement</span>
              </li>
            </ul>
            <div className="text-sm font-semibold text-blue-600">
              Beneficiaries: 500+ students
            </div>
          </div>

          {/* Health Program */}
          <div id="health" className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border border-red-100">
            <div className="text-5xl mb-4">🏥</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Health & Hygiene</h3>
            <p className="text-sm text-gray-600 mb-4">स्वास्थ्य और स्वच्छता</p>
            <p className="text-gray-700 mb-6">
              Regular health camps, hygiene awareness, nutrition education, and advocacy for healthcare infrastructure in Dheodha.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start space-x-2 text-gray-700">
                <ChevronRight className="w-5 h-5 text-red-600 mt-0.5" />
                <span>Quarterly health camps with free check-ups</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-700">
                <ChevronRight className="w-5 h-5 text-red-600 mt-0.5" />
                <span>Hygiene and sanitation awareness</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-700">
                <ChevronRight className="w-5 h-5 text-red-600 mt-0.5" />
                <span>Maternal and child health focus</span>
              </li>
            </ul>
            <div className="text-sm font-semibold text-red-600">
              Beneficiaries: 1,000+ villagers
            </div>
          </div>

          {/* Women Empowerment */}
          <div id="women-empowerment" className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-100">
            <div className="text-5xl mb-4">👩‍🏫</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Women Empowerment</h3>
            <p className="text-sm text-gray-600 mb-4">महिला सशक्तिकरण</p>
            <p className="text-gray-700 mb-6">
              Skill development, safety initiatives, self-help groups, and leadership training empowering women in Dheodha.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start space-x-2 text-gray-700">
                <ChevronRight className="w-5 h-5 text-pink-600 mt-0.5" />
                <span>Vocational training in sewing and handicrafts</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-700">
                <ChevronRight className="w-5 h-5 text-pink-600 mt-0.5" />
                <span>Self-help group formation and microfinance</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-700">
                <ChevronRight className="w-5 h-5 text-pink-600 mt-0.5" />
                <span>Safety awareness and leadership development</span>
              </li>
            </ul>
            <div className="text-sm font-semibold text-pink-600">
              Beneficiaries: 200+ women
            </div>
          </div>

          {/* Cultural Revival */}
          <div id="cultural-revival" className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100">
            <div className="text-5xl mb-4">🎭</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Cultural Revival</h3>
            <p className="text-sm text-gray-600 mb-4">सांस्कृतिक पुनरुत्थान</p>
            <p className="text-gray-700 mb-6">
              Reviving Rastriya Natya Kala Parishad, traditional folk arts, and organizing cultural festivals celebrating Dheodha's rich heritage.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start space-x-2 text-gray-700">
                <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5" />
                <span>Revival of Rastriya Natya Kala Parishad</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-700">
                <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5" />
                <span>Durga Puja "डोमरा-डुमरी का नाच" performances</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-700">
                <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5" />
                <span>Youth training in traditional arts</span>
              </li>
            </ul>
            <div className="text-sm font-semibold text-purple-600">
              Beneficiaries: Entire village
            </div>
          </div>
        </div>

        {/* Volunteer Opportunities */}
        <div id="volunteer" className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
          <div className="text-center mb-8">
            <UserPlus className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Volunteer Opportunities</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join 100+ active volunteers making a difference in Dheodha
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Teaching & Tutoring</h4>
              <p className="text-sm text-gray-600">Help students with after-school tuition and digital literacy</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Community Service</h4>
              <p className="text-sm text-gray-600">Participate in cleanliness drives and infrastructure projects</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Lightbulb className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Skills & Expertise</h4>
              <p className="text-sm text-gray-600">Share professional skills in healthcare, tech, or business</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#volunteer-registration"
              className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-all"
            >
              <span>Register as Volunteer</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );

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

          {/* Donation Options */}
          <div id="donation" className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border-2 border-green-300">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Donate</h3>
            <p className="text-gray-600 text-center mb-6">
              Support village development with financial contributions. Every rupee counts!
            </p>
            <div className="space-y-3 mb-6">
              <div className="bg-green-50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-green-600">UPI Payment</div>
                <div className="text-sm text-gray-600">Quick & Secure</div>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-green-600">Bank Transfer</div>
                <div className="text-sm text-gray-600">Direct Deposit</div>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
              Donate Now
            </button>
          </div>

          {/* Partnership Opportunities */}
          <div id="partnership" className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Partner With Us</h3>
            <p className="text-gray-600 text-center mb-6">
              Corporate CSR, NGOs, and organizations—let's collaborate for village development.
            </p>
            <ul className="space-y-2 mb-6 text-sm text-gray-700">
              <li className="flex items-start space-x-2">
                <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5" />
                <span>CSR project opportunities</span>
              </li>
              <li className="flex items-start space-x-2">
                <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5" />
                <span>Technical collaboration</span>
              </li>
              <li className="flex items-start space-x-2">
                <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5" />
                <span>Resource sharing</span>
              </li>
            </ul>
            <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Contact Us
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
