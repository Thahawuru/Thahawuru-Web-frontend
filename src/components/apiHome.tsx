import { title } from "process";

const tiles = [
  {
    title: "Authentication",
    description:
      "Authenticate your users using Thahawuru API. You can use the API to verify the user's identity.",
  },
  {
    title: "Police and Court Services",
    description:
      "You can use the API to verify the police and court records of an individual.",
  },
  {
    title: "KYC",
    description:
      "You can use the API to verify the identity of your customers.",
  },
  {
    title: "Document Verification",
    description:
      "You can use the API to verify the authenticity of the documents.",
  },
  {
    title: "Address Verification",
    description: "You can use the API to verify the address of an individual.",
  },
  {
    title: "Phone Number Verification",
    description:
      "You can use the API to verify the phone number of an individual.",
  },
];

export default function Page() {
  return (
    <>
      <div className="flex flex-col justify-between items-center w-full h-auto mb-20">
        <h1 className="text-4xl text-secondary text-center mt-20">
          <b>Our API and TestAPIs</b>
        </h1>
        <h2 className="text-2xl text-secondary text-center mt-2">
          Our API will ease the integration of Thahawuru into your system.
        </h2>
        <p className="text-lg text-secondary text-sm text-center w-full mt-4">
          Thahawuru offers a set of APIs that can be used to integrate Thahawuru
          to your applications for verification purposes. We offer free testAPIs
          for developers to test the integration before going live. You can
          request for API access. We will provide you with the API documentation
          and the testAPIs to test the integration. After a proper agreement
          process and yearly subscription, you can go live with the APIs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-auto bg-gradient-to-br from-white to-primary p-4">
          {tiles.map((tile) => (
            <div
              key={tile.title}
              className="flex flex-col w-full h-full justify-center items-center bg-white rounded-lg shadow-lg m-4 p-10 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
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
    </>
  );
}
