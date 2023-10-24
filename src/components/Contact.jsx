import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = { name, email, message };

      const response = await fetch(`http://localhost:3200/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Form submitted successfully", {
          position: "top-right",
          autoClose: "1000",
        });
        
      } else {
        toast.error("An Error Occured");
      }
    } catch (error) {
      toast.error("Error:");
    }
  };

  return (
    <div className="p-4 md:p-20 bg-[#063446] rounded-lg">
      <h2 className="text-3xl text-center text-[#01d293]">Connect with me</h2>
      <div className="h-full p-4 md:p-16 flex flex-col md:flex-row gap-4 justify-center items-center">
        <form
          onSubmit={handleSubmit}
          method="POST"
          className="flex flex-col w-full md:w-[40vw] text-white self-center"
        >
          <label htmlFor="name">Name</label>
          <br />
          <input
            className="p-2 h-12 bg-[#94A3B8] text-[#242159] text-md font-bold rounded-md"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="name">Email address</label>
          <br />
          <input
            className="text-[#242159] text-md font-bold p-4 h-12 bg-[#94A3B8] rounded-md"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="name">Message</label>
          <br />
          <textarea
            className="text-[#242159] text-md font-bold p-2 h-12 bg-[#94A3B8] rounded-md"
            name=""
            id=""
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <br />
          <button
            type="submit"
            className="bg-blue-900 w-24 py-2 rounded-lg hover:bg-[#42E2B8] hover:text-[#06231B] duration-200 self-center"
          >
            Submit
          </button>
        </form>
        <div className="w-full md:w-96 h-96 flex self-center justify-self-center md:justify-self-end">
          <img
            src="/map.png"
            alt="mapImage"
            className="self-center rounded-md border-2 border-[#0f0e25]"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
