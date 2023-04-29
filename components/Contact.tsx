import React, { useState } from "react";
import Image from "next/image";
import { sendContactForm } from "../lib/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject:'',
    message: "",
  });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      await sendContactForm(formData);
      setFormData({ fullName: "", email: "",subject:'', message: "" }); 
      toast.success("Message sent!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="contact">
      <div className="flex flex-col items-center justify-center min-h-screen w-full ">
        <h1 className="text-4xl text-center mb-6">Contact me</h1>
        <div className="container mx-auto my-8 md:flex">
          <div className="hidden md:block md:w-1/2 mb-4 md:mb-0">
            <Image
              src="https://www.sendnotice.in/assets/images/contactus.svg"
              alt="Image"
              width={500}
              height={500}
            />
          </div>
          <div className="md:w-1/2 px-4">
            <h1 className="text-2xl font-base mb-4">Get in touch</h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vestibulum sapien vel massa laoreet congue.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  className="w-full px-3 py-2 rounded border"
                  placeholder="Full name"
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full px-3 py-2 rounded border"
                  placeholder="Email"
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full px-3 py-2 rounded border"
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="w-full px-3 py-2 rounded border h-32"
                  placeholder="Message"
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className="flex justify-end w-full">
                <button
                  className="px-6 py-2 bg-violet-500 hover:bg-violet-800 text-white rounded-md"
                  type="submit"
                >
                  Say Hello
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
