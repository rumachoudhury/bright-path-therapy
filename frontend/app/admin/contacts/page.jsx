"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Pagination from "../Pagination/page";
import Loading from "@/components/Loading";
import Loading from "../components/Loading";

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
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // Filter contacts
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.email.toLowerCase().includes(search.toLowerCase()) ||
      contact.message.toLowerCase().includes(search.toLowerCase()),
  );

  // Pagination (PUT HERE)
  const contactsPerPage = 2;

  const indexOfLast = currentPage * contactsPerPage;
  const indexOfFirst = indexOfLast - contactsPerPage;

  const currentContacts = filteredContacts.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredContacts.length / contactsPerPage);

  useEffect(() => {
    fetch("http://localhost:5000/api/contact")
      .then((res) => res.json())
      .then((data) => {
        setContacts(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
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
      //   setContacts((prev) => prev.filter((contact) => contact._id !== id));

      //   alert("Contact deleted successfully!");
      //   toast.success("Contact deleted!");
      setContacts((prev) => prev.filter((contact) => contact._id !== id));

      toast.success("Contact deleted!");
    } catch (error) {
      //   alert(error.message);
      toast.error(error.message);
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

      //   alert("Contact updated!");
      toast.success("Contact updated!");
    } catch (error) {
      //   alert(err.message);
      toast.error(err.message);
    }
  };

  // Create filtered contacts
  //   const filteredContacts = contacts.filter(
  //     (contact) =>
  //       contact.name.toLowerCase().includes(search.toLowerCase()) ||
  //       contact.email.toLowerCase().includes(search.toLowerCase()) ||
  //       contact.message.toLowerCase().includes(search.toLowerCase()),
  //   );
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Contact Messages</h1>

      <input
        type="text"
        placeholder="Search contacts..."
        value={search}
        // onChange={(e) => setSearch(e.target.value)}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
        className="w-full md:w-80 border rounded-lg px-4 py-2 mb-6"
      />

      {/* Add loading UI */}
      {loading ? (
        <Loading />
      ) : contacts.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-xl font-semibold text-gray-700">
            No contacts found
          </h2>

          <p className="text-gray-500 mt-2">
            New contact messages will appear here.
          </p>
        </div>
      ) : (
        <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-3">Name</th>
              <th className="border p-3">Email</th>
              <th className="border p-3">Phone</th>
              <th className="border p-3">Message</th>
              <th className="border p-3">Submitted</th>
              <th className="border p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {currentContacts.map((contact) => (
              <tr key={contact._id} className="hover:bg-gray-50 transition">
                <td className="border p-3">{contact.name}</td>

                <td className="border p-3">{contact.email}</td>

                <td className="border p-3">{contact.phone || "-"}</td>

                <td className="border p-3">{contact.message}</td>

                <td className="border p-3">
                  {new Date(contact.createdAt).toLocaleString()}
                </td>

                <td className="border p-3">
                  <button
                    onClick={() => handleEdit(contact)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded mr-2"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(contact._id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-3">Name</th>
            <th className="border p-3">Email</th>
            <th className="border p-3">Phone</th>
            <th className="border p-3">Message</th>
            <th className="border p-3">Submitted</th>
            <th className="border p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {currentContacts.map((contact) => (
            <tr key={contact._id} className="hover:bg-gray-50 transition">
              <td className="border p-3">{contact.name}</td>

              <td className="border p-3">{contact.email}</td>

              <td className="border p-3">{contact.phone || "-"}</td>

              <td className="border p-3">{contact.message}</td>

              <td className="border p-3">
                {new Date(contact.createdAt).toLocaleString()}
              </td>

              <td className="border p-3">
                <button
                  onClick={() => handleEdit(contact)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded mr-2"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(contact._id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />

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
