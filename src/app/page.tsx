import Image from "next/image";
import logo from "../../public/grayLogo.png";
import testQR from "../../public/testQR.png";

export default function Home() {
  return (
    <>
      <div className="flex flex-row justify-between items-center w-full h-screen border">
        <div className="flex flex-col w-[70%] bg-gradient-to-br from-white to-primary h-full text-black justify-center items-center p-20">
          <div className="w-[70%]">
            <h1 className="text-6xl text-secondary">
              <b>තහවුරු</b>
            </h1>
            <h2 className="text-1xl mt-4 text-secondary">
              <b>Sri Lanka`s Integrated Digital Identity Verification System</b>
            </h2>
            <p className="text-lg mt-4 text-secondary text-sm">
              Thahawuru is a digital identity verification system that allows
              you to verify your identity with a single QR scan. It is a secure
              and reliable digital wallet which keep your licenses , identities
              , passports and other verification documents in one place. This
              will allow ease of access for your verification identities.
            </p>
            <p className="text-lg mt-4 text-black text-sm">
              <b>
                This will bring a new era of digital verification system to Sri
                Lanka.
              </b>
            </p>
            <button className="bg-secondary hover:bg-secondaryTwo text-white mt-4 p-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex flex-col w-[30%] bg-primary h-full justify-center items-left">
          <div className="w-[70%] h-3/4 border bg-gradient-to-br from-secondary to-secondaryTwo rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex flex-col justify-center items-center">
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
          </div>
        </div>
      </div>
    </>
  );
}
