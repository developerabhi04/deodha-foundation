// components/about/AboutStory.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, Heart, TrendingUp, Award } from 'lucide-react';
import { useLanguage } from '../../lib/LanguageContext';

const AboutStory = () => {
  const { language } = useLanguage();

  const milestones = [
    {
      date: language === 'hi' ? '2 अगस्त 2025' : 'August 2, 2025',
      title: language === 'hi' ? 'धेवधा विकास समिति की स्थापना' : 'Founding of Dheodha Vikas Samiti',
      description: language === 'hi'
        ? 'गांव के अप्रवासी युवाओं और स्थानीय निवासियों ने मिलकर अपने गांव के विकास के लिए एक गैर-राजनीतिक, सामाजिक संगठन बनाने का निर्णय लिया।'
        : 'The migrant youth and local residents of the village together decided to form a non-political, social organization for the development of their village.',
      icon: Users,
      color: 'from-blue-600 to-indigo-600'
    },
    {
      date: language === 'hi' ? 'अगस्त 2025' : 'August 2025',
      title: language === 'hi' ? 'पहली परियोजना: सड़क मरम्मत' : 'First Project: Road Repair',
      description: language === 'hi'
        ? '₹1.51 लाख की लागत से गांव की मुख्य सड़क की मरम्मत और जल निकासी की सफाई।'
        : 'Repair of village main road and drainage cleaning at a cost of ₹1.51 lakh.',
      icon: MapPin,
      color: 'from-green-600 to-emerald-600'
    },
    // {
    //   date: language === 'hi' ? 'अक्टूबर 2025' : 'October 2025',
    //   title: language === 'hi' ? 'मुख्य द्वार निर्माण शुरू' : 'Main Gate Construction Started',
    //   description: language === 'hi'
    //     ? '₹2.42 लाख के बजट के साथ गांव के भव्य स्वागत द्वार का निर्माण शुरू।'
    //     : 'Construction of grand village welcome gate started with a budget of ₹2.42 lakh.',
    //   icon: Award,
    //   color: 'from-purple-600 to-violet-600'
    // },
    {
      date: language === 'hi' ? 'भविष्य' : 'Future',
      title: language === 'hi' ? 'डिजिटल लाइब्रेरी योजना' : 'Digital Library Plan',
      description: language === 'hi'
        ? 'आधुनिक शिक्षा सुविधाओं के साथ डिजिटल लाइब्रेरी स्थापना की योजना।'
        : 'Planning to establish digital library with modern educational facilities.',
      icon: TrendingUp,
      color: 'from-orange-600 to-amber-600'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          {language === 'hi' ? 'हमारी कहानी' : 'Our Story'}
        </h2>
        <p className="text-lg text-gray-600">
          {language === 'hi'
            ? 'धेवधा विकास समिति की स्थापना से लेकर आज तक का सफर - एक समर्पित समुदाय की कहानी।'
            : 'The journey from the founding of Dheodha Vikas Samiti to today - a story of a dedicated community.'
          }
        </p>
      </div>

      {/* Story Content */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className="prose prose-lg max-w-none">
          {language === 'hi' ? (
            <>
              <p className="text-gray-700 leading-relaxed mb-6">
                धेवधा विकास समिति की स्थापना <strong className="text-green-600">2 अगस्त 2025</strong> को हुई, जब गांव के अप्रवासी युवाओं और स्थानीय निवासियों ने मिलकर अपने गांव के विकास के लिए एक <strong>गैर-राजनीतिक, सामाजिक संगठन</strong> बनाने का निर्णय लिया।
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                हमारी पहली बड़ी परियोजना गांव की <strong>मुख्य सड़क की मरम्मत और नाली की सफाई</strong> थी, जिस पर ₹1.51 लाख खर्च किए गए। इससे गांव में जलभराव की समस्या का समाधान हुआ और 500+ परिवारों को लाभ हुआ।
              </p>
              {/* <p className="text-gray-700 leading-relaxed">
                वर्तमान में हम गांव के भव्य <strong>मुख्य द्वार (स्वागत द्वार)</strong> के निर्माण में लगे हैं, जो ₹2.42 लाख की परियोजना है और 60% पूर्ण हो चुकी है। हमारा लक्ष्य है धेवधा को एक <strong>स्वच्छ, शिक्षित, सशक्त और सांस्कृतिक रूप से समृद्ध</strong> गांव बनाना।
              </p> */}
            </>
          ) : (
            <>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dheodha Vikas Samiti was established on <strong className="text-green-600">August 2, 2025</strong>, when migrant youth and local residents of the village came together to create a <strong>non-political, social organization</strong> for village development.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our first major project was the <strong>repair of the village main road and drainage cleaning</strong>, which cost ₹1.51 lakh. This solved the waterlogging problem in the village and benefited 500+ families.
              </p>
              {/* <p className="text-gray-700 leading-relaxed">
                Currently, we are working on the construction of the grand <strong>village main gate (welcome gate)</strong>, which is a ₹2.42 lakh project and is 60% complete. Our goal is to make Dheodha a <strong>clean, educated, empowered, and culturally enriched</strong> village.
              </p> */}
            </>
          )}
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          {language === 'hi' ? 'प्रमुख मील के पत्थर' : 'Key Milestones'}
        </h3>

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-start space-x-4"
            >
              {/* Icon */}
              <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-lg`}>
                <milestone.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1 bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                <div className="flex items-center space-x-3 mb-2">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <span className="text-sm font-semibold text-gray-600">{milestone.date}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h4>
                <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutStory;
