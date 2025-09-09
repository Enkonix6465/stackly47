import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

import video from "../images/video1.mp4";
import home1 from "../images/home1.jpg";
import home2 from "../images/home2.jpg";

// Icons & Images
import opt from "../images/opt.svg";
import digitalCampaign from "../images/webm.jpg";
import websiteDev from "../images/webm.svg";
import socialGrowth from "../images/social.svg";
import analytics from "../images/chart.svg";
import contentStrategy from "../images/content.svg";
import team from "../images/team.svg";
import clients from "../images/client.svg";
import campaigns from "../images/webm.jpg";
import projects from "../images/projects.svg";

const services = [
  {
    icon: opt,
    title: {
      en: "SEO Optimization",
      ar: "تحسين محركات البحث",
      he: "קידום אתרים"
    },
    desc: {
      en: "Boost your visibility with cutting-edge SEO strategies that rank you higher on search engines.",
      ar: "عزز ظهورك مع استراتيجيات تحسين محركات البحث المتقدمة التي ترفع ترتيبك في محركات البحث.",
      he: "שפר את הנראות שלך עם אסטרטגיות קידום אתרים מתקדמות שממקמות אותך גבוה יותר במנועי חיפוש."
    }
  },
  {
    icon: digitalCampaign,
    title: {
      en: "Digital Campaigns",
      ar: "حملات رقمية",
      he: "קמפיינים דיגיטליים"
    },
    desc: {
      en: "Drive results with high-converting ad campaigns across Google, Meta, and LinkedIn.",
      ar: "حقق نتائج مع حملات إعلانية فعالة عبر Google وMeta وLinkedIn.",
      he: "השג תוצאות עם קמפיינים ממירים בגוגל, מטא ולינקדאין."
    }
  },
  {
    icon: websiteDev,
    title: {
      en: "Website Development",
      ar: "تطوير المواقع",
      he: "פיתוח אתרים"
    },
    desc: {
      en: "Build stunning, responsive websites designed to engage visitors and convert leads.",
      ar: "أنشئ مواقع مذهلة ومتجاوبة لجذب الزوار وتحويلهم إلى عملاء.",
      he: "בנה אתרים מרהיבים ורספונסיביים שממגנטים מבקרים וממירים לידים."
    }
  },
  {
    icon: socialGrowth,
    title: {
      en: "Social Media Growth",
      ar: "نمو وسائل التواصل الاجتماعي",
      he: "צמיחה ברשתות החברתיות"
    },
    desc: {
      en: "Expand your reach and build loyal communities with tailored social strategies.",
      ar: "وسع نطاقك وابنِ مجتمعات وفية باستراتيجيات اجتماعية مخصصة.",
      he: "הרחב את ההשפעה שלך ובנה קהילות נאמנות עם אסטרטגיות חברתיות מותאמות."
    }
  },
  {
    icon: analytics,
    title: {
      en: "Analytics & Insights",
      ar: "التحليلات والرؤى",
      he: "אנליטיקה ותובנות"
    },
    desc: {
      en: "Make data-driven decisions with real-time analytics dashboards and reports.",
      ar: "اتخذ قرارات مبنية على البيانات مع لوحات تحكم وتقارير تحليلية فورية.",
      he: "קבל החלטות מבוססות נתונים עם לוחות מחוונים ודוחות בזמן אמת."
    }
  },
  {
    icon: contentStrategy,
    title: {
      en: "Content Strategy",
      ar: "استراتيجية المحتوى",
      he: "אסטרטגיית תוכן"
    },
    desc: {
      en: "Engage your audience with impactful content marketing that drives brand awareness.",
      ar: "اجذب جمهورك بتسويق محتوى مؤثر يعزز الوعي بالعلامة التجارية.",
      he: "רתום את הקהל שלך עם שיווק תוכן אפקטיבי שמגביר את המודעות למותג."
    }
  }
];

