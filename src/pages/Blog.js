
import React, { useState } from "react";
import { motion } from "framer-motion";
import blogVideo from "../images/blog.mp4";
import seoProject from "../images/seo-project.jpg";
import ppcProject from "../images/ppc-project.jpg";
import contentProject from "../images/content-project.jpg";
import { useLanguage } from "../LanguageContext";


const translations = {
  en: {
    heroTitle: "Insights That Drive Digital Success",
    heroDesc: "Stay ahead in SEO, digital marketing, and brand growth with our latest strategies, industry updates, and expert tips.",
    featuredTitle: "Featured Blog Insights",
    featuredDesc: "Explore expert articles, trends, and strategies that help your brand grow in the digital world.",
    readMore: "Read More →",
    journeyTitle: "Explore Our Blog Journey",
    journeyDesc: "Dive into different aspects of digital marketing through our curated categories, designed to guide you step by step.",
    highlightsTitle: "Featured Blog Highlights",
    highlightsDesc: "Explore our latest articles, insights, and strategies on digital marketing, SEO, and content creation.",
    subscribeTitle: "Get the Latest Tips Straight to Your Inbox",
    subscribeDesc: "Subscribe to our newsletter to receive actionable insights, SEO strategies, and digital marketing tips every week.",
    subscribePlaceholder: "Enter your email",
    subscribeBtn: "Subscribe",
    subscribeSuccess: "Thank you! You have successfully subscribed.",
    blogs: [
      {
        title: "Top SEO Trends to Watch in 2025",
        excerpt: "Discover the latest SEO strategies shaping the digital marketing landscape and how you can stay ahead of the competition.",
        tag: "SEO",
        date: "Sep 1, 2025",
        link: "/blog1",
      },
      {
        title: "Social Media Hacks for Brand Growth",
        excerpt: "Learn powerful tactics to grow engagement and build a strong presence across all major social media platforms.",
        tag: "Social Media",
        date: "Aug 20, 2025",
        link: "/blog2",
      },
      {
        title: "Content Marketing That Converts",
        excerpt: "Find out how to create compelling content that attracts, educates, and turns readers into loyal customers.",
        tag: "Content Marketing",
        date: "Aug 10, 2025",
        link: "/blog3",
      },
    ],
    journey: [
      {
        title: "SEO Mastery",
        desc: "Learn step-by-step strategies that help websites climb search rankings and capture quality traffic.",
        color: "from-blue-500 to-blue-700",
      },
      {
        title: "Content That Engages",
        desc: "Explore guides on creating impactful blogs, videos, and infographics that truly connect with your audience.",
        color: "from-blue-500 to-blue-700",
      },
      {
        title: "Social Media Buzz",
        desc: "Stay updated with the latest hacks, case studies, and strategies for building social influence.",
        color: "from-blue-500 to-blue-700",
      },
      {
        title: "Analytics Insights",
        desc: "Decode numbers into stories — discover how data reveals opportunities for growth and optimization.",
        color: "from-blue-500 to-blue-700",
      },
    ],
    blogHighlights: [
      {
        img: seoProject,
        category: "SEO Strategies",
        title: "Top 5 SEO Trends Shaping 2025",
        excerpt: "Stay ahead in search rankings with the latest trends and proven tactics every business should know.",
        hoverContent: "Learn how AI, voice search, and advanced link-building are reshaping SEO. Implement these tips to outrank competitors.",
      },
      {
        img: contentProject,
        category: "Content Marketing",
        title: "How to Create Content That Converts",
        excerpt: "Discover the secret to crafting blogs and social posts that actually generate leads and engagement.",
        hoverContent: "Master storytelling, headline optimization, and content distribution to engage your audience and drive conversions.",
      },
      {
        img: ppcProject,
        category: "Digital Ads",
        title: "Maximizing ROI with Smart Campaigns",
        excerpt: "From Google Ads to Meta campaigns, learn how to optimize every dollar of your ad spend.",
        hoverContent: "Explore targeting strategies, ad creatives, and budget allocation tips to increase clicks, leads, and sales efficiently.",
      },
    ],
  },
  ar: {
    heroTitle: "رؤى تقود النجاح الرقمي",
    heroDesc: "ابق في الصدارة في تحسين محركات البحث والتسويق الرقمي ونمو العلامة التجارية من خلال أحدث استراتيجياتنا وتحديثات الصناعة ونصائح الخبراء.",
    featuredTitle: "أبرز مقالات المدونة",
    featuredDesc: "استكشف مقالات الخبراء والاتجاهات والاستراتيجيات التي تساعد علامتك التجارية على النمو في العالم الرقمي.",
    readMore: "اقرأ المزيد →",
    journeyTitle: "استكشف رحلتنا في المدونة",
    journeyDesc: "تعمق في جوانب التسويق الرقمي المختلفة من خلال فئاتنا المنسقة المصممة لإرشادك خطوة بخطوة.",
    highlightsTitle: "أهم مقالات المدونة",
    highlightsDesc: "استكشف أحدث مقالاتنا ورؤانا واستراتيجياتنا حول التسويق الرقمي وتحسين محركات البحث وإنشاء المحتوى.",
    subscribeTitle: "احصل على أحدث النصائح مباشرة إلى بريدك الإلكتروني",
    subscribeDesc: "اشترك في نشرتنا الإخبارية لتصلك رؤى قابلة للتنفيذ واستراتيجيات تحسين محركات البحث ونصائح التسويق الرقمي كل أسبوع.",
    subscribePlaceholder: "أدخل بريدك الإلكتروني",
    subscribeBtn: "اشترك",
    subscribeSuccess: "شكرًا لك! تم الاشتراك بنجاح.",
    blogs: [
      {
        title: "أهم اتجاهات تحسين محركات البحث لعام 2025",
        excerpt: "اكتشف أحدث استراتيجيات تحسين محركات البحث التي تشكل مشهد التسويق الرقمي وكيفية البقاء في المقدمة.",
        tag: "تحسين محركات البحث",
        date: "١ سبتمبر ٢٠٢٥",
        link: "/blog1",
      },
      {
        title: "حيل وسائل التواصل الاجتماعي لنمو العلامة التجارية",
        excerpt: "تعلم تكتيكات قوية لزيادة التفاعل وبناء حضور قوي عبر جميع منصات التواصل الاجتماعي الرئيسية.",
        tag: "وسائل التواصل الاجتماعي",
        date: "٢٠ أغسطس ٢٠٢٥",
        link: "/blog2",
      },
      {
        title: "تسويق المحتوى الذي يحول العملاء",
        excerpt: "اكتشف كيفية إنشاء محتوى يجذب ويثقف ويحول القراء إلى عملاء مخلصين.",
        tag: "تسويق المحتوى",
        date: "١٠ أغسطس ٢٠٢٥",
        link: "/blog3",
      },
    ],
    journey: [
      {
        title: "إتقان تحسين محركات البحث",
        desc: "تعلم استراتيجيات خطوة بخطوة تساعد المواقع على الصعود في نتائج البحث وجذب زيارات ذات جودة.",
        color: "from-blue-500 to-blue-700",
      },
      {
        title: "محتوى يجذب الجمهور",
        desc: "استكشف أدلة حول إنشاء مدونات وفيديوهات وإنفوجرافيك مؤثرة تتواصل حقًا مع جمهورك.",
        color: "from-blue-500 to-blue-700",
      },
      {
        title: "ضجة وسائل التواصل الاجتماعي",
        desc: "ابق على اطلاع بأحدث الحيل ودراسات الحالة والاستراتيجيات لبناء التأثير الاجتماعي.",
        color: "from-blue-500 to-blue-700",
      },
      {
        title: "رؤى التحليلات",
        desc: "حوّل الأرقام إلى قصص — اكتشف كيف تكشف البيانات عن فرص للنمو والتحسين.",
        color: "from-blue-500 to-blue-700",
      },
    ],
    blogHighlights: [
      {
        img: seoProject,
        category: "استراتيجيات تحسين محركات البحث",
        title: "أهم 5 اتجاهات لتحسين محركات البحث في 2025",
        excerpt: "ابق في الصدارة في نتائج البحث مع أحدث الاتجاهات والتكتيكات المثبتة التي يجب أن يعرفها كل عمل.",
        hoverContent: "تعرف على كيف تغير الذكاء الاصطناعي والبحث الصوتي وبناء الروابط المتقدم مشهد تحسين محركات البحث. طبق هذه النصائح لتتفوق على المنافسين.",
      },
      {
        img: contentProject,
        category: "تسويق المحتوى",
        title: "كيفية إنشاء محتوى يحول العملاء",
        excerpt: "اكتشف سر إنشاء مدونات ومنشورات اجتماعية تولد بالفعل عملاء محتملين وتفاعل.",
        hoverContent: "أتقن فن السرد وتحسين العناوين وتوزيع المحتوى لجذب جمهورك وزيادة التحويلات.",
      },
      {
        img: ppcProject,
        category: "الإعلانات الرقمية",
        title: "تعظيم العائد من الحملات الذكية",
        excerpt: "من إعلانات Google إلى حملات Meta، تعرف على كيفية تحسين كل دولار من ميزانية إعلاناتك.",
        hoverContent: "استكشف استراتيجيات الاستهداف والإبداع الإعلاني ونصائح تخصيص الميزانية لزيادة النقرات والعملاء والمبيعات بكفاءة.",
      },
    ],
  },
  he: {
    heroTitle: "תובנות שמובילות להצלחה דיגיטלית",
    heroDesc: "הישארו מובילים בקידום אתרים, שיווק דיגיטלי וצמיחת מותג עם האסטרטגיות, העדכונים והטיפים העדכניים ביותר שלנו.",
    featuredTitle: "תובנות בלוג נבחרות",
    featuredDesc: "גלו מאמרי מומחים, מגמות ואסטרטגיות שיעזרו למותג שלכם לצמוח בעולם הדיגיטלי.",
    readMore: "קרא עוד →",
    journeyTitle: "גלו את מסע הבלוג שלנו",
    journeyDesc: "העמיקו בהיבטים שונים של שיווק דיגיטלי דרך קטגוריות שנבחרו בקפידה, שנועדו להדריך אתכם שלב אחר שלב.",
    highlightsTitle: "הבלוגים המובילים",
    highlightsDesc: "גלו את המאמרים, התובנות והאסטרטגיות האחרונות שלנו על שיווק דיגיטלי, קידום אתרים ויצירת תוכן.",
    subscribeTitle: "קבלו את הטיפים האחרונים ישירות לתיבת הדואר שלכם",
    subscribeDesc: "הירשמו לניוזלטר שלנו כדי לקבל תובנות, אסטרטגיות קידום אתרים וטיפים לשיווק דיגיטלי בכל שבוע.",
    subscribePlaceholder: "הזן את האימייל שלך",
    subscribeBtn: "הירשם",
    subscribeSuccess: "תודה! נרשמת בהצלחה.",
    blogs: [
      {
        title: "מגמות ה-SEO המובילות לשנת 2025",
        excerpt: "גלו את אסטרטגיות ה-SEO העדכניות ביותר שמעצבות את עולם השיווק הדיגיטלי ואיך להישאר מובילים.",
        tag: "SEO",
        date: "1 ספט׳ 2025",
        link: "/blog1",
      },
      {
        title: "טריקים לצמיחת מותג ברשתות החברתיות",
        excerpt: "למדו טקטיקות עוצמתיות להגדלת מעורבות ובניית נוכחות חזקה בכל הפלטפורמות המרכזיות.",
        tag: "רשתות חברתיות",
        date: "20 אוג׳ 2025",
        link: "/blog2",
      },
      {
        title: "שיווק תוכן שממיר",
        excerpt: "גלו כיצד ליצור תוכן שמושך, מחנך והופך קוראים ללקוחות נאמנים.",
        tag: "שיווק תוכן",
        date: "10 אוג׳ 2025",
        link: "/blog3",
      },
    ],
    journey: [
      {
        title: "שליטה ב-SEO",
        desc: "למדו אסטרטגיות שלב אחר שלב שמסייעות לאתרים לטפס בדירוגים ולמשוך תנועה איכותית.",
        color: "from-blue-500 to-blue-700",
      },
      {
        title: "תוכן שמרתק",
        desc: "גלו מדריכים ליצירת בלוגים, סרטונים ואינפוגרפיקות שמתחברים באמת לקהל שלכם.",
        color: "from-blue-500 to-blue-700",
      },
      {
        title: "באזז ברשתות החברתיות",
        desc: "הישארו מעודכנים בטריקים, מחקרי מקרה ואסטרטגיות לבניית השפעה חברתית.",
        color: "from-blue-500 to-blue-700",
      },
      {
        title: "תובנות אנליטיות",
        desc: "הפכו מספרים לסיפורים — גלו כיצד נתונים חושפים הזדמנויות לצמיחה ואופטימיזציה.",
        color: "from-blue-500 to-blue-700",
      },
    ],
    blogHighlights: [
      {
        img: seoProject,
        category: "אסטרטגיות SEO",
        title: "5 מגמות SEO מובילות לשנת 2025",
        excerpt: "הישארו מובילים בדירוגי החיפוש עם המגמות והטקטיקות העדכניות שכל עסק צריך להכיר.",
        hoverContent: "גלו כיצד בינה מלאכותית, חיפוש קולי ובניית קישורים מתקדמת משנים את עולם ה-SEO. יישמו את הטיפים כדי לעקוף מתחרים.",
      },
      {
        img: contentProject,
        category: "שיווק תוכן",
        title: "איך ליצור תוכן שממיר",
        excerpt: "גלו את הסוד ליצירת בלוגים ופוסטים שמייצרים לידים ומעורבות.",
        hoverContent: "השתלטו על סיפור סיפורים, אופטימיזציית כותרות והפצת תוכן כדי לרתק את הקהל ולהגדיל המרות.",
      },
      {
        img: ppcProject,
        category: "פרסום דיגיטלי",
        title: "מקסום החזר השקעה עם קמפיינים חכמים",
        excerpt: "מ-Google Ads ועד קמפיינים ב-Meta, למדו כיצד למקסם כל שקל מתקציב הפרסום.",
        hoverContent: "גלו אסטרטגיות מיקוד, קריאייטיבים וטיפים לחלוקת תקציב להגדלת קליקים, לידים ומכירות ביעילות.",
      },
    ],
  },
};

