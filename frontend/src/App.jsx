import { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./App.css"

export default function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/contact/fetch`
        );
        setContacts(res.data);
      } catch {
        alert("Failed to load contacts ");
      }
    };
    fetchContacts();
  }, []);

  const addContact = (contact) => {
    setContacts([contact, ...contacts]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((c) => c._id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Contact Management App
        </h1>

        <ContactForm onAdd={addContact} />
        <ContactList contacts={contacts} onDelete={deleteContact} />
      </div>
    </div>
  );
}
