import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ppcImg from "../images/ppc.jpg";
import strategyImg from "../images/ppc-strategy.jpg";
import keywordIcon from "../images/keyword.svg";
import targetingIcon from "../images/target.svg";
import analyticsIcon from "../images/chart.svg";
import conversionIcon from "../images/conversion.svg";
import { useLanguage } from "../LanguageContext";

const translations = {
  en: {
    heroTitle: "Pay-Per-Click Advertising (PPC)",
    heroDesc: "Maximize ROI with data-driven ad campaigns that convert clicks into customers.",
    engageTitle: "Drive Instant Traffic & Conversions",
    engageDesc: "Our PPC experts create, manage, and optimize ad campaigns across multiple platforms to deliver measurable growth and maximize your advertising budget.",
    features: [
      "Keyword Targeting & Bidding",
      "Compelling Ad Copywriting",
      "Conversion Tracking",
      "Advanced Audience Targeting",
    ],
    coreTitle: "Core PPC Services for Maximum ROI",
    coreDesc: "From keyword targeting to advanced analytics, our PPC solutions are designed to bring immediate results and sustainable growth.",
    coreServices: [
      { icon: keywordIcon, title: "Keyword Targeting", text: "Identify high-converting keywords for optimized ad spend." },
      { icon: targetingIcon, title: "Audience Targeting", text: "Reach the right customers with laser-focused targeting." },
      { icon: conversionIcon, title: "Conversion Optimization", text: "Optimize landing pages and funnels to maximize ROI." },
      { icon: analyticsIcon, title: "Performance Analytics", text: "Detailed reporting to track ad spend and conversions." },
    ],
    plansTitle: "Flexible PPC Pricing Plans",
    plansDesc: "Choose a plan that fits your advertising goals, or explore exciting career and partnership opportunities.",
    plans: [
      {
        title: "Starter PPC",
        price: "$299/mo",
        description: "Ideal for small businesses testing paid ads.",
        features: [
          "Google Ads Setup",
          "Keyword Research (15 keywords)",
          "Basic Ad Copywriting",
          "Monthly Reporting",
        ],
        highlight: false,
      },
      {
        title: "Growth PPC",
        price: "$699/mo",
        description: "For growing businesses seeking more traffic & leads.",
        features: [
          "Advanced Campaign Setup",
          "A/B Testing & Optimization",
          "Audience Targeting",
          "Conversion Tracking",
          "Bi-Weekly Reporting",
        ],
        highlight: true,
      },
      {
        title: "Enterprise PPC",
        price: "$1499/mo",
        description: "Full-scale PPC management for enterprises.",
        features: [
          "Multi-Platform Ads (Google, Meta, LinkedIn)",
          "Dedicated Ad Manager",
          "Competitor Analysis",
          "Dynamic Remarketing",
          "Weekly Analytics Reports",
        ],
        highlight: false,
      },
    ],
    joinersTitle: "Opportunities for PPC Enthusiasts",
    joiners: [
      {
        role: "PPC Intern",
        stipend: "$250 - $500 / month",
        benefits: ["Hands-on Campaigns", "Certification", "Mentorship"],
      },
      {
        role: "PPC Specialist",
        stipend: "$1000 - $1500 / month",
        benefits: ["Performance Bonus", "Career Growth", "Client Management"],
      },
      {
        role: "PPC Partner",
        stipend: "Revenue Sharing",
        benefits: ["Profit Sharing", "Ad Budget Handling", "Long-term Growth"],
      },
    ],
    ctaTitle: "Ready to launch high-performing PPC campaigns?",
    ctaDesc: "Book a free consultation and get a tailored ad strategy for your business.",
    ctaBtn: "Get Consultation",
    getStarted: "Get Started",
  },
  ar: {
    heroTitle: "إعلانات الدفع لكل نقرة (PPC)",
    heroDesc: "حقق أقصى عائد من الحملات الإعلانية المدفوعة التي تحول النقرات إلى عملاء.",
    engageTitle: "حقق زيارات وتحويلات فورية",
    engageDesc: "ينشئ خبراؤنا في PPC ويديرون ويُحسنون الحملات الإعلانية عبر منصات متعددة لتحقيق نمو قابل للقياس وتعظيم ميزانية الإعلان.",
    features: [
      "استهداف الكلمات الرئيسية والمزايدة",
      "كتابة إعلانات جذابة",
      "تتبع التحويلات",
      "استهداف جماهير متقدم",
    ],
    coreTitle: "خدمات PPC الأساسية لتحقيق أقصى عائد",
    coreDesc: "من استهداف الكلمات الرئيسية إلى التحليلات المتقدمة، حلولنا مصممة لتحقيق نتائج فورية ونمو مستدام.",
    coreServices: [
      { icon: keywordIcon, title: "استهداف الكلمات الرئيسية", text: "تحديد الكلمات الرئيسية عالية التحويل لتحقيق إنفاق إعلاني أمثل." },
      { icon: targetingIcon, title: "استهداف الجمهور", text: "الوصول إلى العملاء المناسبين باستهداف دقيق." },
      { icon: conversionIcon, title: "تحسين التحويلات", text: "تحسين الصفحات ومسارات التحويل لتعظيم العائد." },
      { icon: analyticsIcon, title: "تحليلات الأداء", text: "تقارير مفصلة لتتبع الإنفاق والتحويلات." },
    ],
    plansTitle: "خطط تسعير PPC مرنة",
    plansDesc: "اختر خطة تناسب أهدافك الإعلانية أو استكشف فرص العمل والشراكة.",
    plans: [
      {
        title: "PPC للمبتدئين",
        price: "$299/شهر",
        description: "مثالي للشركات الصغيرة التي تختبر الإعلانات المدفوعة.",
        features: [
          "إعداد إعلانات Google",
          "بحث كلمات رئيسية (15 كلمة)",
          "كتابة إعلانات أساسية",
          "تقرير شهري",
        ],
        highlight: false,
      },
      {
        title: "PPC للنمو",
        price: "$699/شهر",
        description: "للشركات النامية التي تبحث عن مزيد من الزيارات والعملاء.",
        features: [
          "إعداد حملات متقدم",
          "اختبار وتحسين A/B",
          "استهداف الجمهور",
          "تتبع التحويلات",
          "تقارير نصف شهرية",
        ],
        highlight: true,
      },
      {
        title: "PPC للمؤسسات",
        price: "$1499/شهر",
        description: "إدارة PPC كاملة للمؤسسات.",
        features: [
          "إعلانات متعددة المنصات (Google, Meta, LinkedIn)",
          "مدير إعلانات مخصص",
          "تحليل المنافسين",
          "إعادة استهداف ديناميكية",
          "تقارير أسبوعية",
        ],
        highlight: false,
      },
    ],
    joinersTitle: "فرص لعشاق PPC",
    joiners: [
      {
        role: "متدرب PPC",
        stipend: "$250 - $500 / شهر",
        benefits: ["حملات عملية", "شهادة", "إرشاد"],
      },
      {
        role: "أخصائي PPC",
        stipend: "$1000 - $1500 / شهر",
        benefits: ["مكافأة أداء", "نمو مهني", "إدارة العملاء"],
      },
      {
        role: "شريك PPC",
        stipend: "تقاسم الإيرادات",
        benefits: ["تقاسم الأرباح", "إدارة الميزانية الإعلانية", "نمو طويل الأمد"],
      },
    ],
    ctaTitle: "جاهز لإطلاق حملات PPC عالية الأداء؟",
    ctaDesc: "احجز استشارة مجانية واحصل على استراتيجية إعلانات مخصصة لعملك.",
    ctaBtn: "احصل على استشارة",
    getStarted: "ابدأ الآن",
  },
  // Add 'he' for Hebrew if needed
};

const PayPerClick = () => {
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
          src={ppcImg}
          alt="PPC Advertising Background"
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
              src={strategyImg}
              alt="PPC Strategy"
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

      {/* Core PPC Services */}
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
          {t.coreServices.map((card, idx) => (
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
                <img src={card.icon} alt={card.title} className="w-12 h-12 object-contain" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{card.title}</h4>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{card.text}</p>
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
                  <li key={i} className={`${plan.highlight ? "text-white" : "text-gray-700 dark:text-gray-300"}`}>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`w-full inline-block text-center py-3 rounded-full font-semibold transition ${
                  plan.highlight ? "bg-white text-blue-600 hover:bg-gray-100" : "bg-blue-600 text-white hover:bg-blue-700"
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

export default PayPerClick;