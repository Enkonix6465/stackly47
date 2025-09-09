
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import seoImg1 from "../images/seo1.jpg";
import seoImg2 from "../images/seo2.jpg";
import seoImg3 from "../images/seo3.jpg";
import { useLanguage } from "../LanguageContext";

const translations = {
  en: {
    trendsTitle: "Top SEO Trends to Watch in 2025",
    trendsDesc: "Stay ahead of the curve by implementing the latest SEO trends that boost visibility, engagement, and conversions.",
    detailsTitle: "Detailed SEO Insights",
    detailsDesc: "Dive deeper into SEO strategies for 2025. Click on each trend to explore actionable insights and best practices.",
    seoTrends: [
      {
        title: "AI-Powered SEO",
        description: "Leverage AI tools to optimize content, analyze competitor strategies, and predict keyword trends.",
        img: seoImg1,
      },
      {
        title: "Voice Search Optimization",
        description: "With smart devices on the rise, optimizing for voice search queries can boost traffic significantly.",
        img: seoImg2,
      },
      {
        title: "Core Web Vitals & UX",
        description: "Google’s ranking factors now emphasize UX metrics, so fast loading, responsiveness, and interactivity are crucial.",
        img: seoImg3,
      },
    ],
    detailedTrends: [
      {
        title: "AI-Powered SEO",
        content: [
          "AI tools can help generate topic ideas, optimize meta tags, and analyze competitors’ content.",
          "Predictive keyword analysis lets you target trends before your competitors.",
          "Content personalization using AI boosts engagement and dwell time."
        ],
      },
      {
        title: "Voice Search Optimization",
        content: [
          "With smart devices increasing, focus on natural language queries.",
          "Use conversational long-tail keywords and FAQs.",
          "Optimize your snippets and schema markup for voice assistants."
        ],
      },
      {
        title: "Core Web Vitals & UX",
        content: [
          "Page speed, interactivity, and layout stability now impact SEO rankings.",
          "Implement lazy loading, optimized images, and responsive design.",
          "User-friendly navigation reduces bounce rates and increases conversions."
        ],
      },
    ],
  },
  ar: {
    trendsTitle: "أهم اتجاهات تحسين محركات البحث لعام 2025",
    trendsDesc: "ابق في الصدارة من خلال تطبيق أحدث اتجاهات تحسين محركات البحث التي تعزز الظهور والتفاعل والتحويلات.",
    detailsTitle: "رؤى تفصيلية لتحسين محركات البحث",
    detailsDesc: "تعمق في استراتيجيات تحسين محركات البحث لعام 2025. انقر على كل اتجاه لاستكشاف رؤى قابلة للتنفيذ وأفضل الممارسات.",
    seoTrends: [
      {
        title: "تحسين محركات البحث بالذكاء الاصطناعي",
        description: "استفد من أدوات الذكاء الاصطناعي لتحسين المحتوى وتحليل استراتيجيات المنافسين والتنبؤ باتجاهات الكلمات الرئيسية.",
        img: seoImg1,
      },
      {
        title: "تحسين البحث الصوتي",
        description: "مع تزايد الأجهزة الذكية، يمكن أن يؤدي تحسين استعلامات البحث الصوتي إلى زيادة كبيرة في الزيارات.",
        img: seoImg2,
      },
      {
        title: "عوامل تجربة المستخدم وCore Web Vitals",
        description: "تعتمد عوامل الترتيب في Google الآن على مقاييس تجربة المستخدم، لذا فإن السرعة والتجاوب والتفاعل أمر بالغ الأهمية.",
        img: seoImg3,
      },
    ],
    detailedTrends: [
      {
        title: "تحسين محركات البحث بالذكاء الاصطناعي",
        content: [
          "يمكن أن تساعد أدوات الذكاء الاصطناعي في توليد أفكار للمواضيع وتحسين العلامات الوصفية وتحليل محتوى المنافسين.",
          "يتيح لك التحليل التنبؤي للكلمات الرئيسية استهداف الاتجاهات قبل منافسيك.",
          "تخصيص المحتوى باستخدام الذكاء الاصطناعي يعزز التفاعل ومدة البقاء."
        ],
      },
      {
        title: "تحسين البحث الصوتي",
        content: [
          "مع تزايد الأجهزة الذكية، ركز على استعلامات اللغة الطبيعية.",
          "استخدم كلمات رئيسية طويلة الأسئلة ومحادثات.",
          "حسّن المقتطفات وعلامات المخطط لمساعدات الصوت."
        ],
      },
      {
        title: "عوامل تجربة المستخدم وCore Web Vitals",
        content: [
          "تؤثر سرعة الصفحة والتفاعل واستقرار التخطيط الآن على ترتيب تحسين محركات البحث.",
          "قم بتنفيذ التحميل الكسول، الصور المحسنة، والتصميم المتجاوب.",
          "التنقل السهل يقلل من معدل الارتداد ويزيد التحويلات."
        ],
      },
    ],
  },
  he: {
    trendsTitle: "מגמות ה-SEO המובילות לשנת 2025",
    trendsDesc: "הישארו מובילים על ידי יישום מגמות ה-SEO העדכניות ביותר שמגבירות נראות, מעורבות והמרות.",
    detailsTitle: "תובנות SEO מפורטות",
    detailsDesc: "העמיקו באסטרטגיות SEO לשנת 2025. לחצו על כל מגמה כדי לגלות תובנות ופרקטיקות מומלצות.",
    seoTrends: [
      {
        title: "SEO מונע בינה מלאכותית",
        description: "השתמשו בכלי AI לאופטימיזציית תוכן, ניתוח מתחרים וחיזוי מגמות מילות מפתח.",
        img: seoImg1,
      },
      {
        title: "אופטימיזציה לחיפוש קולי",
        description: "עם עליית המכשירים החכמים, אופטימיזציה לשאילתות קוליות יכולה להגדיל תנועה משמעותית.",
        img: seoImg2,
      },
      {
        title: "Core Web Vitals וחוויית משתמש",
        description: "גורמי הדירוג של Google מדגישים כעת UX, לכן מהירות, תגובתיות ואינטראקטיביות קריטיים.",
        img: seoImg3,
      },
    ],
    detailedTrends: [
      {
        title: "SEO מונע בינה מלאכותית",
        content: [
          "כלי AI יכולים לעזור ביצירת רעיונות, אופטימיזציית מטא וניתוח תוכן מתחרים.",
          "ניתוח מילות מפתח חזוי מאפשר לכם להקדים את המתחרים.",
          "התאמת תוכן עם AI מגבירה מעורבות וזמן שהייה."
        ],
      },
      {
        title: "אופטימיזציה לחיפוש קולי",
        content: [
          "עם עליית המכשירים החכמים, התמקדו בשאילתות שפה טבעית.",
          "השתמשו במילות מפתח ארוכות ושאלות נפוצות.",
          "בצעו אופטימיזציה לסניפטים ולסכמות עבור עוזרי קול."
        ],
      },
      {
        title: "Core Web Vitals וחוויית משתמש",
        content: [
          "מהירות, אינטראקטיביות ויציבות משפיעות על דירוגי SEO.",
          "הטמיעו טעינה עצלה, תמונות אופטימליות ועיצוב רספונסיבי.",
          "ניווט ידידותי מפחית נטישה ומגביר המרות."
        ],
      },
    ],
  },
};


const Blog1 = () => {
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
          {t.seoTrends.map((trend, idx) => (
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
      {/* Detailed SEO Accordion Section */}
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
          {t.detailedTrends.map((trend, idx) => (
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

export default Blog1;
