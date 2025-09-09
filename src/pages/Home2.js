import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import home2 from "../images/home2.mp4";
import featureImg from "../images/feature.jpg";
import productivity from "../images/productivity.jpg";
import partner from "../images/partner.jpg";
import client from "../images/client.jpg";
import logo1 from "../images/logo1.jpg";
import logo2 from "../images/logo2.jpg";
import logo3 from "../images/logo3.jpg";
import logo4 from "../images/logo4.jpg";
import logo5 from "../images/logo5.jpg";
import logo6 from "../images/logo6.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const translations = {
  heroTitle: {
    en: "Welcome to Stackly Solutions",
    ar: "مرحبًا بكم في Stackly Solutions",
    he: "ברוכים הבאים ל-Stackly Solutions"
  },
  heroDesc: {
    en: "Delivering innovative IT, cloud, and digital solutions to help your business grow and succeed in the modern digital era.",
    ar: "نقدم حلول تكنولوجيا المعلومات والسحابة والرقمية المبتكرة لمساعدة عملك على النمو والنجاح في العصر الرقمي الحديث.",
    he: "מספקים פתרונות IT, ענן ודיגיטל חדשניים כדי לעזור לעסק שלך לצמוח ולהצליח בעידן הדיגיטלי המודרני."
  },
  featuresTitle: {
    en: "Why Choose Our Platform?",
    ar: "لماذا تختار منصتنا؟",
    he: "למה לבחור בפלטפורמה שלנו?"
  },
  featuresDesc: {
    en: "Our platform is designed to help your business grow, adapt, and stay competitive in today’s digital-first world. Here’s what sets us apart:",
    ar: "منصتنا مصممة لمساعدة عملك على النمو والتكيف والبقاء في المنافسة في عالم اليوم الرقمي. إليك ما يميزنا:",
    he: "הפלטפורמה שלנו נועדה לעזור לעסק שלך לגדול, להסתגל ולהישאר תחרותי בעולם הדיגיטלי של היום. הנה מה שמייחד אותנו:"
  },
  featuresList: [
    {
      en: "Scalable architecture that grows with your business, whether you’re a startup or an enterprise.",
      ar: "بنية قابلة للتوسع تنمو مع عملك سواء كنت شركة ناشئة أو مؤسسة.",
      he: "ארכיטקטורה גמישה שגדלה עם העסק שלך, בין אם אתה סטארטאפ או ארגון."
    },
    {
      en: "Seamless integration with tools you already use for smoother workflows.",
      ar: "تكامل سلس مع الأدوات التي تستخدمها بالفعل لتسهيل سير العمل.",
      he: "אינטגרציה חלקה עם כלים שכבר בשימושך לזרימת עבודה חלקה."
    },
    {
      en: "Bank-level security to protect your data and ensure reliability.",
      ar: "أمان بمستوى البنوك لحماية بياناتك وضمان الموثوقية.",
      he: "אבטחה ברמת בנק להגנה על הנתונים שלך ולהבטחת אמינות."
    },
    {
      en: "24/7 expert support to guide you at every step of your journey.",
      ar: "دعم خبراء على مدار الساعة لإرشادك في كل خطوة.",
      he: "תמיכה מקצועית 24/7 שמלווה אותך בכל שלב."
    }
  ],
  collabTitle: {
    en: "Collaboration That Drives Success",
    ar: "تعاون يقود إلى النجاح",
    he: "שיתוף פעולה שמוביל להצלחה"
  },
  collaborations: [
    {
      title: {
        en: "Team Productivity",
        ar: "إنتاجية الفريق",
        he: "פרודוקטיביות צוות"
      },
      desc: {
        en: "Boost collaboration across teams with real-time document sharing and integrated workflows.",
        ar: "عزز التعاون بين الفرق من خلال مشاركة المستندات في الوقت الفعلي وتدفقات العمل المتكاملة.",
        he: "שפר שיתוף פעולה בין צוותים עם שיתוף מסמכים בזמן אמת וזרימות עבודה משולבות."
      }
    },
    {
      title: {
        en: "Client Engagement",
        ar: "تفاعل العملاء",
        he: "מעורבות לקוחות"
      },
      desc: {
        en: "Engage with clients through a centralized dashboard and transparent communication tools.",
        ar: "تفاعل مع العملاء من خلال لوحة تحكم مركزية وأدوات تواصل شفافة.",
        he: "התחבר ללקוחות דרך לוח בקרה מרכזי וכלי תקשורת שקופים."
      }
    },
    {
      title: {
        en: "Partner Ecosystem",
        ar: "نظام الشركاء",
        he: "מערכת שותפים"
      },
      desc: {
        en: "Collaborate with partners securely and streamline your joint ventures effectively.",
        ar: "تعاون مع الشركاء بأمان وسهّل مشاريعك المشتركة بفعالية.",
        he: "שתף פעולה עם שותפים בבטחה וייעל מיזמים משותפים ביעילות."
      }
    }
  ],
  partnersTitle: {
    en: "Trusted By Our Partners",
    ar: "موثوق به من قبل شركائنا",
    he: "נאמנים על ידי השותפים שלנו"
  },
  journeyTitle: {
    en: "Our Journey Towards Innovation",
    ar: "رحلتنا نحو الابتكار",
    he: "המסע שלנו לעבר חדשנות"
  },
  milestones: [
    {
      year: "2018",
      title: {
        en: "Foundation",
        ar: "التأسيس",
        he: "הקמה"
      },
      desc: {
        en: "Stackly Solutions was born with a mission to deliver smarter IT services.",
        ar: "تأسست Stackly Solutions بهدف تقديم خدمات تكنولوجيا معلومات أكثر ذكاءً.",
        he: "Stackly Solutions נוסדה במטרה לספק שירותי IT חכמים יותר."
      }
    },
    {
      year: "2020",
      title: {
        en: "Expansion",
        ar: "التوسع",
        he: "התרחבות"
      },
      desc: {
        en: "We expanded into cloud-native technologies, scaling solutions for enterprises.",
        ar: "توسعنا في تقنيات السحابة الأصلية، وقدمنا حلولاً قابلة للتوسع للمؤسسات.",
        he: "התרחבנו לטכנולוגיות ענן, והגדלנו פתרונות לארגונים."
      }
    },
    {
      year: "2022",
      title: {
        en: "Innovation",
        ar: "الابتكار",
        he: "חדשנות"
      },
      desc: {
        en: "Introduced AI-powered features to drive automation and intelligence.",
        ar: "قدمنا ميزات مدعومة بالذكاء الاصطناعي لتعزيز الأتمتة والذكاء.",
        he: "הצגנו תכונות מבוססות בינה מלאכותית להנעת אוטומציה ואינטליגנציה."
      }
    },
    {
      year: "2024",
      title: {
        en: "Global Reach",
        ar: "الانتشار العالمي",
        he: "הגעה עולמית"
      },
      desc: {
        en: "Partnered with leading organizations worldwide to transform businesses.",
        ar: "تعاونّا مع مؤسسات رائدة حول العالم لتحويل الأعمال.",
        he: "שיתפנו פעולה עם ארגונים מובילים ברחבי העולם לשינוי עסקים."
      }
    }
  ],
  ctaTitle: {
    en: "Let’s Build the Future Together",
    ar: "لنُبني المستقبل معًا",
    he: "בואו נבנה את העתיד יחד"
  },
  ctaDesc: {
    en: "Transform your vision into reality with our cutting-edge solutions. Reach out to us and start your journey today.",
    ar: "حوّل رؤيتك إلى واقع مع حلولنا المتطورة. تواصل معنا وابدأ رحلتك اليوم.",
    he: "הפוך את החזון שלך למציאות עם הפתרונות המתקדמים שלנו. צור קשר והתחל את המסע שלך היום."
  },
  ctaBtn: {
    en: "Let’s Talk",
    ar: "تواصل معنا",
    he: "בוא נדבר"
  }
};

