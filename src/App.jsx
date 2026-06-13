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
import Login from "./pages/Login";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import AdminPanel from "./pages/AdminPanel";
import MyDocuments from "./pages/MyDocuments";
import UpdatePassword from "./pages/UpdatePassword";

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
  element={
    <ProtectedRoute>
      <ClientPortal language={language} />
    </ProtectedRoute>
  }
/>

   <Route
  path="/client-portal/my-case"
  element={
    <ProtectedRoute>
      <MyCase language={language} />
    </ProtectedRoute>
  }
/>
        <Route
  path="/appointments"
  element={
    <ProtectedRoute>
      <Appointments />
    </ProtectedRoute>
  }
/>

<Route
  path="/messages"
  element={
    <ProtectedRoute>
      <Messages />
    </ProtectedRoute>
  }
/>

<Route
  path="/payments"
  element={
    <ProtectedRoute>
      <Payments />
    </ProtectedRoute>
  }
/>

<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <MyProfile />
    </ProtectedRoute>
  }
/>

<Route
  path="/client-portal"
  element={
    <ProtectedRoute>
      <ClientPortal language={language} />
    </ProtectedRoute>
  }
/>

<Route
  path="/forms"
  element={
    <ProtectedRoute>
      <Forms language={language} />
    </ProtectedRoute>
  }
/>

<Route path="/resources" element={<Resources language={language} />} />

<Route
  path="/login"
  element={<Login />}
/>

<Route
  path="/register"
  element={<Register />}
/>

<Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>

<Route
  path="/update-password"
  element={<UpdatePassword />}
/>

        <Route
  path="/upload-documents"
  element={
    <ProtectedRoute>
      <UploadDocuments />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin-panel"
  element={
    <ProtectedRoute>
      <AdminPanel />
    </ProtectedRoute>
  }
/>

<Route
  path="/my-documents"
  element={
    <ProtectedRoute>
      <MyDocuments />
    </ProtectedRoute>
  }
/>

      </Routes>
      <Footer language={language} />
        </>
  );
}

export default App;