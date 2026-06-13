export default function Payments() {
  const payments = [
    ["Initial Consultation", "$150", "Paid"],
    ["Document Processing", "$250", "Paid"],
    ["Mortgage Application", "$500", "Pending"],
  ];

  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <div className="bg-white rounded-xl border shadow-sm p-8">

        <h1 className="text-4xl font-serif mb-2">
          Payments
        </h1>

        <p className="text-gray-600 mb-8">
          View your payment history and outstanding balances.
        </p>

        <div className="border rounded-xl overflow-hidden mb-8">
          {payments.map(([service, amount, status]) => (
            <div
              key={service}
              className="flex justify-between items-center p-4 border-b last:border-b-0"
            >
              <div>
                <div className="font-semibold">{service}</div>
                <div className="text-gray-500">{amount}</div>
              </div>

              <span
                className={`font-semibold ${
                  status === "Paid"
                    ? "text-green-600"
                    : "text-[#c8912b]"
                }`}
              >
                {status}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-[#fffaf0] border rounded-xl p-6">
          <h2 className="text-2xl font-serif mb-4">
            Outstanding Balance
          </h2>

          <div className="text-4xl font-bold text-[#c8912b] mb-4">
            $500
          </div>

          <button className="bg-gradient-to-r from-[#b87813] to-[#e4b84f] text-white px-8 py-3 rounded-lg font-semibold">
            Pay Now
          </button>
        </div>

      </div>
    </div>
  );
}