// components/about/AboutStructure.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Users, Shield, Briefcase, FileText, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../lib/LanguageContext';

const AboutStructure = () => {
  const { language } = useLanguage();

  const organizationStructure = [
    {
      level: 1,
      positions: [
        {
          title: language === 'hi' ? 'अध्यक्ष' : 'President',
          name: 'Rajesh Kumar',
          icon: Crown,
          color: 'from-blue-600 to-indigo-600',
          responsibilities: language === 'hi'
            ? 'समग्र नेतृत्व और रणनीतिक निर्णय'
            : 'Overall leadership and strategic decisions'
        }
      ]
    },
    {
      level: 2,
      positions: [
        {
          title: language === 'hi' ? 'उपाध्यक्ष' : 'Vice President',
          name: 'Chandan Kumar',
          icon: Users,
          color: 'from-green-600 to-emerald-600',
          responsibilities: language === 'hi'
            ? 'कृषि और विकास कार्यक्रम'
            : 'Agriculture and development programs'
        },
        {
          title: language === 'hi' ? 'सचिव' : 'Secretary',
          name: 'Mitendra Kumar',
          icon: FileText,
          color: 'from-purple-600 to-violet-600',
          responsibilities: language === 'hi'
            ? 'प्रशासनिक और दस्तावेज़ीकरण'
            : 'Administrative and documentation'
        }
      ]
    },
    {
      level: 3,
      positions: [
        {
          title: language === 'hi' ? 'कोषाध्यक्ष' : 'Treasurer',
          name: 'Devkant Mishra',
          icon: Briefcase,
          color: 'from-pink-600 to-rose-600',
          responsibilities: language === 'hi'
            ? 'वित्तीय प्रबंधन और लेखा'
            : 'Financial management and accounting'
        },
        {
          title: language === 'hi' ? 'उप सचिव' : 'Vice Secretary',
          name: 'Brajesh Kumar',
          icon: Shield,
          color: 'from-orange-600 to-amber-600',
          responsibilities: language === 'hi'
            ? 'शिक्षा और युवा कार्यक्रम'
            : 'Education and youth programs'
        }
      ]
    }
  ];

  const committees = [
    {
      name: language === 'hi' ? 'कार्यकारी समिति' : 'Executive Committee',
      desc: language === 'hi'
        ? 'प्रमुख निर्णय और नीति निर्धारण'
        : 'Major decisions and policy making',
      icon: TrendingUp,
      color: 'from-blue-600 to-indigo-600'
    },
    {
      name: language === 'hi' ? 'परियोजना समिति' : 'Project Committee',
      desc: language === 'hi'
        ? 'परियोजनाओं की योजना और कार्यान्वयन'
        : 'Project planning and implementation',
      icon: Briefcase,
      color: 'from-green-600 to-emerald-600'
    },
    {
      name: language === 'hi' ? 'वित्त समिति' : 'Finance Committee',
      desc: language === 'hi'
        ? 'बजट और वित्तीय निगरानी'
        : 'Budget and financial monitoring',
      icon: Shield,
      color: 'from-purple-600 to-violet-600'
    },
    {
      name: language === 'hi' ? 'सामुदायिक समिति' : 'Community Committee',
      desc: language === 'hi'
        ? 'जन-संपर्क और जागरूकता'
        : 'Public outreach and awareness',
      icon: Users,
      color: 'from-pink-600 to-rose-600'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-12"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          {language === 'hi' ? 'संगठनात्मक संरचना' : 'Organizational Structure'}
        </h2>
        <p className="text-lg text-gray-600">
          {language === 'hi'
            ? 'धेवधा विकास समिति की पदानुक्रमित संरचना और जिम्मेदारियां'
            : 'Hierarchical structure and responsibilities of Dheodha Vikas Samiti'
          }
        </p>
      </div>

      {/* Organization Chart */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border-2 border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          {language === 'hi' ? 'पदाधिकारी संरचना' : 'Leadership Structure'}
        </h3>

        <div className="space-y-8">
          {organizationStructure.map((level, levelIndex) => (
            <div key={levelIndex} className="space-y-4">
              <div className={`grid ${level.positions.length === 1 ? 'grid-cols-1 max-w-md mx-auto' : 'md:grid-cols-2'} gap-6`}>
                {level.positions.map((position, posIndex) => (
                  <motion.div
                    key={posIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (levelIndex * 0.2) + (posIndex * 0.1) }}
                    className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-green-300 group"
                  >
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${position.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform mx-auto`}>
                      <position.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <div className={`inline-block bg-gradient-to-r ${position.color} bg-clip-text text-transparent font-bold text-sm mb-2`}>
                        {position.title}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{position.name}</h4>
                      <p className="text-gray-600 text-sm">{position.responsibilities}</p>
                    </div>

                    {/* Level Badge */}
                    <div className="absolute top-4 right-4 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold">
                      {language === 'hi' ? 'स्तर' : 'Level'} {level.level}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Connector Line */}
              {levelIndex < organizationStructure.length - 1 && (
                <div className="flex justify-center">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-gray-300 to-gray-400"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Committees Section */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          {language === 'hi' ? 'कार्यसमितियां' : 'Working Committees'}
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {committees.map((committee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${committee.color} rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg`}>
                <committee.icon className="w-7 h-7 text-whitete" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{committee.name}</h4>
              <p className="text-gray-600 text-sm">{committee.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decision Making Process */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          {language === 'hi' ? 'निर्णय प्रक्रिया' : 'Decision Making Process'}
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              step: 1,
              title: language === 'hi' ? 'प्रस्ताव' : 'Proposal',
              desc: language === 'hi' ? 'समुदाय से विचार और सुझाव' : 'Ideas and suggestions from community'
            },
            {
              step: 2,
              title: language === 'hi' ? 'चर्चा' : 'Discussion',
              desc: language === 'hi' ? 'समिति में विस्तृत चर्चा' : 'Detailed discussion in committee'
            },
            {
              step: 3,
              title: language === 'hi' ? 'कार्यान्वयन' : 'Implementation',
              desc: language === 'hi' ? 'सहमति के बाद क्रियान्वयन' : 'Implementation after consensus'
            }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.step}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </div>
              {index < 2 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-green-300 to-emerald-300 -translate-x-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutStructure;
