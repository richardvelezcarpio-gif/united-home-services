import {
  FileText,
  Download,
  Eye,
  PenLine,
  CheckCircle,
  Clock,
} from "lucide-react";

export default function Agreements({ language }) {
  const agreements = [
    {
      name:
        language === "en"
          ? "Purchase Agreement"
          : "Contrato de Compra",
      status: "pending",
    },
    {
      name:
        language === "en"
          ? "Privacy Policy"
          : "Política de Privacidad",
      status: "signed",
    },
    {
      name:
        language === "en"
          ? "Disclosure Agreement"
          : "Acuerdo de Divulgación",
      status: "pending",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto p-6 space-y-8">
      <section className="bg-white rounded-2xl shadow-lg border p-8 max-w-7xl">
        <h1 className="text-3xl font-serif font-bold">
          {language === "en" ? "Agreements" : "Acuerdos"}
        </h1>

        <p className="text-gray-600 mt-2">
          {language === "en"
            ? "Review, download and sign your documents."
            : "Revisa, descarga y firma tus documentos."}
        </p>
        <div className="flex gap-4 mt-6">
  <div className="bg-amber-100 text-amber-700 px-4 py-2 rounded-lg font-medium">
    2 Pending
  </div>

  <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-medium">
    1 Signed
  </div>
</div>
      </section>

      <section className="space-y-6">
        {agreements.map((agreement, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="bg-[#c8912b]/10 p-4 rounded-xl">
                <FileText className="text-[#c8912b]" />
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  {agreement.name}
                </h3>

                <div className="mt-2">
                 {agreement.status === "signed" ? (
  <>
    <span className="flex items-center gap-2 text-green-600">
      <CheckCircle size={18} />
      {language === "en"
        ? "Signed"
        : "Firmado"}
    </span>

    <p className="text-sm text-gray-500 mt-1">
      Signed June 8, 2025
    </p>
  </>
) : (
  <>
    <span className="flex items-center gap-2 text-amber-600">
      <Clock size={18} />
      {language === "en"
        ? "Pending Signature"
        : "Pendiente de Firma"}
    </span>

    <p className="text-sm text-gray-500 mt-1">
      June 10, 2025
    </p>
  </>
)}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 flex items-center gap-2">
                <Eye size={18} />
                {language === "en"
                  ? "View PDF"
                  : "Ver PDF"}
              </button>

              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 flex items-center gap-2">
                <Download size={18} />
                {language === "en"
                  ? "Download"
                  : "Descargar"}
              </button>

              {agreement.status === "pending" && (
                <button className="px-4 py-2 bg-[#c8912b] text-white rounded-lg hover:opacity-90 flex items-center gap-2">
                  <PenLine size={18} />
                  {language === "en"
                    ? "Sign Document"
                    : "Firmar Documento"}
                </button>
              )}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}