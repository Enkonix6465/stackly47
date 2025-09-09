
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import socialImg1 from "../images/social1.jpg";
import socialImg2 from "../images/social2.jpg";
import socialImg3 from "../images/social3.jpg";
import { useLanguage } from "../LanguageContext";

const translations = {
  en: {
    trendsTitle: "Social Media Hacks for Brand Growth",
    trendsDesc: "Learn powerful strategies to boost engagement, increase followers, and grow your brand presence across social platforms.",
    detailsTitle: "Deep Dive into Social Media Strategies",
    detailsDesc: "Click on each strategy to learn actionable tips for growing your brand online.",
    socialTrends: [
      {
        title: "Engaging Content Creation",
        description: "Craft visually appealing and interactive content that encourages likes, shares, and comments.",
        img: socialImg1,
      },
      {
        title: "Influencer Collaborations",
        description: "Partner with niche influencers to expand your reach and gain credibility with targeted audiences.",
        img: socialImg2,
      },
      {
        title: "Analytics & Optimization",
        description: "Track performance metrics, analyze audience behavior, and optimize campaigns for maximum growth.",
        img: socialImg3,
      },
    ],
    detailedSocialTrends: [
      {
        title: "Engaging Content Creation",
        content: [
          "Use videos, infographics, and carousel posts to capture attention.",
          "Post content that resonates with your audience’s interests and needs.",
          "Encourage user-generated content and interactive polls for engagement.",
        ],
      },
      {
        title: "Influencer Collaborations",
        content: [
          "Identify influencers whose audience aligns with your brand.",
          "Develop authentic campaigns rather than just sponsored posts.",
          "Leverage influencer content for long-term engagement and visibility.",
        ],
      },
      {
        title: "Analytics & Optimization",
        content: [
          "Track metrics like reach, impressions, engagement, and conversion rates.",
          "A/B test content formats, posting times, and hashtags.",
          "Adjust campaigns based on performance to maximize ROI.",
        ],
      },
    ],
  },
  ar: {
    trendsTitle: "حيل وسائل التواصل الاجتماعي لنمو العلامة التجارية",
    trendsDesc: "تعلم استراتيجيات قوية لزيادة التفاعل، وزيادة المتابعين، وتنمية حضور علامتك التجارية عبر المنصات الاجتماعية.",
    detailsTitle: "تعرف على استراتيجيات وسائل التواصل الاجتماعي",
    detailsDesc: "انقر على كل استراتيجية لتتعلم نصائح عملية لتنمية علامتك التجارية عبر الإنترنت.",
    socialTrends: [
      {
        title: "إنشاء محتوى جذاب",
        description: "أنشئ محتوى بصريًا وتفاعليًا يشجع على الإعجابات والمشاركات والتعليقات.",
        img: socialImg1,
      },
      {
        title: "التعاون مع المؤثرين",
        description: "تعاون مع مؤثرين متخصصين لتوسيع نطاقك واكتساب المصداقية مع الجماهير المستهدفة.",
        img: socialImg2,
      },
      {
        title: "التحليلات والتحسين",
        description: "تتبع مؤشرات الأداء، وحلل سلوك الجمهور، وحسن الحملات لتحقيق أقصى نمو.",
        img: socialImg3,
      },
    ],
    detailedSocialTrends: [
      {
        title: "إنشاء محتوى جذاب",
        content: [
          "استخدم الفيديوهات والإنفوجرافيك والمنشورات الدوارة لجذب الانتباه.",
          "انشر محتوى يتوافق مع اهتمامات واحتياجات جمهورك.",
          "شجع على إنشاء محتوى من المستخدمين واستطلاعات تفاعلية لزيادة التفاعل.",
        ],
      },
      {
        title: "التعاون مع المؤثرين",
        content: [
          "حدد المؤثرين الذين يتوافق جمهورهم مع علامتك التجارية.",
          "طور حملات أصيلة بدلاً من المنشورات الدعائية فقط.",
          "استفد من محتوى المؤثرين لتحقيق تفاعل ورؤية طويلة الأمد.",
        ],
      },
      {
        title: "التحليلات والتحسين",
        content: [
          "تتبع مؤشرات مثل الوصول، والانطباعات، والتفاعل، ومعدلات التحويل.",
          "اختبر تنسيقات المحتوى، وأوقات النشر، والوسوم.",
          "عدل الحملات بناءً على الأداء لتحقيق أقصى عائد استثمار.",
        ],
      },
    ],
  },
  he: {
    trendsTitle: "טריקים ברשתות החברתיות לצמיחת מותג",
    trendsDesc: "למדו אסטרטגיות עוצמתיות להגדלת מעורבות, הגדלת עוקבים וצמיחת נוכחות המותג שלכם ברשתות החברתיות.",
    detailsTitle: "העמקה באסטרטגיות רשתות חברתיות",
    detailsDesc: "לחצו על כל אסטרטגיה כדי ללמוד טיפים מעשיים לצמיחת המותג שלכם אונליין.",
    socialTrends: [
      {
        title: "יצירת תוכן מרתק",
        description: "צרו תוכן ויזואלי ואינטראקטיבי שמעודד לייקים, שיתופים ותגובות.",
        img: socialImg1,
      },
      {
        title: "שיתופי פעולה עם משפיענים",
        description: "שתפו פעולה עם משפיענים נישתיים להרחבת החשיפה ולבניית אמון עם קהלים ממוקדים.",
        img: socialImg2,
      },
      {
        title: "אנליטיקה ואופטימיזציה",
        description: "עקבו אחרי מדדים, נתחו התנהגות קהל ואופטימיזו קמפיינים לצמיחה מקסימלית.",
        img: socialImg3,
      },
    ],
    detailedSocialTrends: [
      {
        title: "יצירת תוכן מרתק",
        content: [
          "השתמשו בסרטונים, אינפוגרפיקות ופוסטים קרוסלה למשיכת תשומת לב.",
          "פרסמו תוכן שמדבר לאינטרסים ולצרכים של הקהל שלכם.",
          "עודדו תוכן גולשים וסקרים אינטראקטיביים להעלאת מעורבות.",
        ],
      },
      {
        title: "שיתופי פעולה עם משפיענים",
        content: [
          "זהו משפיענים שהקהל שלהם תואם את המותג שלכם.",
          "בנו קמפיינים אותנטיים ולא רק פוסטים ממומנים.",
          "נצלו תוכן משפיענים למעורבות וחשיפה ארוכת טווח.",
        ],
      },
      {
        title: "אנליטיקה ואופטימיזציה",
        content: [
          "עקבו אחרי מדדים כמו חשיפה, מעורבות והמרות.",
          "בצעו A/B טסטינג לפורמטים, זמנים והאשטגים.",
          "התאימו קמפיינים לפי ביצועים למקסום ROI.",
        ],
      },
    ],
  },
};


