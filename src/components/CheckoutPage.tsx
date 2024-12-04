"use client";

import React, { useEffect, useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { useRouter } from "next/navigation"; // Use Next.js router for manual redirects

const CheckoutPage = ({ amount }: { amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter(); // Next.js router for navigation
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch client secret when the component mounts
  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          setErrorMessage("Failed to initialize payment.");
        }
      })
      .catch(() => setErrorMessage("Something went wrong. Please try again."));
  }, [amount]);

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage(""); // Clear previous error messages

    if (!stripe || !elements) {
      setErrorMessage("Stripe has not loaded yet. Please try again.");
      setLoading(false);
      return;
    }

    // Handle any validation issues in the form
    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    // Confirm the payment with Stripe
    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://www.localhost:3000/payment-success?amount=${amount}`, // Redirect URL
      },
    });

    if (error) {
      // Handle immediate errors (e.g., incomplete payment details)
      setErrorMessage(error.message || "Payment failed. Please try again.");
      setLoading(false);
    } else {
      // Optional: Handle success locally (manual redirect as fallback)
      router.push(`/payment-success?amount=${amount}`);
    }
  };

  // Show loading spinner until clientSecret is loaded
  if (!clientSecret) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-2 rounded-md">
      {clientSecret && <PaymentElement />}

      {/* Display error messages */}
      {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}

      {/* Payment button */}
      <button
        disabled={!stripe || loading}
        className="text-white w-full p-5 bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
      >
        {!loading ? `Pay Rs.${amount}` : "Processing..."}
      </button>
    </form>
  );
};

export default CheckoutPage;

