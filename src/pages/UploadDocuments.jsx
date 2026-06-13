import { Link } from "react-router-dom";
import DocumentUploader from "../components/portal/DocumentUploader";

export default function UploadDocuments() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <Link
        to="/client-portal"
        className="inline-block mb-6 text-[#c8912b] font-semibold hover:underline"
      >
        ← Back to Client Portal
      </Link>

      <DocumentUploader />
    </div>
  );
}