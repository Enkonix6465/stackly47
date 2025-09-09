import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import storyImg from "../images/story.jpg";
import about from "../images/about.mp4";
import missionImg from "../images/vission.jpg";
import visionImg from "../images/vision.jpg";
import priya from "../images/priya.jpg";
import karan from "../images/karan.jpg";
import rohith from "../images/rohith.jpg";
import ananya from "../images/ananya.jpg";
import neha from "../images/neha.jpg";
import ritika from "../images/ritika.jpg";
import arjun from "../images/arjun.jpg";

const translations = {
  heroTitle: {
    en: "About Us",
    ar: "من نحن",
    he: "עלינו"
  },
  heroDesc: {
    en: "Stackly empowers businesses with innovative IT, cloud, and digital solutions to drive growth, enhance performance, and achieve digital transformation.",
    ar: "تُمكّن Stackly الشركات من خلال حلول تكنولوجيا المعلومات والسحابة والرقمية المبتكرة لدفع النمو وتعزيز الأداء وتحقيق التحول الرقمي.",
    he: "Stackly מעצימה עסקים עם פתרונות IT, ענן ודיגיטל חדשניים להנעת צמיחה, שיפור ביצועים והשגת טרנספורמציה דיגיטלית."
  },
  ourStoryTitle: {
    en: "Our Story",
    ar: "قصتنا",
    he: "הסיפור שלנו"
  },
  ourStoryDesc: {
    en: "From humble beginnings, our mission has always been to leverage technology to empower businesses worldwide. We combine creativity, expertise, and innovative strategies to deliver transformative solutions.",
    ar: "من بدايات متواضعة، كانت مهمتنا دائمًا هي استخدام التكنولوجيا لتمكين الشركات حول العالم. نحن نجمع بين الإبداع والخبرة والاستراتيجيات المبتكرة لتقديم حلول تحويلية.",
    he: "מהתחלות צנועות, המשימה שלנו תמיד הייתה לנצל טכנולוגיה להעצמת עסקים ברחבי העולם. אנו משלבים יצירתיות, מומחיות ואסטרטגיות חדשניות כדי לספק פתרונות משנה."
  },
  features: [
    {
      en: { title: "Innovation-Driven", desc: "We constantly push boundaries to deliver future-ready IT solutions." },
      ar: { title: "مدفوعون بالابتكار", desc: "نواصل دفع الحدود لتقديم حلول تكنولوجيا معلومات جاهزة للمستقبل." },
      he: { title: "מונעי חדשנות", desc: "אנו דוחפים גבולות כדי לספק פתרונות IT מוכנים לעתיד." }
    },
    {
      en: { title: "Client-Centric", desc: "Your success drives our design, strategy, and implementation." },
      ar: { title: "مركزية العميل", desc: "نجاحك هو ما يدفع تصميمنا واستراتيجيتنا وتنفيذنا." },
      he: { title: "ממוקדי לקוח", desc: "ההצלחה שלך מניעה את העיצוב, האסטרטגיה והביצוע שלנו." }
    },
    {
      en: { title: "Agile Methodology", desc: "Flexible and scalable solutions to adapt to your evolving business needs." },
      ar: { title: "منهجية رشيقة", desc: "حلول مرنة وقابلة للتوسع لتلبية احتياجات عملك المتغيرة." },
      he: { title: "שיטת עבודה אג'ילית", desc: "פתרונות גמישים ומדרגיים להתאמה לצרכי העסק המשתנים שלך." }
    },
    {
      en: { title: "Cutting-Edge Tech", desc: "From AI to cloud, we integrate the latest tech for maximum impact." },
      ar: { title: "تقنيات متقدمة", desc: "من الذكاء الاصطناعي إلى السحابة، ندمج أحدث التقنيات لتحقيق أقصى تأثير." },
      he: { title: "טכנולוגיה מתקדמת", desc: "מ-AI ועד ענן, אנו משלבים את הטכנולוגיות החדשות ביותר להשפעה מרבית." }
    }
  ],
  missionTitle: {
    en: "Mission",
    ar: "مهمتنا",
    he: "משימה"
  },
  missionDesc: {
    en: "Our mission is to empower businesses with cutting-edge digital marketing strategies. We optimize SEO, enhance UX/UI, and boost online presence to drive growth, engagement, and measurable results for our clients.",
    ar: "مهمتنا هي تمكين الشركات باستراتيجيات تسويق رقمية متطورة. نحن نحسن تحسين محركات البحث، ونعزز تجربة المستخدم، ونزيد من الحضور الرقمي لتحقيق النمو والمشاركة والنتائج القابلة للقياس لعملائنا.",
    he: "המשימה שלנו היא להעצים עסקים עם אסטרטגיות שיווק דיגיטלי מתקדמות. אנו משפרים SEO, משדרגים UX/UI ומחזקים נוכחות דיגיטלית להנעת צמיחה, מעורבות ותוצאות מדידות ללקוחותינו."
  },
  visionTitle: {
    en: "Vision",
    ar: "رؤيتنا",
    he: "חזון"
  },
  visionDesc: {
    en: "Our vision is to be a leading digital marketing agency recognized for transforming businesses through innovative SEO strategies, exceptional UX/UI design, and dynamic online campaigns that deliver long-term success.",
    ar: "رؤيتنا هي أن نكون وكالة تسويق رقمي رائدة معترف بها لتحويل الأعمال من خلال استراتيجيات تحسين محركات البحث المبتكرة، وتصميم UX/UI الاستثنائي، والحملات الرقمية الديناميكية التي تحقق النجاح طويل الأمد.",
    he: "החזון שלנו הוא להיות סוכנות שיווק דיגיטלי מובילה המוכרת בשינוי עסקים באמצעות אסטרטגיות SEO חדשניות, עיצוב UX/UI יוצא דופן וקמפיינים דיגיטליים דינמיים שמביאים להצלחה ארוכת טווח."
  },
  coreValuesTitle: {
    en: "Our Core Values",
    ar: "قيمنا الأساسية",
    he: "הערכים שלנו"
  },
  coreValuesDesc: {
    en: "The principles that drive our team and shape the way we deliver impactful digital marketing solutions.",
    ar: "المبادئ التي تدفع فريقنا وتشكل الطريقة التي نقدم بها حلول تسويق رقمية مؤثرة.",
    he: "העקרונות שמניעים את הצוות שלנו ומעצבים את הדרך בה אנו מספקים פתרונות שיווק דיגיטלי משמעותיים."
  },
  coreValues: [
    {
      en: { title: "Innovation", desc: "Pushing creative and technical boundaries to deliver future-ready solutions." },
      ar: { title: "الابتكار", desc: "دفع الحدود الإبداعية والتقنية لتقديم حلول جاهزة للمستقبل." },
      he: { title: "חדשנות", desc: "דוחפים גבולות יצירתיים וטכניים כדי לספק פתרונות מוכנים לעתיד." }
    },
    {
      en: { title: "Transparency", desc: "Open communication and honesty in every project we take on." },
      ar: { title: "الشفافية", desc: "التواصل المفتوح والصدق في كل مشروع نقوم به." },
      he: { title: "שקיפות", desc: "תקשורת פתוחה וכנות בכל פרויקט." }
    },
    {
      en: { title: "Collaboration", desc: "Working together with clients and teams for stronger outcomes." },
      ar: { title: "التعاون", desc: "العمل مع العملاء والفرق لتحقيق نتائج أقوى." },
      he: { title: "שיתוף פעולה", desc: "עובדים יחד עם לקוחות וצוותים לתוצאות טובות יותר." }
    },
    {
      en: { title: "Growth", desc: "Helping businesses scale through data-driven marketing strategies." },
      ar: { title: "النمو", desc: "مساعدة الشركات على التوسع من خلال استراتيجيات تسويق قائمة على البيانات." },
      he: { title: "צמיחה", desc: "עוזרים לעסקים לצמוח באמצעות אסטרטגיות שיווק מבוססות נתונים." }
    },
    {
      en: { title: "Integrity", desc: "Always delivering with accountability and trust at the core." },
      ar: { title: "النزاهة", desc: "نقدم دائمًا مع المساءلة والثقة في جوهرنا." },
      he: { title: "יושרה", desc: "פועלים תמיד באחריות ובאמון." }
    },
    {
      en: { title: "Customer Success", desc: "Your success is our top priority, always. We go the extra mile to ensure satisfaction." },
      ar: { title: "نجاح العميل", desc: "نجاحك هو أولويتنا القصوى دائمًا. نبذل جهدًا إضافيًا لضمان رضاك." },
      he: { title: "הצלחת לקוח", desc: "ההצלחה שלך היא בראש סדר העדיפויות שלנו. אנו עושים מעל ומעבר כדי להבטיח שביעות רצון." }
    }
  ],
  teamTitle: {
    en: "Meet Our Team",
    ar: "تعرف على فريقنا",
    he: "הכירו את הצוות שלנו"
  },
  teamDesc: {
    en: "A passionate team of digital marketers, strategists, and creatives dedicated to driving measurable growth for our clients.",
    ar: "فريق متحمس من المسوقين الرقميين والاستراتيجيين والمبدعين المكرسين لتحقيق نمو ملموس لعملائنا.",
    he: "צוות נלהב של משווקים דיגיטליים, אסטרטגים ויוצרים שמוקדשים להנעת צמיחה מדידה עבור לקוחותינו."
  },
  testimonialsTitle: {
    en: "What Our Clients Say",
    ar: "ماذا يقول عملاؤنا",
    he: "מה הלקוחות שלנו אומרים"
  },
  testimonialsDesc: {
    en: "Real stories from businesses who trusted us to drive their digital growth.",
    ar: "قصص حقيقية من شركات وثقت بنا لدفع نموها الرقمي.",
    he: "סיפורים אמיתיים מעסקים שבחרו בנו להוביל את הצמיחה הדיגיטלית שלהם."
  }
};