const workflowSteps = [
  { step: "1", title: { en: "Consultation", ar: "استشارة", he: "ייעוץ" }, desc: { en: "We understand your goals and craft strategies tailored to your business.", ar: "نفهم أهدافك ونصمم استراتيجيات مخصصة لعملك.", he: "אנו מבינים את המטרות שלך ובונים אסטרטגיות מותאמות לעסק שלך." } },
  { step: "2", title: { en: "Planning", ar: "تخطيط", he: "תכנון" }, desc: { en: "Develop detailed action plans to achieve measurable results efficiently.", ar: "نطور خطط عمل مفصلة لتحقيق نتائج قابلة للقياس بكفاءة.", he: "מפתחים תוכניות פעולה מפורטות להשגת תוצאות מדידות ביעילות." } },
  { step: "3", title: { en: "Execution", ar: "تنفيذ", he: "ביצוע" }, desc: { en: "Implement campaigns with creativity, technology, and data-driven insights.", ar: "ننفذ الحملات بإبداع وتكنولوجيا ورؤى قائمة على البيانات.", he: "מיישמים קמפיינים עם יצירתיות, טכנולוגיה ותובנות מבוססות נתונים." } },
  { step: "4", title: { en: "Optimization", ar: "تحسين", he: "אופטימיזציה" }, desc: { en: "Analyze performance and refine strategies for continuous growth.", ar: "نحلل الأداء ونحسن الاستراتيجيات لتحقيق نمو مستمر.", he: "מנתחים ביצועים ומשפרים אסטרטגיות לצמיחה מתמשכת." } },
];

