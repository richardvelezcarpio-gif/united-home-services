import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  PenLine,
  ClipboardList,
  CalendarDays,
  MessageSquare,
  CreditCard,
  BookOpen,
  User,
  LogOut,
  UploadCloud,
  Check,
  Clock,
  Mail,
  Phone,
} from "lucide-react";

export default function ClientPortal({ language }) {

    const [userEmail, setUserEmail] = useState("");

useEffect(() => {
  const getUser = async () => {
    const { data } = await supabase.auth.getUser();
    setUserEmail(data?.user?.email || "");
  };

  getUser();
}, []);

    const handleLogout = async () => {
  await supabase.auth.signOut();
  window.location.href = "/login";
};
    console.log("LANGUAGE:", language);
    const t = {
  title:
    language === "en"
      ? "CLIENT PORTAL"
      : "PORTAL DEL CLIENTE",

  welcome:
    language === "en"
      ? "Welcome back,"
      : "Bienvenido de nuevo,",

  overview:
    language === "en"
      ? "OVERVIEW"
      : "RESUMEN",

  process:
    language === "en"
      ? "MY PROCESS CHECKLIST"
      : "MI PROCESO",

  documents:
    language === "en"
      ? "DOCUMENTS CHECKLIST"
      : "LISTA DE DOCUMENTOS",

  activity:
    language === "en"
      ? "RECENT ACTIVITY"
      : "ACTIVIDAD RECIENTE",

  quick:
    language === "en"
      ? "QUICK ACTIONS"
      : "ACCIONES RÁPIDAS",

  help:
    language === "en"
      ? "NEED HELP?"
      : "¿NECESITA AYUDA?",

  upload:
    language === "en"
      ? "UPLOAD DOCUMENTS"
      : "SUBIR DOCUMENTOS",

  contact:
    language === "en"
      ? "CONTACT US"
      : "CONTÁCTENOS",
};
  const menu = [
  ["Dashboard", LayoutDashboard, "/client-portal"],
  ["My Case", Briefcase, "/client-portal/my-case"],
  ["Documents", FileText, "/upload-documents"],
  ["Agreements", PenLine, "/client-portal/agreements"],
 ["Forms", ClipboardList, "/client-portal/forms"],
  ["Appointments", CalendarDays, "/appointments"],
  ["Messages", MessageSquare, "/messages"],
  ["Payments", CreditCard, "/payments"],
  ["Resources", BookOpen, "/client-portal/resources"],
 ["My Profile", User, "/client-portal/profile"],
  ["Log Out", LogOut, "/"],
];

  const cards = [
    ["My Case Status", Briefcase, "In Progress", "We are reviewing your information."],
    ["Documents", FileText, "3 / 8", "Documents Uploaded"],
    ["Agreements", PenLine, "1 / 5", "Agreements Signed"],
    ["Appointments", CalendarDays, "1 Upcoming", "Next: May 25, 2025"],
  ];

  const docs = [
    ["Photo ID", "Uploaded"],
    ["Proof of Income", "Uploaded"],
    ["Bank Statements", "Uploaded"],
    ["Tax Returns", "Pending"],
    ["W2 / 1099", "Pending"],
    ["Employment Verification", "Pending"],
    ["Mortgage Statement", "Pending"],
    ["Additional Documents", "Pending"],
  ];

  const actions = [
    ["Upload Documents", UploadCloud],
    ["Sign Agreements", PenLine],
    ["Fill Out Forms", FileText],
    ["Schedule Appointment", CalendarDays],
    ["Send Message", Mail],
    ["Make a Payment", CreditCard],
  ];

  return (
    <div className="bg-white text-black">
      {/* HERO */}
      <section className="relative min-h-[360px] overflow-hidden bg-white">
       <div
  className="absolute inset-y-0 right-0 w-[58%] bg-cover bg-center"
  style={{
    backgroundImage: "url('/houseportal.png')",
  }}
/>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-14">
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-wide">
  {t.title}
</h1>

          <div className="my-5 flex items-center gap-3">
            <span className="h-px w-44 bg-[#c8912b]" />
            <span className="text-[#c8912b] text-xl">◆</span>
            <span className="h-px w-44 bg-[#c8912b]" />
          </div>

          <p className="text-xl">{t.welcome}</p>
          <h2 className="font-serif text-4xl text-[#b57a18] mt-1">
            {userEmail || "Client"}
          </h2>

          <p className="mt-4 max-w-md text-gray-700 leading-relaxed">
            Manage your real estate process, upload documents, sign agreements,
            track your case and more — all in one place.
          </p>     

  
</div>
            
            
      </section>

      {/* PORTAL */}
      <section className="max-w-7xl mx-auto px-6 pb-16 -mt-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6">
          {/* SIDEBAR */}
          <aside className="bg-black text-white rounded-lg overflow-hidden shadow-xl">
           {menu.map(([name, Icon, path], i) =>
  name === "Log Out" ? (
    <button
      key={name}
      onClick={handleLogout}
      className="w-full flex items-center gap-4 px-6 py-4 text-sm cursor-pointer hover:bg-[#111] text-left"
    >
      <Icon className="w-5 h-5 text-[#d6a537]" />
      {name}
    </button>
  ) : (
    <Link
      key={name}
      to={path}
      className={`flex items-center gap-4 px-6 py-4 text-sm cursor-pointer ${
        i === 0
          ? "bg-gradient-to-r from-[#c8912b] to-[#e2b958] text-white"
          : "hover:bg-[#111]"
      }`}
    >
      <Icon className="w-5 h-5 text-[#d6a537]" />
      {name}
    </Link>
  )
)}
          </aside>

          <main className="space-y-6">

            {/* Premium Dashboard Cards */}

<div className="grid md:grid-cols-4 gap-6 mb-8">
  <div className="bg-white rounded-2xl shadow-lg border-t-4 border-[#c8912b] p-6">
    <h3 className="text-gray-500 text-sm">
      {language === "en" ? "My Case" : "Mi Caso"}
    </h3>
    <p className="text-2xl font-bold mt-2">
      {language === "en" ? "In Review" : "En Revisión"}
    </p>

    <div className="mt-4">
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-[#c8912b] h-3 rounded-full"
          style={{ width: "60%" }}
        ></div>
      </div>

      <p className="text-sm text-gray-500 mt-2">
        {language === "en" ? "60% Complete" : "60% Completado"}
      </p>
    </div>
  </div>

  <div className="bg-white rounded-2xl shadow-lg border-t-4 border-[#c8912b] p-6">
    <h3 className="text-gray-500 text-sm">
      {language === "en" ? "Documents" : "Documentos"}
    </h3>
    <p className="text-2xl font-bold mt-2">3</p>
    <span className="text-sm text-gray-500">
      {language === "en" ? "Uploaded" : "Subidos"}
    </span>
  </div>

  <div className="bg-white rounded-2xl shadow-lg border-t-4 border-[#c8912b] p-6">
    <h3 className="text-gray-500 text-sm">
      {language === "en" ? "Appointments" : "Citas"}
    </h3>
    <p className="text-2xl font-bold mt-2">Jun 18</p>
    <span className="text-sm text-gray-500">
      {language === "en" ? "Next Meeting" : "Próxima Cita"}
    </span>
  </div>

  <div className="bg-white rounded-2xl shadow-lg border-t-4 border-[#c8912b] p-6">
    <h3 className="text-gray-500 text-sm">
      {language === "en" ? "Messages" : "Mensajes"}
    </h3>
    <p className="text-2xl font-bold mt-2">2</p>
    <span className="text-sm text-gray-500">
      {language === "en" ? "Unread" : "Sin Leer"}
    </span>
  </div>
</div>
            {/* OVERVIEW */}
            <div className="bg-white rounded-lg border shadow-md p-6">
             <h3 className="font-serif text-xl border-l-4 border-[#c8912b] pl-3 mb-5">
  {t.overview}
</h3>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {cards.map(([title, Icon, number, desc]) => (
                  <div
                    key={title}
                    className="border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition"
                  >
                    <p className="font-serif text-sm uppercase">{title}</p>
                    <div className="mx-auto my-5 w-16 h-16 rounded-full bg-gradient-to-br from-[#b87813] to-[#e4b84f] flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-semibold text-[#b57a18]">
                      {number}
                    </h4>
                    <p className="mt-2 text-sm text-gray-600">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* PROCESS */}
            <div className="bg-white rounded-lg border shadow-md p-6">
              {t.process}

              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
                {[1, 2, 3, 4, 5, 6].map((step) => (
                  <div key={step}>
                    <div
                      className={`mx-auto w-11 h-11 rounded-full flex items-center justify-center border ${
                        step <= 3
                          ? "bg-[#b57a18] text-white border-[#b57a18]"
                          : step === 4
                          ? "text-[#b57a18] border-[#b57a18]"
                          : "text-gray-400 border-gray-300"
                      }`}
                    >
                      {step <= 3 ? <Check /> : step}
                    </div>
                    <p className="mt-3 text-sm font-medium">
                      {["Intake Form", "Documents", "Initial Review", "Consultation", "Processing", "Closing"][step - 1]}
                    </p>
                    <p className="text-xs text-gray-500">
                      {step <= 3 ? "Completed" : step === 4 ? "Scheduled" : "Pending"}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* DOCUMENTS */}
              <div className="bg-white rounded-lg border shadow-md p-6">
                <h3 className="font-serif text-xl mb-4">{t.documents}</h3>

                <div className="space-y-3">
                  {docs.map(([name, status]) => (
                    <div key={name} className="flex items-center justify-between text-sm border-b pb-2">
                      <div className="flex items-center gap-3">
                        <FileText className="w-4 h-4 text-gray-500" />
                        <span className="font-medium">{name}</span>
                      </div>

                      <span
                        className={`flex items-center gap-2 ${
                          status === "Uploaded" ? "text-green-600" : "text-[#c8912b]"
                        }`}
                      >
                        {status}
                        {status === "Uploaded" ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Clock className="w-4 h-4" />
                        )}
                      </span>
                    </div>
                  ))}
                </div>

               <Link
  to="/upload-documents"
  className="mt-6 bg-gradient-to-r from-[#b87813] to-[#e4b84f] text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 mx-auto w-fit"
>
  UPLOAD DOCUMENTS
  <UploadCloud className="w-5 h-5" />
</Link>
              </div>

              {/* ACTIVITY */}
              <div className="bg-white rounded-lg border shadow-md p-6">
                <h3 className="font-serif text-xl mb-4">{t.activity}</h3>

                {[
                  "You uploaded Proof of Income",
                  "We reviewed your documents",
                  "Consultation appointment scheduled",
                  "You signed Privacy Policy Agreement",
                  "Welcome! Your portal account was created",
                ].map((item) => (
                  <div key={item} className="flex gap-3 mb-4 text-sm">
                    <Clock className="w-4 h-4 text-gray-500 mt-1" />
                    <div>
                      <p>{item}</p>
                      <p className="text-xs text-gray-500">May 18, 2025 at 2:30 PM</p>
                    </div>
                  </div>
                ))}

                <button className="mt-3 text-[#b57a18] font-semibold">
                  VIEW ALL ACTIVITY →
                </button>
              </div>
            </div>

            {/* QUICK ACTIONS + HELP */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
              <div className="bg-white rounded-lg border shadow-md p-6">
                <h3 className="font-serif text-xl mb-5">{t.quick}</h3>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  {actions.map(([name, Icon]) => (
                    <button key={name} className="border rounded-lg p-4 text-sm hover:shadow-md">
                      <Icon className="w-8 h-8 mx-auto mb-3 text-[#b57a18]" />
                      {name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-black text-white rounded-lg p-6 shadow-xl">
                <h3 className="font-serif text-xl text-[#d6a537] mb-3">
                  {t.help}?
                </h3>
                <p className="text-sm mb-5">
                  Our team is here to help you every step of the way.
                </p>

                <div className="flex items-center gap-3 text-[#d6a537] text-xl mb-5">
                  <Phone className="w-5 h-5" />
                  347-313-3248
                </div>

                <button className="w-full bg-gradient-to-r from-[#b87813] to-[#e4b84f] py-3 rounded-md font-semibold">
                  CONTACT US
                </button>
              </div>
            </div>
          </main>
        </div>
      </section>
      <footer className="bg-black text-white mt-16 border-t border-[#c8912b]">
  <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-5 gap-8">

    {/* Logo */}
    <div>
      <img
        src="/logo.png"
        alt="United Home Services"
        className="h-20 mb-4"
      />

      <p className="text-gray-400 text-sm leading-relaxed">
        Your complete real estate and financial solutions team.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-[#d6a537] font-bold mb-4">
        QUICK LINKS
      </h3>

      <ul className="space-y-2 text-sm text-gray-300">
        <li>Home</li>
        <li>Services</li>
        <li>Client Portal</li>
        <li>Resources</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h3 className="text-[#d6a537] font-bold mb-4">
        OUR SERVICES
      </h3>

      <ul className="space-y-2 text-sm text-gray-300">
        <li>Buy a Home</li>
        <li>Sell Your Property</li>
        <li>Mortgage & Financing</li>
        <li>Credit Improvement</li>
        <li>Legal Services</li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h3 className="text-[#d6a537] font-bold mb-4">
        CONTACT US
      </h3>

      <ul className="space-y-3 text-sm text-gray-300">
        <li>347-234-4706</li>
        <li>unitedhomeservicesny@gmail.com</li>
        <li>Brooklyn, NY 11237</li>
      </ul>
    </div>

    <Link
  to="/my-documents"
  className="bg-white rounded-lg border shadow-md p-6 hover:shadow-lg transition"
>
  <h3 className="text-lg font-bold text-[#c8912b] mb-2">
    My Documents
  </h3>

  <p className="text-gray-600 text-sm">
    View uploaded documents and track approval status.
  </p>
</Link>

    {/* Hours */}
    <div>
      <h3 className="text-[#d6a537] font-bold mb-4">
        HOURS
      </h3>

      <ul className="space-y-2 text-sm text-gray-300">
        <li>Monday - Friday</li>
        <li>9:00 AM - 6:00 PM</li>

        <li className="pt-2">Saturday</li>
        <li>10:00 AM - 3:00 PM</li>

        <li className="pt-2">Sunday</li>
        <li>By Appointment</li>
      </ul>
    </div>

  </div>

  <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-sm">
    © 2026 United Home Services. All Rights Reserved.
  </div>
</footer>
    </div>
  );
}