import { Link } from "react-router-dom";

export default function Footer({ language }) {
  const isES = language === "es";

  return (
    <footer className="bg-black text-white border-t border-[#c8912b]">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Columna 1 */}
          <div>
            <h3 className="text-2xl font-bold text-[#c8912b] mb-4">
              United Home Services
            </h3>

            <p className="text-gray-300 leading-relaxed">
              {isES
                ? "Soluciones profesionales para bienes raíces, hipotecas, documentos, trámites y servicios para ayudarte en cada paso."
                : "Professional solutions for real estate, mortgages, documents, applications, and support services every step of the way."}
            </p>
          </div>

          {/* Columna 2 */}
          <div>
            <h4 className="font-bold text-[#c8912b] mb-4">
              {isES ? "Enlaces" : "Quick Links"}
            </h4>

            <ul className="space-y-3">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/client-portal">Client Portal</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Columna 3 */}
          <div>
            <h4 className="font-bold text-[#c8912b] mb-4">
              {isES ? "Servicios" : "Services"}
            </h4>

            <ul className="space-y-3 text-gray-300">
              <li>Real Estate</li>
              <li>Mortgage Services</li>
              <li>Foreclosure Assistance</li>
              <li>Legal Referrals</li>
              <li>Credit Improvement</li>
            </ul>
          </div>

          {/* Columna 4 */}
          <div>
            <h4 className="font-bold text-[#c8912b] mb-4">
              {isES ? "Contacto" : "Contact"}
            </h4>

            <ul className="space-y-3 text-gray-300">
              <li>📞 347-234-4706</li>
              <li>📧 info@unitedhomeservicesny.com</li>
              <li>📍 Brooklyn, New York</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
          © 2026 United Home Services. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}