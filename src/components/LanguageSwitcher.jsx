export default function LanguageSwitcher({ language, setLanguage }) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded-full text-sm font-semibold transition ${
          language === "en"
            ? "bg-yellow-500 text-black"
            : "bg-white/10 text-white hover:bg-white/20"
        }`}
      >
        EN
      </button>

      <button
        onClick={() => setLanguage("es")}
        className={`px-3 py-1 rounded-full text-sm font-semibold transition ${
          language === "es"
            ? "bg-yellow-500 text-black"
            : "bg-white/10 text-white hover:bg-white/20"
        }`}
      >
        ES
      </button>
    </div>
  );
}