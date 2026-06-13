import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

   if (error) {
  alert(error.message);
} else {
  alert("Account created successfully! Please check your email.");
  window.location.href = "/login";
}
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f4ee]">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-[#c8912b] text-white p-3 rounded">
          Register
        </button>
      </form>
    </div>
  );
}