const Home1 = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isRTL = language === "ar" || language === "he";

  // Translations for static text
  const t = {
    heroTitle: {
      en: "Elevate Your Digital Presence",
      ar: "ارتقِ بحضورك الرقمي",
      he: "העצם את הנוכחות הדיגיטלית שלך"
    },
    heroDesc: {
      en: "We help brands grow with innovative digital marketing strategies that drive results.",
      ar: "نساعد العلامات التجارية على النمو باستراتيجيات تسويق رقمية مبتكرة تحقق النتائج.",
      he: "אנו עוזרים למותגים לצמוח עם אסטרטגיות שיווק דיגיטלי חדשניות שמביאות תוצאות."
    },
    getStarted: { en: "Get Started", ar: "ابدأ الآن", he: "התחל עכשיו" },
    learnMore: { en: "Learn More", ar: "اعرف المزيد", he: "למידע נוסף" },
    aboutUs: { en: "About Us", ar: "من نحن", he: "עלינו" },
    aboutDesc: {
      en: "At our digital marketing agency, we focus on helping businesses grow through innovative strategies and measurable results. Our team specializes in SEO, content marketing, social media management, and web development. We work closely with clients to understand their goals and create campaigns tailored to their audience. By combining creativity with data-driven insights, we ensure each project delivers maximum ROI. Our approach emphasizes sustainable growth, effective branding, and cutting-edge digital solutions. We are passionate about transforming brands into market leaders and building long-term partnerships. Our mission is to drive your business forward while creating meaningful engagement with your audience.",
      ar: "في وكالتنا للتسويق الرقمي، نركز على مساعدة الشركات على النمو من خلال استراتيجيات مبتكرة ونتائج قابلة للقياس. يتخصص فريقنا في تحسين محركات البحث، تسويق المحتوى، إدارة وسائل التواصل الاجتماعي، وتطوير الويب. نعمل عن كثب مع العملاء لفهم أهدافهم وإنشاء حملات مخصصة لجمهورهم. من خلال الجمع بين الإبداع والرؤى المستندة إلى البيانات، نضمن أن كل مشروع يحقق أقصى عائد على الاستثمار. يركز نهجنا على النمو المستدام، وبناء العلامة التجارية الفعالة، والحلول الرقمية المتطورة. نحن شغوفون بتحويل العلامات التجارية إلى قادة السوق وبناء شراكات طويلة الأمد. مهمتنا هي دفع عملك للأمام وخلق تفاعل هادف مع جمهورك.",
      he: "בסוכנות השיווק הדיגיטלי שלנו אנו מתמקדים בצמיחת עסקים באמצעות אסטרטגיות חדשניות ותוצאות מדידות. הצוות שלנו מתמחה בקידום אתרים, שיווק תוכן, ניהול מדיה חברתית ופיתוח אתרים. אנו עובדים בצמוד ללקוחות להבנת מטרותיהם ויצירת קמפיינים מותאמים לקהל היעד. בשילוב יצירתיות ותובנות מבוססות נתונים, אנו מבטיחים שכל פרויקט יניב החזר השקעה מקסימלי. הגישה שלנו מדגישה צמיחה בת קיימא, מיתוג אפקטיבי ופתרונות דיגיטליים מתקדמים. אנו נלהבים להפוך מותגים למובילי שוק ולבנות שותפויות ארוכות טווח. המשימה שלנו היא להצעיד את העסק שלך קדימה וליצור מעורבות משמעותית עם הקהל שלך."
    },
    whatWeDo: { en: "What We Do", ar: "ماذا نفعل", he: "מה אנחנו עושים" },
    whatWeDoDesc: {
      en: "Our full-stack digital marketing services are designed to grow your brand and maximize ROI.",
      ar: "خدمات التسويق الرقمي الشاملة لدينا مصممة لتنمية علامتك التجارية وتعظيم العائد على الاستثمار.",
      he: "שירותי השיווק הדיגיטלי המלאים שלנו נועדו להגדיל את המותג שלך ולמקסם את ההחזר על ההשקעה."
    },
    ourImpact: { en: "Our Impact in Numbers", ar: "تأثيرنا بالأرقام", he: "ההשפעה שלנו במספרים" },
    ourImpactDesc: {
      en: "See how we’ve helped brands grow with measurable results and outstanding performance.",
      ar: "شاهد كيف ساعدنا العلامات التجارية على النمو بنتائج قابلة للقياس وأداء متميز.",
      he: "ראו כיצד עזרנו למותגים לצמוח עם תוצאות מדידות וביצועים יוצאי דופן."
    },
    howWeWork: { en: "How We Work", ar: "كيف نعمل", he: "איך אנחנו עובדים" },
    howWeWorkDesc: {
      en: "Our step-by-step approach ensures measurable results and consistent growth.",
      ar: "نهجنا خطوة بخطوة يضمن نتائج قابلة للقياس ونموًا مستمرًا.",
      he: "הגישה שלנו שלב אחר שלב מבטיחה תוצאות מדידות וצמיחה עקבית."
    },
    ctaTitle: { en: "Let’s Elevate Your Brand", ar: "لنرتقي بعلامتك التجارية", he: "בואו נרים את המותג שלך" },
    ctaDesc: {
      en: "Ready to grow your business with innovative digital marketing strategies? Reach out today and let’s get started!",
      ar: "هل أنت مستعد لتنمية عملك باستراتيجيات تسويق رقمية مبتكرة؟ تواصل معنا اليوم ولنبدأ!",
      he: "מוכנים להגדיל את העסק שלכם עם אסטרטגיות שיווק דיגיטלי חדשניות? צרו קשר היום ונתחיל!"
    },
    contactUs: { en: "Contact Us", ar: "اتصل بنا", he: "צור קשר" },
    stats: [
      {
        number: 120,
        label: { en: "Projects Completed", ar: "مشاريع مكتملة", he: "פרויקטים שהושלמו" },
        icon: projects
      },
      {
        number: 95,
        label: { en: "Happy Clients", ar: "عملاء سعداء", he: "לקוחות מרוצים" },
        icon: clients
      },
      {
        number: 50,
        label: { en: "Team Members", ar: "أعضاء الفريق", he: "חברי צוות" },
        icon: team
      },
      {
        number: 200,
        label: { en: "Campaigns Launched", ar: "حملات تم إطلاقها", he: "קמפיינים שהושקו" },
        icon: campaigns
      }
    ]
  };

  return (
    <div
      className="w-screen h-auto overflow-x-hidden m-0 p-0"
      dir={isRTL ? "rtl" : "ltr"}
      style={{ textAlign: isRTL ? "right" : "left" }}
    >
      {/* Hero Section */}
      <section className="relative w-screen h-screen m-0 p-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-white/40 dark:bg-black/50 transition-colors duration-500" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full">
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight text-black dark:text-white"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {t.heroTitle[language]}
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-2xl max-w-3xl text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {t.heroDesc[language]}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            {/* Navigation Buttons */}
            <button
              onClick={() => navigate("/about")}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium text-white shadow-lg transition"
            >
              {t.getStarted[language]}
            </button>
            <button
              onClick={() => navigate("/services")}
              className="px-6 py-3 bg-black/20 hover:bg-black/30 dark:bg-white/20 dark:hover:bg-white/30 rounded-full font-medium text-black dark:text-white shadow-lg transition backdrop-blur"
            >
              {t.learnMore[language]}
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="w-screen bg-gray-50 dark:bg-gray-900 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
          <div className="w-full lg:w-1/2 flex justify-center items-start relative mb-8 lg:mb-0">
            <motion.img
              src={home2}
              alt="Digital Marketing"
              className="rounded-2xl shadow-lg object-cover w-full sm:w-11/12 lg:w-72 lg:h-72 absolute -mt-16 sm:-mt-20 lg:mt-0 left-0"
              initial={{ opacity: 0, x: -20, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            />
            <motion.img
              src={home1}
              alt="SEO Strategy"
              className="rounded-2xl shadow-lg object-cover w-10/12 sm:w-10/12 lg:w-64 lg:h-64 absolute -mt-10 sm:-mt-14 lg:mt-32 left-4 sm:left-6 lg:left-40 rotate-3"
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            />
          </div>
          <motion.div
            className="w-full lg:w-1/2 text-left px-4 lg:px-6 mt-56 sm:mt-64 lg:mt-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{t.aboutUs[language]}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-justify">
              {t.aboutDesc[language]}
            </p>
            <button
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium shadow-lg transition transform hover:scale-105"
              onClick={() => navigate("/contact")}
            >
              {t.learnMore[language]}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-screen min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black pt-6 pb-20 px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">{t.whatWeDo[language]}</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.whatWeDoDesc[language]}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <img src={service.icon} alt={service.title[language]} className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{service.title[language]}</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">{service.desc[language]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Floating Stats Section */}
      <section id="stats" className="w-screen relative bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-black py-12 px-6 overflow-hidden">
        <motion.div className="text-center relative z-10 p-[5px] mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-[2px]">{t.ourImpact[language]}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.ourImpactDesc[language]}
          </p>
        </motion.div>
        <div className="relative w-full h-96 flex flex-wrap justify-center items-center gap-30 sm:gap-32 z-10">
          {t.stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2 }}
            >
              <motion.div className="mb-4 w-16 h-16" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 + index * 0.3, ease: "easeInOut" }}>
                <img src={stat.icon} alt={stat.label[language]} className="w-full h-full object-contain" />
              </motion.div>
              <motion.div className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">{stat.number}+</motion.div>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{stat.label[language]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Workflow / How We Work Section */}
      <section className="w-screen py-5 px-6 bg-white dark:bg-gray-900">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">{t.howWeWork[language]}</h2>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.howWeWorkDesc[language]}
          </p>
        </motion.div>
        <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-lg cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-xl font-bold mb-4">{step.step}</div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{step.title[language]}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.desc[language]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action / Contact Section */}
      <section
        className="relative w-screen h-screen bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${home1})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div className="relative z-10 text-center px-6" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.ctaTitle[language]}</h2>
          <p className="text-lg md:text-2xl text-white mb-8 max-w-2xl mx-auto">
            {t.ctaDesc[language]}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium text-white shadow-lg transition"
            onClick={() => navigate("/contact")}
          >
            {t.contactUs[language]}
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home1;