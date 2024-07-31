"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useRouter } from "next/router";
import Sidebar from "@/components/sidebar/developer/sidebar";
import Welcome from "@/components/welcome";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { useApiKeys } from "@/api/useApiKeys";
import Toast from "@/components/utils/toaster";
import { useAuthContext } from "@/hooks/useAuthContext";
import useAuthorize from "@/api/useAuthorize";

interface FormData {
  category: string;
  fullName: string;
  organizationName: string;
  email: string;
  contactNumber: string;
  purpose: string;
  volume: string;
  applicationDescription: string;
  agreeToTerms: boolean;
  agreeToPrivacy: boolean;
  agreeToConfidentiality: boolean;
}

export default function AgreementFormPage() {
  const { createApiKey } = useApiKeys();
  const { user } = useAuthContext();
  const { authorize } = useAuthorize();
  useEffect(() => {
    if (user) {
      authorize("APIUSER");
    }
  }, [authorize, user]);

  const [activeItem, setActiveItem] = useState<string>("Request for API");
  const [formData, setFormData] = useState<FormData>({
    category: "",
    fullName: "",
    organizationName: "",
    email: "",
    contactNumber: "",
    purpose: "",
    volume: "",
    applicationDescription: "",
    agreeToTerms: false,
    agreeToPrivacy: false,
    agreeToConfidentiality: false,
  });

  const handleSetActiveItem = (itemTitle: string) => {
    setActiveItem(itemTitle);
  };

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }
    >
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: checked,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name!]: value,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      formData.agreeToTerms &&
      formData.agreeToPrivacy &&
      formData.agreeToConfidentiality
    ) {
      try {
        const response = await createApiKey(formData);
        console.log(response);
        if (response.status === 201) {
          Toast({ type: "success", message: "API key requested successfully" });
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      } catch (error) {
        console.log(error);
        Toast({ type: "fail", message: "Failed to create API key request!" });
      }
    } else {
      Toast({
        type: "fail",
        message: "You must agree to all terms to proceed.",
      });
    }
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
                <b>Developer Agreement Form</b>
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
                  label="Api Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
              </div>
              <div className="mb-4 w-full p-4 border border-gray rounded-md">
                <FormControl
                  fullWidth
                  className=" flex flex-row justify-between items-center bg-primary"
                >
                  <select
                    id="category-select"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full p-2 rounded"
                  >
                    <option value="" className="text-black">
                      Select a plan
                    </option>
                    <option value="TestPlan" className="text-black">
                      Test Plan
                    </option>
                    <option value="BasicPlan" className="text-black">
                      Basic Plan
                    </option>
                    <option value="OrdinaryPlan" className="text-black">
                      Ordinary Plan
                    </option>
                    <option value="PremiumPlan" className="text-black">
                      Premium Plan
                    </option>
                  </select>
                </FormControl>
              </div>

              <div className="mb-4">
                <TextField
                  fullWidth
                  label="Purpose of API Usage"
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
                  label="Description of Application"
                  name="applicationDescription"
                  value={formData.applicationDescription}
                  onChange={handleChange}
                  variant="outlined"
                  multiline
                  rows={4}
                  required
                />
              </div>
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
                  label="I agree to the terms and conditions"
                />
              </div>
              <div className="mb-4 text-black">
                <FormControlLabel
                  control={
                    <Checkbox
                      name="agreeToPrivacy"
                      checked={formData.agreeToPrivacy}
                      onChange={handleChange}
                      color="primary"
                    />
                  }
                  label="I agree to the privacy policy"
                />
              </div>
              <div className="mb-4 text-black">
                <FormControlLabel
                  control={
                    <Checkbox
                      name="agreeToConfidentiality"
                      checked={formData.agreeToConfidentiality}
                      onChange={handleChange}
                      color="primary"
                    />
                  }
                  label="I agree to the confidentiality agreement"
                />
              </div>
              <p className="mb-4 text-black text-sm">
                By submitting this form, you agree to the terms and conditions,
                privacy policy, and confidentiality agreement. Note that any
                misuse of the API will result in action taken from government
                laws.
              </p>
              <div className="mb-4">
                <Button
                  type="submit"
                  variant="contained"
                  className="flex-none rounded-custom-3 bg-secondary hover:bg-secondaryTwo px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform mb-2"
                  disabled={
                    !formData.agreeToTerms ||
                    !formData.agreeToPrivacy ||
                    !formData.agreeToConfidentiality
                  }
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
