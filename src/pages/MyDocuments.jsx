import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function MyDocuments() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    loadDocuments();
  }, []);

  async function loadDocuments() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data, error } = await supabase
      .from("documents")
      .select("*")
      .eq("user_email", user.email)
      .order("created_at", { ascending: false });

    if (!error) {
      setDocuments(data);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow p-6">
        <h1 className="text-3xl font-bold text-[#c8912b] mb-4">
          My Documents
        </h1>

        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Document</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id} className="border-b">
                <td className="p-3">{doc.file_name}</td>

                <td className="p-3">
                  {new Date(doc.created_at).toLocaleDateString()}
                </td>

                <td className="p-3">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                    {doc.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}