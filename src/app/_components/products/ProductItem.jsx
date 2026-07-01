/*
  "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
*/

import Image from "next/image";
import Link from "next/link";


export default function ProductItem({product}) {
  return (
    <div className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 bg-white">
      <div className="bg-gray-100 aspect-square flex items-center justify-center relative overflow-hidden">
        <Image
          width={300}
          height={300}
          src={product?.thumbnail}
          alt={product?.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <Link href={`/products/${product?.id}`} className="text-lg font-bold text-gray-900 mb-1">
          {product?.title}
        </Link>
        
        <p className="text-sm text-gray-500 mb-4">{(product?.description).substring(0, 50)}...</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold text-blue-600">${product?.price}</span>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
