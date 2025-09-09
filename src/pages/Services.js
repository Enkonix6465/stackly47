import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import servicesVideo from "../images/services.mp4";
import seoImg from "../images/seo.jpg";
import ppcImg from "../images/ppc.jpg";
import contentImg from "../images/content.jpg";
import socialImg from "../images/social.jpg";
import uxImg from "../images/ux.jpg";
import analyticsImg from "../images/analytics.jpg";
import join from "../images/join-bg.jpg";

const translations = {
  heroTitle: {
    en: "Our Digital Marketing Services",
    ar: "خدمات التسويق الرقمي لدينا",
    he: "שירותי השיווק הדיגיטלי שלנו"
  },
  heroDesc: {
    en: "We deliver SEO to social campaigns that attract, engage, and convert helping your brand grow and stand out.",
    ar: "نقدم حملات تحسين محركات البحث والتسويق عبر وسائل التواصل لجذب العملاء وزيادة التفاعل وتحقيق النمو لعلامتك التجارية.",
    he: "אנו מספקים קמפיינים של SEO ורשתות חברתיות שמושכים, מעוררים וממירים, ועוזרים למותג שלך לגדול ולבלוט."
  },
  servicesTitle: {
    en: "Our Services",
    ar: "خدماتنا",
    he: "השירותים שלנו"
  },
  servicesDesc: {
    en: "Explore our full range of digital marketing solutions designed to grow your business.",
    ar: "استكشف مجموعتنا الكاملة من حلول التسويق الرقمي المصممة لتنمية عملك.",
    he: "גלה את כל פתרונות השיווק הדיגיטלי שלנו שנועדו להגדיל את העסק שלך."
  },
  whyTitle: {
    en: "Why Choose Our Services",
    ar: "لماذا تختار خدماتنا",
    he: "למה לבחור בשירותים שלנו"
  },
  whyDesc: {
    en: "Our services deliver measurable results, maximize ROI, and help your brand dominate the digital landscape.",
    ar: "خدماتنا تحقق نتائج قابلة للقياس، وتزيد العائد على الاستثمار، وتساعد علامتك التجارية على التميز في العالم الرقمي.",
    he: "השירותים שלנו מספקים תוצאות מדידות, ממקסמים את ה-ROI, ועוזרים למותג שלך לשלוט בזירה הדיגיטלית."
  },
  howTitle: {
    en: "How We Drive Your Digital Growth",
    ar: "كيف نقود نموك الرقمي",
    he: "איך אנחנו מניעים את הצמיחה הדיגיטלית שלך"
  },
  howDesc: {
    en: "Our data-driven strategies and creative approach ensure maximum impact and growth for your brand online.",
    ar: "استراتيجياتنا القائمة على البيانات ونهجنا الإبداعي يضمنان أقصى تأثير ونمو لعلامتك التجارية عبر الإنترنت.",
    he: "האסטרטגיות מבוססות הנתונים והגישה היצירתית שלנו מבטיחות השפעה וצמיחה מרבית למותג שלך אונליין."
  },
  joinTitle: {
    en: "Join Our Growth Journey",
    ar: "انضم إلى رحلة نمونا",
    he: "הצטרף למסע הצמיחה שלנו"
  },
  joinDesc: {
    en: "Be part of our digital transformation. Subscribe or join our team to shape the future of marketing.",
    ar: "كن جزءًا من تحولنا الرقمي. اشترك أو انضم إلى فريقنا لتشكيل مستقبل التسويق.",
    he: "היה חלק מהטרנספורמציה הדיגיטלית שלנו. הירשם או הצטרף לצוות שלנו לעצב את עתיד השיווק."
  },
  joinBtn: {
    en: "Join Us",
    ar: "انضم إلينا",
    he: "הצטרף אלינו"
  },
  formName: {
    en: "Your Name",
    ar: "اسمك",
    he: "השם שלך"
  },
  formEmail: {
    en: "Your Email",
    ar: "بريدك الإلكتروني",
    he: "האימייל שלך"
  },
  formMsg: {
    en: "Your Message",
    ar: "رسالتك",
    he: "ההודעה שלך"
  },
  formSubmit: {
    en: "Submit",
    ar: "إرسال",
    he: "שלח"
  },
  formThanks: {
    en: "🎉 Thank you for joining us! We’ll reach out soon.",
    ar: "🎉 شكرًا لانضمامك إلينا! سنتواصل معك قريبًا.",
    he: "🎉 תודה שהצטרפת אלינו! ניצור איתך קשר בקרוב."
  },
  exploreMore: {
    en: "Explore More",
    ar: "اكتشف المزيد",
    he: "למד עוד"
  },
  cards: [
    {
      title: {
        en: "Search Engine Optimization",
        ar: "تحسين محركات البحث",
        he: "קידום אתרים במנועי חיפוש"
      },
      desc: {
        en: "Boost visibility and rank higher on Google with our tailored SEO strategies. We perform in-depth keyword research to target the right audience. Our on-page and off-page optimization ensures your website meets search engine standards. We create high-quality content that engages users and builds authority. With continuous monitoring and analytics, we refine strategies for long-term growth. Technical SEO fixes improve site speed, mobile usability, and overall user experience.",
        ar: "عزز الظهور وارتقِ في نتائج Google مع استراتيجيات SEO المخصصة. نقوم ببحث كلمات مفتاحية معمق لاستهداف الجمهور المناسب. تحسين داخلي وخارجي يضمن توافق موقعك مع معايير محركات البحث. نصنع محتوى عالي الجودة يجذب المستخدمين ويبني المصداقية. مع المراقبة المستمرة والتحليلات، نطور الاستراتيجيات للنمو طويل الأمد. إصلاحات SEO التقنية تحسن سرعة الموقع وتجربة المستخدم.",
        he: "הגבר נראות ודורג גבוה יותר בגוגל עם אסטרטגיות SEO מותאמות. אנו מבצעים מחקר מילות מפתח מעמיק, מבצעים אופטימיזציה פנימית וחיצונית, יוצרים תוכן איכותי, ומבצעים תיקונים טכניים לשיפור מהירות האתר וחוויית המשתמש."
      },
      content: {
        en: "Boost search rankings, attract high-quality traffic, and increase brand visibility with our advanced SEO strategies.",
        ar: "عزز ترتيب البحث، واجذب زيارات عالية الجودة، وزد من ظهور علامتك التجارية مع استراتيجيات SEO المتقدمة.",
        he: "שפר דירוגים, משוך תנועה איכותית, והגדל את הנראות של המותג שלך עם אסטרטגיות SEO מתקדמות."
      },
      img: seoImg,
      link: "/EngineOptimization"
    },
    {
      title: {
        en: "Pay-Per-Click Advertising",
        ar: "إعلانات الدفع لكل نقرة",
        he: "פרסום PPC"
      },
      desc: {
        en: "Maximize ROI with highly-targeted paid campaigns. We design ads that reach the right audience at the right time. Our team continuously optimizes bids and keywords for the best performance. Detailed tracking and analytics allow us to measure and improve conversions. From Google Ads to social media platforms, we ensure your campaigns deliver measurable results. Creative copy and visuals capture attention and drive engagement.",
        ar: "حقق أقصى عائد مع حملات مدفوعة مستهدفة للغاية. نصمم إعلانات تصل للجمهور المناسب في الوقت المناسب. فريقنا يواصل تحسين العروض والكلمات المفتاحية لتحقيق أفضل أداء. التتبع والتحليلات التفصيلية تمكننا من قياس وتحسين التحويلات. من إعلانات Google إلى وسائل التواصل الاجتماعي، نضمن أن تحقق حملاتك نتائج قابلة للقياس.",
        he: "מקסם ROI עם קמפיינים ממומנים ממוקדים. אנו מעצבים מודעות שמגיעות לקהל הנכון בזמן הנכון, מבצעים אופטימיזציה מתמדת, ומודדים תוצאות להגדלת המרות."
      },
      content: {
        en: "Run targeted campaigns that maximize ROI, generate instant leads, and deliver measurable results for your business.",
        ar: "قم بتشغيل حملات مستهدفة تزيد العائد، وتولد عملاء محتملين فورًا، وتحقق نتائج قابلة للقياس.",
        he: "הפעל קמפיינים ממוקדים שממקסמים ROI, מייצרים לידים מיידיים, ומספקים תוצאות מדידות לעסק שלך."
      },
      img: ppcImg,
      link: "/payperclick"
    },
    {
      title: {
        en: "Content Marketing",
        ar: "تسويق المحتوى",
        he: "שיווק תוכן"
      },
      desc: {
        en: "Create engaging content that attracts and converts your audience. We craft blog posts, articles, and multimedia that resonate with your target market. Our strategies focus on storytelling that builds brand authority and trust. Each piece is optimized for SEO to increase visibility and reach. We analyze performance metrics to refine content for maximum impact. From social posts to long-form content, we help turn readers into loyal customers.",
        ar: "أنشئ محتوى جذابًا يجذب جمهورك ويحوّله إلى عملاء. نصنع مقالات ومنشورات ومدونات تتوافق مع جمهورك المستهدف. استراتيجياتنا تركز على السرد الذي يبني الثقة والمصداقية. كل قطعة محتوى محسنة لتحسين محركات البحث لزيادة الظهور. نقوم بتحليل الأداء لتحسين المحتوى لأقصى تأثير.",
        he: "צור תוכן מרתק שמושך וממיר את הקהל שלך. אנו יוצרים פוסטים, מאמרים ומדיה שמתחברים לשוק היעד, ממוקדים בסטוריטלינג ובניית אמון."
      },
      content: {
        en: "Create compelling content that educates, engages, and converts your audience into loyal customers effectively.",
        ar: "أنشئ محتوى مقنعًا يثقف ويجذب جمهورك ويحوّله إلى عملاء أوفياء بفعالية.",
        he: "צור תוכן משכנע שמחנך, מעורר וממיר את הקהל שלך ללקוחות נאמנים."
      },
      img: contentImg,
      link: "/contentmarketing"
    },
    {
      title: {
        en: "Social Media Management",
        ar: "إدارة وسائل التواصل الاجتماعي",
        he: "ניהול מדיה חברתית"
      },
      desc: {
        en: "Grow brand presence across platforms with creative campaigns. We manage and optimize your social channels to reach the right audience. Engaging content, eye-catching visuals, and strategic posting increase followers and engagement. We monitor trends and analytics to continuously improve performance. From Instagram to LinkedIn, our campaigns drive brand awareness and meaningful interactions. Our goal is to turn followers into loyal customers through consistent and compelling messaging.",
        ar: "نمِّ حضور علامتك التجارية عبر المنصات بحملات إبداعية. ندير ونحسن قنواتك الاجتماعية للوصول للجمهور المناسب. محتوى جذاب ومرئي واستراتيجيات نشر تزيد المتابعين والتفاعل.",
        he: "הגדל את הנוכחות של המותג שלך עם קמפיינים יצירתיים. אנו מנהלים ומבצעים אופטימיזציה לערוצים החברתיים שלך, יוצרים תוכן מרתק ומגדילים מעורבות."
      },
      content: {
        en: "Grow your brand presence, foster engagement, and build a thriving community across all social platforms.",
        ar: "نمِّ حضور علامتك التجارية، وزد التفاعل، وابنِ مجتمعًا مزدهرًا عبر جميع المنصات.",
        he: "הגדל את הנוכחות, הגבר מעורבות ובנה קהילה משגשגת בכל הפלטפורמות."
      },
      img: socialImg,
      link: "/socialmedia"
    },
    {
      title: {
        en: "Web Design & UX",
        ar: "تصميم المواقع وتجربة المستخدم",
        he: "עיצוב אתרים וחווית משתמש"
      },
      desc: {
        en: "Design seamless digital experiences that delight and convert users. We create visually appealing, user-friendly websites that reflect your brand identity. Our focus on UX ensures intuitive navigation and smooth interactions across devices. From wireframes to final design, every element is optimized for engagement and conversion. We integrate modern design trends with performance best practices for a fast, responsive experience. The result is a website that captivates visitors and drives measurable results.",
        ar: "صمم تجارب رقمية سلسة تسعد المستخدمين وتحولهم إلى عملاء. نصمم مواقع جذابة وسهلة الاستخدام تعكس هوية علامتك التجارية. نركز على تجربة المستخدم لضمان التنقل السلس والتفاعل السهل.",
        he: "עצב חוויות דיגיטליות חלקות שמלהיבות וממירות משתמשים. אנו יוצרים אתרים מושכים, ידידותיים למשתמש, וממוקדים בהמרה."
      },
      content: {
        en: "Design intuitive and user-friendly digital experiences that delight visitors and increase conversion rates.",
        ar: "صمم تجارب رقمية سهلة الاستخدام تسعد الزوار وتزيد معدلات التحويل.",
        he: "עצב חוויות דיגיטליות אינטואיטיביות שמלהיבות מבקרים ומגדילות המרות."
      },
      img: uxImg,
      link: "/webdesign"
    },
    {
      title: {
        en: "Analytics & Reporting",
        ar: "التحليلات والتقارير",
        he: "אנליטיקה ודיווח"
      },
      desc: {
        en: "Make data-driven decisions with real-time analytics. We track key metrics across your digital marketing campaigns to understand performance. Detailed reports highlight opportunities for optimization and growth. Our team provides actionable insights to improve ROI and customer engagement. We use advanced tools to monitor trends, conversions, and user behavior. With continuous analysis, we help your business make informed decisions and achieve long-term success.",
        ar: "اتخذ قرارات مبنية على البيانات مع تحليلات وتقارير فورية. نتابع مؤشرات الأداء الرئيسية عبر حملاتك لفهم الأداء. تقارير مفصلة تبرز فرص التحسين والنمو.",
        he: "קבל החלטות מבוססות נתונים עם אנליטיקה בזמן אמת. אנו עוקבים אחרי מדדים מרכזיים, מספקים דוחות מפורטים ותובנות לשיפור ROI ומעורבות."
      },
      content: {
        en: "Leverage actionable insights from real-time analytics to optimize campaigns and drive continuous business growth.",
        ar: "استفد من الرؤى القابلة للتنفيذ من التحليلات الفورية لتحسين الحملات وتحقيق نمو مستمر.",
        he: "נצל תובנות מהאנליטיקה בזמן אמת כדי לייעל קמפיינים ולהניע צמיחה מתמשכת."
      },
      img: analyticsImg,
      link: "/analyticsreporting"
    }
  ]
};

