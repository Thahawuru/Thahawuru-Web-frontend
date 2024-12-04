import Link from 'next/link';

export default function PaymentSuccess({
  searchParams: { amount },
}: {
  searchParams: { amount: string };
}) {
  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-900 to-blue-900">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Thank you!</h1>
        <h2 className="text-2xl">You successfully paid</h2>

        <div className="bg-white p-2 rounded-md text-black mt-5 text-4xl font-bold">
          Rs.{amount}
        </div>
      </div>

      <div className="mt-10">
        <Link
          href="http://localhost:3000/developer/api/requested"
          className="px-5 py-3 bg-blue-200 text-black rounded-md text-lg font-medium hover:bg-blue-800 transition duration-300"
        >
          Go to Requests
        </Link>
      </div>
    </main>
  );
}
