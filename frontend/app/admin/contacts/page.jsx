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
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td className="border p-3">{contact.name}</td>
              <td className="border p-3">{contact.email}</td>
              <td className="border p-3">{contact.phone}</td>
              <td className="border p-3">{contact.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
