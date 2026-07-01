import Link from "next/link";

export default function NavBar() {
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
     
      </div>
    </div>
  </div>
</nav>

  )
}
