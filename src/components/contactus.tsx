"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const tileVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function Page() {
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !userMessage) {
      setMessage("All fields are required.");
      setIsError(true);
      return;
    }

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("Message Sent");
            setMessage(
              "Your message has been sent successfully! Thahawuru will contact you soon."
            );
            setIsError(false);
            form.current?.reset();
            setName("");
            setEmail("");
            setUserMessage("");
          },
          (error) => {
            console.log(error.text);
            setMessage("Failed to send your message. Please try again later.");
            setIsError(true);
          }
        );
    }
  };

  return (
    <>
      <div className="w-full h-auto md:h-auto flex flex-col items-center py-4">
        <motion.div
          variants={tileVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col justify-center items-center"
        >
          <div className="w-3/4 flex flex-col justify-center items-center mt-4">
            <form ref={form} onSubmit={sendEmail} className="w-full mt-10">
              <div className="w-full flex flex-col items-center justify-center">
                <label className="text-white text-1xl w-full text-left">
                  Your Name{" "}
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="w-full h-[50px] p-2 rounded-lg mt-2 text-black"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-full flex flex-col items-center justify-center mt-4">
                <label className="text-white text-1xl w-full text-left">
                  Your Email{" "}
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="w-full h-[50px] p-2 rounded-lg mt-2 text-black"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-full flex flex-col items-center justify-center mt-4">
                <label className="text-white text-1xl w-full text-left">
                  Your Message{" "}
                </label>
                <textarea
                  className="w-full h-[200px] p-2 rounded-lg mt-2 text-black"
                  name="user_message"
                  onChange={(e) => setUserMessage(e.target.value)}
                />
              </div>
              <div className="w-1/2 md:w-1/6 flex flex-col items-center justify-center mt-4 mb-4">
                <button
                  type="submit"
                  value="Send"
                  className="bg-gray text-secondary mt-10 p-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <b>Send Message</b>
                </button>
              </div>
            </form>
            {message && (
              <p
                className={`mt-4 text-sm ${
                  isError ? "text-red-500" : "text-green-500"
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}