const Blog = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // RTL support
  const isRTL = language === "ar" || language === "he";

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return alert(t.subscribePlaceholder);
    setSubmitted(true);
    setEmail("");
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
          src={blogVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-white/40 dark:bg-black/50 transition-colors duration-500" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight text-black dark:text-white"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-2xl max-w-3xl text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {t.heroDesc}
          </motion.p>
        </div>
      </section>

      {/* Featured Blog Insights */}
      <section className="relative py-5 px-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-950 dark:to-gray-900 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 dark:bg-blue-500/20 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-500/20 rounded-full blur-3xl opacity-40"></div>
        <motion.div
          className="relative z-10 text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            {t.featuredTitle}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {t.featuredDesc}
          </p>
        </motion.div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {t.blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <div className="p-8 flex flex-col h-full">
                <span className="text-sm font-semibold text-blue-600 dark:text-purple-400 mb-3">
                  {blog.tag} • {blog.date}
                </span>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-purple-400 transition">
                  {blog.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">
                  {blog.excerpt}
                </p>
                <motion.a
                  href={blog.link}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-purple-400 font-medium hover:gap-4 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  {t.readMore}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blog Journey Timeline */}
      <section className="relative py-5 px-6 bg-white dark:bg-gray-950 overflow-hidden">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            {t.journeyTitle}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {t.journeyDesc}
          </p>
        </motion.div>
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-600 transform -translate-x-1/2"></div>
          <div className="space-y-8">
            {t.journey.map((item, idx) => (
              <motion.div
                key={idx}
                className={`relative flex items-center ${idx % 2 === 0 ? "justify-start" : "justify-end"}`}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <div
                  className={`relative w-full md:w-5/12 bg-gradient-to-r ${item.color} text-white rounded-3xl shadow-xl p-8 cursor-pointer hover:scale-105 transition-transform duration-500`}
                >
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed">{item.desc}</p>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-white opacity-20 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white opacity-20 rounded-full blur-2xl"></div>
                </div>
                <div className="absolute left-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-950 transform -translate-x-1/2 z-10"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Highlights with Hover Content */}
      <section className="bg-gray-50 dark:bg-gray-950 py-5 px-6 transition-colors duration-500">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-black dark:text-white mb-4">
            {t.highlightsTitle}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {t.highlightsDesc}
          </p>
        </motion.div>
        <div className="flex flex-col gap-16 max-w-6xl mx-auto">
          {t.blogHighlights.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative group w-full md:h-96 h-64 overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 80, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              whileHover="hovered"
              transition={{ duration: 0.9, delay: idx * 0.3 }}
              viewport={{ once: true }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 transform -skew-y-3 md:-skew-y-6">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-black/40 md:skew-y-3 rounded-xl"
                variants={{ hovered: { backgroundColor: "rgba(128, 90, 213, 0.6)" } }}
                transition={{ duration: 0.5 }}
              />
              {/* Hover Content */}
              <motion.div
                className="absolute bottom-6 left-6 text-white md:skew-y-3 z-10"
                variants={{ hovered: { opacity: 1, y: 0 } }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5 }}
              >
                <p className="uppercase tracking-wider font-semibold text-sm opacity-90">
                  {item.category}
                </p>
                <h3 className="text-2xl font-bold mt-2">{item.title}</h3>
                <p className="text-sm mt-3 max-w-sm opacity-90 leading-relaxed">
                  {item.excerpt}
                </p>
                <p className="mt-2 text-xs opacity-80 italic">{item.hoverContent}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Subscribe & Latest Tips Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            {t.subscribeTitle}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {t.subscribeDesc}
          </p>
        </motion.div>
        {/* Subscribe Form */}
        <motion.form
          className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4"
          onSubmit={handleSubscribe}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <input
            type="email"
            placeholder={t.subscribePlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 transition"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-blue-600 dark:bg-purple-600 text-white font-semibold hover:bg-blue-700 dark:hover:bg-purple-700 transition"
          >
            {t.subscribeBtn}
          </button>
        </motion.form>
        {/* Success Message */}
        {submitted && (
          <motion.p
            className="mt-4 text-green-600 dark:text-green-400 text-center font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {t.subscribeSuccess}
          </motion.p>
        )}
      </section>
    </div>
  );
};

export default Blog;
