import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      window.location.href = "/client-portal";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f4ee] px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Client Login
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Access your United Home Services portal
        </p>

        <form onSubmit={handleLogin}>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            required
            className="w-full border rounded-lg px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-[#c8912b]"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            required
            className="w-full border rounded-lg px-4 py-3 mb-6 outline-none focus:ring-2 focus:ring-[#c8912b]"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-[#c8912b] hover:bg-[#a8741f] text-white font-bold py-3 rounded-lg transition">
            Login
          </button>
        </form>

        <div className="text-center mt-6 space-y-2">
          <a href="/forgot-password" className="block text-sm text-[#c8912b]">
            Forgot your password?
          </a>

          <a href="/register" className="block text-sm text-gray-600">
            Don’t have an account? Register
          </a>
        </div>
      </div>
    </div>
  );
}