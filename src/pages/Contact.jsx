export default function Contact({ language }) {
  return (
    <div className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold">
          {language === "en" ? "Contact Us" : "Contáctenos"}
        </h1>
      </div>
    </div>
  );
}