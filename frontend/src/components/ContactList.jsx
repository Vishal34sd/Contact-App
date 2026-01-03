import axios from "axios";

export default function ContactList({ contacts, onDelete }) {
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8080/api/contacts/delete/${id}`
      );
      onDelete(id);
    } catch {
      alert("Delete failed ❌");
    }
  };

  return (
    <div className="mt-8 bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">
        Submitted Contacts
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c._id} className="hover:bg-gray-50">
                <td className="p-2 border">{c.name}</td>
                <td className="p-2 border">{c.email}</td>
                <td className="p-2 border">{c.phone}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => handleDelete(c._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
