import React from "react";

interface Contact {
  id: number;
  name: string;
  email: string;
}

interface Props {
  contacts?: Contact[];
}

const ContactList: React.FC<Props> = ({ contacts = [] }) => {
  return (
    <div className="mt-10 border overflow-hidden">
      {/* If contacts is empty them print a div with no contacts found  */}
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
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id} className="bg-white">
                  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                    {contact.name}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                    {contact.email}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ContactList;
