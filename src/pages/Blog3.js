
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import seoImg1 from "../images/seo1.jpg";
import seoImg2 from "../images/seo2.jpg";
import seoImg3 from "../images/seo3.jpg";
import { useLanguage } from "../LanguageContext";

const translations = {
  en: {
    trendsTitle: "Content Marketing That Converts",
    trendsDesc: "Learn how to create content that attracts, engages, and converts your audience into loyal customers.",
    detailsTitle: "Deep Dive Into Content Marketing",
    detailsDesc: "Click on each strategy to explore actionable tips for creating content that truly converts.",
    contentTrends: [
      {
        title: "Audience Research & Personas",
        description: "Identify your target audience and create detailed personas to craft content that truly resonates.",
        img: seoImg1,
      },
      {
        title: "Compelling Storytelling",
        description: "Use storytelling techniques to engage readers, evoke emotions, and increase conversions.",
        img: seoImg2,
      },
      {
        title: "SEO-Optimized Content",
        description: "Integrate keywords naturally, optimize meta tags, and structure content to rank higher in search results.",
        img: seoImg3,
      },
    ],
    detailedContent: [
      {
        title: "Audience Research & Personas",
        content: [
          "Conduct surveys, interviews, and analyze analytics to understand audience needs.",
          "Create detailed personas representing demographics, interests, and pain points.",
          "Tailor content formats and messaging based on audience behavior.",
        ],
      },
      {
        title: "Compelling Storytelling",
        content: [
          "Start with a hook to grab attention immediately.",
          "Use relatable characters and scenarios to make content memorable.",
          "Incorporate visuals and data to strengthen your narrative.",
        ],
      },
      {
        title: "SEO-Optimized Content",
        content: [
          "Perform keyword research to target high-value search terms.",
          "Use headings, lists, and multimedia to improve readability and engagement.",
          "Regularly update content to maintain relevance and rankings.",
        ],
      },
    ],
  },
  ar: {
    trendsTitle: "تسويق المحتوى الذي يحول العملاء",
    trendsDesc: "تعلم كيفية إنشاء محتوى يجذب ويشرك ويحول جمهورك إلى عملاء مخلصين.",
    detailsTitle: "تعرف بعمق على تسويق المحتوى",
    detailsDesc: "انقر على كل استراتيجية لاستكشاف نصائح عملية لإنشاء محتوى يحول العملاء فعلاً.",
    contentTrends: [
      {
        title: "بحث الجمهور والشخصيات",
        description: "حدد جمهورك المستهدف وأنشئ شخصيات مفصلة لصياغة محتوى يتردد صداه حقًا.",
        img: seoImg1,
      },
      {
        title: "سرد القصص الجذاب",
        description: "استخدم تقنيات السرد لجذب القراء، وإثارة المشاعر، وزيادة التحويلات.",
        img: seoImg2,
      },
      {
        title: "محتوى محسّن لتحسين محركات البحث",
        description: "ادمج الكلمات الرئيسية بشكل طبيعي، وحسّن العلامات الوصفية، وهيكل المحتوى للظهور في نتائج البحث.",
        img: seoImg3,
      },
    ],
    detailedContent: [
      {
        title: "بحث الجمهور والشخصيات",
        content: [
          "أجرِ استطلاعات ومقابلات وحلل التحليلات لفهم احتياجات الجمهور.",
          "أنشئ شخصيات مفصلة تمثل الديموغرافيات والاهتمامات ونقاط الألم.",
          "خصص تنسيقات المحتوى والرسائل بناءً على سلوك الجمهور.",
        ],
      },
      {
        title: "سرد القصص الجذاب",
        content: [
          "ابدأ بجملة افتتاحية لجذب الانتباه فورًا.",
          "استخدم شخصيات وسيناريوهات يمكن الارتباط بها لجعل المحتوى لا يُنسى.",
          "ادمج الصور والبيانات لتعزيز السرد الخاص بك.",
        ],
      },
      {
        title: "محتوى محسّن لتحسين محركات البحث",
        content: [
          "قم بإجراء بحث عن الكلمات الرئيسية لاستهداف مصطلحات البحث ذات القيمة العالية.",
          "استخدم العناوين والقوائم والوسائط المتعددة لتحسين قابلية القراءة والتفاعل.",
          "قم بتحديث المحتوى بانتظام للحفاظ على الصلة والترتيب.",
        ],
      },
    ],
  },
  he: {
    trendsTitle: "שיווק תוכן שממיר",
    trendsDesc: "למדו כיצד ליצור תוכן שמושך, מעורב וממיר את הקהל שלכם ללקוחות נאמנים.",
    detailsTitle: "העמקה בשיווק תוכן",
    detailsDesc: "לחצו על כל אסטרטגיה כדי לגלות טיפים מעשיים ליצירת תוכן שממיר באמת.",
    contentTrends: [
      {
        title: "מחקר קהל ופרסונות",
        description: "זהו את קהל היעד וצרו פרסונות מפורטות ליצירת תוכן שמדבר אליהם באמת.",
        img: seoImg1,
      },
      {
        title: "סיפור סיפורים מרתק",
        description: "השתמשו בטכניקות סיפור כדי לרתק, לעורר רגש ולהגדיל המרות.",
        img: seoImg2,
      },
      {
        title: "תוכן מותאם SEO",
        description: "שלבו מילות מפתח, אופטימיזציית מטא ומבנה נכון כדי לעלות בדירוג.",
        img: seoImg3,
      },
    ],
    detailedContent: [
      {
        title: "מחקר קהל ופרסונות",
        content: [
          "בצעו סקרים, ראיונות וניתוח נתונים להבנת צרכי הקהל.",
          "צרו פרסונות מפורטות לפי דמוגרפיה, תחומי עניין וכאבים.",
          "התאימו פורמטים ומסרים לפי התנהגות הקהל.",
        ],
      },
      {
        title: "סיפור סיפורים מרתק",
        content: [
          "התחילו בפתיח חזק שמושך תשומת לב.",
          "השתמשו בדמויות ותסריטים שניתן להזדהות איתם.",
          "שלבו ויז'ואלים ונתונים לחיזוק הסיפור.",
        ],
      },
      {
        title: "תוכן מותאם SEO",
        content: [
          "בצעו מחקר מילות מפתח למונחי חיפוש בעלי ערך.",
          "השתמשו בכותרות, רשימות ומדיה לשיפור קריאות ומעורבות.",
          "עדכנו תוכן באופן קבוע לשמירה על רלוונטיות ודירוג.",
        ],
      },
    ],
  },
};


const Blog3 = () => {
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
          {t.contentTrends.map((trend, idx) => (
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
      {/* Detailed Content Accordion Section */}
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
          {t.detailedContent.map((trend, idx) => (
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

export default Blog3;
