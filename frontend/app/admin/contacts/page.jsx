"use client";

import { useEffect, useState } from "react";

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);

  //It will Open a form or modal
  const [editingContact, setEditingContact] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/contact")
      .then((res) => res.json())
      .then((data) => setContacts(data.data))
      .catch((err) => console.error(err));
  }, []);

  //    handleDelete
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?",
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

  const handleEdit = (contact) => {
    setEditingContact(contact);

    setEditForm({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      message: contact.message,
    });
  };

  //   Add a change handler
  const handleEditChange = (e) => {
    const { name, value } = e.target;

    setEditForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //   Add the Save function
  const handleUpdate = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/contact/${editingContact._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editForm),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      setContacts((prev) =>
        prev.map((contact) =>
          contact._id === editingContact._id ? data.data : contact,
        ),
      );

      setEditingContact(null);

      alert("Contact updated!");
    } catch (err) {
      alert(err.message);
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
                <button
                  onClick={() => handleEdit(contact)}
                  className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                >
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

      {/* Add the modal */}
      {editingContact && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-[500px]">
            <h2 className="text-2xl font-bold mb-4">Edit Contact</h2>

            <input
              className="border p-2 w-full mb-3"
              name="name"
              value={editForm.name}
              onChange={handleEditChange}
            />

            <input
              className="border p-2 w-full mb-3"
              name="email"
              value={editForm.email}
              onChange={handleEditChange}
            />

            <input
              className="border p-2 w-full mb-3"
              name="phone"
              value={editForm.phone}
              onChange={handleEditChange}
            />

            <textarea
              className="border p-2 w-full mb-4"
              rows="4"
              name="message"
              value={editForm.message}
              onChange={handleEditChange}
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEditingContact(null)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleUpdate}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
