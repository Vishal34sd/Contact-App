import { useState } from "react";
import axios from "axios";

export default function ContactForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const isValid =
    form.name &&
    form.phone &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/contacts/create",
        form
      );
      onAdd(res.data);
      setForm({ name: "", email: "", phone: "", message: "" });
      alert("Contact submitted ");
    } catch {
      alert("Submission failed ");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 space-y-4"
    >
      <h3 className="text-xl font-semibold text-gray-700">
        Contact Form
      </h3>

      <input
        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Name"
        value={form.name}
        required
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Email"
        value={form.email}
        required
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Phone"
        value={form.phone}
        required
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <textarea
        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Message (optional)"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      <button
        disabled={!isValid}
        className={`w-full py-2 rounded text-white font-medium ${
          isValid
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Submit
      </button>
    </form>
  );
}
