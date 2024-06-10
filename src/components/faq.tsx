import { useState } from "react";
import { motion } from "framer-motion";

export default function FAQ() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleQuestion = (index: any) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Thahawuru?",
      answer:
        "Thahawuru is a digital identity verification system that allows you to verify your identity with a single QR scan. It is a secure and reliable digital wallet which keeps your licenses, identities, passports, and other verification documents in one place.",
    },
    {
      question: "How does it work?",
      answer:
        "You simply scan a QR code to verify your identity. Thahawuru stores your information securely and allows you to share it when needed.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, Thahawuru uses advanced security measures to ensure your data is protected at all times.",
    },
    {
      question: "Can I use Thahawuru for all my documents?",
      answer:
        "No, Thahawuru is designed to store and keep your identity documents. It is not intended for other types of documents. That inserting part is done from government side.",
    },
  ];

  return (
    <div className="text-white py-16 sm:py-24 lg:py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mt-8 space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-lg p-4 rounded-lg border border-white border-opacity-50 hover:border-opacity-50 transition duration-300 ease-in-out cursor-pointer"
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                onClick={() => toggleQuestion(index)}
                className="cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-semibold text-white">
                    {item.question}
                  </h3>
                  <span className="text-2xl text-white">
                    {selectedQuestion === index ? "-" : "+"}
                  </span>
                </div>
                {selectedQuestion === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-white text-sm"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
