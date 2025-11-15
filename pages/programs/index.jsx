// pages/Programs.jsx - Complete with Full Hindi/English Translation
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import Hero from '../../components/Hero';
import { BookOpen, Heart, Users, Briefcase, TreePine, Award } from 'lucide-react';
import { useLanguage } from '../../lib/LanguageContext';

export default function Programs() {
  const { language } = useLanguage();

  const programs = [
    {
      id: 'education',
      title: language === 'hi' ? 'शिक्षा कार्यक्रम' : 'Education Programs',
      description: language === 'hi'
        ? 'गुणवत्तापूर्ण शिक्षा और डिजिटल साक्षरता के माध्यम से युवाओं का भविष्य उज्ज्वल बनाना'
        : 'Brightening the future of youth through quality education and digital literacy',
      image: 'https://savioursfoundation.org/wp-content/uploads/2021/03/teach-for-india-1024x576.jpg',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-700',
      beneficiaries: language === 'hi' ? '500+ छात्र' : '500+ students',
      initiatives: language === 'hi' ? [
        'डिजिटल पुस्तकालय की स्थापना (500+ पुस्तकें)',
        'कंप्यूटर प्रशिक्षण कार्यक्रम (100+ युवाओं को प्रशिक्षित)',
        'प्रतियोगी परीक्षा की तैयारी',
        'अंग्रेजी भाषा कक्षाएं',
        'विद्यालय में शिक्षा की गुणवत्ता सुधार'
      ] : [
        'Digital library establishment (500+ books)',
        'Computer training programs (100+ youth trained)',
        'Competitive exam preparation',
        'English language classes',
        'School education quality improvement'
      ]
    },
    {
      id: 'health',
      title: language === 'hi' ? 'स्वास्थ्य कार्यक्रम' : 'Health Programs',
      description: language === 'hi'
        ? 'निःशुल्क स्वास्थ्य शिविर और जागरूकता अभियान के माध्यम से समुदाय को स्वस्थ रखना'
        : 'Keeping the community healthy through free health camps and awareness campaigns',
      image: 'https://res.cloudinary.com/dusalynec/image/upload/v1763061620/Image00001dss-1_afdlmp.jpg',
      icon: <Heart className="w-8 h-8" />,
      color: 'from-red-500 to-pink-600',
      beneficiaries: language === 'hi' ? '1000+ ग्रामवासी' : '1000+ villagers',
      initiatives: language === 'hi' ? [
        'त्रैमासिक निःशुल्क स्वास्थ्य शिविर',
        'रक्तचाप और रक्त शर्करा परीक्षण',
        'निःशुल्क दवाइयां',
        'स्वच्छता और पोषण जागरूकता',
        'मातृत्व और बाल स्वास्थ्य कार्यक्रम'
      ] : [
        'Quarterly free health camps',
        'Blood pressure and blood sugar testing',
        'Free medicines',
        'Sanitation and nutrition awareness',
        'Maternity and child health programs'
      ]
    },
    {
      id: 'women-empowerment',
      title: language === 'hi' ? 'महिला सशक्तिकरण' : 'Women Empowerment',
      description: language === 'hi'
        ? 'स्वयं सहायता समूहों और कौशल विकास के माध्यम से महिलाओं को आत्मनिर्भर बनाना'
        : 'Making women self-reliant through self-help groups and skill development',
      image: 'https://res.cloudinary.com/dusalynec/image/upload/v1763061889/tailoring2_s9x8hw.jpg',
      icon: <Users className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600',
      beneficiaries: language === 'hi' ? '150+ महिलाएं' : '150+ women',
      initiatives: language === 'hi' ? [
        '5 स्वयं सहायता समूहों का गठन',
        'सिलाई-कढ़ाई प्रशिक्षण',
        'वित्तीय साक्षरता कार्यक्रम',
        'उद्यमिता प्रशिक्षण',
        'कानूनी अधिकारों की जागरूकता'
      ] : [
        'Formation of 5 self-help groups',
        'Sewing and embroidery training',
        'Financial literacy programs',
        'Entrepreneurship training',
        'Legal rights awareness'
      ]
    },
    {
      id: 'livelihood',
      title: language === 'hi' ? 'आजीविका और रोजगार' : 'Livelihood & Employment',
      description: language === 'hi'
        ? 'कौशल विकास और व्यावसायिक प्रशिक्षण के माध्यम से युवाओं को रोजगार के अवसर प्रदान करना'
        : 'Providing employment opportunities to youth through skill development and vocational training',
      image: 'https://res.cloudinary.com/dusalynec/image/upload/v1763067508/533305-how-urban-job-guarantee-schemes-can-provide-livelihood-equal-opportunity-to-women_t2n4d2.jpg',
      icon: <Briefcase className="w-8 h-8" />,
      color: 'from-green-500 to-teal-600',
      beneficiaries: language === 'hi' ? '200+ युवा' : '200+ youth',
      initiatives: language === 'hi' ? [
        'कंप्यूटर और IT प्रशिक्षण',
        'व्यावसायिक कौशल विकास',
        'करियर काउंसलिंग सेवाएं',
        'स्वरोजगार को बढ़ावा',
        'कृषि यंत्र संचालन प्रशिक्षण'
      ] : [
        'Computer and IT training',
        'Vocational skill development',
        'Career counseling services',
        'Self-employment promotion',
        'Agricultural equipment operation training'
      ]
    },
    {
      id: 'infrastructure',
      title: language === 'hi' ? 'बुनियादी ढांचा विकास' : 'Infrastructure Development',
      description: language === 'hi'
        ? 'सड़क, नाली, और सार्वजनिक सुविधाओं का निर्माण और रखरखाव'
        : 'Construction and maintenance of roads, drains, and public facilities',
      image: 'https://res.cloudinary.com/dusalynec/image/upload/v1763067692/0_Sv-Rwnqd-L9eIp0j_kdnn2e.jpg',
      icon: <Award className="w-8 h-8" />,
      color: 'from-orange-500 to-red-600',
      beneficiaries: language === 'hi' ? 'संपूर्ण गांव' : 'Entire village',
      initiatives: language === 'hi' ? [
        'स्वागत द्वार का निर्माण (₹2.42 लाख)',
        '2 किमी सड़क मरम्मत (₹1.51 लाख)',
        'नाली सफाई और जल निकासी',
        'सार्वजनिक शौचालय',
        'बिजली व्यवस्था सुधार'
      ] : [
        'Welcome gate construction (₹2.42 lakh)',
        '2 km road repair (₹1.51 lakh)',
        'Drain cleaning and drainage',
        'Public toilets',
        'Electricity system improvement'
      ]
    },
    {
      id: 'environment',
      title: language === 'hi' ? 'पर्यावरण संरक्षण' : 'Environment Conservation',
      description: language === 'hi'
        ? 'वृक्षारोपण और स्वच्छता अभियान के माध्यम से पर्यावरण की रक्षा'
        : 'Protecting the environment through tree plantation and cleanliness campaigns',
      image: 'https://res.cloudinary.com/dusalynec/image/upload/v1763067810/A6300-Sustainability-and-Indian-Villages-Image-1_b8pxsb.jpg',
      icon: <TreePine className="w-8 h-8" />,
      color: 'from-green-600 to-emerald-700',
      beneficiaries: language === 'hi' ? 'पूरा समुदाय' : 'Entire community',
      initiatives: language === 'hi' ? [
        '1000+ पेड़ लगाए गए',
        'नियमित स्वच्छता अभियान',
        'प्लास्टिक मुक्त गांव अभियान',
        'जैविक खेती को बढ़ावा',
        'जल संरक्षण जागरूकता'
      ] : [
        '1000+ trees planted',
        'Regular cleanliness campaigns',
        'Plastic-free village campaign',
        'Organic farming promotion',
        'Water conservation awareness'
      ]
    }
  ];

  const impactStats = [
    {
      number: '500+',
      label: language === 'hi' ? 'छात्र लाभान्वित' : 'Students Benefited',
      icon: '📚'
    },
    {
      number: '1000+',
      label: language === 'hi' ? 'स्वास्थ्य जांच' : 'Health Check-ups',
      icon: '🏥'
    },
    {
      number: '150+',
      label: language === 'hi' ? 'महिलाएं प्रशिक्षित' : 'Women Trained',
      icon: '👩'
    },
    {
      number: '5',
      label: language === 'hi' ? 'स्वयं सहायता समूह' : 'Self-Help Groups',
      icon: '👥'
    }
  ];

  const successStories = [
    {
      icon: '🎓',
      title: language === 'hi' ? '' : '',
      quote: language === 'hi'
        ? '"धेवधा विकास समिति ने गांव में सड़क और नाली की सफाई का जो कार्य किया है, वह अभूतपूर्व है। पहली बार हमें लगा कि हमारी आवाज़ सुनी जा रही है।"'
        : '"The work done by the Dheodha Development Committee to clean the roads and drains in the village is unprecedented. For the first time, we felt our voices were being heard."',
      author: language === 'hi' ? 'श्री कृष्ण देव नारायण सिंह (वरिष्ठ नागरिक)' : 'Shri Krishna Dev Narayan Singh (Senior Citizen)'
    },
    {
      icon: '👩',
      title: language === 'hi' ? '' : '',
      quote: language === 'hi'
        ? '"समिति ने शिक्षा और सांस्कृतिक गतिविधियों को बढ़ावा देने के लिए जो प्रयास किए हैं, उससे गांव के बच्चों में पढ़ाई के प्रति उत्साह बढ़ा है।"'
        : '"The efforts made by the committee to promote education and cultural activities have increased the enthusiasm for studies among the village children."',
      author: language === 'hi' ? 'साकेत कुमार शर्मा (युवा प्रतिनिधि)' : 'Saket Kumar Sharma (Youth Representative)'
    },
    {
      icon: '🏥',
      title: language === 'hi' ? '' : '',
      quote: language === 'hi'
        ? '"महिलाओं को जागरूक करने और बच्चों की सुरक्षा पर समिति का ध्यान सराहनीय है। हमें लगता है कि यह समिति गांव के लिए एक नई उम्मीद है।"'
        : '"The committee focus on raising awareness among women and protecting children is commendable. We believe this committee offers a new hope for the village."',
      author: language === 'hi' ? 'श्रीमती रंजना मिश्रा' : 'Mrs. Ranjana Mishra'
    }
  ];

  return (
    <>
      <SEO
        title={language === 'hi' ? 'हमारे कार्यक्रम' : 'Our Programs'}
        description={language === 'hi'
          ? 'धेवधा गांव में शिक्षा, स्वास्थ्य और आजीविका के व्यापक कार्यक्रम'
          : 'Comprehensive programs in education, healthcare, and livelihoods in Dheodha village'
        }
        image="https://res.cloudinary.com/dusalynec/image/upload/v1762001895/IMG_2626_jrqyt0.jpg"
      />

      <Hero
        title={language === 'hi' ? 'हमारे कार्यक्रम' : 'Our Programs'}
        subtitle={language === 'hi'
          ? 'शिक्षा, स्वास्थ्य, और आजीविका के व्यापक कार्यक्रमों के माध्यम से स्थायी प्रभाव बनाना'
          : 'Creating sustainable impact through comprehensive programs in education, health, and livelihoods'
        }
        backgroundImage="https://res.cloudinary.com/dusalynec/image/upload/v1762001895/IMG_2626_jrqyt0.jpg"
      />

      {/* Introduction Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-black text-gray-900 mb-6">
              {language === 'hi' ? 'समग्र विकास की ओर' : 'Towards Holistic Development'}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {language === 'hi' ? (
                <>
                  धेवधा विकास समिति गरीबी और असमानता के मूल कारणों को संबोधित करने वाले कार्यक्रम चलाती है।
                  शिक्षा, स्वास्थ्य, और आजीविका सहायता को मिलाकर एक समग्र दृष्टिकोण के माध्यम से,
                  हम व्यक्तियों और समुदायों को स्थायी भविष्य बनाने के लिए सशक्त बनाते हैं।
                </>
              ) : (
                <>
                  Dheodha Vikas Samiti runs programs that address the root causes of poverty and inequality.
                  Through a holistic approach combining education, healthcare, and livelihood support,
                  we empower individuals and communities to build a sustainable future.
                </>
              )}
            </p>
          </motion.div>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-black text-green-600 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-40`}></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 text-green-600">
                    {program.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {program.beneficiaries}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>

                  {/* Initiatives */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      {language === 'hi' ? 'प्रमुख पहलें:' : 'Key Initiatives:'}
                    </h4>
                    <ul className="space-y-2">
                      {program.initiatives.slice(0, 3).map((initiative, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>{initiative}</span>
                        </li>
                      ))}
                    </ul>
                    {program.initiatives.length > 3 && (
                      <p className="text-xs text-gray-500 italic pt-2">
                        {language === 'hi'
                          ? `+${program.initiatives.length - 3} और पहलें`
                          : `+${program.initiatives.length - 3} more initiatives`
                        }
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              {language === 'hi' ? 'सफलता की कहानियां' : 'Success Stories'}
            </h2>
            <p className="text-lg text-gray-600">
              {language === 'hi' ? 'हमारे कार्यक्रमों से बदलती ज़िंदगियां' : 'Lives transformed by our programs'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                {/* <div className="text-5xl mb-4">{story.icon}</div> */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{story.title}</h3>
                <p className="text-gray-600 mb-4">{story.quote}</p>
                <p className="text-sm font-semibold text-green-600">{story.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-12 text-white text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-black mb-6">
              {language === 'hi' ? 'इन कार्यक्रमों का हिस्सा बनें' : 'Be Part of These Programs'}
            </h2>
            <p className="text-lg mb-8 opacity-90">
              {language === 'hi'
                ? 'स्वयंसेवक बनें, दान करें, या अपने कौशल से योगदान दें। साथ मिलकर हम धेवधा को और बेहतर बना सकते हैं।'
                : 'Become a volunteer, donate, or contribute with your skills. Together we can make Dheodha better.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <a
                href="/volunteer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                {language === 'hi' ? 'स्वयंसेवक बनें' : 'Become a Volunteer'}
              </a> */}
              {/* <a
                href="/donate"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-800 text-white font-bold rounded-xl hover:bg-green-900 transition-colors shadow-lg"
              >
                {language === 'hi' ? 'दान करें' : 'Donate Now'}
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
