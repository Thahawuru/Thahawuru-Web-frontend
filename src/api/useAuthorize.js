"use client";
import { useRouter } from "next/navigation";

const useAuthorize = () => {
  const router = useRouter();

  const authorize = (requiredRole) => {
    const user = localStorage.getItem("user");

    if (!user) {
      router.push("/unauthorized");
      return false;
    }

    try {
      const { role: userRole } = JSON.parse(user);
      const isAuthorized = userRole?.trim() === requiredRole.trim();

      if (!isAuthorized) {
        router.push("/unauthorized");
      }

      return isAuthorized;
    } catch (error) {
      console.error("Error parsing user from localStorage", error);
      router.push("/unauthorized");
      return false;
    }
  };

  return { authorize };
};

export default useAuthorize;
