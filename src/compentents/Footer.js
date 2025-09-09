import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import logo from "../images/stacklyy.png";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";
import instagram from "../images/instagram.svg";
import scroll from "../images/scroll.svg";

// Translations object
const translations = {
  en: {
    about:
      "Stackly empowers businesses with cutting-edge cloud, AI, and cybersecurity solutions to transform your digital future.",
    quickLinks: "Quick Links",
    home: "Home",
    aboutUs: "About Us",
    services: "Services",
    blog: "Blog",
    contact: "Contact",
    servicesTitle: "Services",
    cloud: "Search Engine Optimization",
    customerFirst: "Pay-Per-Click Advertising",
    cybersecurity: "Content Marketing",
    dataAI: "Social Media Management",
    enterpriseMgmt: "Web Design & UX",
    intelligentIndustry: "Analytics & Reporting",
    connect: "Connect with us",
    email: "Email",
    phone: "Phone",
    scrollTop: "Scroll to top",
    copyright: "All rights reserved By ESS.",
  },
  ar: {
    about: "تمكن Stackly الشركات من خلال حلول السحابة والذكاء الاصطناعي والأمن السيبراني المتقدمة لتحويل مستقبلك الرقمي.",
    quickLinks: "روابط سريعة",
    home: "الرئيسية",
    aboutUs: "من نحن",
    services: "الخدمات",
    blog: "مدونة",
    contact: "اتصل",
    servicesTitle: "الخدمات",
    cloud: "تحسين محركات البحث",
    customerFirst: "إعلانات الدفع لكل نقرة",
    cybersecurity: "تسويق المحتوى",
    dataAI: "إدارة وسائل التواصل الاجتماعي",
    enterpriseMgmt: "تصميم الويب وتجربة المستخدم",
    intelligentIndustry: "التحليلات والتقارير",
    connect: "تواصل معنا",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    scrollTop: "العودة للأعلى",
    copyright: "جميع الحقوق محفوظة بواسطة ESS.",
  },
  he: {
    about: "Stackly מעצימה עסקים עם פתרונות ענן, בינה מלאכותית וסייבר מתקדמים לשינוי העתיד הדיגיטלי שלך.",
    quickLinks: "קישורים מהירים",
    home: "בית",
    aboutUs: "עלינו",
    services: "שירותים",
    blog: "בלוג",
    contact: "צור קשר",
    servicesTitle: "שירותים",
    cloud: "קידום אתרים",
    customerFirst: "פרסום PPC",
    cybersecurity: "שיווק תוכן",
    dataAI: "ניהול מדיה חברתית",
    enterpriseMgmt: "עיצוב אתרים וחווית משתמש",
    intelligentIndustry: "אנליטיקה ודיווח",
    connect: "צור קשר איתנו",
    email: "אימייל",
    phone: "טלפון",
    scrollTop: "גלול למעלה",
    copyright: "כל הזכויות שמורות ל-ESS.",
  },
};

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Top Footer: Sections */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div className="flex flex-col gap-4">
          <img src={logo} alt="Stackly Logo" className="w-36" />
          <p className="text-sm">{t.about}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">{t.quickLinks}</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link className="hover:text-blue-600 transition" to="/home1">
                {t.home}
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-600 transition" to="/about">
                {t.aboutUs}
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-600 transition" to="/services">
                {t.services}
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-600 transition" to="/blog">
                {t.blog}
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-600 transition" to="/contact">
                {t.contact}
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">{t.servicesTitle}</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link
                className="hover:text-blue-600 transition"
                to="/EngineOptimization"
              >
                {t.cloud}
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-600 transition"
                to="/payperclick"
              >
                {t.customerFirst}
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-600 transition"
                to="/contentmarketing"
              >
                {t.cybersecurity}
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-600 transition"
                to="/socialmedia"
              >
                {t.dataAI}
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-600 transition"
                to="/webdesign"
              >
                {t.enterpriseMgmt}
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-600 transition"
                to="/analyticsreporting"
              >
                {t.intelligentIndustry}
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect with Us */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold">{t.connect}</h4>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/login"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-6 h-6 hover:scale-110 transition"
              />
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <img
                src={twitter}
                alt="Twitter"
                className="w-6 h-6 hover:scale-110 transition"
              />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img
                src={facebook}
                alt="Facebook"
                className="w-6 h-6 hover:scale-110 transition"
              />
            </a>
            <a
              href="https://mail.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img
                src={instagram}
                alt="Instagram"
                className="w-6 h-6 hover:scale-110 transition"
              />
            </a>
          </div>
          <p className="text-sm">
            {t.email}: support@stackly.com
            <br />
            {t.phone}: +1 (800) 123-4567
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-8 py-4 flex items-center justify-between px-6">
        {/* Copyright in center */}
        <p className="text-sm text-center flex-1">
          © {new Date().getFullYear()} Stackly. {t.copyright}
        </p>

        {/* Scroll to Top Button on right */}
        <button
          className="ml-4 text-sm hover:text-blue-600 transition"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={t.scrollTop}
          title={t.scrollTop}
        >
          <img src={scroll} alt="Scroll to Top" className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
