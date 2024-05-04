import React, { useState } from "react";
import Sidebar from "../shared/Sidebar.tsx";
import Navbar from "../shared/Navbar.tsx";
import ContactForm from "./ContactForm.tsx";
import ContactList from "./ContactList.tsx";
import { useSelector } from "react-redux";

const Contact: React.FC = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const contacts = useSelector((state: any) =>
    state.contact.contacts.length === 0
      ? JSON.parse(localStorage.getItem("contacts") || "[]")
      : state.contact.contacts
  );

  return (
    <>
      <Navbar />
      <div className="flex h-screen bg-gray-200">
        <Sidebar />
        <div className="flex-1 p-10">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          >
            Create Contact
          </button>
          {showForm && <ContactForm />}
          <ContactList contacts={contacts} />
        </div>
      </div>
    </>
  );
};

export default Contact;
