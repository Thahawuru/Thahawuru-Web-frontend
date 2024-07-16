"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Sidebar from "@/components/sidebar/developer/sidebar";
import Welcome from "@/components/welcome";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
interface FormData {
  purpose: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  transactionId: string;
  purchaseDate: string;
  selectedApi: string;
  amountPaid: number;
  anyComments: string;
  agreeToTerms: boolean;
}

export default function AgreementFormPage() {
  const [activeItem, setActiveItem] = useState<string>("API keys");
  const [formData, setFormData] = useState<FormData>({
    purpose: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    transactionId: "",
    purchaseDate: "",
    selectedApi: "",
    amountPaid: 0,
    anyComments: "",
    agreeToTerms: false,
  });

  const handleSetActiveItem = (itemTitle: string) => {
    setActiveItem(itemTitle);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: checked,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.agreeToTerms) {
      console.log("Form submitted:", formData);
      // Handle form submission (e.g., send data to server)
    } else {
      alert("You must agree to all terms to proceed.");
    }
  };

  const userPurchasedApis = [
    { id: "api1", name: "Basic" },
    { id: "api2", name: "Ordinary" },
    { id: "api3", name: "Premium" },
  ];

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFormData({
      ...formData,
      selectedApi: event.target.value as string,
    });
  };

  return (
    <>
      <div className="w-full bg-white min-h-screen h-auto flex flex-row items-end justify-center">
        <div className="h-screen flex flex-col justify-between items-center">
          <Sidebar
            activeItem={activeItem}
            onSetActiveItem={handleSetActiveItem}
          />
        </div>
        <div className="flex flex-col w-5/6 ml-[250px]">
          <Welcome />
          <div className="flex flex-row w-full h-auto p-4 mt-20">
            <div className="flex flex-row justify-start items-center w-2/3">
              <h1 className="text-2xl font-bold text-secondaryTwo w-full text-left pl-10">
                <b>Developer Refund Form</b>
              </h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <form
              onSubmit={handleSubmit}
              className="w-4/5 p-4 bg-gray-100 rounded mb-10"
            >
              <div className="mb-4">
                <TextField
                  fullWidth
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
              </div>
              <div className="mb-4">
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
              </div>
              <div className="mb-4">
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  variant="outlined"
                />
              </div>
              <div className="mb-4">
                <TextField
                  fullWidth
                  label="Transaction ID"
                  name="transactionId"
                  value={formData.transactionId}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
              </div>
              <div className="mb-4">
                <TextField
                  fullWidth
                  label="Date of Purchase"
                  type="date"
                  name="purchaseDate"
                  value={formData.purchaseDate}
                  onChange={handleChange}
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="apiSelect" className="text-black">
                  Select API:
                </label>
                <select
                  id="apiSelect"
                  name="selectedApi"
                  value={formData.selectedApi}
                  // onChange={handleChange}
                  required
                  className="border rounded p-2 w-full text-black bg-primary border border-gray mb-4"
                >
                  <option value="" disabled>
                    -- Select an API Plan --
                  </option>
                  {userPurchasedApis.map((api) => (
                    <option key={api.id} value={api.id}>
                      {api.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <TextField
                  fullWidth
                  label="Amount Paid"
                  type="number"
                  name="amountPaid"
                  value={formData.amountPaid}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
              </div>

              <div className="mb-4">
                <TextField
                  fullWidth
                  label="Reason for refunding API fee"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
              </div>
              <div className="mb-4">
                <TextField
                  fullWidth
                  label="If any comments, please provide"
                  name="applicationDescription"
                  value={formData.anyComments}
                  onChange={handleChange}
                  variant="outlined"
                  multiline
                  rows={4}
                  required
                />
              </div>
              <div className="mb-4"></div>
              <div className="mb-4 text-black">
                <FormControlLabel
                  control={
                    <Checkbox
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      color="primary"
                    />
                  }
                  label="I confirm the refund process"
                />
              </div>
              <p className="mb-4 text-black text-sm">
                By submitting this form, you agree to the refund the payment
                made for Thahawuru API you purchaised. Note that you will be no
                longer have access for the API key you currently have.
              </p>
              <div className="mb-4">
                <Button
                  type="submit"
                  variant="contained"
                  className="flex-none rounded-custom-3 bg-secondary hover:bg-secondaryTwo px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform mb-2"
                  disabled={!formData.agreeToTerms}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
