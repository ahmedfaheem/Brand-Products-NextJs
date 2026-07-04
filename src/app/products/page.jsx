import ProductList from "../_components/products/ProductList";
import SearchBar from "../_components/SearchBar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

  export const metadata = {
    title: 'Products | Brand',
    description: 'Browse our latest collection of premium gear.',
  }

export default async function ProductsPage({searchParams}) {
  
   const cookieStore = await cookies();
   const token = cookieStore.get("atoken");

   if(!token){
    redirect("/login");
   }
   let query = await searchParams;
   let queryValue = query.q || '';



  return (
    <div className="min-h-screen bg-gray-50">
      
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            All Products
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Browse our latest collection of premium gear.
          </p>
          <SearchBar />
        </div>
      </header>

      {/* Main Content Area */}




          <ProductList limit={12} query={queryValue} />

        </div>
 
      

  );
}