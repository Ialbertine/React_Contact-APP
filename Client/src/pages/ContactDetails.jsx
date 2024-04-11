import { useEffect, useState } from "react";
import { DeleteContact, FetchContactById } from "../apis/contacts";
import { useParams, useNavigate } from "react-router-dom";

const ContactDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [contact, setContact] = useState({});
  const [message, setMessage] = useState({
    type: "",
    content: "",
  });

  useEffect(() => {
    FetchContactById(params.contactId)
      .then((response) => {
        setContact(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteContact = (event) => {
    event.preventDefault();

    DeleteContact(params.contactId)
      .then((response) => {
        setMessage({
          type: "success",
          content: response,
        });

        setTimeout(() => {
          // Vanilla JavaScript, it reloads the website
          window.location.replace("/");
          // Using react-router-dom
          // navigate('/');
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdate = () => {
    // Navigate to the update contact page with the contact ID
    navigate(`/update/${params.contactId}`);
  };
   
  return (
    <div className="flex justify-center min-h-screen">
      <div className="flex flex-col items-center justify-between w-[26rem] h-[70%] bg-gray-200 rounded-lg p-6">
        <div className="text-2xl pb-5">
          <h1>Name: {contact.fullName}</h1>
          <p>Phone: {contact.phone}</p>
          <p>Email: {contact.email}</p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleUpdate}
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Update
          </button>
          <button
            onClick={deleteContact}
            type="button"
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Delete
          </button>
        </div>

        {message.type === "success" && (
          <p className="px-3 py-2 text-green-700 bg-green-200 rounded-sm">
            {message.content}
          </p>
        )}
        {message.type === "error" && (
          <p className="px-3 py-2 text-red-700 bg-red-200 rounded-sm">
            {message.content}
          </p>
        )}
      </div>
    </div>
  );
}

export default ContactDetails;
