import Profile from "./pages/profile.page";
import About from "./pages/about.page";
import Contact from "./pages/contact.page";
import Dashboard from "./pages/dashboard.page";
import Login from "./pages/login.page";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../NavBar";

import Protected from "./loginProtect";

interface ApplicationRoutesProps {
  isSignedIn: Boolean;
}

export default function ApplicationRoutes({
  isSignedIn,
}: ApplicationRoutesProps) {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <Protected isSignedIn={isSignedIn}>
              <Dashboard />
            </Protected>
          }
        />
        <Route
          path="/profile"
          element={
            <Protected isSignedIn={isSignedIn}>
              <Profile />
            </Protected>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* {isSignedIn ? (
        <div className="d-grid mt-5">
          <button className="btn-danger" onClick={signout}>
            Sign out
          </button>
        </div>
      ) : (
        <div className="d-grid mt-5">
          <button className="btn-dark" onClick={signin}>
            Sign in
          </button>
        </div>
      )} */}
    </BrowserRouter>
  );
}
