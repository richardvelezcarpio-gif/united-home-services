import { FileText, Download, UploadCloud, CheckCircle } from "lucide-react";

export default function Forms({ language }) {
  const isES = language === "es";

  const forms = [
    {
      title: isES ? "Formulario de Información del Cliente" : "Client Information Form",
      desc: isES ? "Información básica para iniciar tu proceso." : "Basic information to start your process.",
      status: isES ? "Requerido" : "Required",
    },
    {
      title: isES ? "Autorización de Servicio" : "Service Authorization",
      desc: isES ? "Permiso para que podamos asistirte con tu trámite." : "Permission for us to assist with your case.",
      status: isES ? "Requerido" : "Required",
    },
    {
      title: isES ? "Formulario de Documentos" : "Document Checklist Form",
      desc: isES ? "Lista de documentos necesarios para revisar tu caso." : "List of documents needed to review your case.",
      status: isES ? "Pendiente" : "Pending",
    },
    {
      title: isES ? "Solicitud Especial" : "Special Request Form",
      desc: isES ? "Para servicios adicionales o casos especiales." : "For additional services or special cases.",
      status: isES ? "Opcional" : "Optional",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-black px-6 py-12">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <p className="text-[#c8912b] font-semibold uppercase tracking-widest">
            United Home Services
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2">
            {isES ? "Formularios" : "Forms"}
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            {isES
              ? "Completa, descarga o sube los formularios necesarios para avanzar con tu proceso."
              : "Complete, download, or upload the required forms to move your process forward."}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-5 mb-10">
          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <FileText className="text-[#c8912b] mb-3" />
            <h3 className="font-bold">{isES ? "Formularios" : "Forms"}</h3>
            <p className="text-3xl font-bold mt-2">4</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <CheckCircle className="text-[#c8912b] mb-3" />
            <h3 className="font-bold">{isES ? "Completados" : "Completed"}</h3>
            <p className="text-3xl font-bold mt-2">1</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <UploadCloud className="text-[#c8912b] mb-3" />
            <h3 className="font-bold">{isES ? "Pendientes" : "Pending"}</h3>
            <p className="text-3xl font-bold mt-2">2</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <Download className="text-[#c8912b] mb-3" />
            <h3 className="font-bold">{isES ? "Disponibles" : "Available"}</h3>
            <p className="text-3xl font-bold mt-2">4</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-md border overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-serif font-bold">
              {isES ? "Documentos disponibles" : "Available Forms"}
            </h2>
          </div>

          <div className="divide-y">
            {forms.map((form, index) => (
              <div key={index} className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f3eadb] flex items-center justify-center">
                    <FileText className="text-[#c8912b]" />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg">{form.title}</h3>
                    <p className="text-gray-600">{form.desc}</p>
                    <span className="inline-block mt-2 text-sm px-3 py-1 rounded-full bg-[#f7f0e3] text-[#9c6b16] font-semibold">
                      {form.status}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="px-5 py-3 rounded-xl border border-[#c8912b] text-[#c8912b] font-semibold hover:bg-[#f7f0e3] transition">
                    {isES ? "Descargar" : "Download"}
                  </button>

                  <button className="px-5 py-3 rounded-xl bg-[#c8912b] text-white font-semibold hover:bg-[#a87520] transition">
                    {isES ? "Subir" : "Upload"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}