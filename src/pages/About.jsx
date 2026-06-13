export default function About({ language }) {
  return (
    <div className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold">
          {language === "en" ? "About Us" : "Nosotros"}
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          {language === "en"
            ? "Learn more about United Home Services."
            : "Conozca más sobre United Home Services."}
        </p>
      </div>
    </div>
  );
}