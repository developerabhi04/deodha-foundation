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
    // Education
    {
      id: 'agriculture-college',
      name: language === 'hi' ? 'कृषक कॉलेज, धेवधा' : 'Krishak College, Dheodha',
      category: 'education',
      image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913595/Colleage5_ut0pxi.jpg',
      website: 'https://krishakcollege.ac.in/',
      description: language === 'hi'
        ? 'पकड़ी बारवां का प्रमुख कृषि महाविद्यालय, 1978 से शिक्षा प्रदान कर रहा है'
        : 'Premier agriculture college of Pakri Barawan, providing education since 1978',
      location: language === 'hi' ? 'धेवधा, पकड़ी बारवां' : 'Dheodha, Pakri Barawan',
      distance: '2 km',
      established: '1978'
    },
    {
      id: 'high-school',
      name: language === 'hi' ? 'उत्कर्मित हाई विद्यालय (10+2)' : 'Upgraded High School (10+2)',
      category: 'education',
      image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913599/Highschool_tyycra.jpg',
      description: language === 'hi'
        ? 'कक्षा 10+2 तक की शिक्षा प्रदान करने वाला विद्यालय'
        : 'School providing education up to class 10+2',
      location: language === 'hi' ? 'धेवधा गाँव' : 'Dheodha Village',
      distance: '0.2 km',
      established: '1985'
    },
    {
      id: 'middle-school',
      name: language === 'hi' ? 'मध्य विद्यालय' : 'Middle School',
      category: 'education',
      image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761943439/83870336_3305898712760571_5537012631879024640_n_uitcqu.jpg',
      description: language === 'hi'
        ? 'कक्षा 6-8 के लिए मध्य विद्यालय'
        : 'Middle school for classes 6-8',
      location: language === 'hi' ? 'धेवधा गाँव' : 'Dheodha Village',
      distance: '0.4 km'
    },

    // Religious Places
    {
      id: 'ram-janaki-thakurwadi',
      name: language === 'hi' ? 'श्री राम जानकी ठाकुरवाड़ी' : 'Shri Ram Janaki Thakurwadi',
      category: 'religious',
      image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913592/Thakurwadi1_qpgfnq.jpg',
      description: language === 'hi'
        ? 'गाँव का प्रमुख धार्मिक और सांस्कृतिक केंद्र'
        : 'Main religious and cultural center of the village',
      location: language === 'hi' ? 'धेवधा गाँव केंद्र' : 'Dheodha Village Center',
      distance: '0 km',
      established: '1960'
    },
    {
      id: 'durga-sthan',
      name: language === 'hi' ? 'दुर्गा स्थान' : 'Durga Sthan',
      category: 'religious',
      image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913597/DP_2015_1_npc6vw.jpg',
      description: language === 'hi'
        ? 'माँ दुर्गा का पवित्र मंदिर, वार्षिक दुर्गा पूजा का मुख्य स्थल'
        : 'Sacred temple of Maa Durga, main venue for annual Durga Puja',
      location: language === 'hi' ? 'धेवधा गाँव' : 'Dheodha Village',
      distance: '0.3 km',
      established: '1950'
    },
    {
      id: 'devsthan-shiyuria',
      name: language === 'hi' ? 'धाजा अंगना (शियूरिया महारानी)' : 'Dhaja Angana (Shiyuria Maharani)',
      category: 'religious',
      image: 'https://res.cloudinary.com/dusalynec/image/upload/v1766671813/IMG_20251204_203903769_dfjtfr.jpg',
      description: language === 'hi'
        ? 'शियूरिया महारानी का प्रसिद्ध देवस्थान'
        : 'Famous shrine of Shiyuria Maharani',
      location: language === 'hi' ? 'धेवधा के पास' : 'Near Dheodha',
      distance: '1.5 km',
      established: '1940'
    },
    {
      id: 'maharani-sthan',
      name: language === 'hi' ? 'महारानी स्थान' : 'Maharani Sthan',
      category: 'religious',
      image: 'https://res.cloudinary.com/dusalynec/image/upload/v1766517456/IMG_20251206_111911865_hn461n.jpg',
      description: language === 'hi'
        ? 'महारानी का पूजा स्थल'
        : 'Worship place of Maharani',
      location: language === 'hi' ? 'धेवधा गाँव' : 'Dheodha Village',
      distance: '0.8 km',
      established: '1935'
    },
    {
      id: 'shivalaya',
      name: language === 'hi' ? 'शिवालय' : 'Shivalaya',
      category: 'religious',
      image: 'https://kutri.in/wp-content/uploads/2024/08/Kutri-village-37-1-768x1024.jpeg',
      description: language === 'hi'
        ? 'भगवान शिव का प्राचीन मंदिर'
        : 'Ancient temple of Lord Shiva',
      location: language === 'hi' ? 'धेवधा गाँव' : 'Dheodha Village',
      distance: '0.7 km',
      established: '1945'
    },
    {
      id: 'nayka-babaji',
      name: language === 'hi' ? 'नयका बाबाजी' : 'Nayka Babaji',
      category: 'religious',
      image: '',
      description: language === 'hi'
        ? 'स्थानीय धार्मिक स्थल'
        : 'Local religious place',
      location: language === 'hi' ? 'धेवधा गाँव' : 'Dheodha Village',
      distance: '0.5 km'
    },
    {
      id: 'jai-baba-dhiwal',
      name: language === 'hi' ? 'जय बाबा डिहवाल' : 'Jai Baba Dhiwal',
      category: 'religious',
      image: 'https://res.cloudinary.com/dusalynec/image/upload/v1766756951/IMG_20251206_160236799_1_cnhowb.jpg',
      description: language === 'hi'
        ? 'बाबा डिहवाल का धार्मिक स्थल'
        : 'Religious place of Baba Dhiwal',
      location: language === 'hi' ? 'धेवधा गाँव' : 'Dheodha Village',
      distance: '0.6 km'
    },
    {
      id: 'siddhamani-than',
      name: language === 'hi' ? 'सिद्धमणि थान' : 'Siddhamani Than',
      category: 'religious',
      image: '',
      description: language === 'hi'
        ? 'सिद्धमणि जी का पवित्र स्थान'
        : 'Sacred place of Siddhamani Ji',
      location: language === 'hi' ? 'धेवधा गाँव' : 'Dheodha Village',
      distance: '0.9 km'
    },
    {
      id: 'brahmapichash-sthan',
      name: language === 'hi' ? 'ब्रह्मपिचास स्थान' : 'Brahmapichash Sthan',
      category: 'religious',
      image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913592/BrahPichas1_nyjbm5.jpg',
      description: language === 'hi'
        ? 'पौराणिक धार्मिक स्थल'
        : 'Mythological religious site',
      location: language === 'hi' ? 'धेवधा गाँव' : 'Dheodha Village',
      distance: '1.0 km'
    },
    {
      id: 'ninguriya-sthan',
      name: language === 'hi' ? 'निंगुरिया स्थान' : 'Ninguriya Sthan',
      category: 'religious',
      image: 'https://res.cloudinary.com/dusalynec/image/upload/v1766667694/IMG_20251205_150057375_2_ttws9b.jpg',
      description: language === 'hi'
        ? 'निंगुरिया देवी का स्थान'
        : 'Place of Ninguriya Devi',
      location: language === 'hi' ? 'धेवधा गाँव' : 'Dheodha Village',
      distance: '1.2 km'
    },
    {
      id: 'dargah',
      name: language === 'hi' ? 'दरगाह' : 'Dargah',
      category: 'religious',
      image: 'https://media.telanganatoday.com/wp-content/uploads/2023/05/Dargah.jpg',
      description: language === 'hi'
        ? 'स्थानीय इस्लामिक पूजा स्थल'
        : 'Local Islamic place of worship',
      location: language === 'hi' ? 'धेवधा गाँव' : 'Dheodha Village',
      distance: '0.4 km'
    },
    {
      id: 'imamgadha',
      name: language === 'hi' ? 'इमामगढ़ा' : 'Imamgadha',
      category: 'religious',
      image: '',
      description: language === 'hi'
        ? 'शिया मुस्लिम समुदाय का महत्वपूर्ण स्थल'
        : 'Important place for Shia Muslim community',
      location: language === 'hi' ? 'धेवधा गाँव' : 'Dheodha Village',
      distance: '0.5 km'
    },

    // Community & Infrastructure
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
      id: 'panchayat-library',
      name: language === 'hi' ? 'पंचायत भवन सह पुस्तकालय' : 'Panchayat Bhawan-cum-Library',
      category: 'infrastructure',
      image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761943481/545839216_1184272130402920_2963934031699955061_n_qt9tlk.jpg',
      description: language === 'hi'
        ? 'ग्राम पंचायत का प्रशासनिक केंद्र और पुस्तकालय'
        : 'Administrative center of village panchayat and library',
      location: language === 'hi' ? 'धेवधा गाँव केंद्र' : 'Dheodha Village Center',
      distance: '0.2 km',
      established: '1990'
    },
    {
      id: 'sangat-sthal',
      name: language === 'hi' ? 'संगत स्थल' : 'Sangat Sthal',
      category: 'community',
      image: '',
      description: language === 'hi'
        ? 'सामुदायिक सभा और धार्मिक कार्यक्रमों का स्थल'
        : 'Place for community gatherings and religious events',
      location: language === 'hi' ? 'धेवधा गाँव' : 'Dheodha Village',
      distance: '0.3 km'
    },
    {
      id: 'bank-of-baroda',
      name: language === 'hi' ? 'बैंक ऑफ बड़ौदा' : 'Bank of Baroda',
      category: 'infrastructure',
      image: 'https://res.cloudinary.com/dusalynec/image/upload/v1763195455/156703-untitled-design-2023-10-11t152935012_bh4c0c.avif',
      description: language === 'hi'
        ? 'बैंकिंग और वित्तीय सेवाएं'
        : 'Banking and financial services',
      location: language === 'hi' ? 'धेवधा गाँव' : 'Dheodha Village',
      distance: '0.2 km',
      established: '2010'
    },
    {
      id: 'post-office',
      name: language === 'hi' ? 'पोस्ट ऑफ़िस' : 'Post Office',
      category: 'infrastructure',
      image: 'https://res.cloudinary.com/dusalynec/image/upload/v1763195248/post-office-nandapur-koraput-government-organisations-mbttc7uv57_q38v2k.avif',
      description: language === 'hi'
        ? 'डाक और बैंकिंग सेवाएं'
        : 'Postal and banking services',
      location: language === 'hi' ? 'धेवधा गाँव' : 'Dheodha Village',
      distance: '0.3 km',
      established: '1980'
    },
    {
      id: 'pokhar',
      name: language === 'hi' ? 'पोखर' : 'Pond (Pokhar)',
      category: 'infrastructure',
      image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913597/Image2_z836i5.jpg',
      description: language === 'hi'
        ? 'जल संचयन और मछली पालन के लिए तालाब'
        : 'Pond for water conservation and fish farming',
      location: language === 'hi' ? 'धेवधा गाँव' : 'Dheodha Village',
      distance: '0.6 km',
      established: '1960'
    },
    {
      id: 'ahara',
      name: language === 'hi' ? 'अहरा' : 'Ahara',
      category: 'infrastructure',
      image: 'https://res.cloudinary.com/dusalynec/image/upload/v1766666688/IMG_20251205_144239346_1_ng9bgg.jpg',
      description: language === 'hi'
        ? 'पारंपरिक जल संग्रहण प्रणाली'
        : 'Traditional water harvesting system',
      location: language === 'hi' ? 'धेवधा गाँव' : 'Dheodha Village',
      distance: '0.8 km'
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
                  className={`p-3 rounded-lg transition-all ${viewMode === 'grid'
                    ? 'bg-green-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-lg transition-all ${viewMode === 'list'
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
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${selectedCategory === category.id
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
