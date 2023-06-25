import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedComponentProps {
  isSignedIn: Boolean;
  children: ReactNode;
}

function Protected({ isSignedIn, children }: ProtectedComponentProps) {
  if (!isSignedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
export default Protected;
