export default function Services({ language }) {
  return (
    <main className="bg-white">
    {/* HERO */}
<section className="relative overflow-hidden border-b border-yellow-500">
  <div className="grid lg:grid-cols-2 min-h-[620px]">
    <div className="relative z-20 bg-white px-12 py-24 flex items-center">
      <div>
        <h1 className="text-7xl font-bold leading-none">
          <span className="text-black">
            {language === "en" ? "OUR" : "NUESTROS"}
          </span>
          <br />
          <span className="text-yellow-600">
            {language === "en" ? "SERVICES" : "SERVICIOS"}
          </span>
        </h1>

        <div className="w-64 h-1 bg-yellow-500 mt-6 mb-8"></div>

        <p className="text-xl text-gray-700 max-w-xl">
          {language === "en"
            ? "Complete real estate and home service solutions designed to help you achieve your goals."
            : "Soluciones completas de bienes raíces y servicios para el hogar diseñadas para ayudarle a lograr sus metas."}
        </p>

        <button className="mt-10 bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded">
          {language === "en"
            ? "SCHEDULE A CONSULTATION"
            : "AGENDAR UNA CONSULTA"}
        </button>
      </div>
    </div>

    <div className="relative h-[620px]">
      <img
        src="/house.jpg"
        alt="Luxury House"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-transparent"></div>
    </div>
  </div>

  <div className="absolute bottom-0 left-0 right-0 h-10 bg-yellow-500"></div>
</section>

{/* HOW WE HELP */}
<section className="bg-black text-white py-16 border-b border-yellow-500">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-10">
      <h2 className="text-4xl font-bold text-yellow-500">
        {language === "en" ? "HOW WE HELP" : "CÓMO LE AYUDAMOS"}
      </h2>

      <p className="text-gray-300 mt-3">
        {language === "en"
          ? "Comprehensive solutions tailored to your real estate needs."
          : "Soluciones completas adaptadas a sus necesidades de bienes raíces."}
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
      {[
        {
          en: "BUYING & SELLING",
          es: "COMPRA Y VENTA",
          textEn: "Expert guidance to help you buy your dream home or sell for the best value.",
          textEs: "Guía experta para comprar su casa ideal o vender al mejor valor.",
        },
        {
          en: "MORTGAGE & REFINANCE",
          es: "HIPOTECA Y REFINANCIAMIENTO",
          textEn: "Find the best loan options and refinance solutions that fit your needs.",
          textEs: "Encuentre las mejores opciones de préstamo y refinanciamiento.",
        },
        {
          en: "FORECLOSURE ASSISTANCE",
          es: "ASISTENCIA FORECLOSURE",
          textEn: "We help you explore your options and protect your future.",
          textEs: "Le ayudamos a explorar opciones y proteger su futuro.",
        },
        {
          en: "LEGAL & DOCUMENT SUPPORT",
          es: "APOYO LEGAL Y DOCUMENTOS",
          textEn: "Document services to make your process smooth and secure.",
          textEs: "Servicios de documentos para un proceso seguro y ordenado.",
        },
        {
          en: "INVESTMENT PROPERTIES",
          es: "PROPIEDADES DE INVERSIÓN",
          textEn: "Guidance to help you build wealth through smart real estate investments.",
          textEs: "Guía para crecer mediante inversiones inteligentes en bienes raíces.",
        },
        {
          en: "CREDIT & FINANCIAL GUIDANCE",
          es: "GUÍA DE CRÉDITO Y FINANZAS",
          textEn: "Improve your financial profile to unlock better opportunities.",
          textEs: "Mejore su perfil financiero para acceder a mejores oportunidades.",
        },
      ].map((item) => (
        <div
          key={item.en}
          className="border border-yellow-500 p-5 text-center min-h-[290px] flex flex-col items-center justify-between hover:bg-yellow-500 hover:text-black transition"
        >
          <div className="w-14 h-14 rounded-full border border-yellow-500"></div>

          <h3 className="font-bold text-sm leading-tight">
            {language === "en" ? item.en : item.es}
          </h3>

          <p className="text-xs leading-relaxed">
            {language === "en" ? item.textEn : item.textEs}
          </p>

          <button className="text-yellow-500 font-bold text-xs">
            {language === "en" ? "LEARN MORE" : "MÁS INFORMACIÓN"}
          </button>
        </div>
      ))}
    </div>

  </div>
</section>

{/* WHO WE SERVE */}
<section className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-yellow-600">
        {language === "en" ? "WHO WE SERVE" : "A QUIÉN SERVIMOS"}
      </h2>

      <p className="text-gray-600 mt-3">
        {language === "en"
          ? "We are here to help individuals, families and investors."
          : "Estamos aquí para ayudar a individuos, familias e inversionistas."}
      </p>
    </div>

    <div className="grid md:grid-cols-4 gap-8 text-center">

      <div>
        <div className="w-16 h-16 rounded-full border-2 border-yellow-500 mx-auto mb-4"></div>

        <h3 className="font-bold text-xl mb-3">
          {language === "en" ? "FAMILIES" : "FAMILIAS"}
        </h3>

        <p className="text-gray-600 text-sm">
          {language === "en"
            ? "Helping families find safe, comfortable and affordable places to call home."
            : "Ayudamos a las familias a encontrar hogares seguros y cómodos."}
        </p>
      </div>

      <div>
        <div className="w-16 h-16 rounded-full border-2 border-yellow-500 mx-auto mb-4"></div>

        <h3 className="font-bold text-xl mb-3">
          {language === "en" ? "FIRST TIME BUYERS" : "PRIMEROS COMPRADORES"}
        </h3>

        <p className="text-gray-600 text-sm">
          {language === "en"
            ? "Guiding you through the entire process with clarity and confidence."
            : "Le guiamos durante todo el proceso con claridad y confianza."}
        </p>
      </div>

      <div>
        <div className="w-16 h-16 rounded-full border-2 border-yellow-500 mx-auto mb-4"></div>

        <h3 className="font-bold text-xl mb-3">
          {language === "en" ? "INVESTORS" : "INVERSIONISTAS"}
        </h3>

        <p className="text-gray-600 text-sm">
          {language === "en"
            ? "Providing strategies and support to grow and protect your investments."
            : "Estrategias y apoyo para crecer y proteger sus inversiones."}
        </p>
      </div>

      <div>
        <div className="w-16 h-16 rounded-full border-2 border-yellow-500 mx-auto mb-4"></div>

        <h3 className="font-bold text-xl mb-3">
          {language === "en" ? "HOMEOWNERS" : "PROPIETARIOS"}
        </h3>

        <p className="text-gray-600 text-sm">
          {language === "en"
            ? "Solutions for refinancing, foreclosure and financial challenges."
            : "Soluciones para refinanciamiento, foreclosure y desafíos financieros."}
        </p>
      </div>

    </div>

  </div>
</section>

{/* OUR PROCESS */}
<section className="bg-black text-white py-10 border-t border-yellow-500">
  <div className="max-w-7xl mx-auto">

    <div className="grid lg:grid-cols-3 items-center">

      {/* IZQUIERDA */}
      <div className="lg:col-span-2 px-8">

        <h2 className="text-4xl font-bold text-yellow-500 mb-3">
          {language === "en" ? "OUR PROCESS" : "NUESTRO PROCESO"}
        </h2>

        <p className="text-gray-300 mb-10">
          {language === "en"
            ? "A simple, clear process from start to finish."
            : "Un proceso simple y claro de principio a fin."}
        </p>

        <div className="flex justify-between items-center">

          {[1,2,3,4,5].map((num) => (
            <div key={num} className="flex items-center">

              <div className="w-12 h-12 rounded-full bg-yellow-500 text-black font-bold text-xl flex items-center justify-center">
                {num}
              </div>

              {num !== 5 && (
                <div className="w-20 h-[2px] bg-yellow-500"></div>
              )}

            </div>
          ))}

        </div>

        <div className="grid grid-cols-5 gap-4 mt-6 text-center">

          <div>
            <h3 className="font-bold text-sm mb-2">
              {language === "en" ? "CONSULTATION" : "CONSULTA"}
            </h3>
            <p className="text-xs text-gray-400">
              {language === "en"
                ? "Evaluate your goals."
                : "Evaluamos sus metas."}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-2">
              {language === "en" ? "STRATEGY" : "ESTRATEGIA"}
            </h3>
            <p className="text-xs text-gray-400">
              {language === "en"
                ? "Create a personalized plan."
                : "Creamos un plan personalizado."}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-2">
              {language === "en" ? "DOCUMENTS" : "DOCUMENTOS"}
            </h3>
            <p className="text-xs text-gray-400">
              {language === "en"
                ? "Prepare all paperwork."
                : "Preparamos la documentación."}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-2">
              {language === "en" ? "APPROVAL" : "APROBACIÓN"}
            </h3>
            <p className="text-xs text-gray-400">
              {language === "en"
                ? "Work toward approval."
                : "Trabajamos para su aprobación."}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-2">
              {language === "en" ? "CLOSING" : "CIERRE"}
            </h3>
            <p className="text-xs text-gray-400">
              {language === "en"
                ? "Complete the process."
                : "Completamos el proceso."}
            </p>
          </div>

        </div>

      </div>

      {/* FOTO DERECHA */}
      <div className="relative h-[280px]">

        <img
          src="/ciudad.jpg"
          alt="City"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>

      </div>

    </div>

  </div>
</section>

{/* FINAL CTA */}
<section className="bg-white py-8 border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex items-center justify-between gap-10">

      <div className="flex items-center gap-6">
        <div className="w-16 h-16 rounded-full border-4 border-yellow-500 flex items-center justify-center text-yellow-500 text-3xl flex-shrink-0">
          ☎
        </div>

        <div>
          <h2 className="text-2xl font-bold text-black">
            {language === "en"
              ? "READY TO TAKE THE NEXT STEP?"
              : "¿LISTO PARA DAR EL SIGUIENTE PASO?"}
          </h2>

          <p className="text-gray-600 mt-1 text-sm max-w-md">
            {language === "en"
              ? "Let our team guide you with honesty, experience and dedication."
              : "Permita que nuestro equipo le guíe con honestidad, experiencia y dedicación."}
          </p>
        </div>
      </div>

      <div className="flex-shrink-0">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-12 py-4 rounded">
          {language === "en"
            ? "SCHEDULE A CONSULTATION"
            : "AGENDAR UNA CONSULTA"}
        </button>
      </div>

    </div>
  </div>
</section>

<footer className="bg-black text-white py-12 border-t border-yellow-500">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-10">

    {/* LOGO */}
    <div>
      <img
        src="/logo.png"
        alt="United Home Services"
        className="w-32 mb-4"
      />

      <p className="text-gray-300 mb-6">
        {language === "en"
          ? "Your complete real estate and home service solutions team."
          : "Su equipo completo de soluciones inmobiliarias y servicios para el hogar."}
      </p>

      <div className="flex gap-4 text-yellow-500 text-xl">
        <span>●</span>
        <span>●</span>
        <span>●</span>
        <span>●</span>
      </div>
    </div>

    {/* QUICK LINKS */}
    <div>
      <h3 className="text-yellow-500 font-bold mb-4">
        {language === "en" ? "QUICK LINKS" : "ENLACES RÁPIDOS"}
      </h3>

      <ul className="space-y-2 text-gray-300">
        <li>{language === "en" ? "Home" : "Inicio"}</li>
        <li>{language === "en" ? "Services" : "Servicios"}</li>
        <li>{language === "en" ? "Client Portal" : "Portal Cliente"}</li>
        <li>{language === "en" ? "Resources" : "Recursos"}</li>
        <li>{language === "en" ? "About Us" : "Nosotros"}</li>
        <li>{language === "en" ? "Contact" : "Contacto"}</li>
      </ul>
    </div>

    {/* OUR SERVICES */}
    <div>
      <h3 className="text-yellow-500 font-bold mb-4">
        {language === "en" ? "OUR SERVICES" : "NUESTROS SERVICIOS"}
      </h3>

      <ul className="space-y-2 text-gray-300">
        <li>{language === "en" ? "Buy & Sell" : "Compra y Venta"}</li>

        <li>
          {language === "en"
            ? "Mortgage & Refinance"
            : "Hipoteca y Refinanciamiento"}
        </li>

        <li>
          {language === "en"
            ? "Foreclosure Assistance"
            : "Asistencia Foreclosure"}
        </li>

        <li>
          {language === "en"
            ? "Legal Services"
            : "Servicios Legales"}
        </li>

        <li>
          {language === "en"
            ? "Investment Properties"
            : "Propiedades de Inversión"}
        </li>

        <li>
          {language === "en"
            ? "Credit Improvement"
            : "Mejora de Crédito"}
        </li>
      </ul>
    </div>

    {/* CONTACT */}
    <div>
      <h3 className="text-yellow-500 font-bold mb-4">
        {language === "en" ? "CONTACT US" : "CONTÁCTANOS"}
      </h3>

      <ul className="space-y-2 text-gray-300">
        <li>347-234-4706</li>
        <li>unitedhomeservicesny@gmail.com</li>
        <li>Brooklyn, NY</li>
      </ul>
    </div>

    {/* HOURS */}
    <div>
      <h3 className="text-yellow-500 font-bold mb-4">
        {language === "en" ? "HOURS" : "HORARIOS"}
      </h3>

      <ul className="space-y-2 text-gray-300">
        <li>
          {language === "en"
            ? "Monday - Friday"
            : "Lunes - Viernes"}
        </li>

        <li>9:00 AM - 6:00 PM</li>

        <li>
          {language === "en"
            ? "Saturday"
            : "Sábado"}
        </li>

        <li>10:00 AM - 3:00 PM</li>

        <li>
          {language === "en"
            ? "Sunday"
            : "Domingo"}
        </li>

        <li>
          {language === "en"
            ? "By Appointment"
            : "Con Cita Previa"}
        </li>
      </ul>
    </div>

  </div>

  <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
    © 2026 United Home Services. All Rights Reserved.
  </div>
</footer>
    </main>
  );
}