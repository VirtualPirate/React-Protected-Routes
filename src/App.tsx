import { useEffect, useState } from "react";
import "./App.css";
// import NavBar from "./NavBar";
import ApplicationRoutes from "./routes/routes";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    setIsSignedIn(Boolean(localStorage.getItem("sessionKey")));
  }, []);

  function signIN() {
    localStorage.setItem("sessionKey", "1234567890");
    setIsSignedIn(true);
  }

  function signOUT() {
    localStorage.removeItem("sessionKey");
    setIsSignedIn(false);
  }

  return (
    <>
      <div className=" bg-slate-500 w-10 h-10"></div>
      <ApplicationRoutes isSignedIn={isSignedIn} />

      <div className="mt-20">
        {!isSignedIn ? (
          <button
            onClick={signIN}
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Login
          </button>
        ) : (
          <button
            onClick={signOUT}
            type="button"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Log Out
          </button>
        )}
      </div>
    </>
  );
}

export default App;