const Blog2 = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const [openIndex, setOpenIndex] = useState(null);
  const isRTL = language === "ar" || language === "he";

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div dir={isRTL ? "rtl" : "ltr"} style={{ textAlign: isRTL ? "right" : "left" }}>
      {/* Trend Cards Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            {t.trendsTitle}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {t.trendsDesc}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {t.socialTrends.map((trend, idx) => (
            <motion.div
              key={idx}
              className="group relative rounded-3xl overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl transition-transform duration-500 bg-white dark:bg-gray-950"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden rounded-t-3xl">
                <motion.img
                  src={trend.img}
                  alt={trend.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <motion.h3
                  className="text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-purple-400 transition"
                  initial={{ x: isRTL ? 20 : -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                >
                  {trend.title}
                </motion.h3>
                <motion.p
                  className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
                  initial={{ x: isRTL ? -20 : 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.3 }}
                >
                  {trend.description}
                </motion.p>
              </div>
              <motion.div
                className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"
              />
            </motion.div>
          ))}
        </div>
      </section>
      {/* Detailed Social Media Accordion Section */}
      <section className="py-5 px-6 bg-white dark:bg-gray-950 transition-colors duration-500">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            {t.detailsTitle}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {t.detailsDesc}
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto space-y-4">
          {t.detailedSocialTrends.map((trend, idx) => (
            <motion.div
              key={idx}
              className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleOpen(idx)}
                className="w-full flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 hover:bg-gradient-to-l transition-all duration-500"
              >
                <span className="text-lg md:text-xl font-semibold text-black dark:text-white">
                  {trend.title}
                </span>
                <span className="text-2xl text-blue-600 dark:text-purple-400">
                  {openIndex === idx ? "-" : "+"}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="px-6 py-4 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 text-sm md:text-base space-y-2"
                  >
                    {trend.content.map((point, pIdx) => (
                      <p
                        key={pIdx}
                        className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-blue-600 dark:before:bg-purple-400 before:rounded-full"
                      >
                        {point}
                      </p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog2;
