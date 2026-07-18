"use client";

import { useEffect, useState } from "react";

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/contact")
      .then((res) => res.json())
      .then((data) => setContacts(data.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you shure you want to delete this contact",
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:5000/api/contact/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Fail to delete contact");
      }

      // Remove the deleted contact from the table
      setContacts((prev) => prev.filter((contact) => contact._id !== id));

      alert("Contact delete successfully");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Contact Messages</h1>

      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-3">Name</th>
            <th className="border p-3">Email</th>
            <th className="border p-3">Phone</th>
            <th className="border p-3">Message</th>
            <th className="border p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td className="border p-3">{contact.name}</td>
              <td className="border p-3">{contact.email}</td>
              <td className="border p-3">{contact.phone}</td>
              <td className="border p-3">{contact.message}</td>

              <td className="border p-3">
                <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(contact._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
