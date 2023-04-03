import { useState } from "react";
import { useLocation } from "react-router-dom";

function Login() {
  const location = useLocation();
  const userEmail = location.state?.userEmail;
  const [userPass, setUserPass] = useState("");
  const [newEmail, setNewEmail] = useState("");

  return (
    <main className="h-screen w-screen">
      <h1 className="text-2xl text-white font-semibold text-left bg-black pt-16 pb-6 pl-12">
        Sign In
      </h1>

      <section className="bg-black w-full h-full flex flex-col items-center">
        <form className="w-screen flex flex-col space-y-10 px-12">
          <div className="flex flex-col space-y-3">
            <input
              type="email"
              value={userEmail}
              required
              className="bg-white text-black py-2 px-2 w-full font-semibold aspect-auto text-md rounded-md outline-none"
            />
            <input
              type="password"
              value={userPass}
              required
              onChange={(e) => setUserPass(e.target.value)}
              className="bg-white text-black py-2 px-2 w-full font-semibold mx-auto aspect-auto text-md mb-20 rounded-md outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-red-700 py-2 text-white text-lg w-full rounded-md"
          >
            Sign In
          </button>
        </form>
        <div>
          <div className="w-full flex items-center justify-between space-x-28 mb-4 mt-1">
            <div>
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-gray-500 bg-black border-gray-500 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-2 text-xs font-medium text-gray-500 dark:text-gray-500">
                Remember me
              </label>
            </div>

            <h3 className="text-gray-500 text-xs">Need help?</h3>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
