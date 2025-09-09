import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import uxImg from "../images/ux.jpg";
import uxImgs from "../images/uximg.jpg";
import uiIcon from "../images/webm.jpg";
import responsiveIcon from "../images/responsive.svg";
import brandingIcon from "../images/branding.svg";
import prototypeIcon from "../images/prototype.jpg";
import { useLanguage } from "../LanguageContext";

const translations = {
  en: {
    heroTitle: "Web Design & UX Services",
    heroDesc: "Crafting engaging, user-friendly, and conversion-focused designs that elevate your brand and digital presence.",
    engageTitle: "Design That Inspires & Converts",
    engageDesc: "Our web design & UX process blends creativity, usability, and strategy—ensuring your users enjoy a seamless digital experience that drives engagement and results.",
    features: [
      "Custom UI/UX Design",
      "Responsive & Mobile-First",
      "Brand Identity & Styling",
      "Interactive Prototyping",
    ],
    coreTitle: "Core Web Design & UX Services",
    coreDesc: "From sleek UI to engaging user experiences, our design services ensure your brand stands out and users keep coming back.",
    coreServices: [
      { icon: uiIcon, title: "UI/UX Design", desc: "Create visually stunning and user-friendly interfaces tailored to your brand." },
      { icon: responsiveIcon, title: "Responsive Design", desc: "Seamless experience across desktops, tablets, and mobile devices." },
      { icon: brandingIcon, title: "Brand Identity", desc: "Build a consistent design language that represents your brand story." },
      { icon: prototypeIcon, title: "Prototyping & Testing", desc: "Validate ideas with interactive prototypes and user testing." },
    ],
    plansTitle: "Flexible Web Design Pricing",
    plansDesc: "Select the plan that fits your brand’s vision, or explore opportunities to join our creative design team.",
    plans: [
      {
        title: "Starter Web Design",
        price: "$299/mo",
        description: "Ideal for startups needing a simple, clean website.",
        features: [
          "5 Page Website",
          "Mobile Responsive Design",
          "Basic Branding Setup",
          "Monthly Support",
        ],
        highlight: false,
      },
      {
        title: "Professional UX",
        price: "$799/mo",
        description: "Perfect for growing businesses with custom needs.",
        features: [
          "15+ Page Website",
          "UI/UX Custom Design",
          "Responsive & Speed Optimized",
          "Interactive Prototypes",
          "Bi-Weekly Updates",
        ],
        highlight: true,
      },
      {
        title: "Enterprise Design",
        price: "$1499/mo",
        description: "Tailored UX & branding solutions for large-scale projects.",
        features: [
          "Unlimited Pages",
          "Dedicated UI/UX Designer",
          "Branding & Style Guide",
          "Advanced Prototyping",
          "Weekly Strategy Calls",
        ],
        highlight: false,
      },
    ],
    joinersTitle: "Opportunities for Design Enthusiasts",
    joiners: [
      {
        role: "UI/UX Intern",
        stipend: "$250 - $400 / month",
        benefits: ["Hands-on Design Projects", "Mentorship", "Portfolio Building"],
      },
      {
        role: "Web Designer",
        stipend: "$1000 - $1500 / month",
        benefits: ["Client Projects", "Creative Freedom", "Career Growth"],
      },
      {
        role: "Design Partner",
        stipend: "Revenue Sharing",
        benefits: ["Collaboration Model", "Profit Sharing", "Long-term Growth"],
      },
    ],
    ctaTitle: "Ready to elevate your brand experience?",
    ctaDesc: "Let’s craft a stunning website and engaging user experience tailored for your audience.",
    ctaBtn: "Start Your Project",
    getStarted: "Get Started",
  },
  ar: {
    heroTitle: "خدمات تصميم المواقع وتجربة المستخدم",
    heroDesc: "نصمم تجارب جذابة وسهلة الاستخدام ترفع من قيمة علامتك التجارية وحضورك الرقمي.",
    engageTitle: "تصميم يلهم ويحوّل",
    engageDesc: "نمزج بين الإبداع وسهولة الاستخدام والاستراتيجية لنضمن لزوارك تجربة رقمية سلسة تعزز التفاعل والنتائج.",
    features: [
      "تصميم UI/UX مخصص",
      "تصميم متجاوب أولاً للجوال",
      "هوية العلامة التجارية وتنسيقها",
      "نماذج تفاعلية",
    ],
    coreTitle: "خدمات تصميم المواقع وتجربة المستخدم الأساسية",
    coreDesc: "من واجهات المستخدم الأنيقة إلى التجارب التفاعلية، خدماتنا تضمن تميز علامتك التجارية وولاء المستخدمين.",
    coreServices: [
      { icon: uiIcon, title: "تصميم UI/UX", desc: "واجهات جذابة وسهلة الاستخدام مصممة خصيصاً لعلامتك التجارية." },
      { icon: responsiveIcon, title: "تصميم متجاوب", desc: "تجربة سلسة عبر جميع الأجهزة والمنصات." },
      { icon: brandingIcon, title: "هوية العلامة التجارية", desc: "بناء لغة تصميم متسقة تعبر عن قصة علامتك التجارية." },
      { icon: prototypeIcon, title: "نمذجة واختبار", desc: "اختبر الأفكار بنماذج تفاعلية واختبارات مستخدمين." },
    ],
    plansTitle: "خطط أسعار تصميم المواقع",
    plansDesc: "اختر الخطة التي تناسب رؤيتك أو استكشف فرص الانضمام لفريقنا الإبداعي.",
    plans: [
      {
        title: "تصميم مواقع للمبتدئين",
        price: "$299/شهر",
        description: "مثالي للشركات الناشئة التي تحتاج موقعاً بسيطاً وأنيقاً.",
        features: [
          "موقع من 5 صفحات",
          "تصميم متجاوب للجوال",
          "إعداد هوية أساسية",
          "دعم شهري",
        ],
        highlight: false,
      },
      {
        title: "تجربة مستخدم احترافية",
        price: "$799/شهر",
        description: "مثالي للأعمال المتنامية ذات الاحتياجات المخصصة.",
        features: [
          "موقع من 15 صفحة أو أكثر",
          "تصميم UI/UX مخصص",
          "تصميم متجاوب وسريع",
          "نماذج تفاعلية",
          "تحديثات نصف شهرية",
        ],
        highlight: true,
      },
      {
        title: "تصميم للمؤسسات",
        price: "$1499/شهر",
        description: "حلول UX وهوية متكاملة للمشاريع الكبيرة.",
        features: [
          "صفحات غير محدودة",
          "مصمم UI/UX مخصص",
          "دليل هوية العلامة التجارية",
          "نمذجة متقدمة",
          "اجتماعات استراتيجية أسبوعية",
        ],
        highlight: false,
      },
    ],
    joinersTitle: "فرص لعشاق التصميم",
    joiners: [
      {
        role: "متدرب UI/UX",
        stipend: "$250 - $400 / شهر",
        benefits: ["مشاريع تصميم عملية", "إرشاد", "بناء معرض أعمال"],
      },
      {
        role: "مصمم مواقع",
        stipend: "$1000 - $1500 / شهر",
        benefits: ["مشاريع عملاء", "حرية إبداعية", "نمو مهني"],
      },
      {
        role: "شريك تصميم",
        stipend: "تقاسم الإيرادات",
        benefits: ["نموذج تعاون", "تقاسم الأرباح", "نمو طويل الأمد"],
      },
    ],
    ctaTitle: "جاهز لرفع تجربة علامتك التجارية؟",
    ctaDesc: "دعنا نصمم موقعاً رائعاً وتجربة مستخدم مميزة تناسب جمهورك.",
    ctaBtn: "ابدأ مشروعك",
    getStarted: "ابدأ الآن",
  },
  he: {
    heroTitle: "שירותי עיצוב אתרים וחוויית משתמש",
    heroDesc: "מעצבים חוויות מרתקות, ידידותיות וממוקדות המרה שמרימות את המותג והנוכחות הדיגיטלית שלך.",
    engageTitle: "עיצוב שמלהיב וממיר",
    engageDesc: "התהליך שלנו משלב יצירתיות, שימושיות ואסטרטגיה – כדי להבטיח למשתמשים שלך חוויה דיגיטלית חלקה שמביאה תוצאות.",
    features: [
      "עיצוב UI/UX מותאם אישית",
      "עיצוב רספונסיבי ומובייל-פרסט",
      "מיתוג ועיצוב זהות",
      "אב-טיפוס אינטראקטיבי",
    ],
    coreTitle: "שירותי עיצוב אתרים וחוויית משתמש עיקריים",
    coreDesc: "מממשק משתמש אלגנטי ועד חוויות משתמש ממגנטות – השירותים שלנו מבטיחים שהמותג שלך יבלוט והמשתמשים יחזרו.",
    coreServices: [
      { icon: uiIcon, title: "עיצוב UI/UX", desc: "ממשקים מרהיבים וידידותיים המותאמים למותג שלך." },
      { icon: responsiveIcon, title: "עיצוב רספונסיבי", desc: "חוויית משתמש חלקה בכל מכשיר ופלטפורמה." },
      { icon: brandingIcon, title: "מיתוג", desc: "בניית שפה עיצובית אחידה שמספרת את סיפור המותג שלך." },
      { icon: prototypeIcon, title: "אב-טיפוס ובדיקות", desc: "בדיקת רעיונות עם אבי-טיפוס אינטראקטיביים ובדיקות משתמשים." },
    ],
    plansTitle: "חבילות עיצוב אתרים גמישות",
    plansDesc: "בחר את החבילה שמתאימה לחזון שלך או הצטרף לצוות העיצוב היצירתי שלנו.",
    plans: [
      {
        title: "עיצוב אתרים למתחילים",
        price: "$299/חודש",
        description: "מתאים לסטארטאפים שצריכים אתר פשוט ונקי.",
        features: [
          "אתר 5 עמודים",
          "עיצוב רספונסיבי למובייל",
          "הגדרת מיתוג בסיסית",
          "תמיכה חודשית",
        ],
        highlight: false,
      },
      {
        title: "UX מקצועי",
        price: "$799/חודש",
        description: "מושלם לעסקים מתפתחים עם צרכים מותאמים.",
        features: [
          "אתר 15+ עמודים",
          "עיצוב UI/UX מותאם אישית",
          "רספונסיבי ומהיר",
          "אבי-טיפוס אינטראקטיביים",
          "עדכונים דו-שבועיים",
        ],
        highlight: true,
      },
      {
        title: "עיצוב לארגונים",
        price: "$1499/חודש",
        description: "פתרונות UX ומיתוג מותאמים לפרויקטים גדולים.",
        features: [
          "עמודים ללא הגבלה",
          "מעצב UI/UX ייעודי",
          "מדריך מיתוג",
          "אב-טיפוס מתקדם",
          "שיחות אסטרטגיה שבועיות",
        ],
        highlight: false,
      },
    ],
    joinersTitle: "הזדמנויות לאוהבי עיצוב",
    joiners: [
      {
        role: "מתמחה UI/UX",
        stipend: "$250 - $400 / חודש",
        benefits: ["פרויקטי עיצוב מעשיים", "חונכות", "בניית תיק עבודות"],
      },
      {
        role: "מעצב אתרים",
        stipend: "$1000 - $1500 / חודש",
        benefits: ["פרויקטי לקוחות", "חופש יצירתי", "צמיחה מקצועית"],
      },
      {
        role: "שותף עיצוב",
        stipend: "חלוקת רווחים",
        benefits: ["מודל שיתוף פעולה", "חלוקת רווחים", "צמיחה ארוכת טווח"],
      },
    ],
    ctaTitle: "מוכן להרים את חוויית המותג שלך?",
    ctaDesc: "בוא נעצב אתר מדהים וחוויית משתמש מרתקת המותאמת לקהל שלך.",
    ctaBtn: "התחל את הפרויקט",
    getStarted: "התחל עכשיו",
  },
};

