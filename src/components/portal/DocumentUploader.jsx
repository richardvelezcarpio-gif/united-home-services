import { UploadCloud, FileText, CheckCircle, Clock } from "lucide-react";

export default function DocumentUploader() {
  const documents = [
    ["Driver License", "Pending"],
    ["Passport", "Pending"],
    ["Proof of Income", "Uploaded"],
    ["Bank Statements", "Uploaded"],
    ["Tax Returns", "Pending"],
    ["W2 / 1099", "Pending"],
    ["Additional Documents", "Pending"],
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
      <h2 className="text-3xl font-serif mb-2">Upload Documents</h2>

      <p className="text-gray-600 mb-8">
        Upload your documents securely. Accepted files: PDF, JPG, PNG.
        <div className="grid md:grid-cols-4 gap-4 my-8">
  <div className="bg-[#fffaf0] border rounded-lg p-4 text-center font-semibold">
    Driver License
  </div>

  <div className="bg-[#fffaf0] border rounded-lg p-4 text-center font-semibold">
    Passport
  </div>

  <div className="bg-[#fffaf0] border rounded-lg p-4 text-center font-semibold">
    Tax Returns
  </div>

  <div className="bg-[#fffaf0] border rounded-lg p-4 text-center font-semibold">
    Bank Statements
  </div>
</div>
      </p>

      <div className="border-2 border-dashed border-[#c8912b] rounded-xl p-12 text-center bg-[#fffaf0]">
        <UploadCloud className="mx-auto mb-4 text-[#c8912b]" size={56} />

        <h3 className="text-xl font-semibold">Drag & Drop Files Here</h3>

        <p className="text-gray-500 mt-2">or select files from your computer</p>

        <input
          type="file"
          multiple
          accept=".pdf,.jpg,.jpeg,.png"
          className="mt-6"
        />
      </div>

      <div className="mt-10">
        <h3 className="font-serif text-xl mb-4">Document Checklist</h3>

        <div className="border rounded-xl overflow-hidden">
          {documents.map(([name, status]) => (
            <div
              key={name}
              className="flex items-center justify-between px-5 py-4 border-b last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-gray-500" />
                <span className="font-medium">{name}</span>
              </div>

              <span
                className={`flex items-center gap-2 font-semibold ${
                  status === "Uploaded" ? "text-green-600" : "text-[#c8912b]"
                }`}
              >
                {status}
                {status === "Uploaded" ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <Clock className="w-5 h-5" />
                )}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <button className="bg-gradient-to-r from-[#b87813] to-[#e4b84f] text-white px-6 py-3 rounded-md font-semibold">
          Save Documents
        </button>

        <button className="bg-black text-white px-6 py-3 rounded-md font-semibold">
          Submit For Review
        </button>
      </div>
    </div>
  );
}