const features = translations.features;
const coreValues = translations.coreValues;

const team = [
  {
    name: "Ananya Sharma",
    role: { en: "SEO Specialist", ar: "أخصائية تحسين محركات البحث", he: "מומחית SEO" },
    img: ananya,
    desc: {
      en: "Crafts strategies that put brands at the top of search results.",
      ar: "تصمم استراتيجيات تضع العلامات التجارية في صدارة نتائج البحث.",
      he: "בונה אסטרטגיות שממקמות מותגים בראש תוצאות החיפוש."
    }
  },
  {
    name: "Rohit Verma",
    role: { en: "Content Strategist", ar: "استراتيجي محتوى", he: "אסטרטג תוכן" },
    img: rohith,
    desc: {
      en: "Builds engaging narratives that connect audiences to brands.",
      ar: "يبني قصصًا جذابة تربط الجماهير بالعلامات التجارية.",
      he: "יוצר סיפורים שמחברים קהלים למותגים."
    }
  },
  {
    name: "Priya Nair",
    role: { en: "Social Media Manager", ar: "مديرة وسائل التواصل الاجتماعي", he: "מנהלת מדיה חברתית" },
    img: priya,
    desc: {
      en: "Drives brand presence through innovative campaigns.",
      ar: "تعزز حضور العلامة التجارية من خلال حملات مبتكرة.",
      he: "מקדמת נוכחות מותג באמצעות קמפיינים חדשניים."
    }
  },
  {
    name: "Karan Malhotra",
    role: { en: "PPC Specialist", ar: "أخصائي إعلانات الدفع لكل نقرة", he: "מומחה PPC" },
    img: karan,
    desc: {
      en: "Maximizes ROI with precision-driven ad campaigns.",
      ar: "يحقق أقصى عائد من خلال حملات إعلانية دقيقة.",
      he: "ממקסם החזר השקעה עם קמפיינים ממוקדים."
    }
  }
];