const WebDesignUX = () => {
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
    <>
      {/* Hero Section */}
      <section dir={isRTL ? "rtl" : "ltr"} style={{ textAlign: isRTL ? "right" : "left" }} className="relative w-screen h-screen m-0 p-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          src={uxImg}
          alt="Web Design & UX Background"
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
      <section dir={isRTL ? "rtl" : "ltr"} style={{ textAlign: isRTL ? "right" : "left" }} className="w-screen py-20 px-6 bg-gray-50 dark:bg-gray-900">
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
              src={uxImgs}
              alt="UX Showcase"
              className="rounded-2xl shadow-lg object-cover w-full sm:w-10/12 md:w-full"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            variants={itemVariants}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 hover:text-blue-600 dark:hover:text-white"
              whileHover={{ scale: 1.02 }}
            >
              {t.engageTitle}
            </motion.h2>
            <motion.p
              className="text-gray-700 dark:text-gray-300 mb-8"
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

      {/* Services / Core Design Cards */}
      <section dir={isRTL ? "rtl" : "ltr"} style={{ textAlign: isRTL ? "right" : "left" }} className="w-full py-16 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
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
              className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={cardHover}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-start gap-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h4>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    {service.desc}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Pricing + Joiners Section */}
      <section dir={isRTL ? "rtl" : "ltr"} style={{ textAlign: isRTL ? "right" : "left" }} className="w-full py-20 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
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
        dir={isRTL ? "rtl" : "ltr"}
        style={{ textAlign: isRTL ? "right" : "left" }}
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
    </>
  );
};

export default WebDesignUX;