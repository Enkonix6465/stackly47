import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loginImg from "../images/11.jpg";

const translations = {
  en: {
    welcome: "Welcome to",
    stackly: "STACKLY",
    welcomeBack: "Welcome back, please login into your account",
    username: "Your Email",
    password: "Enter Password",
    forgotPassword: "Forgot password?",
    login: "Login",
    dontHaveAccount: "Don't have an account? Sign Up",
    firstName: "First Name",
    lastName: "Last Name",
    signUp: "Sign Up",
    alreadyHaveAccount: "Already have an account? Login",
    resetPassword: "Reset Password",
    enterRegisteredEmail: "Enter your registered email",
    sendResetLink: "Send Reset Link",
    backToLogin: "Back to Login",
    invalid: "Invalid email or password.",
    userExists: "User already exists with this email.",
    signupSuccess: "Signup successful! Please login.",
    noUser: "No user found with this email.",
    resetMsg: "User found. Check your email for reset instructions. (Simulation)"
  },
  ar: {
    welcome: "مرحبًا في",
    stackly: "STACKLY",
    welcomeBack: "مرحبًا بعودتك، يرجى تسجيل الدخول إلى حسابك",
    username: "البريد الإلكتروني",
    password: "أدخل كلمة المرور",
    forgotPassword: "نسيت كلمة المرور؟",
    login: "تسجيل الدخول",
    dontHaveAccount: "ليس لديك حساب؟ سجل الآن",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    signUp: "سجل",
    alreadyHaveAccount: "لديك حساب بالفعل؟ تسجيل الدخول",
    resetPassword: "إعادة تعيين كلمة المرور",
    enterRegisteredEmail: "أدخل بريدك الإلكتروني المسجل",
    sendResetLink: "إرسال رابط إعادة التعيين",
    backToLogin: "العودة لتسجيل الدخول",
    invalid: "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
    userExists: "يوجد مستخدم بهذا البريد الإلكتروني.",
    signupSuccess: "تم التسجيل بنجاح! يرجى تسجيل الدخول.",
    noUser: "لا يوجد مستخدم بهذا البريد الإلكتروني.",
    resetMsg: "تم العثور على المستخدم. تحقق من بريدك لإعادة تعيين كلمة المرور. (محاكاة)"
  },
  he: {
    welcome: "ברוכים הבאים ל",
    stackly: "STACKLY",
    welcomeBack: "ברוך שובך, אנא התחבר לחשבון",
    username: "דוא״ל",
    password: "הזן סיסמה",
    forgotPassword: "שכחת סיסמה?",
    login: "התחבר",
    dontHaveAccount: "אין לך חשבון? הרשמה",
    firstName: "שם פרטי",
    lastName: "שם משפחה",
    signUp: "הרשמה",
    alreadyHaveAccount: "כבר יש לך חשבון? התחבר",
    resetPassword: "איפוס סיסמה",
    enterRegisteredEmail: "הזן את הדוא״ל הרשום שלך",
    sendResetLink: "שלח קישור לאיפוס",
    backToLogin: "חזרה להתחברות",
    invalid: "דוא״ל או סיסמה שגויים.",
    userExists: "משתמש כבר קיים עם אימייל זה.",
    signupSuccess: "ההרשמה הצליחה! אנא התחבר.",
    noUser: "לא נמצא משתמש עם אימייל זה.",
    resetMsg: "משתמש נמצא. בדוק את האימייל שלך להוראות איפוס סיסמה. (סימולציה)"
  }
};

const getLanguage = () => localStorage.getItem("language") || "en";