const testimonials = [
  {
    name: "Ritika Mehta",
    role: { en: "Founder, Fashion Brand", ar: "مؤسسة علامة أزياء", he: "מייסדת, מותג אופנה" },
    feedback: {
      en: "Stackly transformed our online presence. Their SEO and content strategy helped us rank on Google’s first page within months.",
      ar: "Stackly غيرت وجودنا الرقمي. استراتيجيتهم في تحسين محركات البحث والمحتوى ساعدتنا في الوصول للصفحة الأولى في Google خلال أشهر.",
      he: "Stackly שינתה את הנוכחות הדיגיטלית שלנו. אסטרטגיית ה-SEO והתוכן שלהם העלתה אותנו לעמוד הראשון בגוגל תוך חודשים."
    },
    img: ritika,
  },
  {
    name: "Arjun Patel",
    role: { en: "CEO, Tech Startup", ar: "الرئيس التنفيذي، شركة تقنية ناشئة", he: "מנכ\"ל, סטארטאפ טכנולוגי" },
    feedback: {
      en: "The team’s PPC campaigns boosted our leads by 60%. Their clear reporting and agile approach made the process seamless.",
      ar: "حملات الدفع لكل نقرة زادت عملاءنا بنسبة 60%. تقاريرهم الواضحة ونهجهم السريع جعل العملية سلسة.",
      he: "קמפייני ה-PPC של הצוות הגדילו את הלידים שלנו ב-60%. הדיווח הברור והגישה האג'ילית הפכו את התהליך לחלק."
    },
    img: arjun,
  },
  {
    name: "Neha Kapoor",
    role: { en: "Marketing Manager, Real Estate", ar: "مديرة تسويق، عقارات", he: "מנהלת שיווק, נדל\"ן" },
    feedback: {
      en: "Their social media strategies increased our engagement and brand awareness massively. Couldn’t have asked for better partners!",
      ar: "استراتيجيات وسائل التواصل الاجتماعي الخاصة بهم زادت من تفاعلنا ووعي العلامة التجارية بشكل كبير. لم نكن لنطلب شركاء أفضل!",
      he: "האסטרטגיות שלהם למדיה החברתית הגדילו משמעותית את המעורבות והמודעות למותג שלנו. לא יכולנו לבקש שותפים טובים יותר!"
    },
    img: neha,
  }
];

