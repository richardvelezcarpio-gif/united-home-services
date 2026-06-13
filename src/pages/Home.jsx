export default function Home({ language }) {

const services = [
  language === "en" ? "Buy a Home" : "Comprar Casa",
  language === "en" ? "Sell Your Property" : "Vender Propiedad",
  language === "en" ? "Mortgage & Financing" : "Hipoteca y Financiamiento",
  language === "en" ? "Refinance" : "Refinanciamiento",
  language === "en" ? "Foreclosure Assistance" : "Asistencia Foreclosure",
  language === "en" ? "Legal Services" : "Servicios Legales",
  language === "en" ? "Investment Properties" : "Propiedades de Inversión",
  language === "en" ? "Credit Improvement" : "Mejora de Crédito",
];

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[620px] overflow-hidden border-b-4 border-yellow-500">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('/hero-home.jpg')] bg-cover bg-center"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 py-24">
          <p className="text-5xl italic text-yellow-600 mb-2">United</p>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight text-black max-w-5xl">
            {language === "en"
              ? "HOME SERVICES SOLUTIONS"
              : "SOLUCIONES PARA EL HOGAR"}
          </h1>

          <h2 className="mt-4 text-2xl tracking-wide text-black">
            {language === "en"
              ? "YOUR COMPLETE TEAM. YOUR BEST MOVE."
              : "SU EQUIPO COMPLETO. SU MEJOR DECISIÓN."}
          </h2>

          <p className="mt-6 text-lg text-gray-700 max-w-xl">
            {language === "en"
  ? "We provide full-service real estate, mortgage, foreclosure assistance, and legal solutions to help you achieve your goals with confidence."
  : "Brindamos servicios de bienes raíces, hipotecas, asistencia en foreclosure y soluciones legales para ayudarle a lograr sus metas con confianza."}
          </p>

          <div className="mt-8 flex flex-wrap gap-5">
            <button className="bg-yellow-500 text-black px-8 py-4 font-bold rounded hover:bg-yellow-400">
              {language === "en" ? "GET STARTED" : "COMENZAR"}
            </button>

            <button className="bg-black text-white px-8 py-4 font-bold rounded hover:bg-gray-900">
              {language === "en" ? "OUR SERVICES" : "SERVICIOS"}
            </button>

            <button className="border border-yellow-600 text-black px-8 py-4 font-bold rounded hover:bg-yellow-50">
              {language === "en" ? "CLIENT PORTAL" : "PORTAL CLIENTE"}
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-10 text-black font-bold">
            <span>👥 {language === "en" ? "EXPERT TEAM" : "EQUIPO EXPERTO"}</span>
            <span>⚡ {language === "en" ? "FAST PROCESS" : "PROCESO RÁPIDO"}</span>
            <span>🛡️ {language === "en" ? "TRUSTED RESULTS" : "RESULTADOS CONFIABLES"}</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-14">
      <h2 className="text-5xl font-bold text-black">
        {language === "en" ? "OUR SERVICES" : "NUESTROS SERVICIOS"}
      </h2>
      <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
    </div>

   <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-2">
  {services.map((service, index) => (
    <div
      key={index}
      className="rounded-xl bg-white p-4 text-center shadow-md hover:-translate-y-1 hover:shadow-xl transition duration-300"
    >
      <div className="w-16 h-16 rounded-full bg-yellow-500 mx-auto mb-6"></div>

      <h3 className="font-bold text-[14px] text-black mb-4 uppercase min-h-[60px] flex items-center justify-center text-center">
        {service}
      </h3>

      <p className="text-gray-600 text-sm mb-6 min-h-[90px] flex items-center justify-center text-center">
        {language === "en"
          ? "Professional support for your needs."
          : "Asistencia profesional para sus necesidades."}
      </p>

      <button className="mt-5 text-yellow-600 font-semibold text-[11px] whitespace-nowrap">
        {language === "en" ? "LEARN MORE" : "MAS INFORMACION"}
      </button>
    </div>
  ))}
</div>
    </div>

</section>

      {/* PROCESS */}
<section className="bg-black text-white py-0">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-4">

    <div className="bg-black p-8">
      <h2 className="text-3xl font-bold text-yellow-500 mb-6">
        {language === "en"
          ? "WE MAKE THE PROCESS SIMPLE"
          : "HACEMOS EL PROCESO SIMPLE"}
      </h2>

      {[
        "Consultation",
        "Plan & Strategy",
        "Documents & Approval",
        "Process & Review",
        "Closing",
      ].map((step, index) => (
        <div key={step} className="flex gap-3 mb-4">
          <div className="w-7 h-7 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold text-sm">
            {index + 1}
          </div>
          <div>
            <h3 className="font-bold text-sm">{step}</h3>
            <p className="text-gray-300 text-xs">
              We guide you step by step.
            </p>
          </div>
        </div>
      ))}
    </div>

    <div className="bg-gray-900 min-h-[420px]">
      <img
        src="/house.jpg"
        alt="House"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="bg-white text-black p-8">
      <h2 className="text-2xl font-bold text-yellow-600 mb-4">
        {language === "en" ? "START YOUR JOURNEY TODAY" : "COMIENCE HOY"}
      </h2>

      <input className="border p-3 rounded w-full mb-3" placeholder="Full Name" />
      <input className="border p-3 rounded w-full mb-3" placeholder="Phone Number" />
      <input className="border p-3 rounded w-full mb-3" placeholder="Email Address" />
      <textarea className="border p-3 rounded w-full mb-3" rows="4" placeholder="How can we help you?" />

      <button className="w-full bg-yellow-500 text-black font-bold py-3 rounded">
        {language === "en" ? "SUBMIT REQUEST" : "ENVIAR SOLICITUD"}
      </button>
    </div>

    <div className="bg-black p-6 flex flex-col gap-4">
      {["INTAKE FORMS", "UPLOAD DOCUMENTS", "SCHEDULE APPOINTMENT"].map((item) => (
        <div key={item} className="border border-yellow-500 p-4">
          <h3 className="text-yellow-500 font-bold mb-2">{item}</h3>
          <p className="text-sm text-gray-300">
            Start your process online.
          </p>
        </div>
      ))}
    </div>

  </div>

  </section>

{/* STATS */}
<section className="bg-black text-white border-t border-yellow-500 border-b border-yellow-500 py-8">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

    <div>
      <h3 className="text-4xl font-bold text-yellow-500">1000+</h3>
      <p className="text-sm uppercase">Families Helped</p>
    </div>

    <div>
      <h3 className="text-4xl font-bold text-yellow-500">500+</h3>
      <p className="text-sm uppercase">Homes Sold</p>
    </div>

    <div>
      <h3 className="text-4xl font-bold text-yellow-500">15+</h3>
      <p className="text-sm uppercase">Years Experience</p>
    </div>

    <div>
      <h3 className="text-4xl font-bold text-yellow-500">5 Star</h3>
      <p className="text-sm uppercase">Client Rating</p>
    </div>

  </div>
</section>

{/* PORTAL CARDS */}
<section className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-6 text-center">

    <div className="bg-white shadow-lg rounded-xl p-8">
      <div className="w-16 h-16 rounded-full border border-yellow-500 mx-auto mb-5"></div>

      <h3 className="font-bold text-black mb-3">
        INTAKE FORMS
      </h3>

      <p className="text-gray-600 text-sm mb-5">
        Start your process by completing the right intake form for your needs.
      </p>

      <button className="bg-yellow-500 text-black px-6 py-3 rounded font-bold text-sm">
        START NOW
      </button>
    </div>

    <div className="bg-white shadow-lg rounded-xl p-8">
      <div className="w-16 h-16 rounded-full border border-yellow-500 mx-auto mb-5"></div>

      <h3 className="font-bold text-black mb-3">
        UPLOAD DOCUMENTS
      </h3>

      <p className="text-gray-600 text-sm mb-5">
        Securely upload your documents directly to our platform.
      </p>

      <button className="bg-yellow-500 text-black px-6 py-3 rounded font-bold text-sm">
        UPLOAD NOW
      </button>
    </div>

    <div className="bg-white shadow-lg rounded-xl p-8">
      <div className="w-16 h-16 rounded-full border border-yellow-500 mx-auto mb-5"></div>

      <h3 className="font-bold text-black mb-3">
        AGREEMENTS
      </h3>

      <p className="text-gray-600 text-sm mb-5">
        Review and sign your agreements online easily and securely.
      </p>

      <button className="bg-yellow-500 text-black px-6 py-3 rounded font-bold text-sm">
        VIEW AGREEMENTS
      </button>
    </div>

    <div className="bg-white shadow-lg rounded-xl p-8">
      <div className="w-16 h-16 rounded-full border border-yellow-500 mx-auto mb-5"></div>

      <h3 className="font-bold text-black mb-3">
        SCHEDULE APPOINTMENT
      </h3>

      <p className="text-gray-600 text-sm mb-5">
        Book an appointment with our team at a time that works for you.
      </p>

      <button className="bg-yellow-500 text-black px-6 py-3 rounded font-bold text-sm">
        BOOK NOW
      </button>
    </div>

    <div className="bg-white shadow-lg rounded-xl p-8">
      <div className="w-16 h-16 rounded-full border border-yellow-500 mx-auto mb-5"></div>

      <h3 className="font-bold text-black mb-3">
        CLIENT PORTAL
      </h3>

      <p className="text-gray-600 text-sm mb-5">
        Access your dashboard to track your case and documents.
      </p>

      <button className="bg-yellow-500 text-black px-6 py-3 rounded font-bold text-sm">
        LOGIN
      </button>
    </div>

  </div>
</section>

{/* FOOTER */}
<footer className="bg-black text-white py-12 border-t border-yellow-500">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

    <div>
      <h3 className="text-yellow-500 text-2xl font-bold mb-4">
        United Home Services
      </h3>

      <p className="text-gray-400">
        Your complete real estate and multiservices team.
      </p>
    </div>

    <div>
      <h4 className="text-yellow-500 font-bold mb-4">
        QUICK LINKS
      </h4>

      <ul className="space-y-2 text-gray-300">
        <li>Home</li>
        <li>Services</li>
        <li>Client Portal</li>
        <li>Resources</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
    </div>

    <div>
      <h4 className="text-yellow-500 font-bold mb-4">
        CONTACT US
      </h4>

      <ul className="space-y-2 text-gray-300">
        <li>347-234-4706</li>
        <li>unitedhomeservicesny@gmail.com</li>
        <li>Brooklyn, New York</li>
      </ul>
    </div>

    <div>
      <h4 className="text-yellow-500 font-bold mb-4">
        HOURS
      </h4>

      <ul className="space-y-2 text-gray-300">
        <li>Monday - Friday</li>
        <li>9:00 AM - 6:00 PM</li>
        <li>Saturday</li>
        <li>10:00 AM - 3:00 PM</li>
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