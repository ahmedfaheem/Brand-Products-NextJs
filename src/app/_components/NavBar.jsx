
import Link from "next/link";
import { cookies } from "next/headers";
import { logoutAction } from "../login/actions";
export default async function NavBar() {
  
   const cookieStore = await cookies();
   const token = cookieStore.get("atoken");

  return (
    <nav className="bg-white shadow-md">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16">
      <div className="flex items-center">
        <Link href={"/"} className="text-2xl font-bold text-blue-600 hover:text-blue-700">
          Brand
        </Link>
      </div>
      <div className="flex items-center space-x-6">
        <Link href={"/"} className="text-gray-600 hover:text-blue-600 transition font-medium">Home</Link>
        <Link href={"/products"} className="text-gray-600 hover:text-blue-600 transition font-medium">Products</Link>
        {!token ? (
          <>
            <Link href={"/login"} className="text-gray-600 hover:text-blue-600 transition font-medium">Login</Link>
            <Link href={"/register"} className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700">Register</Link>
          </>
        ) : null}
         {token ? (
          <form action={logoutAction}>
            <button type="submit" className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-700">Logout</button>
          </form>
          ) : null}
      </div>
    </div>
  </div>
</nav>

  )
}