const partnerLogos = [logo1, logo2, logo3, logo4, logo5, logo6];

const pageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Home2 = () => {
  const { language } = useLanguage();
  const isRTL = language === "ar" || language === "he";

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <motion.div
      className="w-screen h-auto overflow-x-hidden m-0 p-0"
      dir={isRTL ? "rtl" : "ltr"}
      style={{ textAlign: isRTL ? "right" : "left" }}
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      {/* Hero Section */}
      <motion.section className="relative w-screen h-screen m-0 p-0" variants={pageVariants}>
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={home2}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-white/40 dark:bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight text-black dark:text-white"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {translations.heroTitle[language]}
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-2xl max-w-3xl text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {translations.heroDesc[language]}
          </motion.p>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section className="w-full bg-gray-50 py-5 dark:bg-gray-900" variants={pageVariants}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6 leading-snug">
              {translations.featuresTitle[language]}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 text-justify">
              {translations.featuresDesc[language]}
            </p>
            <ul className="space-y-5">
              {translations.featuresList.map((item, idx) => (
                <li className="flex items-start gap-3" key={idx}>
                  <span className="w-3 h-3 mt-2 rounded-full bg-indigo-600"></span>
                  <p className="text-gray-700 dark:text-gray-300 text-justify">
                    {item[language]}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={featureImg}
              alt="Platform features"
              className="rounded-2xl shadow-lg w-full max-w-md object-contain"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Collaboration Carousel Section */}
      <motion.section className="w-full bg-white py-16 dark:bg-gray-800" variants={pageVariants}>
        <div className="max-w-6xl mx-auto text-center px-6">
          <motion.h2
            className="text-3xl font-bold text-gray-900 dark:text-white mb-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {translations.collabTitle[language]}
          </motion.h2>
          <Slider {...sliderSettings}>
            {translations.collaborations.map((item, i) => (
              <div key={i} className="px-6">
                <motion.div
                  className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  <img
                    src={[productivity, client, partner][i]}
                    alt={item.title[language]}
                    className="w-full md:w-1/2 h-64 object-cover"
                  />
                  <div className="p-6 md:w-1/2 text-left">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                      {item.title[language]}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {item.desc[language]}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </motion.section>

      {/* Partner Logos Section */}
      <motion.section className="w-full bg-gray-50 dark:bg-gray-900 py-5" variants={pageVariants}>
        <div className="max-w-7xl mx-auto text-center px-6">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {translations.partnersTitle[language]}
          </motion.h2>
          <Slider
            dots={false}
            infinite={true}
            speed={3000}
            slidesToShow={5}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={0}
            cssEase="linear"
            arrows={false}
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 4 } },
              { breakpoint: 768, settings: { slidesToShow: 3 } },
              { breakpoint: 480, settings: { slidesToShow: 2 } },
            ]}
          >
            {partnerLogos.map((logo, idx) => (
              <div key={idx} className="flex justify-center px-4">
                <div className="w-32 h-20 flex items-center justify-center bg-white dark:bg-gray-800 rounded-md shadow-sm">
                  <img
                    src={logo}
                    alt={`Partner ${idx + 1}`}
                    className="max-h-12 object-contain"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </motion.section>

      {/* Company Growth Journey Section */}
      <motion.section className="w-full bg-gradient-to-b from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-10" variants={pageVariants}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {translations.journeyTitle[language]}
          </motion.h2>
          <div className="space-y-12">
            {translations.milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.3, duration: 0.6 }}
              >
                <div className="flex-shrink-0 w-28 h-28 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg hover:scale-110 transition-transform duration-300">
                  {milestone.year}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 transition-colors">
                    {milestone.title[language]}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 max-w-xl">
                    {milestone.desc[language]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="relative w-full bg-fixed bg-center bg-cover py-32"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')`,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {translations.ctaTitle[language]}
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl mb-10 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {translations.ctaDesc[language]}
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {translations.ctaBtn[language]}
          </motion.a>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home2;