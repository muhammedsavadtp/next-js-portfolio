import { useEffect, useState } from "react";
import Image from "next/image";
import { sendContactForm } from "../lib/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await sendContactForm(formData);
      setIsLoading(false);
      setFormData({ fullName: "", email: "", subject: "", message: "" });
          toast.success("Your message has been sent successfully!", {
            position: toast.POSITION.TOP_CENTER,
          });

    } catch (error) {
      setIsLoading(false);
      toast.error("There was an error sending your message. Please try again.");
      console.log(error);
    }
  };
  
  return (
    <section id="contact">
      <div className="flex flex-col items-center justify-center min-h-screen w-full ">
        <h1 className="text-4xl text-center mb-6">Contact me</h1>
        <ToastContainer position="top-center" />

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
              My inbox is always open. Whether you have a question or just want
              to say hello, I will try my best to get back to you!
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
                  className="px-4 w-28 py-2 bg-violet-500 hover:bg-violet-800 text-white rounded-md"
                  type="submit"
                >
                  {isLoading ? (
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    "Say Hello"
                  )}
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
