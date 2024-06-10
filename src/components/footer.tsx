import React from "react";
import logo from "../../public/Thahawuru.jpeg";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-secondary to-secondaryTwo p-4 sm:p-8 md:p-12 lg:p-16" style={{ zIndex: 1 }}>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between flex-wrap">
          <div className="mb-6 md:mb-0">
            <div className="flex justify-center md:justify-start items-center pl-10">
              <Link href="/">
                <Image src={logo} className="me-10" alt="NOI Logo" width={100} height={100} />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 w-full md:w-1/2">
            <div className="mb-6 md:mb-0">
              <h2 className="mb-6 bg-gradient-to-r from-white to-white bg-clip-text text-transparent font-semibold text-gray uppercase text-center md:text-left">
                <b>About</b>
              </h2>
              <ul className="text-gold-500 dark:text-gold-400 font-medium">
                <li className="mb-2 text-center md:text-left">
                  <a href="https://moe.gov.lk/" target="_blank" rel="noopener noreferrer" className="text-gold hover:bg-gradient-to-r from-white to-white bg-clip-text hover:text-transparent">
                    API
                  </a>
                </li>
                <li className="mb-2 text-center md:text-left">
                  <a href="https://moe.gov.lk/" target="_blank" rel="noopener noreferrer" className="text-gold hover:bg-gradient-to-r from-white to-white bg-clip-text hover:text-transparent">
                    Support
                  </a>
                </li>
                <li className="mb-2 text-center md:text-left">
                  <a href="https://moe.gov.lk/" target="_blank" rel="noopener noreferrer" className="text-gold hover:bg-gradient-to-r from-white to-white bg-clip-text hover:text-transparent">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h2 className="mb-6 bg-gradient-to-r from-white to-white bg-clip-text text-transparent font-semibold text-gray uppercase text-center md:text-left">
                <b>Pages</b>
              </h2>
              <ul className="text-gold-500 dark:text-gold-400 font-medium text-center md:text-left">
                <li className="mb-2 text-center md:text-left">
                  <Link href="/howtocompete" className="text-gold hover:bg-gradient-to-r from-white to-white bg-clip-text hover:text-transparent">
                    Features
                  </Link>
                </li>
                <li className="mb-2 text-center md:text-left">
                  <Link href="/timeline" className="text-gold hover:bg-gradient-to-r from-white to-white bg-clip-text hover:text-transparent">
                    Enterprise
                  </Link>
                </li>
                <li className="mb-2 text-center md:text-left">
                  <Link href="/register" className="text-gold hover:bg-gradient-to-r from-white to-white bg-clip-text hover:text-transparent">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h2 className="mb-6 bg-gradient-to-r from-white to-white bg-clip-text text-transparent font-semibold text-gray uppercase text-center md:text-left">
                <b>Stay Tuned</b>
              </h2>
              <ul className="text-gold-500 dark:text-gold-400 font-medium">
                <li className="mb-2 text-center md:text-left">
                  <a href="https://moe.gov.lk/" target="_blank" rel="noopener noreferrer" className="text-gold hover:bg-gradient-to-r from-white to-white bg-clip-text hover:text-transparent">
                    Discord
                  </a>
                </li>
                <li className="mb-2 text-center md:text-left">
                  <a href="https://ucsc.cmb.ac.lk/" target="_blank" rel="noopener noreferrer" className="text-gold hover:bg-gradient-to-r from-white to-white bg-clip-text hover:text-transparent">
                    Facebook
                  </a>
                </li>
                <li className="mb-2 text-center md:text-left">
                  <a href="https://moe.gov.lk/" target="_blank" rel="noopener noreferrer" className="text-gold hover:bg-gradient-to-r from-white to-white bg-clip-text hover:text-transparent">
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-gold my-6 sm:mx-auto dark:border-gold-700 lg:my-8" />
        <div className="sm:flex text-center md:text-left sm:justify-between">
          <span className="text-gold text-gold-500 dark:text-gold-400">
            © 2024{" "}
            <Link href="/" className="text-gold hover-text hover:bg-gradient-to-r from-white to-white bg-clip-text hover:text-transparent">
              Thahawuru
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 justify-center sm:mt-0">
            <a href="https://www.facebook.com/noisrilanka" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:text-gold-900 dark:hover:text-gold">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 8 19">
                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"></path>
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://x.com/noisl4?s=21&t=ZnM0640QVfqmqqkNyHFL-g" className="text-gold-500 hover:text-gold-900 dark:hover:text-gold ms-5">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 20 17">
                <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"></path>
              </svg>
              <span className="sr-only">X page</span>
            </a>
            <a href="https://www.instagram.com/noi.srilanka?igsh=ZWU3OW1kNWp4eXp2" rel="noopener noreferrer" target="_blank" className="text-gold-500 hover:text-gold-900 dark:hover:text-gold ms-5">
              <svg className="w-4 h-4" aria-hidden="true" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                <circle cx="16.806" cy="7.207" r="1.078"></circle>
                <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
              </svg>
              <span className="sr-only">Instagram page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
