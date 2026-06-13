import LanguageSwitcher from "./LanguageSwitcher";

export default function TopBar({ language, setLanguage }) {
  return (
    <div className="w-full bg-black text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <p className="hidden sm:block">
          {language === "en"
            ? "Professional Multiservices in New York"
            : "Multiservicios profesionales en New York"}
        </p>

        <div className="flex items-center gap-4 ml-auto">
          <a href="tel:3472344706" className="hover:text-yellow-400">
            347-234-4706
          </a>

          <LanguageSwitcher language={language} setLanguage={setLanguage} />
        </div>
      </div>
    </div>
  );
}