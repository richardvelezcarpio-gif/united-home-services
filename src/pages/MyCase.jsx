import { Briefcase, Check, Clock, FileText, User, Calendar } from "lucide-react";

export default function MyCase({ language }) {
  const steps = [
    "Intake Form",
    "Documents Submitted",
    "Initial Review",
    "Consultation",
    "Processing",
    "Completed",
  ];

  return (
    <main className="max-w-7xl mx-auto p-6 space-y-8">
      <section className="bg-white rounded-2xl shadow-lg border p-8">
        <h1 className="text-3xl font-serif font-bold mb-2">
          {language === "en" ? "My Case" : "Mi Caso"}
        </h1>
        <p className="text-gray-600">
          {language === "en"
            ? "Track your case status, assigned agent, timeline and next steps."
            : "Revisa el estado de tu caso, agente asignado, progreso y próximos pasos."}
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-lg border-t-4 border-[#c8912b] p-6">
          <Briefcase className="text-[#c8912b] mb-4" />
          <p className="text-gray-500 text-sm">
            {language === "en" ? "Case Number" : "Número de Caso"}
          </p>
          <h2 className="text-2xl font-bold">UHS-2025-00124</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border-t-4 border-[#c8912b] p-6">
          <Clock className="text-[#c8912b] mb-4" />
          <p className="text-gray-500 text-sm">
            {language === "en" ? "Status" : "Estado"}
          </p>
          <h2 className="text-2xl font-bold">
            {language === "en" ? "In Review" : "En Revisión"}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border-t-4 border-[#c8912b] p-6">
          <User className="text-[#c8912b] mb-4" />
          <p className="text-gray-500 text-sm">
            {language === "en" ? "Assigned Agent" : "Agente Asignado"}
          </p>
          <h2 className="text-2xl font-bold">Patricia Verano</h2>
        </div>
      </section>

      <section className="bg-white rounded-2xl shadow-lg border p-8">
        <h2 className="text-2xl font-serif font-bold mb-6">
          {language === "en" ? "Case Details" : "Detalles del Caso"}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Info label={language === "en" ? "Service" : "Servicio"} value="Home Purchase Assistance" />
          <Info label={language === "en" ? "Started" : "Inicio"} value="May 10, 2025" />
          <Info label={language === "en" ? "Expected Completion" : "Finalización Estimada"} value="June 25, 2025" />
          <Info label={language === "en" ? "Next Step" : "Próximo Paso"} value={language === "en" ? "Consultation Appointment" : "Cita de Consulta"} />
        </div>
      </section>

      <section className="bg-white rounded-2xl shadow-lg border p-8">
        <h2 className="text-2xl font-serif font-bold mb-8">
          {language === "en" ? "Case Timeline" : "Línea de Tiempo"}
        </h2>

        <div className="grid md:grid-cols-6 gap-4 text-center">
          {steps.map((step, index) => (
            <div key={step}>
              <div
                className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center border ${
                  index < 3
                    ? "bg-[#c8912b] text-white border-[#c8912b]"
                    : index === 3
                    ? "text-[#c8912b] border-[#c8912b]"
                    : "text-gray-400 border-gray-300"
                }`}
              >
                {index < 3 ? <Check size={20} /> : index + 1}
              </div>
              <p className="mt-3 text-sm font-medium">{step}</p>
              <p className="text-xs text-gray-500">
                {index < 3
                  ? language === "en" ? "Completed" : "Completado"
                  : index === 3
                  ? language === "en" ? "Scheduled" : "Programado"
                  : language === "en" ? "Pending" : "Pendiente"}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function Info({ label, value }) {
  return (
    <div className="border rounded-xl p-5">
      <p className="text-sm text-gray-500">{label}</p>
      <h3 className="text-lg font-semibold mt-1">{value}</h3>
    </div>
  );
}