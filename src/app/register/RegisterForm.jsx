"use client";

import Link from "next/link";
import { useActionState } from "react";
import { registerAction } from "./actions";

const initialState = {
  error: "",
}; 

export default function RegisterForm() {
  const [state, formAction, pending] = useActionState(
    registerAction,
    initialState
  );

  return (
    <div className="order-1 w-full rounded-lg border border-gray-200 bg-white p-6 shadow-lg sm:p-8 lg:order-2">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Create account</h2>
        <p className="mt-2 text-sm text-gray-500">
          Fill in your details to start shopping with Brand.
        </p>
      </div>

      <form className="space-y-5" action={formAction}>
        {state?.error ? (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
            {state.error}
            <Link href="/login" className="underline hover:text-red-800">
              Go to login
            </Link>
          </div>
        ) : null}

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              First name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              placeholder="Ahmed"
              required
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Last name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              placeholder="Hassan"
              required
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />
          </div>
        </div>

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
            autoComplete="new-password"
            placeholder="Create a password"
            required
            minLength={6}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:cursor-not-allowed disabled:bg-blue-400"
        >
          {pending ? "Creating account..." : "Create account"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-blue-600 hover:text-blue-700"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
