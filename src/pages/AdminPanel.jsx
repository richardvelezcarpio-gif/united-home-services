import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";


export default function AdminPanel() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  const ADMIN_EMAIL = "richardvelezca@gmail.com";

  useEffect(() => {
    checkAdminAndLoad();
  }, []);

  async function checkAdminAndLoad() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    console.log("USER EMAIL:", user?.email);
console.log("ADMIN EMAIL:", ADMIN_EMAIL);

if (!user) {
  window.location.href = "/login";
  return;
}

    fetchDocuments();
  }

  async function fetchDocuments() {
    const { data, error } = await supabase
      .from("documents")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setDocuments(data);
    }

    setLoading(false);
  }

  async function updateStatus(id, status) {
    const { error } = await supabase
      .from("documents")
      .update({ status })
      .eq("id", id);

    if (error) {
      alert("Error updating status");
      console.error(error);
      return;
    }

    fetchDocuments();
  }
  async function downloadFile(path) {
  const { data, error } = await supabase.storage
    .from("documents")
    .download(path);

  if (error) {
  console.error(error);
  alert(error.message);
  return;
}

  const url = URL.createObjectURL(data);

  const link = document.createElement("a");
  link.href = url;
  link.download = path.split("/").pop();

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}

  if (loading) {
    return <div className="p-10">Loading documents...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow p-6">
        <h1 className="text-3xl font-bold text-[#c8912b] mb-2">
          Admin Panel
        </h1>

        <p className="text-gray-600 mb-6">
          Manage uploaded client documents.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-3">Client Email</th>
                <th className="p-3">File Name</th>
                <th className="p-3">Status</th>
                <th className="p-3">Uploaded Date</th>
                <th className="p-3">Download</th>
                <th className="p-3">Change Status</th>
              </tr>
            </thead>

            <tbody>
              {documents.map((doc) => (
                <tr key={doc.id} className="border-b">
                  <td className="p-3">{doc.user_email}</td>
                  <td className="p-3">{doc.file_name}</td>
                  <td className="p-3">
                    <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm">
                      {doc.status}
                    </span>
                  </td>
                  <td className="p-3">
                    {doc.created_at
                      ? new Date(doc.created_at).toLocaleDateString()
                      : "No date"}
                  </td>

                 <td className="p-3">
  <button
    onClick={() => downloadFile(doc.file_path)}
    className="bg-[#c8912b] text-white px-4 py-2 rounded-lg font-semibold"
  >
    Download
  </button>
</td>

<td className="p-3">
  <select
    value={doc.status}
    onChange={(e) => updateStatus(doc.id, e.target.value)}
    className="border rounded-lg p-2"
  >
    <option value="Pending">Pending</option>
    <option value="Approved">Approved</option>
    <option value="Rejected">Rejected</option>
  </select>
</td>
                </tr>
              ))}

              {documents.length === 0 && (
                <tr>
                  <td className="p-4 text-gray-500" colSpan="6">
                    No documents uploaded yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}