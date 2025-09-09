
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import contentImg from "../images/content.jpg";
import seoo from "../images/partner.jpg";
import onpageIcon from "../images/onpage.svg";
import technicalIcon from "../images/technical.svg";
import linkIcon from "../images/link.svg";
import analytics from "../images/chart.svg";
import { useLanguage } from "../LanguageContext";

const translations = {
  en: {
    heroTitle: "Content Marketing Services",
    heroDesc: "Create powerful, engaging, and high-converting content strategies that build authority, connect with your audience, and drive business growth.",
    engageTitle: "Engage, Educate & Convert",
    engageDesc: "From blog articles and social media content to video storytelling and newsletters, we craft content that not only attracts but also nurtures and converts your audience.",
    features: [
      "Content Strategy & Planning",
      "Blog & Article Writing",
      "Social Media Campaigns",
      "Video & Visual Storytelling",
    ],
    coreTitle: "Core Content Marketing Services",
    coreDesc: "Build authority, connect with your audience, and drive conversions with our full-stack content marketing solutions.",
    coreServices: [
      {
        icon: onpageIcon,
        title: "Blog & Article Writing",
        desc: "Engaging, SEO-friendly articles that establish authority and boost visibility.",
      },
      {
        icon: technicalIcon,
        title: "Social Media Content",
        desc: "Scroll-stopping content crafted to engage and grow your community.",
      },
      {
        icon: linkIcon,
        title: "Video & Infographics",
        desc: "Eye-catching visuals and videos designed to boost engagement and retention.",
      },
      {
        icon: analytics,
        title: "Content Analytics",
        desc: "Data-driven insights to refine campaigns and maximize ROI.",
      },
    ],
    plansTitle: "Flexible Content Marketing Plans",
    plansDesc: "Choose a content plan that suits your growth stage, or join our content team to create impactful stories.",
    plans: [
      {
        title: "Starter Content",
        price: "$299/mo",
        description: "Ideal for startups and small businesses building their brand presence.",
        features: [
          "4 Blog Posts / Month",
          "Basic Social Media Content",
          "Keyword-Optimized Articles",
          "Monthly Performance Report",
        ],
        highlight: false,
      },
      {
        title: "Growth Content",
        price: "$699/mo",
        description: "For businesses ready to expand reach and grow authority.",
        features: [
          "12 Blog Posts / Month",
          "Social Media Campaigns",
          "Email Newsletter Creation",
          "Content Calendar Strategy",
          "Bi-Weekly Reporting",
        ],
        highlight: true,
      },
      {
        title: "Enterprise Content",
        price: "$1499/mo",
        description: "Advanced content solutions tailored for large enterprises.",
        features: [
          "Unlimited Blog Posts & Articles",
          "Video & Infographic Content",
          "Dedicated Content Strategist",
          "SEO & Content Integration",
          "Weekly Analytics Report",
        ],
        highlight: false,
      },
    ],
    joinersTitle: "Opportunities for Content Creators",
    joiners: [
      {
        role: "Content Writer Intern",
        stipend: "$200 - $400 / month",
        benefits: ["Hands-on Training", "Mentorship", "Portfolio Projects"],
      },
      {
        role: "Content Strategist",
        stipend: "$1000 - $1500 / month",
        benefits: ["Live Campaigns", "Career Growth", "Performance Bonus"],
      },
      {
        role: "Content Partner",
        stipend: "Revenue Sharing",
        benefits: ["Profit Sharing Model", "Brand Co-Creation", "Long-term Growth"],
      },
    ],
    ctaTitle: "Ready to tell your brand’s story?",
    ctaDesc: "Book a free content strategy session and unlock opportunities for growth.",
    ctaBtn: "Get Strategy",
    getStarted: "Get Started",
  },
  ar: {
    heroTitle: "خدمات تسويق المحتوى",
    heroDesc: "أنشئ استراتيجيات محتوى قوية وجذابة وعالية التحويل تبني السلطة، وتربطك بجمهورك، وتدفع نمو الأعمال.",
    engageTitle: "اجذب، علم وحول",
    engageDesc: "من المقالات والمدونات إلى محتوى وسائل التواصل الاجتماعي والفيديو والنشرات الإخبارية، نصنع محتوى يجذب ويغذي ويحول جمهورك.",
    features: [
      "استراتيجية وتخطيط المحتوى",
      "كتابة المدونات والمقالات",
      "حملات وسائل التواصل الاجتماعي",
      "سرد القصص بالفيديو والصور",
    ],
    coreTitle: "خدمات تسويق المحتوى الأساسية",
    coreDesc: "ابنِ السلطة، وتواصل مع جمهورك، وزد التحويلات بحلول تسويق المحتوى الشاملة لدينا.",
    coreServices: [
      {
        icon: onpageIcon,
        title: "كتابة المدونات والمقالات",
        desc: "مقالات جذابة وصديقة لتحسين محركات البحث تعزز السلطة والرؤية.",
      },
      {
        icon: technicalIcon,
        title: "محتوى وسائل التواصل الاجتماعي",
        desc: "محتوى يوقف التمرير مصمم لجذب وتنمية مجتمعك.",
      },
      {
        icon: linkIcon,
        title: "الفيديو والإنفوجرافيك",
        desc: "صور وفيديوهات لافتة للنظر مصممة لزيادة التفاعل والاحتفاظ.",
      },
      {
        icon: analytics,
        title: "تحليلات المحتوى",
        desc: "رؤى قائمة على البيانات لتحسين الحملات وتعظيم العائد.",
      },
    ],
    plansTitle: "خطط تسويق محتوى مرنة",
    plansDesc: "اختر خطة محتوى تناسب مرحلة نموك أو انضم إلى فريقنا لصنع قصص مؤثرة.",
    plans: [
      {
        title: "محتوى مبتدئ",
        price: "$299/شهر",
        description: "مثالي للشركات الناشئة والصغيرة لبناء حضور علامتها التجارية.",
        features: [
          "4 مقالات / شهر",
          "محتوى أساسي لوسائل التواصل",
          "مقالات محسنة للكلمات الرئيسية",
          "تقرير أداء شهري",
        ],
        highlight: false,
      },
      {
        title: "محتوى النمو",
        price: "$699/شهر",
        description: "للشركات الجاهزة لتوسيع نطاقها وزيادة سلطتها.",
        features: [
          "12 مقالة / شهر",
          "حملات وسائل التواصل الاجتماعي",
          "إنشاء نشرات بريدية",
          "استراتيجية تقويم المحتوى",
          "تقرير نصف شهري",
        ],
        highlight: true,
      },
      {
        title: "محتوى المؤسسات",
        price: "$1499/شهر",
        description: "حلول محتوى متقدمة مصممة للمؤسسات الكبيرة.",
        features: [
          "مقالات غير محدودة",
          "محتوى فيديو وإنفوجرافيك",
          "استراتيجي محتوى مخصص",
          "تكامل تحسين محركات البحث والمحتوى",
          "تقرير تحليلات أسبوعي",
        ],
        highlight: false,
      },
    ],
    joinersTitle: "فرص لصناع المحتوى",
    joiners: [
      {
        role: "متدرب كاتب محتوى",
        stipend: "$200 - $400 / شهر",
        benefits: ["تدريب عملي", "إرشاد", "مشاريع محفظة"],
      },
      {
        role: "استراتيجي محتوى",
        stipend: "$1000 - $1500 / شهر",
        benefits: ["حملات مباشرة", "نمو مهني", "مكافأة أداء"],
      },
      {
        role: "شريك محتوى",
        stipend: "تقاسم الأرباح",
        benefits: ["نموذج مشاركة الأرباح", "إنشاء علامة تجارية مشتركة", "نمو طويل الأمد"],
      },
    ],
    ctaTitle: "جاهز لسرد قصة علامتك التجارية؟",
    ctaDesc: "احجز جلسة استراتيجية محتوى مجانية وافتح فرص النمو.",
    ctaBtn: "احصل على الاستراتيجية",
    getStarted: "ابدأ الآن",
  },
  he: {
    heroTitle: "שירותי שיווק תוכן",
    heroDesc: "צרו אסטרטגיות תוכן עוצמתיות, מרתקות וממירות שמביאות סמכות, חיבור עם הקהל וצמיחה עסקית.",
    engageTitle: "רתקו, חנכו והמירו",
    engageDesc: "ממאמרים ופוסטים ועד תוכן וידאו וניוזלטרים, אנו יוצרים תוכן שמושך, מטפח וממיר קהל.",
    features: [
      "אסטרטגיה ותכנון תוכן",
      "כתיבת בלוגים ומאמרים",
      "קמפיינים ברשתות חברתיות",
      "סיפור ויזואלי ווידאו",
    ],
    coreTitle: "שירותי שיווק תוכן עיקריים",
    coreDesc: "בנו סמכות, התחברו עם הקהל והגדילו המרות עם פתרונות שיווק תוכן מלאים.",
    coreServices: [
      {
        icon: onpageIcon,
        title: "כתיבת בלוגים ומאמרים",
        desc: "מאמרים מרתקים וידידותיים ל-SEO שמבססים סמכות ומגבירים נראות.",
      },
      {
        icon: technicalIcon,
        title: "תוכן לרשתות חברתיות",
        desc: "תוכן עוצר גלילה שמגביר מעורבות וצמיחת קהילה.",
      },
      {
        icon: linkIcon,
        title: "וידאו ואינפוגרפיקות",
        desc: "ויז'ואלים ווידאו שמגבירים מעורבות ושימור.",
      },
      {
        icon: analytics,
        title: "אנליטיקת תוכן",
        desc: "תובנות מבוססות נתונים לשיפור קמפיינים ומקסום ROI.",
      },
    ],
    plansTitle: "תוכניות שיווק תוכן גמישות",
    plansDesc: "בחרו תוכנית תוכן שמתאימה לשלב הצמיחה שלכם או הצטרפו לצוות שלנו ליצירת סיפורים משפיעים.",
    plans: [
      {
        title: "תוכן מתחילים",
        price: "$299/חודש",
        description: "מתאים לסטארטאפים ועסקים קטנים לבניית נוכחות מותג.",
        features: [
          "4 פוסטים / חודש",
          "תוכן בסיסי לרשתות חברתיות",
          "מאמרים מותאמי מילות מפתח",
          "דוח ביצועים חודשי",
        ],
        highlight: false,
      },
      {
        title: "תוכן צמיחה",
        price: "$699/חודש",
        description: "לעסקים שמוכנים להתרחב ולהגדיל סמכות.",
        features: [
          "12 פוסטים / חודש",
          "קמפיינים ברשתות חברתיות",
          "יצירת ניוזלטרים",
          "אסטרטגיית לוח תוכן",
          "דיווח דו-שבועי",
        ],
        highlight: true,
      },
      {
        title: "תוכן לארגונים",
        price: "$1499/חודש",
        description: "פתרונות תוכן מתקדמים לארגונים גדולים.",
        features: [
          "פוסטים ומאמרים ללא הגבלה",
          "וידאו ואינפוגרפיקות",
          "אסטרטג תוכן ייעודי",
          "שילוב SEO ותוכן",
          "דוח אנליטיקות שבועי",
        ],
        highlight: false,
      },
    ],
    joinersTitle: "הזדמנויות ליוצרי תוכן",
    joiners: [
      {
        role: "מתמחה כתיבת תוכן",
        stipend: "$200 - $400 / חודש",
        benefits: ["הכשרה מעשית", "חונכות", "פרויקטים לתיק עבודות"],
      },
      {
        role: "אסטרטג תוכן",
        stipend: "$1000 - $1500 / חודש",
        benefits: ["קמפיינים חיים", "צמיחה מקצועית", "בונוס ביצועים"],
      },
      {
        role: "שותף תוכן",
        stipend: "חלוקת רווחים",
        benefits: ["מודל שיתוף רווחים", "יצירת מותג משותף", "צמיחה ארוכת טווח"],
      },
    ],
    ctaTitle: "מוכנים לספר את סיפור המותג שלכם?",
    ctaDesc: "קבעו פגישת אסטרטגיית תוכן חינם ופתחו הזדמנויות לצמיחה.",
    ctaBtn: "קבלו אסטרטגיה",
    getStarted: "התחל עכשיו",
  },
};

