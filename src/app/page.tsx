"use client";
import Image from "next/image";
import logo from "../../public/grayLogo.png";
import testQR from "../../public/testQR.png";
import { motion } from "framer-motion";

const zoomInVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  exit: { scale: 0.5, opacity: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <>
      <div className="flex flex-row justify-between items-center w-full h-screen border">
        <div className="flex flex-col w-[70%] bg-gradient-to-br from-white to-primary h-full text-black justify-center items-center p-20">
          <div className="w-[70%]">
            <motion.main
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full h-auto flex flex-col"
            >
              <h1 className="text-6xl text-secondary">
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
              <h2 className="text-1xl mt-4 text-secondary">
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
              <p className="text-lg mt-4 text-secondary text-sm">
                Thahawuru is a digital identity verification system that allows
                you to verify your identity with a single QR scan. It is a
                secure and reliable digital wallet which keep your licenses ,
                identities , passports and other verification documents in one
                place. This will allow ease of access for your verification
                identities.
              </p>
            </motion.main>
            <motion.main
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full h-auto flex flex-col"
            >
              <p className="text-lg mt-4 text-black text-sm">
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
              className="w-[140px] h-auto flex flex-col"
            >
              <button className="bg-secondary hover:bg-secondaryTwo text-white mt-4 p-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                Get Started
              </button>
            </motion.main>
          </div>
        </div>
        <div className="flex flex-col w-[30%] bg-primary h-full justify-center items-left">
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={zoomInVariants}
            className="w-[70%] h-3/4 border bg-gradient-to-br from-secondary to-secondaryTwo rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex flex-col justify-center items-center cursor-pointer"
          >
            <div className="w-[80%]">
              <Image src={logo} alt="Profile Picture"></Image>
            </div>
            <div className="w-[70%] flex flex-col justify-center items-center">
              <h2 className="text-1xl text-white">
                <b>Scan Me</b>
              </h2>
            </div>
            <div className="w-[50%] mt-10">
              <Image src={testQR} alt="Test QR"></Image>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
