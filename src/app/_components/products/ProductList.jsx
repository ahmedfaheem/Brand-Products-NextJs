import ProductItem from './ProductItem'

export default async function ProductList({ limit = 10, query = '' }) {
   
    let products = [];
    try{
      let url = `https://dummyjson.com/products?limit=${limit}`;
      if(query) {
        url = `https://dummyjson.com/products/search?q=${query}&limit=${limit}`;
      }
        const response = await fetch(url,
        {
          next: { tags: ['products'] }
        }
        );
   
      
      

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
     products = data.products;
    }catch(e){
        console.log(e);
    }






  return (
    <>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

    { products && products.map((product) => (
      <ProductItem key={product.id} product={product} />
    ))}
    { !products || products.length === 0 && (
      <div className="text-center py-20 bg-white rounded-xl border border-gray-100">
        <p className="text-gray-500 text-lg">No products found.</p>
      </div>
    )}
       </div>

   </div>
    </>
  );

}
