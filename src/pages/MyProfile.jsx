export default function MyProfile() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <div className="bg-white rounded-xl border shadow-sm p-8">
        <h1 className="text-4xl font-serif mb-2">My Profile</h1>

        <p className="text-gray-600 mb-8">
          Manage your personal information and case details.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <input className="border rounded-lg p-3" placeholder="Full Name" />
          <input className="border rounded-lg p-3" placeholder="Email" />
          <input className="border rounded-lg p-3" placeholder="Phone Number" />
          <input className="border rounded-lg p-3" placeholder="Address" />

          <select className="border rounded-lg p-3 md:col-span-2">
            <option>Case Status: In Progress</option>
            <option>Documents Pending</option>
            <option>Under Review</option>
            <option>Approved</option>
          </select>
        </div>

        <button className="mt-8 bg-gradient-to-r from-[#b87813] to-[#e4b84f] text-white px-8 py-3 rounded-lg font-semibold">
          Save Profile
        </button>
      </div>
    </div>
  );
}