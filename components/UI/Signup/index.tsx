"use client";

import { TransitionElement } from "@/lib/utils/transition";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

interface Inputs {
  email: string;
  password: string;
}

const SignUpComp = () => {
  const [inputs, setInputs] = useState<Inputs>({ email: "", password: "" });
  const [status, setStatus] = useState({ loading: false, error: false });
  const [errors, setErrors] = useState<Inputs>({} as Inputs);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  const validateErrors = () => {
    const errors: Inputs = {} as Inputs;
    if (!inputs.email) {
      errors["email"] = "Please provide an email address";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputs.email)) {
      errors["email"] = "Invalid email";
    }

    if (!inputs.password) errors["password"] = "Provide your password";
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ ...status, loading: true });

    const validator = validateErrors();
    setErrors(validator);

    if (Object.keys(validator).length > 0) {
      setStatus({ ...status, loading: false });
      toast.error("Invalid input(s)");
      return;
    }

    const options = { method: "POST", headers: { "Content-type": "application/json" }, body: JSON.stringify(inputs) };
    const res = await fetch("/api/create/user", options);

    if (!res.ok) {
      if (res.statusText === "exists") {
        toast.error("User exists");
      } else {
        toast.error("An error occurred");
      }
      setStatus({ ...status, loading: false });
      return;
    }

    toast.success("Sign up successful");
    setStatus({ ...status, loading: false });
    setInputs({ email: "", password: "" });
  };

  return (
    <TransitionElement>
      <div className="lg:min-w-[20rem] md:min-w-[15rem] p-4 sm:min-w-[10rem] w-11/12 mx-auto duration-200 shadow-lg bg-white rounded-2xl">
        <div className="text-center mb-3">
          <h2 className="text-2xl">
            Signup <span className="text-gray-400 text-sm text-opacity-70">to BGallery</span>
          </h2>
          <p className="text-sm max-w-sm">
            By signing up, you agree to our{" "}
            <span className="text-gray-600 font-bold cursor-pointer">Privacy Policy</span> alongside our{" "}
            <span className="text-gray-600 font-bold cursor-pointer">Terms</span> and{" "}
            <span className="text-gray-600 font-bold cursor-pointer">Conditions</span>
          </p>
        </div>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="space-y-4">
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                type="email"
                placeholder="example@domain.com"
                name="email"
                className={`w-full p-2 rounded-2xl duration-200 outline-none border-2 bg-gray-50 ${
                  errors.email ? "border-red-500" : "border-transparent"
                }`}
                value={inputs.email}
                onChange={(e) => handleChange(e)}
                autoComplete="off"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                type="password"
                placeholder="*************"
                name="password"
                className={`w-full p-2 rounded-2xl duration-200 outline-none border-2 bg-gray-50 ${
                  errors.password ? "border-red-500" : "border-transparent"
                }`}
                value={inputs.password}
                onChange={(e) => handleChange(e)}
                autoComplete="off"
              />
            </div>

            <button
              className={`w-full border-2 border-gray-600 ${
                status.loading ? "hover:bg-transparent opacity-50" : "hover:bg-gray-600 hover:text-white"
              } duration-200 py-1 rounded-2xl`}
            >
              {status.loading ? "Creating..." : "Sign up"}
            </button>
          </div>
        </form>
        <p className="text-sm mt-2 text-center">
          Have an account?{" "}
          <Link
            href={"/login"}
            className="font-bold text-gray-500 border-b border-gray-500 duration-200 hover:text-gray-700"
          >
            Login
          </Link>
        </p>
      </div>
    </TransitionElement>
  );
};

export default SignUpComp;
