import { UploadCloud, FileText, CheckCircle, Clock } from "lucide-react";
import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function DocumentUploader() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("Pending");
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("You must be logged in to upload documents.");
      return;
    }

    setUploading(true);

    const filePath = `${user.email}/${Date.now()}-${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from("documents")
      .upload(filePath, file);

    if (uploadError) {
      console.error(uploadError);
      alert("Upload failed.");
      setUploading(false);
      return;
    }

    const { error: insertError } = await supabase.from("documents").insert([
      {
        user_email: user.email,
        file_name: file.name,
        file_path: filePath,
        status: "Pending",
      },
    ]);

    if (insertError) {
  console.error("INSERT ERROR:", insertError);
  alert(insertError.message);
  setUploading(false);
  return;
}

    setStatus("Uploaded");
    setUploading(false);
    alert("Document uploaded successfully!");
  };

  const documents = [
    "Driver License",
    "Passport",
    "Proof of Income",
    "Bank Statement",
    "Tax Return",
    "Additional Documents",
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-[#c8912b]/10 p-3 rounded-xl">
          <UploadCloud className="w-8 h-8 text-[#c8912b]" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Upload Documents</h2>
          <p className="text-gray-600">
            Upload your documents securely for review.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        {documents.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 border rounded-xl p-4 bg-gray-50"
          >
            <FileText className="w-5 h-5 text-[#c8912b]" />
            <span className="font-semibold text-gray-700">{item}</span>
          </div>
        ))}
      </div>

      <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center bg-gray-50">
        <UploadCloud className="w-12 h-12 mx-auto text-[#c8912b] mb-3" />
        <p className="text-gray-700 font-semibold mb-2">
          Drag & Drop files here
        </p>
        <p className="text-gray-500 text-sm mb-4">
          or select files from your computer
        </p>

        <input
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={(e) => setFile(e.target.files[0])}
          className="block mx-auto text-sm"
        />

        {file && (
          <p className="mt-4 text-sm text-gray-700">
            Selected: <span className="font-semibold">{file.name}</span>
          </p>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between border rounded-xl p-4">
        <span className="flex items-center gap-2 font-semibold text-gray-700">
          {status === "Uploaded" ? (
            <CheckCircle className="w-5 h-5 text-green-600" />
          ) : (
            <Clock className="w-5 h-5 text-[#c8912b]" />
          )}
          {status}
        </span>

        <button
          onClick={handleUpload}
          disabled={uploading}
          className="bg-gradient-to-r from-[#b87813] to-[#e4b84f] text-white px-6 py-3 rounded-md font-semibold disabled:opacity-60"
        >
          {uploading ? "Uploading..." : "Submit For Review"}
        </button>
      </div>
    </div>
  );
}