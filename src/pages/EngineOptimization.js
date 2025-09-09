import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import seoImg from "../images/seo.jpg";
import seoo from "../images/partner.jpg";
import onpageIcon from "../images/onpage.svg";
import technicalIcon from "../images/technical.svg";
import linkIcon from "../images/link.svg";
import analytics from "../images/insights.svg";
import { useLanguage } from "../LanguageContext";

const translations = {
  en: {
    heroTitle: "Search Engine Optimization (SEO)",
    heroDesc: "Drive organic growth, improve rankings, and grow your visibility with proven SEO strategies.",
    engageTitle: "Unlock Powerful Rankings",
    engageDesc: "We use keyword optimization, technical audits, and high-quality link building to help you dominate search results and attract the right audience.",
    features: [
      "Keyword Research & Analysis",
      "On-Page Optimization",
      "Technical SEO Audits",
      "Authority Link Building",
    ],
    coreTitle: "Core SEO Services That Drive Results",
    coreDesc: "From technical optimization to link building, our tailored SEO solutions ensure long-term visibility, higher rankings, and measurable growth for your business.",
    coreServices: [
      {
        icon: onpageIcon,
        title: "On-Page SEO",
        desc: "Optimize content, titles, and meta tags to rank for targeted keywords.",
      },
      {
        icon: technicalIcon,
        title: "Technical SEO",
        desc: "Improve site speed, mobile experience, crawlability, and indexing.",
      },
      {
        icon: linkIcon,
        title: "Link Building",
        desc: "Build authority with high-quality backlinks and outreach campaigns.",
      },
      {
        icon: analytics,
        title: "SEO Analytics",
        desc: "Track performance and get actionable insights with data-driven reporting.",
      },
    ],
    plansTitle: "Flexible SEO Pricing Plans",
    plansDesc: "Choose a plan that fits your business goals, or explore opportunities to join our SEO team.",
    plans: [
      {
        title: "Starter SEO",
        price: "$199/mo",
        description: "Perfect for small businesses starting with SEO.",
        features: [
          "Keyword Research (10)",
          "On-Page Optimization",
          "Basic Technical SEO",
          "Monthly Report",
        ],
        highlight: false,
      },
      {
        title: "Growth SEO",
        price: "$499/mo",
        description: "For growing businesses aiming for higher visibility.",
        features: [
          "Keyword Research (30)",
          "Advanced On-Page SEO",
          "Full Technical Audit",
          "High-Quality Link Building",
          "Bi-Weekly Reporting",
        ],
        highlight: true,
      },
      {
        title: "Enterprise SEO",
        price: "$999/mo",
        description: "Custom solutions for large enterprises.",
        features: [
          "Unlimited Keyword Research",
          "Full On/Off-Page Optimization",
          "Dedicated SEO Manager",
          "Content & Blogging Strategy",
          "Weekly Analytics Report",
        ],
        highlight: false,
      },
    ],
    joinersTitle: "Opportunities for SEO Enthusiasts",
    joiners: [
      {
        role: "SEO Intern",
        stipend: "$200 - $400 / mo",
        benefits: ["Hands-on Training", "Mentorship", "Certificate"],
      },
      {
        role: "SEO Specialist",
        stipend: "$800 - $1200 / mo",
        benefits: ["Live Projects", "Career Growth", "Performance Bonus"],
      },
      {
        role: "SEO Partner",
        stipend: "Profit Sharing",
        benefits: ["Partnership Model", "Profit Sharing", "Long-term Growth"],
      },
    ],
    ctaTitle: "Ready to grow your organic traffic?",
    ctaDesc: "Book a free SEO audit and get a custom roadmap for your business.",
    ctaBtn: "Get Audit",
    getStarted: "Get Started",
  },
  ar: {
    heroTitle: "تحسين محركات البحث (SEO)",
    heroDesc: "نمِّ النمو العضوي، وحسِّن التصنيفات، وزد من ظهورك باستخدام استراتيجيات SEO المثبتة.",
    engageTitle: "افتح تصنيفات قوية",
    engageDesc: "نستخدم تحسين الكلمات الرئيسية، والتدقيقات التقنية، وبناء الروابط عالية الجودة لمساعدتك على السيطرة على نتائج البحث وجذب الجمهور المناسب.",
    features: [
      "بحث وتحليل الكلمات الرئيسية",
      "تحسين الصفحات",
      "تدقيقات SEO التقنية",
      "بناء روابط السلطة",
    ],
    coreTitle: "خدمات SEO الأساسية التي تحقق النتائج",
    coreDesc: "من التحسين التقني إلى بناء الروابط، تضمن حلولنا المخصصة رؤية طويلة الأمد، وتصنيفات أعلى، ونموًا قابلاً للقياس.",
    coreServices: [
      {
        icon: onpageIcon,
        title: "SEO على الصفحة",
        desc: "تحسين المحتوى والعناوين والوسوم للترتيب على الكلمات الرئيسية المستهدفة.",
      },
      {
        icon: technicalIcon,
        title: "SEO التقني",
        desc: "تحسين سرعة الموقع وتجربة الجوال والزحف والفهرسة.",
      },
      {
        icon: linkIcon,
        title: "بناء الروابط",
        desc: "بناء السلطة من خلال الروابط عالية الجودة وحملات التواصل.",
      },
      {
        icon: analytics,
        title: "تحليلات SEO",
        desc: "تتبع الأداء واحصل على رؤى قابلة للتنفيذ من خلال تقارير تعتمد على البيانات.",
      },
    ],
    plansTitle: "خطط تسعير SEO مرنة",
    plansDesc: "اختر خطة تناسب أهداف عملك أو استكشف فرص الانضمام إلى فريقنا.",
    plans: [
      {
        title: "SEO للمبتدئين",
        price: "$199/شهر",
        description: "مثالي للشركات الصغيرة التي تبدأ مع SEO.",
        features: [
          "بحث كلمات رئيسية (10)",
          "تحسين الصفحات",
          "SEO تقني أساسي",
          "تقرير شهري",
        ],
        highlight: false,
      },
      {
        title: "SEO للنمو",
        price: "$499/شهر",
        description: "للشركات النامية التي تهدف إلى رؤية أعلى.",
        features: [
          "بحث كلمات رئيسية (30)",
          "تحسين صفحات متقدم",
          "تدقيق تقني كامل",
          "بناء روابط عالية الجودة",
          "تقارير نصف شهرية",
        ],
        highlight: true,
      },
      {
        title: "SEO للمؤسسات",
        price: "$999/شهر",
        description: "حلول مخصصة للشركات الكبيرة.",
        features: [
          "بحث كلمات رئيسية غير محدود",
          "تحسين كامل للصفحات وخارجها",
          "مدير SEO مخصص",
          "استراتيجية محتوى وتدوين",
          "تقرير تحليلات أسبوعي",
        ],
        highlight: false,
      },
    ],
    joinersTitle: "فرص لعشاق SEO",
    joiners: [
      {
        role: "متدرب SEO",
        stipend: "$200 - $400 / شهر",
        benefits: ["تدريب عملي", "إرشاد", "شهادة"],
      },
      {
        role: "أخصائي SEO",
        stipend: "$800 - $1200 / شهر",
        benefits: ["مشاريع حية", "نمو مهني", "مكافأة أداء"],
      },
      {
        role: "شريك SEO",
        stipend: "تقاسم الأرباح",
        benefits: ["نموذج شراكة", "تقاسم الأرباح", "نمو طويل الأمد"],
      },
    ],
    ctaTitle: "جاهز لتنمية النمو العضوي؟",
    ctaDesc: "احجز تدقيق SEO مجاني واحصل على خارطة طريق مخصصة لعملك.",
    ctaBtn: "احصل على التدقيق",
    getStarted: "ابدأ الآن",
  },
  he: {
    heroTitle: "קידום אתרים (SEO)",
    heroDesc: "הגדל תנועה אורגנית, שפר דירוגים והרחב נראות עם אסטרטגיות SEO מוכחות.",
    engageTitle: "פתח דירוגים עוצמתיים",
    engageDesc: "אנו משתמשים באופטימיזציית מילות מפתח, בדיקות טכניות ובניית קישורים איכותיים כדי לעזור לך לשלוט בתוצאות החיפוש ולמשוך את הקהל הנכון.",
    features: [
      "מחקר וניתוח מילות מפתח",
      "אופטימיזציה בדף",
      "בדיקות SEO טכניות",
      "בניית קישורי סמכות",
    ],
    coreTitle: "שירותי SEO עיקריים שמביאים תוצאות",
    coreDesc: "מאופטימיזציה טכנית ועד בניית קישורים, הפתרונות שלנו מבטיחים נראות ארוכת טווח, דירוגים גבוהים וצמיחה מדידה.",
    coreServices: [
      {
        icon: onpageIcon,
        title: "אופטימיזציה בדף",
        desc: "אופטימיזציה של תוכן, כותרות ומטה למילות מפתח ממוקדות.",
      },
      {
        icon: technicalIcon,
        title: "SEO טכני",
        desc: "שיפור מהירות האתר, חווית מובייל, סריקה ואינדוקס.",
      },
      {
        icon: linkIcon,
        title: "בניית קישורים",
        desc: "בניית סמכות עם קישורים איכותיים וקמפיינים של אאוטריץ'.",
      },
      {
        icon: analytics,
        title: "אנליטיקת SEO",
        desc: "עקוב אחרי ביצועים וקבל תובנות עם דוחות מבוססי נתונים.",
      },
    ],
    plansTitle: "תוכניות SEO גמישות",
    plansDesc: "בחר תוכנית שמתאימה למטרות העסק שלך או הצטרף לצוות שלנו.",
    plans: [
      {
        title: "SEO מתחילים",
        price: "$199/חודש",
        description: "מושלם לעסקים קטנים בתחילת דרכם ב-SEO.",
        features: [
          "מחקר מילות מפתח (10)",
          "אופטימיזציה בדף",
          "SEO טכני בסיסי",
          "דוח חודשי",
        ],
        highlight: false,
      },
      {
        title: "SEO צמיחה",
        price: "$499/חודש",
        description: "לעסקים בצמיחה השואפים לנראות גבוהה יותר.",
        features: [
          "מחקר מילות מפתח (30)",
          "SEO בדף מתקדם",
          "בדיקה טכנית מלאה",
          "בניית קישורים איכותיים",
          "דיווח דו-שבועי",
        ],
        highlight: true,
      },
      {
        title: "SEO לארגונים",
        price: "$999/חודש",
        description: "פתרונות מותאמים לעסקים גדולים.",
        features: [
          "מחקר מילות מפתח ללא הגבלה",
          "אופטימיזציה מלאה בדף ומחוץ לו",
          "מנהל SEO ייעודי",
          "אסטרטגיית תוכן ובלוגים",
          "דוח אנליטיקות שבועי",
        ],
        highlight: false,
      },
    ],
    joinersTitle: "הזדמנויות לאוהבי SEO",
    joiners: [
      {
        role: "מתמחה SEO",
        stipend: "$200 - $400 / חודש",
        benefits: ["הכשרה מעשית", "חונכות", "הסמכה"],
      },
      {
        role: "מומחה SEO",
        stipend: "$800 - $1200 / חודש",
        benefits: ["פרויקטים חיים", "צמיחה מקצועית", "בונוס ביצועים"],
      },
      {
        role: "שותף SEO",
        stipend: "חלוקת רווחים",
        benefits: ["מודל שותפות", "חלוקת רווחים", "צמיחה ארוכת טווח"],
      },
    ],
    ctaTitle: "מוכנים להגדיל צמיחה אורגנית?",
    ctaDesc: "קבעו בדיקת SEO חינם וקבלו מפת דרכים מותאמת לעסק שלכם.",
    ctaBtn: "קבלו בדיקה",
    getStarted: "התחל עכשיו",
  },
};

const SEO = () => {
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
    <div>
      {/* Hero Section */}
      <section dir={isRTL ? "rtl" : "ltr"} style={{ textAlign: isRTL ? "right" : "left" }} className="relative w-screen h-screen m-0 p-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          src={seoImg}
          alt="SEO Background"
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

      {/* Engage Section */}
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
              src={seoo}
              alt="SEO Strategy"
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

      {/* Core Services Section */}
      <section dir={isRTL ? "rtl" : "ltr"} style={{ textAlign: isRTL ? "right" : "left" }} className="w-full py-5 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
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
              viewport={{ once: true, amount: 0.3 }}
              whileHover={cardHover}
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
    </div>
  );
};

export default SEO;