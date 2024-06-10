"use client";
import Image from "next/image";
import logo from "../../public//grayLogo.png";
import testQR from "../../public/testQR.png";
import NewsLetter from "@/components/newsletter";
import { motion } from "framer-motion";
import FAQ from "@/components/faq";
import ContactUs from "@/components/contactus";
import APIHome from "@/components/apiHome";

const zoomInVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  exit: { scale: 0.5, opacity: 0, transition: { duration: 0.5 } },
};

const tiles = [
  {
    title: "Identity Verification",
    description:
      "Thahawuru is a digital identity verification system that allows you to verify your identity with a single QR scan. It is a secure and reliable digital wallet which keep your licenses , identities , passports and other verification documents in one place. This will allow ease of access for your verification identities.",
  },
  {
    title: "Digital Wallet",
    description:
      "Thahawuru is a digital identity verification system that allows you to verify your identity with a single QR scan. It is a secure and reliable digital wallet which keep your licenses , identities , passports and other verification documents in one place. This will allow ease of access for your verification identities.",
  },
  {
    title: "Secure and Reliable",
    description:
      "Thahawuru is a digital identity verification system that allows you to verify your identity with a single QR scan. It is a secure and reliable digital wallet which keep your licenses , identities , passports and other verification documents in one place. This will allow ease of access for your verification identities.",
  },
  {
    title: "Ease of Access",
    description:
      "Thahawuru is a digital identity verification system that allows you to verify your identity with a single QR scan. It is a secure and reliable digital wallet which keep your licenses , identities , passports and other verification documents in one place. This will allow ease of access for your verification identities.",
  },
  {
    title: "Our API and API access",
    description:
      "If you are a developers, you can access our API to integrate Thahawuru to your applications. You can use our Test API to test your applications and get the feel of Thahawuru API. Then you can apply for a production API access. For more information, please visit our API documentation.",
  },
  {
    title: "Our Partnerships",
    description:
      "If you are a company or an organization, you can partner with us to use Thahawuru for your identity verification process. We offer a range of partnership options for you. Please contact us for more information.",
  },
];

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-auto w-full justify-center items-center bg-gradient-to-br from-white to-primary">
        <div className="flex flex-col sm:flex-col md:flex-row justify-between items-center w-full h-auto md:h-screen bg-gradient-to-br from-secondary to-secondaryTwo pb-10">
          <div className="flex flex-col w-full md:w-[70%] h-full text-white justify-center items-center p-0 md:p-20 mt-40 md:mt-0">
            <div className="w-[90%] mt-0 md:mt-16">
              <motion.main
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full h-auto flex flex-col"
              >
                <h1 className="text-6xl text-white text-center md:text-left">
                  <b>තහවුරු</b>
                </h1>
              </motion.main>
              <motion.main
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full h-auto flex flex-col"
              >
                <h2 className="text-2xl mt-4 text-white text-center md:text-left">
                  <b>
                    Sri Lanka`s Integrated Digital Identity Verification System
                  </b>
                </h2>
              </motion.main>
              <motion.main
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full h-auto flex flex-col"
              >
                <p className="text-lg mt-4 text-gray text-sm text-center md:text-left">
                  Thahawuru is a digital identity verification system that
                  allows you to verify your identity with a single QR scan. It
                  is a secure and reliable digital wallet which keep your
                  licenses , identities , passports and other verification
                  documents in one place. This will allow ease of access for
                  your verification identities.
                </p>
              </motion.main>
              <motion.main
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full h-auto flex flex-col"
              >
                <p className="text-lg mt-4 text-white text-sm text-center md:text-left">
                  <b>
                    This will bring a new era of digital verification system to
                    Sri Lanka.
                  </b>
                </p>
              </motion.main>
              <motion.main
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-[150px] h-auto flex flex-col justify-center items-center"
              >
                <button className="bg-gray text-secondary mt-10 p-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 w-[150px]">
                  <b>Get Started</b>
                </button>
              </motion.main>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-[30%] h-full justify-center items-center md:items-left">
            <div className="transition duration-300 ease-in-out transform hover:scale-105 w-[70%] h-3/4 mt-16">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={zoomInVariants}
                className="h-full w-full rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex flex-col justify-center items-center cursor-pointer opacity-70 mb-4"
              >
                <div className="w-[80%]">
                  <Image src={logo} alt="Profile Picture"></Image>
                </div>
                <div className="w-[70%] flex flex-col justify-center items-center">
                  <h2 className="text-2xl text-white">
                    <b>Scan Me</b>
                  </h2>
                  <h1 className="text-1xl text-white text-center">
                    Download your Mobile App
                  </h1>
                </div>
                <div className="w-[50%] mt-10">
                  <Image src={testQR} alt="Test QR"></Image>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center w-4/5 h-auto md:h-screen mb-0 md:mb-60">
          <h1 className="text-4xl text-secondary text-center mt-20">
            <b>Features we offer</b>
          </h1>
          <h2 className="text-2xl text-secondary text-center mt-2">
            Simplify your Identitiy verification process with Digital Wallet{" "}
            <b>තහවුරු</b>
          </h2>
          <p className="text-lg text-secondary text-sm text-center w-full mt-4">
            Thahawuru is a digital identity verification system that allows you
            to verify your identity with a single QR scan. It is a secure and
            reliable digital wallet which keep your licenses , identities ,
            passports and other verification documents in one place. This will
            allow ease of access for your verification identities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-auto bg-gradient-to-br from-white to-primary p-4">
            {tiles.map((tile) => (
              <div
                key={tile.title}
                className="flex flex-col w-full justify-center items-center bg-white rounded-lg shadow-lg m-0 md:m-10 p-4 md:p-10 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
              >
                <div className="w-full flex flex-col justify-center items-center">
                  <h2 className="text-2xl text-secondary text-center">
                    <b>{tile.title}</b>
                  </h2>
                </div>
                <div className="w-full flex flex-col justify-center items-center mt-2">
                  <p className="text-lg text-secondary text-sm text-center">
                    {tile.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full h-auto pt-20 mt-10 pb-10 bg-gradient-to-br from-secondary to-secondaryTwo">
          <h1 className="text-4xl text-white text-center w-3/4 md:w-full">
            <b>Have a Question?</b>
          </h1>
          <h2 className="text-2xl text-white text-center mt-2 w-3/4 md:w-full">
            Find your questions and solve it from here
          </h2>
          <p className="text-lg text-gray text-sm text-center mt-4  w-3/4 md:w-full">
            If you have any questions, you can find the answers from the below
            FAQ section. If you can`t find the answer, please contact us. We are
            happy to help you.
          </p>
          <div className="w-3/4 h-auto">
            <FAQ />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full h-auto">
          <div className="w-full h-auto">
            <NewsLetter />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full h-auto pt-20 mt-10 pb-10 bg-gradient-to-br from-secondary to-secondaryTwo">
          <h1 className="text-4xl text-white text-center w-3/4">
            <b>Get in Touch With Us</b>
          </h1>
          <h2 className="text-2xl text-white text-center mt-2 w-3/4">
            Contact us if you have any questions, partnerships. We are happy to
            help and work with you.
          </h2>
          <p className="text-lg text-gray text-sm text-center w-3/4 md:w-full mt-4">
            Contact us if you have any questions, partnerships. We are happy to
            help and work with you. You can contact us via email, phone or
            contact form. We are happy to help you.
          </p>
          <div className="w-3/4 h-auto">
            <ContactUs />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full h-auto">
          <div className="w-3/4 h-auto">
            <APIHome />
          </div>
        </div>
      </div>
    </>
  );
}
