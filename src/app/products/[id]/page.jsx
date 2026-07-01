import Image from "next/image";
import Link from "next/link";


export async function generateMetadata({ params }) {
  const { id } = await params;
   
  try{
    const response = await fetch(`https://dummyjson.com/products/${id}`,{
      cache: 'force-cache'
    });

    if(!response.ok){

      return {
        title: "Product Not Found | Brand",
      }

    }

    const data = await response.json();

    return {
      title: `${data.title} | Brand`,
      description: `${data.description}`,
    };

  }catch(e){
    return {
      title: "Product Not Found | Brand",
    };
  }
}














async function getProduct(id){
  try{
    const response = await fetch(`https://dummyjson.com/products/${id}`,{
      cache: 'force-cache'
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  }catch(e){
    console.log(e);
  }
  return [];
}
export default async function page({params}) {
  const {id} = await params;
  const product = await getProduct(id);

 

  return (



    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <Link href="/products" className="text-sm font-medium text-blue-600 hover:text-blue-500 mb-8 inline-block">
          &larr; Back to Products
        </Link>
        {product.length == 0 && (
          <div className="text-center py-20 bg-white rounded-xl border border-gray-100">
            <p className="text-gray-500 text-lg">Product not found.</p>
          </div>
        )}
        {product && product.length != 0 && (
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
          
          <div className="w-full md:w-1/2 flex-shrink-0">
            <div className="bg-gray-50 rounded-3xl p-8 aspect-square flex items-center justify-center relative border border-gray-100">
              <Image
                src={product.images[0]}
                alt={product.title}
                width={500}
                height={500}
                className="w-full h-full object-contain drop-shadow-xl"
                priority // Loads the main image faster
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center">
            
            <span className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">
              {product.category}
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              {product.title}
            </h1>

            <div className="flex items-center space-x-2 mb-6">
              <div className="flex text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-lg font-medium text-gray-700">{product.rating?.rate}</span>
              <span className="text-sm text-gray-400">({product.rating?.count} reviews)</span>
            </div>

            <p className="text-4xl font-extrabold text-gray-900 mb-8">
              ${product.price}
            </p>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-gray-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <span>Add to Cart</span>
              </button>
              
              <button className="sm:w-auto bg-blue-50 text-blue-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-100 transition-colors">
                Buy Now
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-900">Shipping:</span>
                  <span>Free standard shipping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-900">Returns:</span>
                  <span>30 days return policy</span>
                </div>
              </div>
            </div>

          </div>
        </div>
        )}
      </div>

    </div>
  );
}