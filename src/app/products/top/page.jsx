import Image from "next/image";
import Link from "next/link";

async function getTopProducts() { 
  try{
     
 const res = await fetch('https://dummyjson.com/products?sortBy=rating&order=desc&limit=6', {
    next: { revalidate: 100 }, 
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  } 

  const data = await res.json();
    return data.products;

  }catch(error){
    return [];
  }


}


export default async function page() {

    let products = await getTopProducts();
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Trending Right Now
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Our highest-rated products, updated hourly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products && products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              
              <div className="h-48 w-48 mb-6 relative">
                <Image
                  width={300}
                  height={300} 
                  src={product.thumbnail} 
                  alt={product.title} 
                  className="object-contain w-full h-full"
                />
              </div>
              
              <Link href={`/products/${product.id}`} className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                {product.title}
              </Link>
              
              <div className="flex items-center space-x-1 mb-4">
                <span className="text-yellow-400">★</span>
                <span className="font-bold text-gray-700">{product.rating}</span>
                <span className="text-gray-400 text-sm">/ 5.0</span>
              </div>
              
              <p className="text-2xl font-extrabold text-blue-600 mt-auto">
                ${product.price}
              </p>
              
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}