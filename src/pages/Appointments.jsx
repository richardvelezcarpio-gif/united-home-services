export default function Appointments() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <div className="bg-white rounded-xl border shadow-sm p-8">
        <h1 className="text-4xl font-serif mb-2">Schedule Appointment</h1>

        <p className="text-gray-600 mb-8">
          Book your consultation with United Home Services.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <input className="border rounded-lg p-3" placeholder="Full Name" />
          <input className="border rounded-lg p-3" placeholder="Email" />
          <input className="border rounded-lg p-3" type="date" />
          <input className="border rounded-lg p-3" type="time" />

          <select className="border rounded-lg p-3 md:col-span-2">
            <option>Real Estate Consultation</option>
            <option>Mortgage & Financing</option>
            <option>Credit Improvement</option>
            <option>Legal Services</option>
            <option>Foreclosure Assistance</option>
          </select>

          <textarea
            className="border rounded-lg p-3 md:col-span-2"
            rows="5"
            placeholder="Tell us how we can help you..."
          />
        </div>

        <button className="mt-8 bg-gradient-to-r from-[#b87813] to-[#e4b84f] text-white px-8 py-3 rounded-lg font-semibold">
          Confirm Appointment
        </button>
      </div>
    </div>
  );
}