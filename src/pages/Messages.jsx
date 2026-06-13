export default function Messages() {
  const messages = [
    {
      sender: "Patricia Segarra",
      date: "June 10, 2026",
      message:
        "We received your documents and they are currently under review.",
    },
    {
      sender: "Client",
      date: "June 11, 2026",
      message:
        "Thank you. Please let me know if you need anything else.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <div className="bg-white rounded-xl border shadow-sm p-8">

        <h1 className="text-4xl font-serif mb-2">
          Messages
        </h1>

        <p className="text-gray-600 mb-8">
          Communicate directly with your case manager.
        </p>

        <div className="space-y-4 mb-8">
          {messages.map((msg, index) => (
            <div
              key={index}
              className="border rounded-lg p-4"
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold">
                  {msg.sender}
                </span>

                <span className="text-sm text-gray-500">
                  {msg.date}
                </span>
              </div>

              <p>{msg.message}</p>
            </div>
          ))}
        </div>

        <textarea
          rows="5"
          className="w-full border rounded-lg p-3"
          placeholder="Write your message..."
        />

        <button className="mt-4 bg-gradient-to-r from-[#b87813] to-[#e4b84f] text-white px-8 py-3 rounded-lg font-semibold">
          Send Message
        </button>

      </div>
    </div>
  );
}