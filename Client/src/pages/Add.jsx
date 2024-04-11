import { useState } from "react";
import ResponseMessage from "../components/ResponseMessage";
import { AddContact } from "../apis/contacts";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [message, setMessage] = useState({
    type: "",
    content: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

  // const [fullName, setFullName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');

  const handleSubmitContact = (event) => {
    event.preventDefault();

    if (contact.fullName === "") {
      setMessage({
        type: "error",
        content: "Full Name is required",
      });
      return;
    } else if (contact.email === "") {
      setMessage({
        type: "error",
        content: "Email is required",
      });
      return;
    } else if (contact.phone === "") {
      setMessage({
        type: "error",
        content: "Phone is required",
      });
      return;
    } else {
      setLoading(true);

      AddContact(contact)
        .then((response) => {
          setLoading(false);
          setMessage({
            type: "success",
            content: response,
          });

          setContact({
            fullName: "",
            phone: "",
            email: "",
          });

          setTimeout(() => {
            // Using react-router-dom
            navigate("/");
          }, 2000);
        })
        .catch((error) => {
          setMessage({
            type: "error",
            content: error,
          });
        });
    }
  };

  // const handleFullName = (event) => {
  //   setFullName(event.target.value);
  // }
  // const handlePhone = (event) => {
  //   setPhone(event.target.value);
  // }
  // const handleEmail = (event) => {
  //   setEmail(event.target.value);
  // }

  const handleInput = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  return (
    <div className="flex justify-center items-center w-full">
      <section className=" text-black flex items-center justify-center w-full">
        <div className="max-w-screen-xl">
          <div className="grid grid-cols-1 gap-8">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">
                  Add new contact
                </h1>
                <p className="mt-4 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  libero nulla eaque error neque ipsa culpa autem, at itaque
                  nostrum!
                </p>
              </div>

              {/* Contact form ==========================================================================  */}
              <form
                onSubmit={handleSubmitContact}
                className="mx-auto mt-8 mb-8 max-w-md space-y-4"
              >
                <div>
                  <div className="relative">
                    <input
                      type="text"
                      name="fullName"
                      value={contact.fullName}
                      onChange={handleInput}
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter full name"
                    />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={contact.email}
                      onChange={handleInput}
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter email"
                    />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={contact.phone}
                      onChange={handleInput}
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                  >
                    {loading && "loading...🐥"}
                    {!loading && "Add contact"}
                  </button>
                </div>
              </form>

              <ResponseMessage type={message.type} content={message.content} />
              {/* ==========================================================================  */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Add;
