export default function Resources({ language }) {
  const isES = language === "es";

  const resources = [
    isES ? "Guía para Comprar Casa" : "Home Buying Guide",
    isES ? "Checklist de Hipoteca" : "Mortgage Checklist",
    isES ? "Guía de Crédito" : "Credit Improvement Guide",
    isES ? "Ayuda con Foreclosure" : "Foreclosure Assistance",
  ];

  return (
    <div className="min-h-[70vh] bg-[#f7f5f0] px-6 py-16 text-black">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#c8912b] font-semibold uppercase tracking-widest">
          United Home Services
        </p>

        <h1 className="text-5xl font-serif font-bold mt-2">
          {isES ? "Recursos" : "Resources"}
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl">
          {isES
            ? "Encuentra guías, formularios y enlaces útiles para avanzar con tu proceso."
            : "Find guides, forms, and helpful links to move your process forward."}
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {resources.map((title, index) => (
            <div key={index} className="bg-white rounded-3xl p-6 shadow-md border">
              <div className="w-14 h-14 rounded-2xl bg-[#f3eadb] flex items-center justify-center text-[#c8912b] text-2xl mb-5">
                📄
              </div>

              <p className="text-sm font-semibold text-[#c8912b]">
                {isES ? "Recurso" : "Resource"}
              </p>

              <h3 className="text-xl font-serif font-bold mt-2 mb-4">
                {title}
              </h3>

              <p className="text-gray-600 text-sm mb-6">
                {isES
                  ? "Información preparada para ayudarte a entender mejor tu caso."
                  : "Information prepared to help you better understand your case."}
              </p>

              <button className="w-full px-4 py-3 rounded-xl bg-[#c8912b] text-white font-semibold hover:bg-[#a87520] transition">
                {isES ? "Ver recurso" : "View Resource"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}