const Welcome = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState(getLanguage());
  const t = translations[language];

  useEffect(() => {
    const handleLanguageChange = () => setLanguage(getLanguage());
    window.addEventListener("languageChanged", handleLanguageChange);
    return () => window.removeEventListener("languageChanged", handleLanguageChange);
  }, []);

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [resetMessage, setResetMessage] = useState("");

  const handleLoginChange = (e) => setLoginData({ ...loginData, [e.target.name]: e.target.value });
  const handleSignUpChange = (e) => setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  const handleForgotPasswordChange = (e) => setForgotEmail(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    // Admin login
    if (loginData.email === "admin@enkonix.in" && loginData.password === "admin123") {
      localStorage.setItem("loggedInUserEmail", loginData.email);
      navigate("/AdminDashboard");
      return;
    }
    const user = users.find(u => u.email === loginData.email && u.password === loginData.password);
    if (user) {
      localStorage.setItem("loggedInUserEmail", user.email);
      navigate("/home1");
    } else setError(t.invalid);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find(u => u.email === signUpData.email)) {
      setError(t.userExists);
      return;
    }
    users.push(signUpData);
    localStorage.setItem("users", JSON.stringify(users));
    alert(t.signupSuccess);
    setSignUpData({ firstName: "", lastName: "", email: "", password: "" });
    setIsLogin(true);
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === forgotEmail);
    if (!user) {
      setError(t.noUser);
      setResetMessage("");
    } else {
      setError("");
      setResetMessage(t.resetMsg);
    }
  };

  return (
    <div className={`relative min-h-screen flex items-center justify-center overflow-hidden ${language !== "en" ? "rtl" : "ltr"}`}>
      {/* Background Image */}
      <img src={loginImg} alt="Background" className="absolute w-full h-full object-cover filter brightness-50" />

      {/* Floating shapes */}
      <div className="absolute w-full h-full">
        <div className="absolute bg-blue-500 w-20 h-20 rounded-full opacity-20 animate-ping top-10 left-10"></div>
        <div className="absolute bg-indigo-500 w-32 h-32 rounded-full opacity-20 animate-pulse bottom-20 right-20"></div>
      </div>

      {/* Form Card */}
      <div className="relative z-10 bg-white/30 backdrop-blur-md rounded-2xl shadow-xl p-10 w-full max-w-md mx-4 animate-fadeIn">
        <h1 className="text-3xl font-bold text-white mb-4">{t.welcome} <span className="text-indigo-200">{t.stackly}</span></h1>
        {!isForgotPassword && <p className="text-white/80 mb-6">{t.welcomeBack}</p>}

        {!isForgotPassword ? (
          <>
            {isLogin ? (
              <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
                <input type="email" placeholder={t.username} name="email" value={loginData.email} onChange={handleLoginChange} className="p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/70 placeholder-gray-700 transition" required />
                <input type="password" placeholder={t.password} name="password" value={loginData.password} onChange={handleLoginChange} className="p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/70 placeholder-gray-700 transition" required />
                <p className="text-right text-white/80 cursor-pointer hover:underline" onClick={() => { setIsForgotPassword(true); setError(""); setResetMessage(""); }}>{t.forgotPassword}</p>
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 rounded-lg transition-all">{t.login}</button>
                <p className="text-center text-white/80 cursor-pointer hover:underline" onClick={() => { setIsLogin(false); setError(""); }}>{t.dontHaveAccount}</p>
              </form>
            ) : (
              <form onSubmit={handleSignUpSubmit} className="flex flex-col gap-4">
                <input type="text" placeholder={t.firstName} name="firstName" value={signUpData.firstName} onChange={handleSignUpChange} className="p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/70 placeholder-gray-700 transition" required />
                <input type="text" placeholder={t.lastName} name="lastName" value={signUpData.lastName} onChange={handleSignUpChange} className="p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/70 placeholder-gray-700 transition" required />
                <input type="email" placeholder={t.username} name="email" value={signUpData.email} onChange={handleSignUpChange} className="p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/70 placeholder-gray-700 transition" required />
                <input type="password" placeholder={t.password} name="password" value={signUpData.password} onChange={handleSignUpChange} className="p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/70 placeholder-gray-700 transition" required />
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 rounded-lg transition-all">{t.signUp}</button>
                <p className="text-center text-white/80 cursor-pointer hover:underline" onClick={() => { setIsLogin(true); setError(""); }}>{t.alreadyHaveAccount}</p>
              </form>
            )}
            {error && <p className="text-red-500 mt-2">{error}</p>}
            {resetMessage && <p className="text-green-500 mt-2">{resetMessage}</p>}
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold text-white mb-4">{t.resetPassword}</h2>
            <form onSubmit={handleForgotPasswordSubmit} className="flex flex-col gap-4">
              <input type="email" placeholder={t.enterRegisteredEmail} value={forgotEmail} onChange={handleForgotPasswordChange} className="p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/70 placeholder-gray-700 transition" required />
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 rounded-lg transition-all">{t.sendResetLink}</button>
              <p className="text-center text-white/80 cursor-pointer hover:underline" onClick={() => { setIsForgotPassword(false); setError(""); setResetMessage(""); }}>{t.backToLogin}</p>
            </form>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            {resetMessage && <p className="text-green-500 mt-2">{resetMessage}</p>}
          </>
        )}
      </div>
    </div>
  );
};

export default Welcome;
