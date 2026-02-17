import { Navigate } from "react-router-dom";

export default function ProtectAuthRouts({ children }) {
  const token = localStorage.getItem("user_token");
  if (!token) return children;
  return <Navigate to={"/"} />;
}
