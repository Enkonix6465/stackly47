
import React, { useState } from "react";
import { motion } from "framer-motion";
import contact from "../images/contact.mp4";
import phone from "../images/phone.svg";
import email from "../images/email.svg";
import location from "../images/location.svg";
import linkedin from "../images/linkedin.svg";
import instagram from "../images/instagram.svg";
import youtube from "../images/youtube.svg";
import twitter from "../images/twitter.svg";
import contactu from "../images/digi.jpg";
import { useLanguage } from "../LanguageContext";


const translations = {
  en: {
    heroTitle: "Contact Us",
    heroDesc: "Reach out today and let's create campaigns that deliver measurable results for your brand",
    cards: [
      {
        icon: phone,
        title: "(+44) 123 456 789",
        description: "Connect with our team to discuss SEO & digital marketing strategies.",
        bgColor: "bg-blue-700",
      },
      {
        icon: email,
        title: "hello@stackly.com",
        description: "Send us an email and we’ll respond promptly with expert guidance.",
        bgColor: "bg-blue-600",
      },
      {
        icon: location,
        title: "123 Digital St, Marketing City, UK",
        description: "Visit our office and discover how we can grow your online presence.",
        bgColor: "bg-blue-500",
      },
    ],
    getInTouch: "Get In Touch",
    getInTouchDesc: "Connect with our SEO and digital marketing experts to grow your online presence, boost conversions, and drive real results.",
    address: "Address",
    phone: "Phone Number",
    email: "E-Mail",
    followUs: "Follow Us:",
    sendMessage: "Send a Message",
    namePlaceholder: "Name",
    emailPlaceholder: "E-mail address",
    messagePlaceholder: "Message",
    submitBtn: "Submit",
    thankYou: "Thank You!",
    thankYouMsg: "Your message has been successfully submitted. We'll get back to you soon.",
    ourLocation: "Our Location",
    bannerTitle: "Get in Touch with Us",
    bannerDesc: "Let's create digital marketing strategies that drive results and grow your business online.",
  },
  ar: {
    heroTitle: "تواصل معنا",
    heroDesc: "تواصل اليوم ولننشئ حملات تحقق نتائج قابلة للقياس لعلامتك التجارية.",
    cards: [
      {
        icon: phone,
        title: "(+44) 123 456 789",
        description: "تواصل مع فريقنا لمناقشة استراتيجيات تحسين محركات البحث والتسويق الرقمي.",
        bgColor: "bg-blue-700",
      },
      {
        icon: email,
        title: "hello@stackly.com",
        description: "أرسل لنا بريدًا إلكترونيًا وسنرد عليك بسرعة بإرشادات الخبراء.",
        bgColor: "bg-blue-600",
      },
      {
        icon: location,
        title: "123 شارع ديجيتال، مدينة التسويق، المملكة المتحدة",
        description: "قم بزيارة مكتبنا واكتشف كيف يمكننا تنمية وجودك عبر الإنترنت.",
        bgColor: "bg-blue-500",
      },
    ],
    getInTouch: "ابق على تواصل",
    getInTouchDesc: "تواصل مع خبراء تحسين محركات البحث والتسويق الرقمي لدينا لتنمية وجودك عبر الإنترنت وزيادة التحويلات وتحقيق نتائج حقيقية.",
    address: "العنوان",
    phone: "رقم الهاتف",
    email: "البريد الإلكتروني",
    followUs: "تابعنا:",
    sendMessage: "أرسل رسالة",
    namePlaceholder: "الاسم",
    emailPlaceholder: "البريد الإلكتروني",
    messagePlaceholder: "الرسالة",
    submitBtn: "إرسال",
    thankYou: "شكرًا لك!",
    thankYouMsg: "تم إرسال رسالتك بنجاح. سنعاود الاتصال بك قريبًا.",
    ourLocation: "موقعنا",
    bannerTitle: "تواصل معنا",
    bannerDesc: "لننشئ استراتيجيات تسويق رقمي تحقق نتائج وتنمي عملك عبر الإنترنت.",
  },
  he: {
    heroTitle: "צור קשר",
    heroDesc: "פנו אלינו היום וניצור קמפיינים שמביאים תוצאות מדידות למותג שלכם.",
    cards: [
      {
        icon: phone,
        title: "(+44) 123 456 789",
        description: "התחברו עם הצוות שלנו לדיון באסטרטגיות SEO ושיווק דיגיטלי.",
        bgColor: "bg-blue-700",
      },
      {
        icon: email,
        title: "hello@stackly.com",
        description: "שלחו לנו מייל ונשיב במהירות עם ייעוץ מקצועי.",
        bgColor: "bg-blue-600",
      },
      {
        icon: location,
        title: "123 דיגיטל, עיר השיווק, בריטניה",
        description: "בקרו במשרדנו וגלו כיצד נוכל להגדיל את הנוכחות הדיגיטלית שלכם.",
        bgColor: "bg-blue-500",
      },
    ],
    getInTouch: "צור קשר",
    getInTouchDesc: "התחברו עם מומחי ה-SEO והשיווק הדיגיטלי שלנו להגדלת הנוכחות, שיפור המרות והשגת תוצאות אמיתיות.",
    address: "כתובת",
    phone: "מספר טלפון",
    email: "אימייל",
    followUs: "עקבו אחרינו:",
    sendMessage: "שלח הודעה",
    namePlaceholder: "שם",
    emailPlaceholder: "כתובת אימייל",
    messagePlaceholder: "הודעה",
    submitBtn: "שלח",
    thankYou: "תודה!",
    thankYouMsg: "ההודעה נשלחה בהצלחה. נחזור אליכם בקרוב.",
    ourLocation: "המיקום שלנו",
    bannerTitle: "צרו קשר איתנו",
    bannerDesc: "בואו ניצור אסטרטגיות שיווק דיגיטלי שמביאות תוצאות ומגדילות את העסק שלכם.",
  },
};

