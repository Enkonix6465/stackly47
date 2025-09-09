import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import socialImg from "../images/social.jpg";
import smmTeam from "../images/smm-team.jpg";
import strategyIcon from "../images/strategy.svg";
import contentIcon from "../images/content.svg";
import adsIcon from "../images/ads.svg";
import analyticsIcon from "../images/insights.svg";
import { useLanguage } from "../LanguageContext";

const translations = {
  en: {
    heroTitle: "Social Media Management",
    heroDesc: "Build strong brand presence, engage your audience, and drive sales through creative and data-driven social media strategies.",
    engageTitle: "Grow, Engage & Convert",
    engageDesc: "From content creation to ad campaigns, our experts ensure your brand captures attention, nurtures communities, and drives results across all platforms.",
    features: [
      "Content Strategy & Creation",
      "Community Engagement",
      "Paid Ads & Promotions",
      "Analytics & Insights",
    ],
    coreTitle: "Our Social Media Solutions",
    coreDesc: "Customized strategies that help you connect with your audience and achieve measurable business growth.",
    coreServices: [
      { icon: strategyIcon, title: "Social Strategy", text: "Data-driven strategies tailored to your brand and audience." },
      { icon: contentIcon, title: "Creative Content", text: "Engaging posts, stories, and videos designed to go viral." },
      { icon: adsIcon, title: "Paid Ads", text: "Targeted ad campaigns that maximize ROI across platforms." },
      { icon: analyticsIcon, title: "Analytics & Insights", text: "Track progress and optimize with detailed reports." },
    ],
    plansTitle: "Social Media Pricing Plans",
    plansDesc: "Affordable and scalable plans that align with your business goals.",
    plans: [
      {
        title: "Starter SMM",
        price: "$249/mo",
        description: "Best for small businesses starting their social presence.",
        features: [
          "Content Calendar (8 posts)",
          "2 Social Platforms",
          "Community Engagement",
          "Monthly Analytics Report",
        ],
        highlight: false,
      },
      {
        title: "Growth SMM",
        price: "$599/mo",
        description: "Ideal for brands looking to scale their social reach.",
        features: [
          "Content Calendar (20 posts)",
          "4 Social Platforms",
          "Paid Ads Management",
          "Influencer Collaboration",
          "Bi-Weekly Reports",
        ],
        highlight: true,
      },
      {
        title: "Enterprise SMM",
        price: "$1299/mo",
        description: "Tailored strategies for enterprises & global brands.",
        features: [
          "Unlimited Posts & Stories",
          "All Major Platforms",
          "Dedicated SMM Manager",
          "Paid Ads & Campaigns",
          "Weekly Deep-Dive Analytics",
        ],
        highlight: false,
      },
    ],
    joinersTitle: "Opportunities in Social Media",
    joiners: [
      {
        role: "SMM Intern",
        stipend: "$150 - $300 / month",
        benefits: ["Hands-on Training", "Mentorship", "Certification"],
      },
      {
        role: "SMM Specialist",
        stipend: "$700 - $1000 / month",
        benefits: ["Live Campaigns", "Career Growth", "Performance Bonus"],
      },
      {
        role: "SMM Partner",
        stipend: "Revenue Sharing",
        benefits: ["Partnership Model", "Profit Sharing", "Long-term Growth"],
      },
    ],
    ctaTitle: "Ready to amplify your brand?",
    ctaDesc: "Book a free consultation and get a custom social media roadmap today.",
    ctaBtn: "Get Consultation",
    getStarted: "Get Started",
  },
  ar: {
    heroTitle: "إدارة وسائل التواصل الاجتماعي",
    heroDesc: "ابنِ حضورًا قويًا للعلامة التجارية، وشارك جمهورك، وزد المبيعات من خلال استراتيجيات إبداعية قائمة على البيانات.",
    engageTitle: "نمِّ، شارك، وحوِّل",
    engageDesc: "من إنشاء المحتوى إلى الحملات الإعلانية، يضمن خبراؤنا أن علامتك التجارية تجذب الانتباه، وتبني المجتمعات، وتحقق النتائج عبر جميع المنصات.",
    features: [
      "استراتيجية وإنشاء المحتوى",
      "التفاعل المجتمعي",
      "إعلانات وترويج مدفوع",
      "تحليلات ورؤى",
    ],
    coreTitle: "حلولنا لوسائل التواصل الاجتماعي",
    coreDesc: "استراتيجيات مخصصة تساعدك على التواصل مع جمهورك وتحقيق نمو أعمال قابل للقياس.",
    coreServices: [
      { icon: strategyIcon, title: "استراتيجية اجتماعية", text: "استراتيجيات قائمة على البيانات مصممة لعلامتك التجارية وجمهورك." },
      { icon: contentIcon, title: "محتوى إبداعي", text: "منشورات وقصص وفيديوهات جذابة مصممة للانتشار." },
      { icon: adsIcon, title: "إعلانات مدفوعة", text: "حملات إعلانية مستهدفة تعظم العائد عبر المنصات." },
      { icon: analyticsIcon, title: "تحليلات ورؤى", text: "تتبع التقدم وتحسين الأداء بتقارير مفصلة." },
    ],
    plansTitle: "خطط أسعار وسائل التواصل الاجتماعي",
    plansDesc: "خطط ميسورة وقابلة للتطوير تتماشى مع أهداف عملك.",
    plans: [
      {
        title: "SMM للمبتدئين",
        price: "$249/شهر",
        description: "الأفضل للشركات الصغيرة التي تبدأ حضورها الاجتماعي.",
        features: [
          "جدول محتوى (8 منشورات)",
          "منصتان اجتماعيتان",
          "تفاعل مجتمعي",
          "تقرير تحليلات شهري",
        ],
        highlight: false,
      },
      {
        title: "SMM للنمو",
        price: "$599/شهر",
        description: "مثالي للعلامات التجارية التي ترغب في توسيع نطاقها الاجتماعي.",
        features: [
          "جدول محتوى (20 منشور)",
          "4 منصات اجتماعية",
          "إدارة إعلانات مدفوعة",
          "تعاون مع مؤثرين",
          "تقارير نصف شهرية",
        ],
        highlight: true,
      },
      {
        title: "SMM للمؤسسات",
        price: "$1299/شهر",
        description: "استراتيجيات مخصصة للمؤسسات والعلامات التجارية العالمية.",
        features: [
          "منشورات وقصص غير محدودة",
          "جميع المنصات الرئيسية",
          "مدير SMM مخصص",
          "إعلانات وحملات مدفوعة",
          "تحليلات أسبوعية معمقة",
        ],
        highlight: false,
      },
    ],
    joinersTitle: "فرص في وسائل التواصل الاجتماعي",
    joiners: [
      {
        role: "متدرب SMM",
        stipend: "$150 - $300 / شهر",
        benefits: ["تدريب عملي", "إرشاد", "شهادة"],
      },
      {
        role: "أخصائي SMM",
        stipend: "$700 - $1000 / شهر",
        benefits: ["حملات مباشرة", "نمو مهني", "مكافأة أداء"],
      },
      {
        role: "شريك SMM",
        stipend: "تقاسم الإيرادات",
        benefits: ["نموذج شراكة", "تقاسم الأرباح", "نمو طويل الأمد"],
      },
    ],
    ctaTitle: "جاهز لتعزيز علامتك التجارية؟",
    ctaDesc: "احجز استشارة مجانية واحصل على خارطة طريق مخصصة لوسائل التواصل الاجتماعي.",
    ctaBtn: "احصل على استشارة",
    getStarted: "ابدأ الآن",
  },
  he: {
    heroTitle: "ניהול מדיה חברתית",
    heroDesc: "בנה נוכחות מותג חזקה, שתף את הקהל שלך והגדל מכירות עם אסטרטגיות יצירתיות ומבוססות נתונים.",
    engageTitle: "לגדול, לעורר, להמיר",
    engageDesc: "מהפקת תוכן ועד קמפיינים ממומנים, המומחים שלנו מבטיחים שהמותג שלך ימשוך תשומת לב, יטפח קהילות ויביא תוצאות בכל הפלטפורמות.",
    features: [
      "אסטרטגיה ויצירת תוכן",
      "מעורבות קהילתית",
      "קידום ממומן",
      "אנליטיקה ותובנות",
    ],
    coreTitle: "הפתרונות שלנו למדיה חברתית",
    coreDesc: "אסטרטגיות מותאמות אישית שיעזרו לך להתחבר לקהל שלך ולהשיג צמיחה עסקית מדידה.",
    coreServices: [
      { icon: strategyIcon, title: "אסטרטגיה חברתית", text: "אסטרטגיות מבוססות נתונים המותאמות למותג ולקהל שלך." },
      { icon: contentIcon, title: "תוכן יצירתי", text: "פוסטים, סטוריז וסרטונים מרתקים שנועדו להפוך לויראליים." },
      { icon: adsIcon, title: "מודעות ממומנות", text: "קמפיינים ממוקדים שממקסמים החזר השקעה בכל הפלטפורמות." },
      { icon: analyticsIcon, title: "אנליטיקה ותובנות", text: "עקוב אחרי התקדמות ושפר עם דוחות מפורטים." },
    ],
    plansTitle: "חבילות ניהול מדיה חברתית",
    plansDesc: "חבילות משתלמות ומדרגיות שמתאימות למטרות העסק שלך.",
    plans: [
      {
        title: "SMM למתחילים",
        price: "$249/חודש",
        description: "הכי טוב לעסקים קטנים שמתחילים נוכחות חברתית.",
        features: [
          "לוח תוכן (8 פוסטים)",
          "2 פלטפורמות חברתיות",
          "מעורבות קהילתית",
          "דוח אנליטיקה חודשי",
        ],
        highlight: false,
      },
      {
        title: "SMM לצמיחה",
        price: "$599/חודש",
        description: "אידיאלי למותגים שרוצים להרחיב את ההגעה החברתית.",
        features: [
          "לוח תוכן (20 פוסטים)",
          "4 פלטפורמות חברתיות",
          "ניהול מודעות ממומנות",
          "שיתופי פעולה עם משפיענים",
          "דוחות דו-שבועיים",
        ],
        highlight: true,
      },
      {
        title: "SMM לארגונים",
        price: "$1299/חודש",
        description: "אסטרטגיות מותאמות לארגונים ומותגים גלובליים.",
        features: [
          "פוסטים וסטוריז ללא הגבלה",
          "כל הפלטפורמות המרכזיות",
          "מנהל SMM ייעודי",
          "מודעות וקמפיינים ממומנים",
          "אנליטיקה שבועית מעמיקה",
        ],
        highlight: false,
      },
    ],
    joinersTitle: "הזדמנויות במדיה חברתית",
    joiners: [
      {
        role: "מתמחה SMM",
        stipend: "$150 - $300 / חודש",
        benefits: ["הכשרה מעשית", "חונכות", "הסמכה"],
      },
      {
        role: "מומחה SMM",
        stipend: "$700 - $1000 / חודש",
        benefits: ["קמפיינים חיים", "צמיחה מקצועית", "בונוס ביצועים"],
      },
      {
        role: "שותף SMM",
        stipend: "חלוקת רווחים",
        benefits: ["מודל שותפות", "חלוקת רווחים", "צמיחה ארוכת טווח"],
      },
    ],
    ctaTitle: "מוכנים להעצים את המותג שלכם?",
    ctaDesc: "קבעו פגישת ייעוץ חינם וקבלו מפת דרכים מותאמת למדיה החברתית.",
    ctaBtn: "קבלו ייעוץ",
    getStarted: "התחל עכשיו",
  },
};

const SMM = () => {
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
          src={socialImg}
          alt="Social Media Management"
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
              src={smmTeam}
              alt="SMM Team"
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

      {/* Services Cards */}
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
              className="bg-white/80 dark:bg-gray-800/70 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={cardHover}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-start gap-4">
                <img src={service.icon} alt={service.title} className="w-12 h-12" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h4>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    {service.text}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Pricing Plans */}
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

      {/* CTA */}
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

export default SMM;