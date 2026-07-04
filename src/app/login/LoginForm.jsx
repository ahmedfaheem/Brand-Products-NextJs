"use client";

import Link from "next/link";
import { useActionState } from "react";
import { loginAction } from "./actions";
 
const initialState = {
  error: "",
};

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(
    loginAction,
    initialState
  );

  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white p-6 shadow-lg sm:p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Login</h2>
        <p className="mt-2 text-sm text-gray-500">
          Enter your details to continue to your account.
        </p>
      </div>

      <form className="space-y-5" action={formAction}>
        {state?.error ? (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
            {state.error}
          </div>
        ) : null}

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:cursor-not-allowed disabled:bg-blue-400"
        >
          {pending ? "Signing in..." : "Sign in"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        New to Brand?{" "}
        <Link
          href="/register"
          className="font-semibold text-blue-600 hover:text-blue-700"
        >
          Create an account
        </Link>
      </p>
    </div>
  );
}
