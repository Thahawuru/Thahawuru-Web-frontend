"use client";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/hooks/useAuthContext";

const useAuthorize = () => {
  const router = useRouter();
  const { user, loading } = useAuthContext();

  const authorize = (requiredRole) => {
    if (loading) {
      return null;
    }

    if (!user) {
      router.push("/unauthorized");
      return false;
    }

    try {
      const { role: userRole } = user;
      const isAuthorized =
        userRole?.trim().toUpperCase() === requiredRole.trim().toUpperCase();
      if (!isAuthorized) {
        router.push("/unauthorized");
      }

      return isAuthorized;
    } catch (error) {
      console.error("Error accessing user role", error);
      router.push("/unauthorized");
      return false;
    }
  };

  return { authorize };
};

export default useAuthorize;
