
import Link from "next/link";
import RegisterForm from "./RegisterForm";
export const metadata = {
  title: "Register | Brand",
  description: "Create your Brand account.",
}; 

export default function page() {
  return (
    <main className="flex-grow bg-white">
      <section className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1fr] lg:px-8">
        <div className="order-2 rounded-lg bg-blue-50 p-6 sm:p-8 lg:order-1">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Join Brand
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
            Create your account in a minute.
          </h1>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            Save your favorite tech gear, speed through checkout, and keep every
            order easy to find.
          </p>
          <div className="mt-8 space-y-4">
            {[
              "Personal product recommendations",
              "Saved delivery and billing details",
              "Easy access to receipts and support",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  ✓
                </span>
                <span className="font-medium text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <RegisterForm />
      </section>
    </main>
  )
}
