
import LoginForm from "./LoginForm";

export const metadata = {
  title: "Login | Brand",
  description: "Sign in to your Brand account.",
};

export default function page() {
  return (
    <main className="flex-grow bg-gray-50">
      <section className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div className="max-w-xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
            Welcome back
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
            Sign in and keep shopping smarter.
          </h1>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            Access your saved products, order history, and faster checkout in
            one calm, simple place.
          </p>
          <div className="mt-8 grid max-w-lg gap-4 sm:grid-cols-3">
            {["Fast checkout", "Saved picks", "Order tracking"].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-blue-100 bg-white px-4 py-3 text-sm font-semibold text-gray-700 shadow-sm"
              >
                {item}
              </div>
            ))}
           </div>
        </div>

        <LoginForm />
      </section>
    </main>
  )
}