const ContactUs = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const isRTL = language === "ar" || language === "he";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingData = JSON.parse(localStorage.getItem("contactForms")) || [];
    existingData.push(formData);
    localStorage.setItem("contactForms", JSON.stringify(existingData));
    setSubmitted(true);
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
          src={contact}
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

      {/* Cards Section */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.cards.map((card, index) => (
            <motion.div
              key={index}
              className={`${card.bgColor} text-white p-8 rounded-xl shadow-lg flex flex-col items-start gap-4 hover:scale-105 transition-transform duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-white/20 p-3 rounded-full">
                <img src={card.icon} alt={card.title} className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">{card.title}</h3>
              <p className="text-sm text-white/90">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Info Panel */}
          <motion.div
            className="space-y-6"
            initial={{ x: isRTL ? 50 : -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t.getInTouch}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-md">
              {t.getInTouchDesc}
            </p>
            <div className="space-y-4 mt-6">
              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-900 rounded-full flex-shrink-0">
                  <img src={location} alt={t.address} className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {t.address}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t.cards[2].title}
                  </p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-900 rounded-full flex-shrink-0">
                  <img src={phone} alt={t.phone} className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {t.phone}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t.cards[0].title}
                  </p>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-900 rounded-full flex-shrink-0">
                  <img src={email} alt={t.email} className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {t.email}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t.cards[1].title}
                  </p>
                </div>
              </div>
            </div>
            {/* Social Links */}
            <div className="mt-8">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">
                {t.followUs}
              </p>
              <div className="flex gap-4">
                {[linkedin, twitter, youtube, instagram].map((icon, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="p-3 bg-blue-900 rounded-full cursor-pointer"
                  >
                    <img src={icon} alt="Social" className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          {/* Right Form Panel */}
          {submitted ? (
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t.thankYou}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {t.thankYouMsg}
              </p>
            </motion.div>
          ) : (
            <motion.form
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg space-y-6"
              onSubmit={handleSubmit}
              initial={{ x: isRTL ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t.sendMessage}
              </h3>
              <input
                type="text"
                name="name"
                placeholder={t.namePlaceholder}
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              <input
                type="email"
                name="email"
                placeholder={t.emailPlaceholder}
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              <textarea
                name="message"
                placeholder={t.messagePlaceholder}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-900 h-32 resize-none"
              />
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition-colors duration-300"
              >
                {t.submitBtn}
              </button>
            </motion.form>
          )}
        </div>
      </section>

      {/* Google Map Section */}
      <section className="w-full h-96 mt-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            {t.ourLocation}
          </h2>
          <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Digital Agency Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.123456789!2d-0.127758684321!3d51.50735077963447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b2f!2s123+Digital+St,+Marketing+City,+UK!5e0!3m2!1sen!2sin!4v1694060000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Us Banner */}
      <section className="relative w-screen h-[80vh] md:h-screen overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={contactu}
        />
        <div className="absolute inset-0 bg-black/50 dark:bg-black/60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full px-6 md:px-0">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {t.bannerTitle}
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-gray-200 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {t.bannerDesc}
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
