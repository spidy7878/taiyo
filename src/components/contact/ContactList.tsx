// src/components/contact/ContactList.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contactActions";

interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
}

interface Props {
  contacts?: Contact[];
}

const ContactList: React.FC<Props> = ({ contacts = [] }) => {
  const dispatch = useDispatch();
  const [editId, setEditId] = useState<number | null>(null);
  const [editFirstName, setEditFirstName] = useState<string>("");
  const [editLastName, setEditLastName] = useState<string>("");
  const [editStatus, setEditStatus] = useState<string>("");

  const handleEdit = (
    id: number,
    firstName: string,
    lastName: string,
    status: string
  ) => {
    setEditId(id);
    setEditFirstName(firstName);
    setEditLastName(lastName);
    setEditStatus(status);
  };

  const handleSave = () => {
    if (editId !== null) {
      const updatedContact = {
        id: editId,
        firstName: editFirstName,
        lastName: editLastName,
        status: editStatus,
      };
      dispatch(updateContact(updatedContact));
      setEditId(null);
    }
  };

  const handleDelete = (id: number) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="my-10">
      {/* If contacts is empty then print a div with no contacts found  */}
      {contacts.length === 0 && (
        <div className="text-gray-500 p-4 border border-gray-500 flex flex-col">
          <p>No contacts found</p>
          <p>Please add contact from</p>
          <p>Create Contact Button</p>
        </div>
      )}
      {/* If contacts is not empty then print the list of contacts */}
      {contacts.length > 0 && (
        <div className="overflow-x-auto rounded-lg">
          <div className="mt-10 border flex gap-6">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="bg-white p-4 border-b border-gray-200 flex flex-col justify-between gap-4 w-fit"
              >
                {editId === contact.id ? (
                  <>
                    <input
                      type="text"
                      className="border rounded-md px-2 py-1"
                      value={editFirstName}
                      onChange={(e) => setEditFirstName(e.target.value)}
                    />
                    <input
                      type="text"
                      className="border rounded-md px-2 py-1"
                      value={editLastName}
                      onChange={(e) => setEditLastName(e.target.value)}
                    />
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="active"
                        name="status"
                        value="active"
                        checked={editStatus === "active"}
                        onChange={(e) => setEditStatus(e.target.value)}
                      />
                      <label htmlFor="active" className="ml-2">
                        Active
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="inactive"
                        name="status"
                        value="inactive"
                        checked={editStatus === "inactive"}
                        onChange={(e) => setEditStatus(e.target.value)}
                      />
                      <label htmlFor="inactive" className="ml-2">
                        Inactive
                      </label>
                    </div>
                    <button
                      className="text-white bg-blue-500 hover:bg-blue-700 border border-blue-500 rounded-md py-1 px-3"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <div className="text-sm leading-5 font-medium text-gray-900">
                      {contact.firstName} {contact.lastName}
                    </div>
                    <div className="flex items-center">
                      <div
                        className={`w-4 h-4 rounded-full ${
                          contact.status === "active"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      ></div>
                      <span className="ml-2">
                        {contact.status === "active" ? "Active" : "Inactive"}
                      </span>
                    </div>
                    <div>
                      <button
                        className="text-white bg-blue-500 hover:bg-blue-700 border border-blue-500 rounded-md py-1 px-3 mr-2"
                        onClick={() =>
                          handleEdit(
                            contact.id,
                            contact.firstName,
                            contact.lastName,
                            contact.status
                          )
                        }
                      >
                        Edit
                      </button>
                      <button
                        className="text-white bg-red-500 hover:bg-red-700 border border-red-500 rounded-md py-1 px-3"
                        onClick={() => handleDelete(contact.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactList;
