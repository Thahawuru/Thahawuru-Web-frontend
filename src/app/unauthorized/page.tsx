import Link from "next/link";

const Unauthorized = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-secondaryTwo">
        <h1 className="text-3xl font-bold text-white">Access Denied</h1>
        <p className="mt-4 text-lg text-gray-700 text-white">
          You do not have permission to view this page.
        </p>
      </div>
    </>
  );
};

export default Unauthorized;
