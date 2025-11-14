// pages/Places.jsx - Complete Places Listing Page
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Filter, Grid, List, ArrowRight, Map as MapIcon } from 'lucide-react';
import Link from 'next/link';
import Hero from '../components/Hero';
import { useLanguage } from '../lib/LanguageContext';

const Places = () => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Categories
  const categories = [
    { id: 'all', label: language === 'hi' ? 'सभी' : 'All', icon: '🏘️' },
    { id: 'education', label: language === 'hi' ? 'शिक्षा' : 'Education', icon: '📚' },
    { id: 'religious', label: language === 'hi' ? 'धार्मिक' : 'Religious', icon: '🛕' },
    { id: 'infrastructure', label: language === 'hi' ? 'बुनियादी ढांचा' : 'Infrastructure', icon: '🏛️' },
    { id: 'health', label: language === 'hi' ? 'स्वास्थ्य' : 'Health', icon: '🏥' },
    { id: 'community', label: language === 'hi' ? 'सामुदायिक' : 'Community', icon: '👥' }
  ];

  // All Places Data
  const allPlaces = [
    {
      id: 'agriculture-college',
      name: language === 'hi' ? 'कृषक महाविद्यालय, पकड़ी बारवां' : 'Agriculture College, Pakri Barawan',
      category: 'education',
      image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913595/Colleage5_ut0pxi.jpg',
      description: language === 'hi' 
        ? 'कृषि शिक्षा और अनुसंधान के लिए प्रमुख संस्थान'
        : 'Premier institution for agricultural education and research',
      location: language === 'hi' ? 'पकड़ी बारवां, नवादा' : 'Pakri Barawan, Nawada',
      distance: '2 km',
      established: '1995'
    },
    {
      id: 'ram-janaki-temple',
      name: language === 'hi' ? 'श्री राम जानकी ठाकुरवाड़ी' : 'Shri Ram Janaki Thakurwadi',
      category: 'religious',
      image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913592/Thakurwadi1_qpgfnq.jpg',
      description: language === 'hi'
        ? 'गांव का प्रमुख धार्मिक और सांस्कृतिक केंद्र'
        : 'Main religious and cultural center of the village',
      location: language === 'hi' ? 'धेवधा गांव केंद्र' : 'Dheodha Village Center',
      distance: '0 km',
      established: '1960'
    },
    {
      id: 'dharamshala',
      name: language === 'hi' ? 'धर्मशाला' : 'Dharamshala',
      category: 'community',
      image: 'https://res.cloudinary.com/dusalynec/image/upload/v1762977579/IMG_3520_1_imhgx3.jpg',
      description: language === 'hi'
        ? 'यात्रियों और आगंतुकों के लिए आवास सुविधा'
        : 'Accommodation facility for travelers and visitors',
      location: language === 'hi' ? 'ठाकुरवाड़ी के पास' : 'Near Thakurwadi',
      distance: '0.1 km',
      established: '1965'
    },
    {
      id: 'durga-sthan',
      name: language === 'hi' ? 'दुर्गा स्थान' : 'Durga Sthan',
      category: 'religious',
      image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913597/DP_2015_1_npc6vw.jpg',
      description: language === 'hi'
        ? 'माँ दुर्गा का पवित्र मंदिर, वार्षिक दुर्गा पूजा का मुख्य स्थल'
        : 'Sacred temple of Maa Durga, main venue for annual Durga Puja',
      location: language === 'hi' ? 'धेवधा गांव' : 'Dheodha Village',
      distance: '0.3 km',
      established: '1950'
    },
    {
      id: 'devsthan-shiyuria',
      name: language === 'hi' ? 'देवस्थान, शियूरिया महारानी' : 'Devsthan Shiyuria Maharani',
      category: 'religious',
      image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913594/DeviSthan2_uo34qi.jpg',
      description: language === 'hi'
        ? 'शियूरिया महारानी का प्रसिद्ध देवस्थान'
        : 'Famous shrine of Shiyuria Maharani',
      location: language === 'hi' ? 'धेवधा के पास' : 'Near Dheodha',
      distance: '1.5 km',
      established: '1940'
    },
    {
      id: 'high-school',
      name: language === 'hi' ? 'उत्कर्मित हाई विद्यालय (10+2)' : 'Upgraded High School (10+2)',
      category: 'education',
      image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913599/Highschool_tyycra.jpg',
      description: language === 'hi'
        ? 'कक्षा 10+2 तक की शिक्षा प्रदान करने वाला विद्यालय'
        : 'School providing education up to class 10+2',
      location: language === 'hi' ? 'धेवधा गांव' : 'Dheodha Village',
      distance: '0.2 km',
      established: '1985'
    },
    {
      id: 'middle-school',
      name: language === 'hi' ? 'मध्य विद्यालय, धेवधा' : 'Middle School, Dheodha',
      category: 'education',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80',
      description: language === 'hi'
        ? 'कक्षा 6-8 के लिए मध्य विद्यालय'
        : 'Middle school for classes 6-8',
      location: language === 'hi' ? 'धेवधा गांव' : 'Dheodha Village',
      distance: '0.4 km',
      established: '1975'
    },
    {
      id: 'primary-school',
      name: language === 'hi' ? 'प्राथमिक विद्यालय' : 'Primary School',
      category: 'education',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80',
      description: language === 'hi'
        ? 'प्राथमिक शिक्षा के लिए विद्यालय'
        : 'School for primary education',
      location: language === 'hi' ? 'धेवधा गांव' : 'Dheodha Village',
      distance: '0.5 km',
      established: '1970'
    },
    {
      id: 'health-center',
      name: language === 'hi' ? 'सामुदायिक स्वास्थ्य केंद्र' : 'Community Health Center',
      category: 'health',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
      description: language === 'hi'
        ? 'बुनियादी स्वास्थ्य सेवाएं और आपातकालीन देखभाल'
        : 'Basic health services and emergency care',
      location: language === 'hi' ? 'धेवधा गांव' : 'Dheodha Village',
      distance: '0.3 km',
      established: '2000'
    },
    {
      id: 'panchayat-bhawan',
      name: language === 'hi' ? 'पंचायत भवन' : 'Panchayat Bhawan',
      category: 'infrastructure',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
      description: language === 'hi'
        ? 'ग्राम पंचायत का प्रशासनिक केंद्र'
        : 'Administrative center of village panchayat',
      location: language === 'hi' ? 'धेवधा गांव केंद्र' : 'Dheodha Village Center',
      distance: '0.2 km',
      established: '1990'
    },
    {
      id: 'community-hall',
      name: language === 'hi' ? 'सामुदायिक हॉल' : 'Community Hall',
      category: 'community',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80',
      description: language === 'hi'
        ? 'सामुदायिक कार्यक्रमों और बैठकों के लिए हॉल'
        : 'Hall for community events and meetings',
      location: language === 'hi' ? 'धेवधा गांव' : 'Dheodha Village',
      distance: '0.3 km',
      established: '2005'
    },
    {
      id: 'hanuman-mandir',
      name: language === 'hi' ? 'हनुमान मंदिर' : 'Hanuman Mandir',
      category: 'religious',
      image: 'https://images.unsplash.com/photo-1582632909121-4971e332f0ff?w=600&q=80',
      description: language === 'hi'
        ? 'भगवान हनुमान का मंदिर'
        : 'Temple of Lord Hanuman',
      location: language === 'hi' ? 'धेवधा गांव' : 'Dheodha Village',
      distance: '0.6 km',
      established: '1955'
    },
    {
      id: 'shiv-mandir',
      name: language === 'hi' ? 'शिव मंदिर' : 'Shiv Mandir',
      category: 'religious',
      image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=80',
      description: language === 'hi'
        ? 'भगवान शिव का प्राचीन मंदिर'
        : 'Ancient temple of Lord Shiva',
      location: language === 'hi' ? 'धेवधा गांव' : 'Dheodha Village',
      distance: '0.7 km',
      established: '1945'
    },
    {
      id: 'maharani-sthan',
      name: language === 'hi' ? 'महारानी स्थान' : 'Maharani Sthan',
      category: 'religious',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80',
      description: language === 'hi'
        ? 'महारानी का पूजा स्थल'
        : 'Worship place of Maharani',
      location: language === 'hi' ? 'धेवधा गांव' : 'Dheodha Village',
      distance: '0.8 km',
      established: '1935'
    },
    {
      id: 'anganwadi',
      name: language === 'hi' ? 'आंगनवाड़ी केंद्र' : 'Anganwadi Center',
      category: 'health',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80',
      description: language === 'hi'
        ? 'बच्चों और माताओं के लिए पोषण और स्वास्थ्य सेवाएं'
        : 'Nutrition and health services for children and mothers',
      location: language === 'hi' ? 'धेवधा गांव' : 'Dheodha Village',
      distance: '0.4 km',
      established: '1995'
    },
    // {
    //   id: 'post-office',
    //   name: language === 'hi' ? 'डाकघर' : 'Post Office',
    //   category: 'infrastructure',
    //   image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&q=80',
    //   description: language === 'hi'
    //     ? 'डाक और बैंकिंग सेवाएं'
    //     : 'Postal and banking services',
    //   location: language === 'hi' ? 'धेवधा गांव' : 'Dheodha Village',
    //   distance: '0.3 km',
    //   established: '1980'
    // },
    // {
    //   id: 'bank-branch',
    //   name: language === 'hi' ? 'बैंक शाखा' : 'Bank Branch',
    //   category: 'infrastructure',
    //   image: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=600&q=80',
    //   description: language === 'hi'
    //     ? 'बैंकिंग और वित्तीय सेवाएं'
    //     : 'Banking and financial services',
    //   location: language === 'hi' ? 'धेवधा गांव' : 'Dheodha Village',
    //   distance: '0.2 km',
    //   established: '2010'
    // },
    {
      id: 'village-library',
      name: language === 'hi' ? 'ग्राम पुस्तकालय' : 'Village Library',
      category: 'education',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&q=80',
      description: language === 'hi'
        ? 'पढ़ने और अध्ययन के लिए पुस्तकालय'
        : 'Library for reading and study',
      location: language === 'hi' ? 'धेवधा गांव' : 'Dheodha Village',
      distance: '0.3 km',
      established: '2015'
    },
    {
      id: 'sports-ground',
      name: language === 'hi' ? 'खेल मैदान' : 'Sports Ground',
      category: 'community',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80',
      description: language === 'hi'
        ? 'खेल और सांस्कृतिक कार्यक्रमों के लिए मैदान'
        : 'Ground for sports and cultural events',
      location: language === 'hi' ? 'धेवधा गांव' : 'Dheodha Village',
      distance: '0.5 km',
      established: '2000'
    },
    // {
    //   id: 'gandhi-chowk',
    //   name: language === 'hi' ? 'गांधी चौक' : 'Gandhi Chowk',
    //   category: 'infrastructure',
    //   image: 'https://images.unsplash.com/photo-1533586662937-4c2d2676bcd7?w=600&q=80',
    //   description: language === 'hi'
    //     ? 'गांव का मुख्य चौराहा और सभा स्थल'
    //     : 'Main square and gathering place of village',
    //   location: language === 'hi' ? 'धेवधा गांव केंद्र' : 'Dheodha Village Center',
    //   distance: '0.1 km',
    //   established: '1985'
    // },
    {
      id: 'community-pond',
      name: language === 'hi' ? 'सामुदायिक तालाब' : 'Community Pond',
      category: 'infrastructure',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&q=80',
      description: language === 'hi'
        ? 'जल संचयन और मछली पालन के लिए तालाब'
        : 'Pond for water conservation and fish farming',
      location: language === 'hi' ? 'धेवधा गांव' : 'Dheodha Village',
      distance: '0.6 km',
      established: '1960'
    },
    {
      id: 'agriculture-market',
      name: language === 'hi' ? 'कृषि बाजार' : 'Agriculture Market',
      category: 'infrastructure',
      image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&q=80',
      description: language === 'hi'
        ? 'कृषि उत्पादों की खरीद-बिक्री का बाजार'
        : 'Market for buying and selling agricultural products',
      location: language === 'hi' ? 'धेवधा गांव' : 'Dheodha Village',
      distance: '0.4 km',
      established: '1975'
    },
    {
      id: 'main-gate',
      name: language === 'hi' ? 'मुख्य द्वार (स्वागत द्वार)' : 'Main Gate (Welcome Gate)',
      category: 'infrastructure',
      image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761943477/539776090_1174414584722008_982293286693648098_n_eclulv.jpg',
      description: language === 'hi'
        ? 'गांव का भव्य प्रवेश द्वार (निर्माणाधीन)'
        : 'Grand entrance gate of village (under construction)',
      location: language === 'hi' ? 'धेवधा गांव प्रवेश' : 'Dheodha Village Entrance',
      distance: '0 km',
      established: '2025'
    }
  ];

  // Filter places based on search and category
  const filteredPlaces = allPlaces.filter(place => {
    const matchesSearch = place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         place.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || place.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Hero
        title={language === 'hi' ? 'महत्वपूर्ण स्थान' : 'Important Places'}
        subtitle={language === 'hi' 
          ? 'धेवधा गांव के सभी महत्वपूर्ण स्थानों का विवरण'
          : 'Details of all important places in Dheodha village'
        }
        backgroundImage="https://res.cloudinary.com/dusalynec/image/upload/v1762001895/IMG_2626_jrqyt0.jpg"
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter Bar */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder={language === 'hi' ? 'स्थान खोजें...' : 'Search places...'}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-lg"
                  />
                </div>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-3 bg-white rounded-xl p-2 border-2 border-gray-200">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-lg transition-all ${
                    viewMode === 'grid' 
                      ? 'bg-green-600 text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-lg transition-all ${
                    viewMode === 'list' 
                      ? 'bg-green-600 text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md border-2 border-gray-200'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6 text-gray-600">
            {language === 'hi' 
              ? `${filteredPlaces.length} स्थान मिले`
              : `${filteredPlaces.length} places found`
            }
          </div>

          {/* Places Grid/List */}
          {viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPlaces.map((place, index) => (
                <motion.div
                  key={place.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link
                    href={`/places/${place.id}`}
                    className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800">
                        {categories.find(c => c.id === place.category)?.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                        {place.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {place.description}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{place.distance}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-green-600 font-semibold group-hover:translate-x-2 transition-transform">
                          <span>{language === 'hi' ? 'विवरण देखें' : 'View Details'}</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredPlaces.map((place, index) => (
                <motion.div
                  key={place.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                >
                  <Link
                    href={`/places/${place.id}`}
                    className="group block bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
                  >
                    <div className="flex items-center space-x-6">
                      {/* Image */}
                      <div className="relative w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={place.image}
                          alt={place.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                            {place.name}
                          </h3>
                          <span className="text-2xl">{categories.find(c => c.id === place.category)?.icon}</span>
                        </div>
                        <p className="text-gray-600 mb-3">{place.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{place.location}</span>
                          </div>
                          <span>•</span>
                          <span>{place.distance}</span>
                          <span>•</span>
                          <span>{language === 'hi' ? 'स्थापित' : 'Est.'} {place.established}</span>
                        </div>
                      </div>

                      <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-green-600 group-hover:translate-x-2 transition-all flex-shrink-0" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          {/* No Results */}
          {filteredPlaces.length === 0 && (
            <div className="text-center py-20">
              <MapIcon className="w-20 h-20 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {language === 'hi' ? 'कोई स्थान नहीं मिला' : 'No places found'}
              </h3>
              <p className="text-gray-600">
                {language === 'hi' 
                  ? 'कृपया अपनी खोज या फ़िल्टर बदलने का प्रयास करें'
                  : 'Try changing your search or filter'
                }
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Places;
