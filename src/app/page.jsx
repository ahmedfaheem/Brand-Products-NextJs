
import ProductList from "./_components/products/ProductList";
import NewsletterForm from "./_components/NewsletterForm";
import Link from "next/link";
export const metadata = {
  title: 'Home | Brand',
  description: 'Welcome to our premium collection of accessories and gear.',
}
export default function Home() {
  return (
    <>
      <main className="flex-grow">
        <section className="bg-blue-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Upgrade Your Tech Everyday.
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
                Discover our premium collection of accessories and gear designed
                to boost your productivity and match your style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href={"/products"}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md text-center"
                >
                  Shop Now
                </Link>
               
              </div>
            </div>

            <div className="md:w-1/2 w-full">
              <div className="bg-gray-200 rounded-2xl aspect-video md:aspect-square flex items-center justify-center shadow-lg w-full">
                <span className="text-gray-500 font-medium text-lg">
                  Hero Image Area
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-10">
              <h2 className="text-3xl font-bold text-gray-900">
                Featured Products
              </h2>
              <Link
                href={"/products"}
                className="text-blue-600 font-medium hover:underline hidden sm:block"
              >
                View all &rarr;
              </Link>
            </div>

             
               <ProductList limit={4} />            

          </div>

          <NewsletterForm />
        </section>
      </main>
    </>
  );
}