const AboutUs = () => {
  const { language } = useLanguage();
  const isRTL = language === "ar" || language === "he";
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
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
          src={about}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-white/40 dark:bg-black/50 transition-colors duration-500" />
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
      </section>

      {/* Our Story Section */}
      <section className="our-story relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={storyImg}
            alt="Our Story"
            className="w-full h-full object-cover opacity-20 dark:opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6"
          >
            {translations.ourStoryTitle[language]}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-16 text-lg leading-relaxed"
          >
            {translations.ourStoryDesc[language]}
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, idx) => (
              <motion.div
                key={idx}
                className="relative group bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-500 cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition duration-500 rounded-xl"></div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 z-10 relative">
                  {f[language].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 z-10 relative">
                  {f[language].desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-white dark:bg-gray-950 py-16 px-4 md:px-16 transition-colors duration-500">
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-black dark:text-white mb-2">
            {translations.missionTitle[language]} & {translations.visionTitle[language]}
          </h2>
          <div className="w-24 h-1 mx-auto bg-darkblue dark:bg-white rounded-full mt-2"></div>
        </motion.div>
        {/* Mission Card */}
        <motion.div
          className="flex flex-col md:flex-row items-center bg-white dark:bg-gray-900 px-10 py-8 rounded-full mb-8 shadow-lg transition-colors duration-500"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={missionImg}
            alt="Mission"
            className="w-36 h-36 rounded-full md:mr-8 mb-4 md:mb-0 object-cover border-4 border-darkblue dark:border-white"
            whileHover={{ rotate: 5 }}
          />
          <div>
            <h3 className="text-2xl font-bold text-darkblue dark:text-white mb-2">
              {translations.missionTitle[language]}
            </h3>
            <p className="text-black dark:text-gray-200 max-w-xl text-justify">
              {translations.missionDesc[language]}
            </p>
          </div>
        </motion.div>
        {/* Vision Card */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center bg-white dark:bg-gray-900 px-10 py-8 rounded-full shadow-lg transition-colors duration-500"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={visionImg}
            alt="Vision"
            className="w-36 h-36 rounded-full md:ml-8 mb-4 md:mb-0 object-cover border-4 border-darkblue dark:border-white"
            whileHover={{ rotate: -5 }}
          />
          <div>
            <h3 className="text-2xl font-bold text-darkblue dark:text-white mb-2">
              {translations.visionTitle[language]}
            </h3>
            <p className="text-black dark:text-gray-200 max-w-xl text-justify">
              {translations.visionDesc[language]}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Our Core Values Section */}
      <section className="bg-gray-50 dark:bg-gray-950 py-5 px-6 transition-colors duration-500">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            {translations.coreValuesTitle[language]}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {translations.coreValuesDesc[language]}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {coreValues.map((value, idx) => (
            <motion.div
              key={idx}
              className="relative group flex flex-col items-center justify-center p-8 rounded-full bg-white dark:bg-gray-900 shadow-lg cursor-pointer transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.07 }}
            >
              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 rounded-full transition duration-500"></div>
              <div className="mb-4"></div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                {value[language].title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {value[language].desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-gray-50 dark:bg-gray-950 py-16 px-6 transition-colors duration-500">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            {translations.teamTitle[language]}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {translations.teamDesc[language]}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden text-center transition-all duration-500 hover:shadow-2xl cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {member.role[language]}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {member.desc[language]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white dark:bg-gray-950 py-5 px-6 transition-colors duration-500">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            {translations.testimonialsTitle[language]}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {translations.testimonialsDesc[language]}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="group bg-gray-50 dark:bg-gray-900 p-8 rounded-tl-3xl rounded-br-3xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 50, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.9, delay: idx * 0.3 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "0px 15px 25px rgba(0,0,0,0.25)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition duration-500 rounded-tl-3xl rounded-br-3xl"></div>
              <img
                src={t.img}
                alt={t.name}
                className="w-20 h-20 object-cover rounded-full mx-auto mb-6 border-4 border-blue-600 group-hover:scale-110 transition-transform duration-500"
              />
              <p className="text-gray-700 dark:text-gray-300 italic mb-6 text-center relative z-10">
                "{t.feedback[language]}"
              </p>
              <h3 className="text-lg font-semibold text-black dark:text-white text-center relative z-10">
                {t.name}
              </h3>
              <p className="text-sm text-blue-600 dark:text-blue-400 text-center">
                {t.role[language]}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;