const ContentMarketing = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const isRTL = language === "ar" || language === "he";

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const cardHover = { scale: 1.05, y: -6 };
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.18, duration: 0.6 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div dir={isRTL ? "rtl" : "ltr"} style={{ textAlign: isRTL ? "right" : "left" }}>
      {/* Hero Section */}
      <section className="relative w-screen h-screen m-0 p-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          src={contentImg}
          alt="Content Marketing Background"
        />
        <div className="absolute inset-0 bg-black/50 transition-colors duration-500" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight text-white"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p
            className="mt-6 text-lg md:text-2xl max-w-4xl text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {t.heroDesc}
          </motion.p>
        </div>
      </section>

      {/* Image + Content Section */}
      <section className="w-screen py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <motion.div
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={seoo}
              alt="Content Strategy"
              className="rounded-2xl shadow-lg object-cover w-full sm:w-10/12 md:w-full"
            />
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 text-left"
            variants={itemVariants}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 hover:text-blue-600 dark:hover:text-white"
              whileHover={{ scale: 1.02 }}
            >
              {t.engageTitle}
            </motion.h2>
            <motion.p
              className="text-gray-700 dark:text-gray-300 mb-8 text-justify"
              variants={itemVariants}
            >
              {t.engageDesc}
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 cursor-pointer transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ x: 5, scale: 1.03 }}
                >
                  <span className="w-5 h-5 bg-blue-600 rounded-full flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Core Content Marketing Services */}
      <section className="w-full py-5 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t.coreTitle}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t.coreDesc}
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.coreServices.map((service, idx) => (
            <motion.article
              key={idx}
              className="service-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={cardHover}
            >
              <div className="flex items-start gap-4">
                <img src={service.icon} alt={service.title} className="w-12 h-12 object-contain" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{service.title}</h4>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{service.desc}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Pricing + Joiners Section */}
      <section className="w-full py-20 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t.plansTitle}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t.plansDesc}
          </motion.p>
        </div>
        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {t.plans.map((plan, idx) => (
            <motion.div
              key={idx}
              className={`p-8 rounded-2xl shadow-lg border ${
                plan.highlight
                  ? "bg-blue-600 text-white border-blue-600 scale-105"
                  : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              }`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={cardHover}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className={`text-2xl font-bold mb-3 ${plan.highlight ? "text-white" : ""}`}>
                {plan.title}
              </h3>
              <p className={`text-lg mb-4 opacity-90 ${plan.highlight ? "text-white/90" : ""}`}>
                {plan.description}
              </p>
              <div className={`text-3xl font-extrabold mb-6 ${plan.highlight ? "text-white" : ""}`}>
                {plan.price}
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className={plan.highlight ? "text-white" : "text-gray-700 dark:text-gray-300"}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`w-full inline-block text-center py-3 rounded-full font-semibold transition ${
                  plan.highlight
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {t.getStarted}
              </Link>
            </motion.div>
          ))}
        </div>
        {/* Joiners Section */}
        <div className="max-w-7xl mx-auto">
          <motion.h3
            className="text-2xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t.joinersTitle}
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.joiners.map((join, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover={cardHover}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{join.role}</h4>
                <p className="text-lg font-bold text-blue-600 mb-3">{join.stipend}</p>
                <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                  {join.benefits.map((benefit, i) => (
                    <li key={i}>• {benefit}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Row */}
      <motion.div
        className="mt-12 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          {t.ctaTitle}
        </h3>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          {t.ctaDesc}
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
          >
            {t.ctaBtn}
          </Link>
        </div>
      </motion.div>
  </div>
  );
};

export default ContentMarketing;