const Services = () => {
  const { language } = useLanguage();
  const isRTL = language === "ar" || language === "he";
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const services = translations.cards;

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
          src={servicesVideo}
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
            {translations.heroTitle[language]}
          </motion.h1>
          <motion.p
            className="mt-6 text-lg md:text-2xl max-w-4xl text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {translations.heroDesc[language]}
          </motion.p>
        </div>
      </section>

      {/* Split Services Section */}
      <section className="bg-gray-50 dark:bg-gray-950 py-5 px-6 transition-colors duration-500">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            {translations.servicesTitle[language]}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {translations.servicesDesc[language]}
          </p>
        </motion.div>

        <div className="flex flex-col gap-12 max-w-7xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className={`flex flex-col md:flex-row items-center rounded-3xl overflow-hidden shadow-lg group ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } bg-white dark:bg-gray-900 transition-all duration-500`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full md:w-1/2 h-64 md:h-96 overflow-hidden">
                <motion.img
                  src={service.img}
                  alt={service.title[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                />
              </div>
              <div className="p-8 md:w-1/2 text-center md:text-left relative">
                <h3 className="text-3xl font-bold text-black dark:text-white mb-4">
                  {service.title[language]}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-justify">
                  {service.desc[language]}
                </p>
                <motion.a
                  href={service.link}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-4 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  {translations.exploreMore[language]}
                  <motion.span className="inline-block" initial={{ x: 0 }} whileHover={{ x: 5 }}>
                    →
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hexagon Why Choose Us Section */}
      <section className="bg-gray-50 dark:bg-gray-950 py-10 px-6 transition-colors duration-500">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            {translations.whyTitle[language]}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {translations.whyDesc[language]}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-7xl mx-auto">
          {services.map((service, idx) => (
            <motion.a
              key={idx}
              href={service.link}
              className="group relative flex items-center justify-center w-full h-80 cursor-pointer"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-64 h-64 bg-white dark:bg-gray-900 clip-hex rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 flex flex-col items-center justify-center p-6 border-4 border-blue-400 dark:border-purple-500">
                <h3 className="text-xl font-bold text-black dark:text-white text-center mb-2">
                  {service.title[language]}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-center text-sm leading-relaxed">
                  {service.content[language]}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition duration-500 clip-hex rounded-2xl"></div>
            </motion.a>
          ))}
        </div>
        <style>
          {`
            .clip-hex {
              clip-path: polygon(
                25% 6.7%, 75% 6.7%,
                100% 50%, 75% 93.3%,
                25% 93.3%, 0% 50%
              );
            }
          `}
        </style>
      </section>

      {/* Skewed Parallelogram Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950 py-5 px-6 transition-colors duration-500">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            {translations.howTitle[language]}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {translations.howDesc[language]}
          </p>
        </motion.div>
        {/* ...existing cards, you can add translations if needed... */}
      </section>

      {/* Join Our Team Section */}
      <section
        className="relative bg-cover bg-center py-20 px-6"
        style={{ backgroundImage: `url(${join})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {translations.joinTitle[language]}
          </motion.h2>
          <p className="text-lg mb-8">
            {translations.joinDesc[language]}
          </p>

          {!showForm && !submitted && (
            <motion.button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              {translations.joinBtn[language]}
            </motion.button>
          )}

          {showForm && !submitted && (
            <motion.form
              onSubmit={handleSubmit}
              className="mt-8 bg-white text-black p-6 rounded-2xl shadow-lg space-y-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <input
                type="text"
                placeholder={translations.formName[language]}
                className="w-full p-3 rounded-lg border"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder={translations.formEmail[language]}
                className="w-full p-3 rounded-lg border"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <textarea
                placeholder={translations.formMsg[language]}
                className="w-full p-3 rounded-lg border"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
              >
                {translations.formSubmit[language]}
              </button>
            </motion.form>
          )}

          {submitted && (
            <motion.div
              className="mt-8 bg-green-600 text-white p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {translations.formThanks[language]}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;