import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import analyticsImg from "../images/analytics.jpg";
import reportingImg from "../images/reporting.jpg";
import dashboardIcon from "../images/dashboard.svg";
import insightsIcon from "../images/insights.svg";
import performanceIcon from "../images/webm.jpg";
import automationIcon from "../images/projects.svg";
import { useLanguage } from "../LanguageContext";

const translations = {
  en: {
    heroTitle: "Analytics & Reporting",
    heroDesc: "Transform raw data into actionable insights. Measure performance, optimize campaigns, and make smarter business decisions with our analytics & reporting solutions.",
    engageTitle: "Data That Drives Growth",
    engageDesc: "Our analytics and reporting services give you the clarity you need to track ROI, understand user behavior, and make informed decisions to maximize your marketing efforts.",
    features: [
      "Custom Dashboards",
      "Real-Time Reporting",
      "Conversion Tracking",
      "Competitor Benchmarking",
    ],
    coreTitle: "Core Analytics Services",
    coreDesc: "From real-time dashboards to automated reporting, we help businesses gain clarity and achieve measurable success.",
    coreServices: [
      { icon: dashboardIcon, title: "Custom Dashboards", desc: "Visualize KPIs in real-time with tailored dashboards." },
      { icon: insightsIcon, title: "Actionable Insights", desc: "Turn complex data into clear recommendations." },
      { icon: performanceIcon, title: "Performance Tracking", desc: "Monitor campaign results and measure ROI effectively." },
      { icon: automationIcon, title: "Automated Reporting", desc: "Save time with scheduled automated reports and alerts." },
    ],
    plansTitle: "Flexible Analytics Plans",
    plansDesc: "Pick a plan that fits your needs or explore opportunities to join our analytics team.",
    plans: [
      {
        title: "Starter Analytics",
        price: "$149/mo",
        description: "Perfect for small businesses that need basic tracking.",
        features: [
          "Google Analytics Setup",
          "Monthly Performance Report",
          "Traffic Insights",
          "Basic Conversion Tracking",
        ],
        highlight: false,
      },
      {
        title: "Growth Insights",
        price: "$399/mo",
        description: "Ideal for growing businesses focused on KPIs.",
        features: [
          "Advanced Dashboard Setup",
          "Weekly Reporting",
          "Custom Conversion Funnels",
          "Competitor Benchmarking",
          "Goal & Event Tracking",
        ],
        highlight: true,
      },
      {
        title: "Enterprise Reporting",
        price: "$899/mo",
        description: "Advanced analytics & automation for enterprises.",
        features: [
          "Cross-Channel Attribution",
          "Custom Data Studio Dashboards",
          "Automated Alerts & Reports",
          "Dedicated Analytics Manager",
          "Real-Time Data Monitoring",
        ],
        highlight: false,
      },
    ],
    joinersTitle: "Opportunities in Analytics",
    joiners: [
      {
        role: "Analytics Intern",
        stipend: "$200 - $400 / month",
        benefits: ["Hands-on Reporting Tools", "Mentorship", "Certification"],
      },
      {
        role: "Data Analyst",
        stipend: "$1000 - $1500 / month",
        benefits: ["Live Dashboards", "KPI Tracking", "Career Growth"],
      },
      {
        role: "Analytics Partner",
        stipend: "Revenue Sharing",
        benefits: ["Joint Ventures", "Profit Sharing", "Long-Term Growth"],
      },
    ],
    ctaTitle: "Ready to Make Data Work for You?",
    ctaDesc: "Book a free analytics consultation and discover insights that grow your business.",
    ctaBtn: "Get Consultation",
    getStarted: "Get Started",
  },
  ar: {
    heroTitle: "تحليلات وتقارير",
    heroDesc: "حوّل البيانات الخام إلى رؤى قابلة للتنفيذ. قِس الأداء، وحسّن الحملات، واتخذ قرارات أكثر ذكاءً مع حلول التحليلات والتقارير لدينا.",
    engageTitle: "بيانات تدفع النمو",
    engageDesc: "خدمات التحليلات والتقارير لدينا تمنحك الوضوح اللازم لتتبع العائد، وفهم سلوك المستخدم، واتخاذ قرارات مدروسة لتعظيم جهودك التسويقية.",
    features: [
      "لوحات تحكم مخصصة",
      "تقارير لحظية",
      "تتبع التحويلات",
      "مقارنة المنافسين",
    ],
    coreTitle: "خدمات التحليلات الأساسية",
    coreDesc: "من لوحات التحكم اللحظية إلى التقارير المؤتمتة، نساعد الشركات على تحقيق الوضوح والنجاح القابل للقياس.",
    coreServices: [
      { icon: dashboardIcon, title: "لوحات تحكم مخصصة", desc: "تصور مؤشرات الأداء في الوقت الفعلي بلوحات تحكم مخصصة." },
      { icon: insightsIcon, title: "رؤى قابلة للتنفيذ", desc: "حوّل البيانات المعقدة إلى توصيات واضحة." },
      { icon: performanceIcon, title: "تتبع الأداء", desc: "راقب نتائج الحملات وقِس العائد بفعالية." },
      { icon: automationIcon, title: "تقارير مؤتمتة", desc: "وفر الوقت مع تقارير وتنبيهات مجدولة تلقائياً." },
    ],
    plansTitle: "خطط تحليلات مرنة",
    plansDesc: "اختر الخطة التي تناسب احتياجاتك أو استكشف فرص الانضمام لفريق التحليلات.",
    plans: [
      {
        title: "تحليلات للمبتدئين",
        price: "$149/شهر",
        description: "مثالي للشركات الصغيرة التي تحتاج تتبعاً أساسياً.",
        features: [
          "إعداد Google Analytics",
          "تقرير أداء شهري",
          "رؤى حركة المرور",
          "تتبع تحويلات أساسي",
        ],
        highlight: false,
      },
      {
        title: "رؤى للنمو",
        price: "$399/شهر",
        description: "مثالي للأعمال النامية التي تركز على مؤشرات الأداء.",
        features: [
          "إعداد لوحات تحكم متقدمة",
          "تقارير أسبوعية",
          "مسارات تحويل مخصصة",
          "مقارنة المنافسين",
          "تتبع الأهداف والأحداث",
        ],
        highlight: true,
      },
      {
        title: "تقارير للمؤسسات",
        price: "$899/شهر",
        description: "تحليلات متقدمة وأتمتة للمؤسسات.",
        features: [
          "نسب القنوات المتعددة",
          "لوحات تحكم Data Studio مخصصة",
          "تنبيهات وتقارير مؤتمتة",
          "مدير تحليلات مخصص",
          "مراقبة بيانات لحظية",
        ],
        highlight: false,
      },
    ],
    joinersTitle: "فرص في التحليلات",
    joiners: [
      {
        role: "متدرب تحليلات",
        stipend: "$200 - $400 / شهر",
        benefits: ["أدوات تقارير عملية", "إرشاد", "شهادة"],
      },
      {
        role: "محلل بيانات",
        stipend: "$1000 - $1500 / شهر",
        benefits: ["لوحات تحكم مباشرة", "تتبع مؤشرات الأداء", "نمو مهني"],
      },
      {
        role: "شريك تحليلات",
        stipend: "تقاسم الإيرادات",
        benefits: ["مشاريع مشتركة", "تقاسم الأرباح", "نمو طويل الأمد"],
      },
    ],
    ctaTitle: "جاهز لجعل البيانات تعمل لصالحك؟",
    ctaDesc: "احجز استشارة تحليلات مجانية واكتشف رؤى تنمي عملك.",
    ctaBtn: "احصل على استشارة",
    getStarted: "ابدأ الآن",
  },
  he: {
    heroTitle: "אנליטיקה ודיווח",
    heroDesc: "הפוך נתונים גולמיים לתובנות מעשיות. מדוד ביצועים, שפר קמפיינים וקבל החלטות חכמות יותר עם פתרונות האנליטיקה והדיווח שלנו.",
    engageTitle: "נתונים שמניעים צמיחה",
    engageDesc: "שירותי האנליטיקה והדיווח שלנו נותנים לך בהירות לעקוב אחרי ROI, להבין התנהגות משתמשים ולקבל החלטות חכמות למקסום מאמצי השיווק.",
    features: [
      "דשבורדים מותאמים",
      "דיווח בזמן אמת",
      "מעקב המרות",
      "השוואת מתחרים",
    ],
    coreTitle: "שירותי אנליטיקה עיקריים",
    coreDesc: "מדשבורדים בזמן אמת ועד דיווח אוטומטי – אנחנו עוזרים לעסקים להשיג בהירות והצלחה מדידה.",
    coreServices: [
      { icon: dashboardIcon, title: "דשבורדים מותאמים", desc: "הצג KPI בזמן אמת עם דשבורדים מותאמים." },
      { icon: insightsIcon, title: "תובנות מעשיות", desc: "הפוך נתונים מורכבים להמלצות ברורות." },
      { icon: performanceIcon, title: "מעקב ביצועים", desc: "נטר תוצאות קמפיינים ומדוד ROI ביעילות." },
      { icon: automationIcon, title: "דיווח אוטומטי", desc: "חסוך זמן עם דוחות והתראות אוטומטיים." },
    ],
    plansTitle: "חבילות אנליטיקה גמישות",
    plansDesc: "בחר חבילה שמתאימה לצרכים שלך או הצטרף לצוות האנליטיקה שלנו.",
    plans: [
      {
        title: "אנליטיקה למתחילים",
        price: "$149/חודש",
        description: "מושלם לעסקים קטנים שצריכים מעקב בסיסי.",
        features: [
          "הגדרת Google Analytics",
          "דוח ביצועים חודשי",
          "תובנות תנועה",
          "מעקב המרות בסיסי",
        ],
        highlight: false,
      },
      {
        title: "תובנות לצמיחה",
        price: "$399/חודש",
        description: "אידיאלי לעסקים בצמיחה שממוקדים ב-KPI.",
        features: [
          "הגדרת דשבורד מתקדם",
          "דיווח שבועי",
          "משפכי המרה מותאמים",
          "השוואת מתחרים",
          "מעקב יעדים ואירועים",
        ],
        highlight: true,
      },
      {
        title: "דיווח לארגונים",
        price: "$899/חודש",
        description: "אנליטיקה מתקדמת ואוטומציה לארגונים.",
        features: [
          "ייחוס ערוצים חוצה פלטפורמות",
          "דשבורדים מותאמים ב-Data Studio",
          "התראות ודוחות אוטומטיים",
          "מנהל אנליטיקה ייעודי",
          "ניטור נתונים בזמן אמת",
        ],
        highlight: false,
      },
    ],
    joinersTitle: "הזדמנויות באנליטיקה",
    joiners: [
      {
        role: "מתמחה אנליטיקה",
        stipend: "$200 - $400 / חודש",
        benefits: ["כלי דיווח מעשיים", "חונכות", "הסמכה"],
      },
      {
        role: "אנליסט נתונים",
        stipend: "$1000 - $1500 / חודש",
        benefits: ["דשבורדים חיים", "מעקב KPI", "צמיחה מקצועית"],
      },
      {
        role: "שותף אנליטיקה",
        stipend: "חלוקת רווחים",
        benefits: ["מיזמים משותפים", "חלוקת רווחים", "צמיחה ארוכת טווח"],
      },
    ],
    ctaTitle: "מוכנים לגרום לנתונים לעבוד בשבילכם?",
    ctaDesc: "קבעו ייעוץ אנליטיקה חינם וגלו תובנות שמקדמות את העסק.",
    ctaBtn: "קבלו ייעוץ",
    getStarted: "התחל עכשיו",
  },
};

const AnalyticsReporting = () => {
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
          src={analyticsImg}
          alt="Analytics Background"
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
              src={reportingImg}
              alt="Reporting Dashboard"
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

      {/* Core Analytics Services */}
      <section dir={isRTL ? "rtl" : "ltr"} style={{ textAlign: isRTL ? "right" : "left" }} className="w-full py-20 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
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
              className="service-card bg-white/80 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={cardHover}
              viewport={{ once: true, amount: 0.3 }}
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
      <section dir={isRTL ? "rtl" : "ltr"} style={{ textAlign: isRTL ? "right" : "left" }} className="pricing-section py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center mb-12">
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
              <h3 className="text-2xl font-bold mb-3">{plan.title}</h3>
              <p className="text-lg mb-4 opacity-90">{plan.description}</p>
              <div className="text-3xl font-extrabold mb-6">{plan.price}</div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
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
      <section dir={isRTL ? "rtl" : "ltr"} style={{ textAlign: isRTL ? "right" : "left" }} className="w-full py-20 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t.ctaTitle}
          </motion.h2>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
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
      </section>
    </>
  );
};

export default AnalyticsReporting;