import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import TopBar from "./components/TopBar";
import Header from "./components/Header";


import Home from "./pages/Home";
import Services from "./pages/Services";
import ClientPortal from "./pages/ClientPortal";
import UploadDocuments from "./pages/UploadDocuments";
import Appointments from "./pages/Appointments";
import Messages from "./pages/Messages";
import Payments from "./pages/Payments";
import MyProfile from "./pages/MyProfile";
import MyCase from "./pages/MyCase";
import Agreements from "./pages/Agreements";
import Forms from "./pages/Forms";
import Resources from "./pages/Resources";
import Footer from "./components/Footer";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <>
      <TopBar
        language={language}
        setLanguage={setLanguage}
      />

      <Header language={language} />

      <Routes>
        <Route
          path="/"
          element={<Home language={language} />}
        />

        <Route
          path="/services"
          element={<Services language={language} />}
        />

        <Route
          path="/client-portal"
          element={<ClientPortal language={language} />}
        />

        <Route
  path="/client-portal/my-case"
  element={<MyCase language={language} />}
/>
        <Route path="/appointments" element={<Appointments />} />

        <Route
  path="/messages"
  element={<Messages />}
/>

<Route
  path="/payments"
  element={<Payments />}
/>

<Route path="/profile" element={<MyProfile />} />

<Route
  path="/client-portal/agreements"
  element={<Agreements language={language} />}
/>

<Route path="/forms" element={<Forms language={language} />} />

<Route path="/resources" element={<Resources language={language} />} />

      

        <Route
          path="/upload-documents"
          element={<UploadDocuments />}
        />
      </Routes>
      <Footer language={language} />
        </>
  );
}

export default App;